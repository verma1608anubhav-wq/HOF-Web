import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface SocialLinksProps {
  variant?: 'header' | 'footer' | 'inline';
  size?: 'sm' | 'md' | 'lg';
}

export function SocialLinks({ variant = 'inline', size = 'md' }: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/houseoffrenchh',
      icon: Instagram,
      color: 'text-hof-orange hover:text-hof-red',
      bg: 'hover:bg-hof-light-cream'
    },
    {
      name: 'Email',
      url: 'mailto:hofbyprabh@gmail.com',
      icon: Mail,
      color: 'text-hof-brown hover:text-hof-orange',
      bg: 'hover:bg-hof-light-cream'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919876631608',
      icon: MessageCircle,
      color: 'text-hof-red hover:text-hof-orange',
      bg: 'hover:bg-hof-light-cream'
    },
    {
      name: 'Call',
      url: 'tel:+919876631608',
      icon: Phone,
      color: 'text-hof-gray hover:text-hof-brown',
      bg: 'hover:bg-hof-light-cream'
    },
  ];

  const getIconSize = () => {
    switch (size) {
      case 'sm': return 'h-4 w-4';
      case 'lg': return 'h-6 w-6';
      default: return 'h-5 w-5';
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'sm': return 'p-2';
      case 'lg': return 'p-4';
      default: return 'p-3';
    }
  };

  if (variant === 'header') {
    return (
      <div className="flex items-center gap-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target={social.name === 'Instagram' ? '_blank' : undefined}
              rel={social.name === 'Instagram' ? 'noopener noreferrer' : undefined}
              className={`${getButtonSize()} rounded-full transition-colors ${social.color} ${social.bg}`}
              title={social.name}
            >
              <Icon className={getIconSize()} />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-anton text-hof-light-cream tracking-wide">CONNECT WITH US</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.name === 'Instagram' ? '_blank' : undefined}
                rel={social.name === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-hof-red/20 group"
              >
                <Icon className={`${getIconSize()} text-hof-orange group-hover:text-hof-light-cream`} />
                <span className="text-sm text-hof-cream group-hover:text-hof-light-cream font-poppins">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-700 font-poppins">Follow us:</span>
      <div className="flex items-center gap-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target={social.name === 'Instagram' ? '_blank' : undefined}
              rel={social.name === 'Instagram' ? 'noopener noreferrer' : undefined}
              className={`${getButtonSize()} rounded-full transition-colors ${social.color} ${social.bg}`}
              title={social.name}
            >
              <Icon className={getIconSize()} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

// Contact Info Component for easy reuse
export function ContactInfo({ layout = 'vertical' }: { layout?: 'vertical' | 'horizontal' }) {
  const contacts = [
    {
      label: 'Email',
      value: 'hofbyprabh@gmail.com',
      href: 'mailto:hofbyprabh@gmail.com',
      icon: Mail
    },
    {
      label: 'Phone',
      value: '+91 98766 31608',
      href: 'tel:+919876631608',
      icon: Phone
    },
    {
      label: 'WhatsApp',
      value: 'Chat with us',
      href: 'https://wa.me/919876631608',
      icon: MessageCircle
    }
  ];

  if (layout === 'horizontal') {
    return (
      <div className="flex flex-wrap gap-6">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              className="flex items-center gap-2 text-hof-cream hover:text-hof-light-cream transition-colors font-poppins"
            >
              <Icon className="h-4 w-4 text-hof-orange" />
              <span className="text-sm">{contact.value}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((contact) => {
        const Icon = contact.icon;
        return (
          <a
            key={contact.label}
            href={contact.href}
            className="flex items-center gap-3 text-hof-cream hover:text-hof-light-cream transition-colors group"
          >
            <div className="p-2 bg-hof-orange rounded-lg group-hover:bg-hof-red transition-colors">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-poppins font-semibold text-hof-light-cream">{contact.label}</div>
              <div className="text-sm font-poppins">{contact.value}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}