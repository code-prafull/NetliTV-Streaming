import React from "react";

export default function MovieCard({ title, image, desc }) {
  return (
    <div className="bg-stone-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-100 object-cover" />
      <div className="p-3">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

