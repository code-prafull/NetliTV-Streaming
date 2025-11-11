import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Account() {
  const { currentUser, userSubscription, logout } = useAuth();

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Please log in to view your account</h2>
          <Link 
            to="/login" 
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Account Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-1 bg-stone-900 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
            <div className="flex flex-col items-center">
              <img 
                src="/dp.webp" 
                alt="Profile" 
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{currentUser.name}</h3>
              <p className="text-gray-400">{currentUser.email}</p>
            </div>
          </div>
          
          {/* Account Details */}
          <div className="md:col-span-2 bg-stone-900 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Account Details</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Name</h3>
                <p className="text-white">{currentUser.name}</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                <p className="text-white">{currentUser.email}</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Member Since</h3>
                <p className="text-white">October 2023</p>
              </div>
              
              {userSubscription ? (
                <div className="bg-green-900 bg-opacity-30 p-4 rounded-md">
                  <h3 className="text-green-400 text-sm mb-1">Subscription</h3>
                  <p className="text-white font-medium">{userSubscription.plan.name} Plan</p>
                  <p className="text-gray-400 text-sm">
                    Renews on {new Date(userSubscription.endDate).toLocaleDateString()}
                  </p>
                  <button className="mt-2 text-red-500 hover:text-red-400 text-sm">
                    Cancel Subscription
                  </button>
                </div>
              ) : (
                <div className="bg-red-900 bg-opacity-30 p-4 rounded-md">
                  <h3 className="text-red-400 text-sm mb-1">Subscription</h3>
                  <p className="text-white">No active subscription</p>
                  <Link 
                    to="/subscription" 
                    className="mt-2 inline-block text-blue-500 hover:text-blue-400 text-sm"
                  >
                    Subscribe Now
                  </Link>
                </div>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-800">
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-block bg-stone-800 hover:bg-stone-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}