import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-gray-400 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4">
              Netli<span className="text-red-600">TV</span>
            </h2>
            <p className="mb-6 max-w-md">
              Experience entertainment like never before with our vast collection of movies, TV shows, and exclusive content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Release" className="hover:text-white transition-colors duration-300">
                  New Releases
                </Link>
              </li>
              <li>
                <Link to="/trending" className="hover:text-white transition-colors duration-300">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/watch-history" className="hover:text-white transition-colors duration-300">
                  Watch History
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors duration-300">
                  Account
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="hover:text-white transition-colors duration-300">
                  Subscription
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 mt-10 pt-6 text-sm text-center">
          <p>© 2023 NetliTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}