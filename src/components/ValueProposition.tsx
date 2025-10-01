import React from 'react';
import { Clock, TrendingDown, Zap } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: "Always Available",
      description: "AI never sleeps. Your AI workforce runs 24/7, 365 days a year — no breaks, no downtime."
    },
    {
      icon: TrendingDown,
      title: "Massive Cost Savings",
      description: "Save thousands per month. Replace 3+ full-time roles with a single automation."
    },
    {
      icon: Zap,
      title: "Ultra-Fast Deployment",
      description: "From idea to execution in under a week. No developers needed."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose AI?
          </h2>
          <p className="text-xl text-gray-600 dark:text-white">
            Human teams are limited. AI is not.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <p className="text-lg text-gray-700 dark:text-white leading-relaxed">
            Imagine replacing an entire customer support team with an AI chatbot that handles 95% of queries in seconds.
            <br />
            Or an AI caller that schedules sales meetings while your team sleeps.
            <br />
            <span className="font-semibold text-blue-600 dark:text-white">This is not the future. It's now.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;