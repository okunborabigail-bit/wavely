const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search for songs, artists, or albums..."
        className="w-full p-3 rounded shadow border focus:outline-none focus:ring-2 focus:ring-purple-500"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
