import React from 'react';
import { MessageCircle, Globe, Settings, Mail, Phone, Database, Mic, Share2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Chatbots",
      description: "Intelligent bots that handle customer support, lead qualification, appointment booking, and more. Custom-trained for your industry.",
      useImage: false
    },
    {
      icon: Globe,
      title: "AI-Powered Website Building",
      description: "Modern, lightning-fast websites built entirely by AI. Design, copy, SEO — done for you.",
      useImage: false
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "We connect your existing tools (like CRMs, calendars, and Shopify) with our AI agents for full-stack automation.",
      useImage: false
    },
    {
      icon: Mail,
      title: "Email Outreach",
      description: "Automated email campaigns that nurture leads and engage customers with personalized messaging at scale.",
      useImage: true
    },
    {
      icon: Phone,
      title: "Phone Callers",
      description: "AI-powered voice agents that handle inbound and outbound calls, schedule appointments, and qualify leads.",
      useImage: true
    },
    {
      icon: Database,
      title: "Lead Qualification & CRM Automation",
      description: "Automatically score, qualify, and route leads while keeping your CRM data clean and up-to-date.",
      useImage: false
    },
    {
      icon: Mic,
      title: "Voice Assistants",
      description: "Custom voice-enabled AI assistants that provide hands-free support and enhance user experiences.",
      useImage: true
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description: "Schedule, post, and engage across social platforms with AI-generated content tailored to your brand.",
      useImage: true
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
            From website to chatbots - we automate it all
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
              {service.useImage && (
                <div className="absolute inset-0 opacity-95 dark:opacity-95 flex items-center justify-center">
                  <img
                    src="/ChatGPT Image 3. lokak. 2025 klo 07.29.54.png"
                    alt=""
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>
              )}
              <div className="relative z-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;