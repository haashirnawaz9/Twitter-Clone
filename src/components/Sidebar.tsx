import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  MoreHorizontal, 
  Feather,
  Sun,
  Moon
} from 'lucide-react';
import { useTwitter } from '../hooks/useTwitter';

const Sidebar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTwitter();
  
  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', active: true },
    { icon: <Search className="w-6 h-6" />, label: 'Explore' },
    { icon: <Bell className="w-6 h-6" />, label: 'Notifications' },
    { icon: <Mail className="w-6 h-6" />, label: 'Messages' },
    { icon: <Bookmark className="w-6 h-6" />, label: 'Bookmarks' },
    { icon: <User className="w-6 h-6" />, label: 'Profile' },
    { icon: <MoreHorizontal className="w-6 h-6" />, label: 'More' },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:w-[275px] lg:w-[275px] h-screen sticky top-0 px-3">
      <div className="flex items-center h-12 w-12 mt-4 mb-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full justify-center cursor-pointer transition-colors">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
      </div>
      
      <nav className="mt-4 mb-8">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center p-3 text-lg rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  item.active 
                    ? 'font-bold text-gray-900 dark:text-white' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.icon}
                <span className="ml-5">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full w-full transition-colors shadow-md">
        <span className="hidden lg:inline">Tweet</span>
        <Feather className="w-6 h-6 lg:hidden" />
      </button>

      <button 
        className="mt-4 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>
      
      <div className="mt-auto mb-4">
        <div className="flex items-center p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;