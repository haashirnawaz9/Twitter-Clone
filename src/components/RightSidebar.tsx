import React from 'react';
import { Search, Settings, UserCheck, MoreHorizontal } from 'lucide-react';
import { trendingTopics, suggestedUsers } from '../data/mockData';

const RightSidebar: React.FC = () => {
  return (
    <div className="hidden lg:block w-[350px] h-screen sticky top-0 pt-1 px-6 overflow-y-auto">
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full bg-gray-100 dark:bg-gray-800 rounded-full border-none py-3 pl-12 pr-4 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
        />
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl mb-4 overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trends for you</h2>
          <Settings className="w-5 h-5 text-blue-500" />
        </div>
        
        <div>
          {trendingTopics.map(topic => (
            <div key={topic.id} className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{topic.category} · Trending</p>
                  <p className="font-bold text-gray-900 dark:text-white">{topic.topic}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{topic.tweetCount.toLocaleString()} Tweets</p>
                </div>
                <div>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <a href="#" className="block p-4 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Show more
          </a>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Who to follow</h2>
        </div>
        
        <div>
          {suggestedUsers.map(user => (
            <div key={user.id} className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="flex items-center">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3" 
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center">
                    <p className="font-bold text-gray-900 dark:text-white truncate">
                      {user.name}
                    </p>
                    {user.verified && (
                      <UserCheck className="w-4 h-4 ml-1 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 truncate">@{user.username}</p>
                </div>
                <button className="ml-3 bg-black dark:bg-white text-white dark:text-black font-bold px-4 py-1.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm">
                  Follow
                </button>
              </div>
            </div>
          ))}
          
          <a href="#" className="block p-4 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Show more
          </a>
        </div>
      </div>
      
      <div className="p-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-wrap">
          <a href="#" className="mr-2 hover:underline">Terms of Service</a>
          <a href="#" className="mr-2 hover:underline">Privacy Policy</a>
          <a href="#" className="mr-2 hover:underline">Cookie Policy</a>
          <a href="#" className="mr-2 hover:underline">Accessibility</a>
          <a href="#" className="mr-2 hover:underline">Ads info</a>
          <a href="#" className="hover:underline">More</a>
        </div>
        <p className="mt-2">© 2025 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default RightSidebar;