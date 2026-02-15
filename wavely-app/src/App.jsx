import React from 'react';
import Hero from './components/Hero';
import Features from './components/FeatureCard';
import MusicPlayerPreview from './components/MusicPlayerPreview';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col">
      <Hero />
      <Features />
      <MusicPlayerPreview />
      <About />
      <Footer />
    </div>
  );
}

export default App;