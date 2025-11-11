import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ViewNewReleases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/Newreselise.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="w-full px-8 py-6 mt-20 flex flex-col">
      {/* Section Title */}
      <div className="flex justify-between">
        <h1 className="text-white text-2xl font-semibold mb-4">
         New Releases - All Movies
        </h1>
        <div className="flex flex-col">
          <Link to="/" className="text-blue-500 font-bold text-xl flex-row">
            Back to Home
          </Link>
          <RiArrowRightSLine />
        </div>
      </div>
      
      {/* Movie Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <Link 
            to={`/movie/${movie.id}`} 
            key={movie.id} 
            className="bg-stone-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer block"
          >
            <img src={movie.image} alt={movie.title} className="w-full h-100 object-cover" />
            <div className="p-3">
              <h2 className="text-white text-lg font-semibold">{movie.title}</h2>
              <p className="text-gray-400 text-sm">{movie.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}