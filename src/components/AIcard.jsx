import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function TrendingSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/homeAIcard.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="w-full px-4 md:px-8 py-6 mt-6 flex flex-col">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-xl md:text-2xl font-semibold">
        AI Personalized Recommendations 
        </h1>
        <div className="flex items-center">
          <Link className="text-gray-400 hover:text-white font-medium text-sm md:text-base" to="/view-ai-recommendations">View all</Link>
          <RiArrowRightSLine className="text-gray-400 ml-1" />
        </div>
      </div>

      {/* Movie Cards Slider */}
      <div className="relative">
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <Link 
              to={`/movie/${movie.id}`} 
              key={movie.id} 
              className="flex-shrink-0 w-48 md:w-64 bg-stone-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className="relative">
                <img src={movie.thumbnail || movie.image} alt={movie.title} className="w-full h-28 md:h-36 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white rounded-full p-2 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h2 className="text-white text-sm md:text-base font-semibold truncate">{movie.title}</h2>
                <p className="text-gray-400 text-xs mt-1 truncate">{movie.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}