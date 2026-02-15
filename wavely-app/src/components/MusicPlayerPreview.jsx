// components/MusicPlayerPreview.js
import React from 'react';

const MusicPlayerPreview = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <h2 className="text-3xl font-bold text-[#574964]">Music Player Preview</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 flex flex-col items-center">
        <img src="" alt="Album-cover" /> className="w-48 h-48 rounded" />
        <div className="mt-4">
          <p className="text-lg text-[#574964]">Track Name</p>
          <p className="text-gray-600">Artist Name</p>
        </div>
        <button className="mt-4 bg-[#574964] text-white py-2 px-4 rounded hover:bg-[#FFDAFF] transition">
          Play/Pause
        </button>
      </div>
    </section>
  );
};

export default MusicPlayerPreview;