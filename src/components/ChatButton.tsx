import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatButton: React.FC = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
        24/7
      </span>
    </button>
  );
};

export default ChatButton;