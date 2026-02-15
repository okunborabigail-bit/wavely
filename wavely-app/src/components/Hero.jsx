// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold text-[#574964]">Wavely</h1>
      <p className="mt-4 text-lg text-[#574964]">Your all-in-one music experience</p>
      <button className="mt-6 bg-[#92487A] text-white py-2 px-4 rounded hover:bg-[#FFDAFF] transition">
        Get Started
      </button>
    </section>
  );
};
export default Hero;