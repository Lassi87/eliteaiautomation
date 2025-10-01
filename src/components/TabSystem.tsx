import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

const TabSystem: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: '1',
      title: 'Main Page',
      content: <div className="p-4">Your main content here</div>
    }
  ]);
  const [activeTab, setActiveTab] = useState('1');

  const addNewTab = () => {
    const newId = Date.now().toString();
    const newTab: Tab = {
      id: newId,
      title: `New Tab ${tabs.length}`,
      content: <div className="p-4">New tab content</div>
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newId); // Make new tab active (in front)
  };

  const closeTab = (tabId: string) => {
    if (tabs.length === 1) return; // Don't close last tab
    
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTab === tabId) {
      setActiveTab(newTabs[0]?.id || '');
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* Tab Bar */}
      <div className="flex bg-white border-b border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center px-4 py-2 border-r border-gray-200 cursor-pointer ${
              activeTab === tab.id 
                ? 'bg-blue-50 border-b-2 border-blue-500' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.title}</span>
            {tabs.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        
        {/* Add New Tab Button */}
        <button
          onClick={addNewTab}
          className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSystem;