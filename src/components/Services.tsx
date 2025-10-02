import React from 'react';
import { MessageCircle, Share2, Globe, Settings, Mic, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Chatbots",
      description: "Intelligent bots that handle customer support, lead qualification, appointment booking, and more. Custom-trained for your industry."
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description: "Schedule posts, reply to DMs, and grow your audience — fully automated and optimized by AI."
    },
    {
      icon: Globe,
      title: "AI-Powered Website Building",
      description: "Modern, lightning-fast websites built entirely by AI. Design, copy, SEO — done for you."
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "We connect your existing tools (like CRMs, calendars, and Shopify) with our AI agents for full-stack automation."
    },
    {
      icon: Mic,
      title: "Voice Assistants",
      description: "AI voice bots that can answer calls, route customers, or even sell — like having a full-time receptionist."
    },
    {
      icon: Users,
      title: "Lead Qualification & CRM Automation",
      description: "Capture, qualify, and automatically follow up with leads. AI handles the funnel — you focus on closing."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-white">
            From chat to calls — we automate it all.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-white text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;