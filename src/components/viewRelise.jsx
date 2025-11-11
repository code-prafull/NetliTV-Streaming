import React, { useEffect, useState } from "react";
import MovieCard from "./Card";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ViewRelise() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/viewRelise.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="w-full px-8 py-6 mt-20 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl font-semibold mb-4">
          New Releases - All
        </h1>
        <div className="flex flex-col">
          <a className="text-blue-500 font-bold text-xl flex-row" href="/">
            Back to Home
          </a>
          <RiArrowRightSLine />
        </div>
      </div>

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