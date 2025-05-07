import { useContext } from 'react';
import { TwitterContext } from '../context/TwitterContext';

export const useTwitter = () => {
  const context = useContext(TwitterContext);
  
  if (context === undefined) {
    throw new Error('useTwitter must be used within a TwitterProvider');
  }
  
  return context;
};