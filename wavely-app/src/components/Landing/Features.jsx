// components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#574964]">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;