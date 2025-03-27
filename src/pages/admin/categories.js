import SmallTable from "@/components/common/SmallTable";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetCategories } from "../api/adminService";
import useAdminAuthStore from "@/store/useAdminAuth";

const Categories = () => {
  const { isAuthenticated } = useAdminAuthStore();
  console.log("🔵 isAuthenticated:", isAuthenticated);

  const { data: categories, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      console.log("🔵 Calling GetCategories API...");
      return await GetCategories();
    },
    enabled: isAuthenticated === true, // Only fetch when authenticated
  });

  console.log("🟢 Data received:", categories);
  console.log("🔴 Error (if any):", error);

  if (isLoading) {
    return <div className="text-center text-lg">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error fetching categories: {error.message}</div>;
  }

  return (
    <div>
      <SmallTable data={categories} />
    </div>
  );
};
export default Categories