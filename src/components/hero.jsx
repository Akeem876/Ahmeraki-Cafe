import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="/Ahmeraki-hero-image.jpg" 
          alt="Luxury café interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-40"></div>
      
      {/* Content Container with Blur Effect */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-12 rounded-xl">
        {/* Blurred background for text area */}
        <div className="absolute inset-0 bg-grey/50 backdrop-blur-sm rounded-xl"></div>
        
        {/* Content inside blurred container */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Experience Unmatched
            <br />
            <span className="text-green-950 font-semibold">Elegance at the Cafe</span>
          </h1>
        
          {/* Subtle separator */}
          <div className="w-24 h-px bg-amber-400 mx-auto my-8 opacity-70"></div>
        
          <p className="text-center max-w-2xl text-gray-100 mb-10 md:mb-12 px-4 text-lg md:text-xl font-light leading-relaxed mx-auto">
            Indulge in a premier coffee experience where elegance meets
            excellence. Our luxury cafe offers world-class beverages, breathtaking
            ambiance, and exceptional service tailored to your every need.
          </p>
        
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
            <Link to="/join">
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Join Now
              </button>
            </Link>
            <Link to="/story">
              <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;