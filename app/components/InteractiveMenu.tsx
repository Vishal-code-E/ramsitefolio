'use client';

import React, { useState, useEffect } from 'react';
import InfiniteMenu from './InfiniteMenu';

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

interface InteractiveMenuProps {
  items: MenuItem[];
}

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<MenuItem | null>(() => 
    items.length > 0 ? items[0] : null
  );

  const handleItemClick = (item: MenuItem) => {
    if (item.link.startsWith('http')) {
      window.open(item.link, '_blank');
    } else {
      // Handle internal navigation
      const element = document.querySelector(item.link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="h-80 lg:h-96 mb-6">
        <InfiniteMenu items={items} />
      </div>
      
      {/* Interactive info section below */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Explore My Work</h3>
          {currentItem && (
            <button
              onClick={() => currentItem && handleItemClick(currentItem)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Visit {currentItem.title}
            </button>
          )}
        </div>
        
        {currentItem ? (
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2">{currentItem.title}</h4>
            <p className="text-gray-300 text-sm">{currentItem.description}</p>
          </div>
        ) : (
          <p className="text-gray-300 text-sm mb-4">
            Drag to rotate the sphere and discover my projects, social profiles, and ventures.
          </p>
        )}
        
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentItem(item)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                currentItem?.title === item.title
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMenu;