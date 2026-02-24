import { useState } from "react";
import SearchBar from "./SearchBar";
import TrackCard from "./TrackCard";

const Dashboard = () => {
  const [tracks, setTracks] = useState([]);

  // Function to fetch music tracks from Deezer API
  const fetchTracks = async (query) => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
      );
      const data = await response.json();
      setTracks(data.data);
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setTracks([]);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-4xl font-bold text-purple-600 mb-4">🎧 Welcome Back, Chioma!</h1>

      {/* Search bar */}
      <SearchBar onSearch={fetchTracks} />

      {/* Track cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
