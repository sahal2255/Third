import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ placeholder = "Search products..." }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition">
      <FiSearch className="text-gray-500 text-xl mr-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default Search;
