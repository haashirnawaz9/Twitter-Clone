import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  Repeat2, 
  Share, 
  MoreHorizontal, 
  UserCheck, 
} from 'lucide-react';
import { Tweet as TweetType } from '../types';
import { formatDate } from '../utils/formatDate';
import { useTwitter } from '../hooks/useTwitter';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

interface TweetProps {
  tweet: TweetType;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { likeTweet, retweetTweet } = useTwitter();
  
  return (
    <article className="p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200">
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <img 
            src={tweet.user.avatar} 
            alt={tweet.user.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="font-bold text-gray-900 dark:text-white hover:underline">
                {tweet.user.name}
              </span>
              {tweet.user.verified && (
                <UserCheck className="w-4 h-4 ml-1 text-blue-500" />
              )}
            </div>
            <span className="ml-1 text-gray-500 dark:text-gray-400">
              @{tweet.user.username}
            </span>
            <span className="mx-1 text-gray-500 dark:text-gray-400">·</span>
            <span className="text-gray-500 dark:text-gray-400 hover:underline">
              {formatDate(tweet.createdAt)}
            </span>
            <button className="ml-auto p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-1 text-gray-900 dark:text-white">
            {tweet.content}
          </div>
          {tweet.images && tweet.images.length > 0 && (
            <div className="mt-3 max-w-full rounded-2xl overflow-hidden">
              <img
                src={tweet.images[0]}
                alt="Tweet media"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          )}
          <div className="flex justify-between mt-3 max-w-md">
            <SignedIn>
              <button className="flex items-center group text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <div className="p-2 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="ml-1 text-sm">{tweet.replies}</span>
              </button>
              <button 
                className={`flex items-center group ${
                  tweet.retweeted 
                    ? 'text-green-500 dark:text-green-400' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400'
                }`}
                onClick={() => retweetTweet(tweet.id)}
              >
                <div className={`p-2 rounded-full ${
                  tweet.retweeted 
                    ? 'bg-green-100 dark:bg-green-900/30' 
                    : 'group-hover:bg-green-100 dark:group-hover:bg-green-900/30'
                  } transition-colors`}
                >
                  <Repeat2 className="w-5 h-5" />
                </div>
                <span className="ml-1 text-sm">{tweet.retweets}</span>
              </button>
              <button 
                className={`flex items-center group ${
                  tweet.liked 
                    ? 'text-red-500 dark:text-red-400' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
                }`}
                onClick={() => likeTweet(tweet.id)}
              >
                <div className={`p-2 rounded-full ${
                  tweet.liked 
                    ? 'bg-red-100 dark:bg-red-900/30' 
                    : 'group-hover:bg-red-100 dark:group-hover:bg-red-900/30'
                  } transition-colors`}
                >
                  <Heart className={`w-5 h-5 ${tweet.liked ? 'fill-current' : ''}`} />
                </div>
                <span className="ml-1 text-sm">{tweet.likes}</span>
              </button>
              <button className="flex items-center group text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <div className="p-2 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Share className="w-5 h-5" />
                </div>
              </button>
            </SignedIn>
            <SignedOut>
              <div className="flex justify-between w-full text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  {tweet.replies}
                </span>
                <span className="flex items-center">
                  <Repeat2 className="w-5 h-5 mr-1" />
                  {tweet.retweets}
                </span>
                <span className="flex items-center">
                  <Heart className="w-5 h-5 mr-1" />
                  {tweet.likes}
                </span>
                <Share className="w-5 h-5" />
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tweet;