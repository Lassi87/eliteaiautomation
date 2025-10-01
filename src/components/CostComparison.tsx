import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const CostComparison: React.FC = () => {
  const comparisons = [
    { feature: "Availability", human: "9am–5pm, Weekdays", ai: "24/7, 365 Days" },
    { feature: "Cost per Month", human: "$2,000+", ai: "From $250" },
    { feature: "Sick Leave / Vacation", human: true, ai: false },
    { feature: "Speed", human: "Varies", ai: "Instant" },
    { feature: "Consistency", human: "Human error", ai: "Always accurate" },
    { feature: "Multitasking", human: "Limited", ai: "Unlimited" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI vs. Traditional Workforce
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what you're paying for — and what you could save.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-700 p-4 font-semibold text-gray-900 dark:text-white">
            <div>Feature</div>
            <div className="text-center">Human Worker</div>
            <div className="text-center">AI Solution</div>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid grid-cols-3 p-4 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="font-medium text-gray-900 dark:text-white">
                {comparison.feature}
              </div>
              <div className="text-center">
                {typeof comparison.human === 'boolean' ? (
                  comparison.human ? (
                    <Check className="w-5 h-5 text-red-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span className="text-gray-600 dark:text-gray-300">{comparison.human}</span>
                )}
              </div>
              <div className="text-center">
                {typeof comparison.ai === 'boolean' ? (
                  comparison.ai ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-green-500 mx-auto" />
                  )
                ) : (
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{comparison.ai}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CostComparison;