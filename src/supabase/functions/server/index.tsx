import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3d2f8d09/health", (c) => {
  return c.json({ status: "ok" });
});

// Lead Management Endpoints

// Submit a new lead (demo booking, email signup, etc.)
app.post("/make-server-3d2f8d09/leads", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, type, message, source } = body;

    if (!email) {
      return c.json({ error: "Email is required" }, 400);
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    const leadData = {
      id: leadId,
      name: name || '',
      email,
      phone: phone || '',
      type: type || 'general', // 'demo', 'newsletter', 'contact', 'general'
      message: message || '',
      source: source || 'website',
      status: 'new',
      createdAt: timestamp,
      updatedAt: timestamp
    };

    await kv.set(leadId, leadData);
    
    // Also create an index for easy retrieval
    const leadIndex = `leads_index_${Date.now()}`;
    await kv.set(leadIndex, { leadId, email, type, createdAt: timestamp });

    console.log(`New lead submitted: ${email} (${type})`);

    return c.json({ 
      success: true, 
      message: "Lead submitted successfully",
      leadId 
    });

  } catch (error) {
    console.error("Error submitting lead:", error);
    return c.json({ error: "Failed to submit lead" }, 500);
  }
});

// Get all leads (for admin dashboard)
app.get("/make-server-3d2f8d09/leads", async (c) => {
  try {
    const leads = await kv.getByPrefix("lead_");
    const indexes = await kv.getByPrefix("leads_index_");
    
    // Sort by creation date (most recent first)
    const sortedLeads = leads
      .map(item => item.value)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return c.json({ 
      success: true, 
      leads: sortedLeads,
      total: sortedLeads.length
    });

  } catch (error) {
    console.error("Error fetching leads:", error);
    return c.json({ error: "Failed to fetch leads" }, 500);
  }
});

// Update lead status
app.put("/make-server-3d2f8d09/leads/:id", async (c) => {
  try {
    const leadId = c.req.param('id');
    const body = await c.req.json();
    const { status, notes } = body;

    const existingLead = await kv.get(leadId);
    if (!existingLead) {
      return c.json({ error: "Lead not found" }, 404);
    }

    const updatedLead = {
      ...existingLead,
      status: status || existingLead.status,
      notes: notes || existingLead.notes,
      updatedAt: new Date().toISOString()
    };

    await kv.set(leadId, updatedLead);

    console.log(`Lead updated: ${leadId} -> status: ${status}`);

    return c.json({ 
      success: true, 
      message: "Lead updated successfully",
      lead: updatedLead
    });

  } catch (error) {
    console.error("Error updating lead:", error);
    return c.json({ error: "Failed to update lead" }, 500);
  }
});

// Get lead statistics
app.get("/make-server-3d2f8d09/leads/stats", async (c) => {
  try {
    const leads = await kv.getByPrefix("lead_");
    const leadData = leads.map(item => item.value);

    const stats = {
      total: leadData.length,
      byType: {},
      byStatus: {},
      recent: leadData
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 10)
    };

    // Count by type
    leadData.forEach(lead => {
      stats.byType[lead.type] = (stats.byType[lead.type] || 0) + 1;
      stats.byStatus[lead.status] = (stats.byStatus[lead.status] || 0) + 1;
    });

    return c.json({ success: true, stats });

  } catch (error) {
    console.error("Error fetching lead stats:", error);
    return c.json({ error: "Failed to fetch lead statistics" }, 500);
  }
});

Deno.serve(app.fetch);