import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userSubscription, setUserSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('netlitv_user');
    const storedSubscription = localStorage.getItem('netlitv_subscription');
    
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    
    if (storedSubscription) {
      setUserSubscription(JSON.parse(storedSubscription));
    }
    
    setLoading(false);
  }, []);

  function login(email, password) {
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = {
            id: Date.now(),
            email: email,
            name: email.split('@')[0],
            avatar: '/dp.webp'
          };
          
          setCurrentUser(user);
          localStorage.setItem('netlitv_user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  function signup(name, email, password) {
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const user = {
            id: Date.now(),
            email: email,
            name: name,
            avatar: '/dp.webp'
          };
          
          setCurrentUser(user);
          localStorage.setItem('netlitv_user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Please fill all fields'));
        }
      }, 1000);
    });
  }

  function logout() {
    setCurrentUser(null);
    setUserSubscription(null);
    localStorage.removeItem('netlitv_user');
    localStorage.removeItem('netlitv_subscription');
  }

  function subscribe(plan) {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const subscription = {
          plan: plan,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
          active: true
        };
        
        setUserSubscription(subscription);
        localStorage.setItem('netlitv_subscription', JSON.stringify(subscription));
        resolve(subscription);
      }, 1000);
    });
  }

  function cancelSubscription() {
    setUserSubscription(null);
    localStorage.removeItem('netlitv_subscription');
  }

  const value = {
    currentUser,
    userSubscription,
    login,
    signup,
    logout,
    subscribe,
    cancelSubscription,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}