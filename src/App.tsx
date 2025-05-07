import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { TwitterProvider } from './context/TwitterContext';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';
import MobileNav from './components/MobileNav';
import SignInPage from './components/SignInPage';

function App() {
  return (
    <Router>
      <TwitterProvider>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route
            path="/"
            element={
              <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <Sidebar />
                <main className="flex flex-1 justify-center">
                  <Feed />
                  <RightSidebar />
                </main>
                <MobileNav />
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </TwitterProvider>
    </Router>
  );
}

export default App;