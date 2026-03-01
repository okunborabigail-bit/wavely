import { useState } from "react";
import SearchBar from "./SearchBar";
import TrackCard from "./TrackCard";
import MusicPlayer from "./MusicPlayer";


const Dashboard = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);


  // Fetch music from Deezer API
  const fetchTracks = async (query) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      const data = await response.json();
      setTracks(data.data);
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setTracks([]);
    }
  };


  return (
    <div className="px-4 md:px-6 py-6 min-h-screen bg-gray-900 text-white pb-28">
      
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-purple-400 mb-6">
        🎧 Welcome Back, Chioma!
      </h1>


      {/* Search Bar */}
      <SearchBar onSearch={fetchTracks} />


      {/* Tracks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onSelect={setCurrentTrack}
            currentTrack={currentTrack}
          />
        ))}
      </div>


      {/* Music Player */}
      <MusicPlayer
        currentTrack={currentTrack}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
    </div>
  );
};


export default Dashboard;
