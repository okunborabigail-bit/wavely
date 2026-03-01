import { useEffect, useRef, useState } from "react";

const MusicPlayer = ({ currentTrack, tracks = [], setCurrentTrack }) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Auto play when track changes
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      const audio = audioRef.current;

      audio.pause();
      audio.currentTime = 0;
      audio.load();

      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay prevented:", err);
        });
    }
  }, [currentTrack]);

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Auto play next when song ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, tracks]);

  if (!currentTrack) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );

    if (currentIndex !== -1 && currentIndex < tracks.length - 1) {
      setCurrentTrack(tracks[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id
    );

    if (currentIndex > 0) {
      setCurrentTrack(tracks[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4">

      {/* Track Info */}
      <div className="flex items-center gap-4">
        <img
          src={currentTrack.album.cover_small}
          alt="album cover"
          className="w-14 h-14 rounded-md"
        />

        <div>
          <p className="font-bold text-purple-400">
            {currentTrack.title}
          </p>
          <p className="text-sm text-gray-300">
            {currentTrack.artist.name}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded"
        >
          ⏮
        </button>

        <button
          onClick={togglePlay}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          onClick={handleNext}
          className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded"
        >
          ⏭
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 w-40">
        <span className="text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full accent-purple-600"
        />
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef}>
        <source src={currentTrack.preview} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;