import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center text-blue-500 mb-6">
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Please sign in to your account
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors",
                formFieldInput: 
                  "block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500",
                card: "bg-transparent shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                dividerLine: "bg-gray-200 dark:bg-gray-700",
                dividerText: "text-gray-500 dark:text-gray-400",
                socialButtonsBlockButton: 
                  "flex justify-center items-center w-full border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                socialButtonsBlockButtonText: 
                  "ml-3 text-gray-700 dark:text-gray-300 font-medium",
                footerActionLink: 
                  "text-blue-500 hover:text-blue-600 font-medium",
              },
            }}
          />
        </div>
        
        <div className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;