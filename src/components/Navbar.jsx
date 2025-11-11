import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, userSubscription, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'}`}>
  <div className="flex justify-between items-center py-3 px-4 md:px-10">
    
    {/* Left side - Nav Links */}
    <ul className="flex gap-4 md:gap-6">
      <li className="cursor-pointer text-xl hover:text-white duration-300 transition-all">
        Netli<span className='text-red-600'>TV</span>
      </li>
     
      <li className="cursor-pointer hover:text-white duration-300 transition-all hidden md:block">
        <Link to="/">Home</Link>
      </li>
      {currentUser && (
        <>
          <li className="cursor-pointer hover:text-white duration-300 transition-all hidden md:block">
            <Link to="/Release">New Releases</Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-300 transition-all hidden md:block">
            <Link to="/watch-history">Watch History</Link>
          </li>
        </>
      )}
    </ul>
   
   {/* Right side - Auth buttons + Search bar + profile */}
<div className="flex items-center gap-4">
  {/* 🔍 Search Icon for mobile */}
  <div className="flex md:hidden">
    <CiSearch className="text-white w-6 h-6 cursor-pointer" />
  </div>

  {/* 🔍 Search Bar — hidden on small screens */}
  <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 bg-opacity-50 border border-stone-700 focus-within:ring-2 focus-within:ring-white transition-all duration-300 w-64">
    <CiSearch className="text-gray-400 w-5 h-5" />
    <input
      type="text"
      placeholder="Search NetliTV..."
      className="bg-transparent outline-none text-white w-full placeholder-gray-400"
    />
  </div>

  {/* Auth Buttons or Profile */}
  {currentUser ? (
    <div className="flex items-center gap-3">
      {/* Subscription Button for non-subscribers */}
      {!userSubscription && (
        <Link 
          to="/subscription" 
          className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded font-medium text-sm transition-colors duration-300"
        >
          Subscribe
        </Link>
      )}
      
      <div className="relative group">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="hidden md:block text-white text-sm font-medium">{currentUser.name}</span>
          <img
            width="35"
            height="35"
            className="rounded-md cursor-pointer"
            src="/dp.webp"
            alt="User Profile"
          />
        </div>
        
        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-stone-900 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <Link 
            to="/account" 
            className="block px-4 py-2 text-sm text-white hover:bg-stone-800"
          >
            Account
          </Link>
          <Link 
            to="/watch-history" 
            className="block px-4 py-2 text-sm text-white hover:bg-stone-800"
          >
            Watch History
          </Link>
          <Link 
            to="/subscription" 
            className="block px-4 py-2 text-sm text-white hover:bg-stone-800"
          >
            {userSubscription ? 'Manage Subscription' : 'Subscribe'}
          </Link>
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-stone-800"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="hidden md:flex items-center gap-2">
      <Link 
        to="/login" 
        className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
      >
        Login
      </Link>
      <Link 
        to="/signup" 
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-medium transition-colors duration-300"
      >
        Sign Up
      </Link>
    </div>
  )}
</div>
  </div>
</div>

    </>
  )
}

export default Navbar