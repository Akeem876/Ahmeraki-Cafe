import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
          Experience Luxury Coffee Today
        </h2>
        <p className="text-white mb-6 md:mb-8">
          Discover the exclusive benefits of membership and schedule your
          personalized tour with us.
        </p>
        <div className="flex justify-center space-x-3 md:space-x-4">
          <Link to="/story">
            <button className="w-full sm:w-auto rounded-full bg-amber-700 text-white px-8 py-3 text-lg font-medium hover:bg-amber-600 transform hover:translate-y-px transition duration-300 ease-in-out shadow-md">
              Learn More
            </button>
          </Link>

          <Link to="/join">
            <button className="w-full sm:w-auto rounded-full border-2 border-white bg-transparent text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-gray-900 transform hover:translate-y-px transition duration-300 ease-in-out">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CTA;