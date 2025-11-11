import React from "react";
import { Link } from "react-router-dom";
import { watchHistoryData } from "./watchData";

export default function WatchHistory() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Watch History</h1>
          <Link 
            to="/" 
            className="bg-stone-800 hover:bg-stone-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchHistoryData.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-stone-900 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={movie.thumbnail || movie.image} 
                  alt={movie.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-white text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-400 text-sm mb-3">{movie.desc}</p>
                <div className="flex justify-between text-gray-500 text-xs">
                  <span>{movie.duration}</span>
                  <span>{movie.watchedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}