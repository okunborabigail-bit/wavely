const TrackCard = ({ track, onSelect, currentTrack }) => {
  return (
    <div
      onClick={() => onSelect(track)}
      className={`p-4 rounded-lg shadow transition cursor-pointer
        ${currentTrack?.id === track.id 
          ? "bg-purple-700" 
          : "bg-gray-800 hover:bg-gray-700"}`}
    >
      <img
        src={track.album?.cover_medium}
        alt={track.title}
        className="rounded-lg mb-3 w-full object-cover"
      />
      <h2 className="font-bold text-lg text-white">
        {track.title}
      </h2>
      <p className="text-gray-400">
        {track.artist?.name}
      </p>
    </div>
  );
};
export default TrackCard;
