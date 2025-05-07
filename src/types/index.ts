export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  verified: boolean;
}

export interface Tweet {
  id: string;
  content: string;
  user: User;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
  liked: boolean;
  retweeted: boolean;
  images?: string[];
}

export interface TrendingTopic {
  id: string;
  topic: string;
  category: string;
  tweetCount: number;
}