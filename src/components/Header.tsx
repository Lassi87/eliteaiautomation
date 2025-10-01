import React from 'react';
import { Cpu } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleDark }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/ChatGPT Image 12. elok. 2025 klo 13.40.02.png" 
              alt="AI Robot" 
             className="w-8 h-8 object-cover rounded-lg"
            />
            <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap tracking-wide">
              ELITE AI AUTOMATION
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Free AI Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;