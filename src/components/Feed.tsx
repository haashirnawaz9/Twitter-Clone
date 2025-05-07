import React from 'react';
import { useTwitter } from '../hooks/useTwitter';
import Tweet from './Tweet';
import TweetComposer from './TweetComposer';

const Feed: React.FC = () => {
  const { tweets } = useTwitter();

  return (
    <div className="flex-1 border-x border-gray-200 dark:border-gray-800 min-h-screen">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Home</h1>
        </div>
      </div>
      
      <TweetComposer />
      
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;