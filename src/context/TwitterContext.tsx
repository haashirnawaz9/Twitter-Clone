import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { User, Tweet } from '../types';
import { tweets as initialTweets } from '../data/mockData';

interface TwitterContextType {
  tweets: Tweet[];
  isDarkMode: boolean;
  addTweet: (content: string, images?: string[]) => void;
  likeTweet: (id: string) => void;
  retweetTweet: (id: string) => void;
  toggleDarkMode: () => void;
}

export const TwitterContext = createContext<TwitterContextType | undefined>(undefined);

interface TwitterProviderProps {
  children: ReactNode;
}

export const TwitterProvider: React.FC<TwitterProviderProps> = ({ children }) => {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('twitter-dark-mode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('twitter-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const addTweet = (content: string, images?: string[]) => {
    if (!user) return;

    const newTweet: Tweet = {
      id: Date.now().toString(),
      content,
      user: {
        id: user.id,
        name: user.fullName || 'Anonymous',
        username: user.username || user.id,
        avatar: user.imageUrl,
        followers: 0,
        following: 0,
        verified: false,
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      retweets: 0,
      replies: 0,
      liked: false,
      retweeted: false,
      images,
    };

    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id: string) => {
    if (!user) return;
    
    setTweets(tweets.map(tweet => {
      if (tweet.id === id) {
        return {
          ...tweet,
          liked: !tweet.liked,
          likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
        };
      }
      return tweet;
    }));
  };

  const retweetTweet = (id: string) => {
    if (!user) return;
    
    setTweets(tweets.map(tweet => {
      if (tweet.id === id) {
        return {
          ...tweet,
          retweeted: !tweet.retweeted,
          retweets: tweet.retweeted ? tweet.retweets - 1 : tweet.retweets + 1,
        };
      }
      return tweet;
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <TwitterContext.Provider value={{
      tweets,
      isDarkMode,
      addTweet,
      likeTweet,
      retweetTweet,
      toggleDarkMode,
    }}>
      {children}
    </TwitterContext.Provider>
  );
};