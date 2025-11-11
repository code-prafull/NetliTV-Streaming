import img2 from "../assets/img2.png"; 
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      {/* 🪐 HERO SECTION */}
     <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${img2})` }}
      > 
        {/* 🔳 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* 🧱 Content */}
        <div className="relative z-10 max-w-2xl px-8 md:px-16 text-white space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Galactic Voyage: A New Beginning
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Join Captain Eva Rostova on an epic journey across uncharted galaxies,
            encountering strange new worlds and ancient mysteries. Humanity's
            future hangs in the balance.
          </p>

          {/* 🎬 Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded font-medium text-lg transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Play
            </button>
            <button className="flex items-center gap-2 bg-gray-600 bg-opacity-70 hover:bg-opacity-50 text-white px-6 py-3 rounded font-medium text-lg transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 TRENDING SECTION BELOW HERO */}
      <div className="mt-[-100px] md:mt-[-150px] px-4 md:px-8 relative z-20">
       
      </div> 
    </>
  );
}