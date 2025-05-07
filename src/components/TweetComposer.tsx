import React, { useState, useRef } from 'react';
import { Image, Smile, MapPin, Calendar, X } from 'lucide-react';
import { useTwitter } from '../hooks/useTwitter';
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';

const TweetComposer: React.FC = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [showImageInput, setShowImageInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { addTweet } = useTwitter();
  const { user } = useAuth();

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleAddImage = () => {
    if (imageUrl && !images.includes(imageUrl)) {
      setImages([...images, imageUrl]);
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tweetContent.trim()) {
      addTweet(tweetContent, images.length > 0 ? images : undefined);
      setTweetContent('');
      setImages([]);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  return (
    <>
      <SignedIn>
        <div className="border-b border-gray-200 dark:border-gray-800 p-4">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <img 
                src={user?.imageUrl} 
                alt={user?.fullName || 'User'}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <form onSubmit={handleSubmit}>
                <textarea
                  ref={textareaRef}
                  value={tweetContent}
                  onChange={handleContentChange}
                  placeholder="What's happening?"
                  className="w-full border-none focus:ring-0 text-lg text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-transparent resize-none overflow-hidden mb-2"
                  rows={1}
                />
                
                {images.length > 0 && (
                  <div className="mb-3 grid grid-cols-2 gap-2">
                    {images.map((url, index) => (
                      <div key={index} className="relative rounded-2xl overflow-hidden">
                        <img src={url} alt="Tweet media" className="w-full h-auto" />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {showImageInput && (
                  <div className="mb-3 flex">
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Enter image URL"
                      className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={handleAddImage}
                      className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                )}
                
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-3">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => setShowImageInput(!showImageInput)}
                      className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                    >
                      <Image className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                    >
                      <Smile className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                    >
                      <MapPin className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!tweetContent.trim()}
                    className={`px-4 py-2 rounded-full font-bold text-white transition-colors ${
                      tweetContent.trim() 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-blue-300 dark:bg-blue-800 cursor-not-allowed'
                    }`}
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="border-b border-gray-200 dark:border-gray-800 p-4">
          <div className="text-center py-4">
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to post tweets and interact with other users
            </p>
            <button 
              onClick={() => window.location.href = '/sign-in'}
              className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default TweetComposer;