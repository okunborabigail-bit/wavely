import { useState } from "react";
import SearchBar from "./SearchBar";
import TrackCard from "./TrackCard";

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
    <div className="p-6 min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        🎧 Welcome Back, Chioma!
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={fetchTracks} />

      {/* Track Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onSelect={setCurrentTrack}
          />
        ))}
      </div>

      {/* Bottom Music Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold">{currentTrack.title}</h3>
            <p className="text-sm text-gray-600">
              {currentTrack.artist.name}
            </p>
          </div>

          <audio
            controls
            autoPlay
            src={currentTrack.preview}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
