import React, { useEffect, useState } from "react";
import MovieCard from "./Card";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import arrow from '../assets/arrow-alt-lright-alt.svg'

export default function TrendingSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/viewAIPower.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="w-full px-8 py-6 mt-20 flex flex-col">
      {/* Section Title */}
      <div className="flex justify-between">
        <h1 className="text-white text-[14px] font-semibold mb-4">
        AI Personalized Recommendations 
      </h1>
      <div className="flex flex-col">
        <a className="text-blue-500 font-bold text-xl flex-row" href="">View all  </a>
        <RiArrowRightSLine />
      </div>

      </div>
      

      {/* Movie Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            desc={movie.desc}
          />
        ))}
      </div>
    </div>
  );
}