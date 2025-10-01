import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-xl font-bold text-white">Elite AI Automation</span>
          <p className="text-gray-500 text-sm">
            Copyright © Elite AI Automation 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;