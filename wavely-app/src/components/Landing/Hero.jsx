// components/Hero.js
import { Link } from "react-router-dom";
import React from 'react';
const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to Wavely 🎶
      </h1>

      <p className="mb-8 text-lg text-gray-600">
        Discover amazing music anytime.
      </p>

      <Link to="/dashboard">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
          Go to Dashboard
        </button>
      </Link>
    </section>
  );
};

export default Hero;

