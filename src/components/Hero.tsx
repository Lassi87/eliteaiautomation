import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight, Lightbulb, DollarSign, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-32 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-40 w-20 h-20 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Transform Your Business with </span>
            <span className="text-cyan-400 font-extrabold">AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white">
            AI doesn't sleep, take breaks, or call in sick. We help businesses replace inefficiencies with intelligent automation.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center mb-12"
          >
            Claim Your Free AI Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <Lightbulb className="w-8 h-8 text-yellow-400 animate-pulse" />
              <span className="text-lg font-medium text-white">AI Works 24/7</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <DollarSign className="w-8 h-8 text-green-400 animate-bounce" />
              <span className="text-lg font-medium text-white">Save Up to 70% in Operating Costs</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <Zap className="w-8 h-8 text-blue-400 animate-pulse" />
              <span className="text-lg font-medium text-white">Launch in Under 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;