import { useState } from "react";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");


  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query);
    setQuery("");
  };


  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        placeholder="Search for songs, artists, or albums..."
        className="w-full p-3 rounded shadow border text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
    </div>
  );
};


export default SearchBar;
