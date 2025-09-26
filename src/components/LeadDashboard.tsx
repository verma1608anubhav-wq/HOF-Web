import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Users, 
  Mail, 
  Phone, 
  Calendar,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  source: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

interface LeadStats {
  total: number;
  byType: Record<string, number>;
  byStatus: Record<string, number>;
  recent: Lead[];
}

// Mock data for demonstration
const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Sophie Martin",
    email: "sophie.martin@email.com",
    phone: "+91 98765 43210",
    type: "demo",
    message: "Interested in DELF B2 preparation course. Can we schedule a demo class?",
    source: "website",
    status: "new",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    name: "Raj Kumar",
    email: "raj.kumar@email.com",
    phone: "+91 87654 32109",
    type: "newsletter",
    message: "Want to receive updates about French courses and study abroad opportunities.",
    source: "instagram",
    status: "contacted",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
  },
  {
    id: "3",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 76543 21098",
    type: "demo",
    message: "Looking for conversational French classes for business purposes.",
    source: "whatsapp",
    status: "converted",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
  },
];

const mockStats: LeadStats = {
  total: 12,
  byType: {
    demo: 8,
    newsletter: 3,
    contact: 1
  },
  byStatus: {
    new: 5,
    contacted: 4,
    converted: 3
  },
  recent: mockLeads
};

export function LeadDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMockData = () => {
    // Simulate loading time
    setTimeout(() => {
      setLeads(mockLeads);
      setStats(mockStats);
      setLoading(false);
    }, 1000);
  };

  const updateLeadStatus = (leadId: string, status: string) => {
    setLeads(prevLeads => 
      prevLeads.map(lead => 
        lead.id === leadId 
          ? { ...lead, status, updatedAt: new Date().toISOString() }
          : lead
      )
    );
    
    // Update stats
    if (stats) {
      const updatedStats = { ...stats };
      const lead = leads.find(l => l.id === leadId);
      if (lead) {
        updatedStats.byStatus[lead.status] = (updatedStats.byStatus[lead.status] || 0) - 1;
        updatedStats.byStatus[status] = (updatedStats.byStatus[status] || 0) + 1;
        setStats(updatedStats);
      }
    }
  };

  useEffect(() => {
    loadMockData();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock className="h-4 w-4" />;
      case 'contacted': return <Phone className="h-4 w-4" />;
      case 'converted': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-amber-100 text-amber-800';
      case 'converted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'demo': return 'bg-purple-100 text-purple-800';
      case 'newsletter': return 'bg-blue-100 text-blue-800';
      case 'contact': return 'bg-rose-100 text-rose-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hof-orange mx-auto"></div>
        <p className="mt-4 text-hof-brown font-poppins">Loading leads...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="h-12 w-12 text-hof-red mx-auto mb-4" />
        <p className="text-hof-red font-poppins">{error}</p>
        <Button onClick={loadMockData} className="mt-4 bg-hof-orange hover:bg-hof-red">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 bg-hof-light-cream min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-anton text-hof-brown mb-2 tracking-wide">LEAD MANAGEMENT DASHBOARD</h1>
        <p className="text-hof-gray font-poppins">Track and manage your French learning leads</p>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-white border border-hof-cream shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hof-gray font-poppins">Total Leads</p>
                <p className="text-2xl font-anton text-hof-brown tracking-wide">{stats.total}</p>
              </div>
              <Users className="h-8 w-8 text-hof-orange" />
            </div>
          </Card>

          <Card className="p-6 bg-white border border-hof-cream shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hof-gray font-poppins">Demo Requests</p>
                <p className="text-2xl font-anton text-hof-brown tracking-wide">{stats.byType.demo || 0}</p>
              </div>
              <Calendar className="h-8 w-8 text-hof-red" />
            </div>
          </Card>

          <Card className="p-6 bg-white border border-hof-cream shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hof-gray font-poppins">Newsletter Signups</p>
                <p className="text-2xl font-anton text-hof-brown tracking-wide">{stats.byType.newsletter || 0}</p>
              </div>
              <Mail className="h-8 w-8 text-hof-orange" />
            </div>
          </Card>

          <Card className="p-6 bg-white border border-hof-cream shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hof-gray font-poppins">Converted</p>
                <p className="text-2xl font-anton text-hof-brown tracking-wide">{stats.byStatus.converted || 0}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </Card>
        </div>
      )}

      {/* Recent Leads */}
      <Card className="p-6 bg-white border border-hof-cream shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-anton text-hof-brown tracking-wide">RECENT LEADS</h2>
          <Button 
            onClick={loadMockData}
            variant="outline"
            size="sm"
            className="border-hof-orange text-hof-brown hover:bg-hof-cream font-poppins"
          >
            Refresh
          </Button>
        </div>

        <div className="space-y-4">
          {leads.length === 0 ? (
            <p className="text-center text-hof-gray font-poppins py-8">No leads yet. Start promoting your French classes!</p>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className="border border-hof-cream rounded-lg p-4 hover:bg-hof-light-cream transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-poppins font-semibold text-hof-brown">
                        {lead.name || 'Anonymous'}
                      </h3>
                      <Badge className={getTypeColor(lead.type)}>
                        {lead.type}
                      </Badge>
                      <Badge className={getStatusColor(lead.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(lead.status)}
                          {lead.status}
                        </span>
                      </Badge>
                    </div>

                    <div className="space-y-1 text-sm text-hof-gray font-poppins">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${lead.email}`} className="hover:text-hof-orange transition-colors">
                          {lead.email}
                        </a>
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <a href={`tel:${lead.phone}`} className="hover:text-hof-orange transition-colors">
                            {lead.phone}
                          </a>
                        </div>
                      )}
                      {lead.message && (
                        <div className="flex items-start gap-2 mt-2">
                          <MessageSquare className="h-4 w-4 mt-0.5" />
                          <p className="flex-1">{lead.message}</p>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-hof-gray/70 font-poppins mt-2">
                      {new Date(lead.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-2 ml-4">
                    {lead.status === 'new' && (
                      <Button
                        onClick={() => updateLeadStatus(lead.id, 'contacted')}
                        size="sm"
                        variant="outline"
                        className="border-hof-orange text-hof-brown hover:bg-hof-cream font-poppins"
                      >
                        Mark Contacted
                      </Button>
                    )}
                    {lead.status === 'contacted' && (
                      <Button
                        onClick={() => updateLeadStatus(lead.id, 'converted')}
                        size="sm"
                        className="bg-hof-orange hover:bg-hof-red text-white font-poppins"
                      >
                        Mark Converted
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}