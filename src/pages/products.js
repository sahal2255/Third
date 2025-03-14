import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/common/ProductCard";
import { ProductFetchingService } from "./api/userService";
import { ImSpinner9 } from "react-icons/im";
import { FiFilter } from "react-icons/fi"; // Filter Icon for Mobile
import Search from "@/components/user/Search";
import SortFilter from "@/components/user/SortFilter";

const ProductPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for Sidebar

  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ProductFetchingService,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner9 className="text-black text-6xl animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-8">
      {/* Fixed Heading */}
      <div className="py-4 px-6 left-0 right-0">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Products</h1>
      </div>

      {/* Mobile Filter Button */}
      <div className="sm:hidden flex justify-end my-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md"
        >
          <FiFilter className="text-xl mr-2" />
          Filter
        </button>
      </div>

      {/* Main Content */}
      <div className="flex pt-5">
        {/* Left Sidebar (Desktop) */}
        <div className="hidden sm:block w-1/4 pr-6">
          <SortFilter />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
            onClick={() => setIsSidebarOpen(false)} // Close when clicking outside
          ></div>
        )}

        {/* Mobile SortFilter Sidebar */}
        <div
          className={`fixed top-0 pt-24 left-0 w-3/4 h-full bg-white shadow-lg z-30 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform sm:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-xl font-bold"
            >
              ✕
            </button>
          </div>
          <SortFilter />
        </div>

        {/* Product List Section */}
        <div className="w-full sm:w-3/4">
          <div className="mb-6 mt-6">
            <Search />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
