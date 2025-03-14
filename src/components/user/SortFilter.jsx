import { useState } from "react";

const SortFilter = ({ onSortChange, onFilterChange }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedSort(value);
    onSortChange(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilterChange(value);
  };

  return (
    <div className="bg-white p-5 shadow-md rounded-lg w-64">
      <h2 className="text-lg font-semibold mb-3">Sort & Filter</h2>

      {/* Sorting */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Sort By</label>
        <select
          value={selectedSort}
          onChange={handleSortChange}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          <option value="">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-gray-700 font-medium">Category</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Living</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
