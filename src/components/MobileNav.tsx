import React from 'react';
import { Home, Search, Bell, Mail } from 'lucide-react';

const MobileNav: React.FC = () => {
  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', active: true },
    { icon: <Search className="w-6 h-6" />, label: 'Explore' },
    { icon: <Bell className="w-6 h-6" />, label: 'Notifications' },
    { icon: <Mail className="w-6 h-6" />, label: 'Messages' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-10">
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className={`flex flex-col items-center justify-center p-3 ${
              item.active 
                ? 'text-blue-500' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;