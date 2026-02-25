const TrackCard = ({ track, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(track)}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={track.album.cover_medium}
        alt={track.title}
        className="rounded mb-3"
      />
      <h2 className="font-bold text-lg">{track.title}</h2>
      <p className="text-gray-600">{track.artist.name}</p>
    </div>
  );
};

export default TrackCard;
