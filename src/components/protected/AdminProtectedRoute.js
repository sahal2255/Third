import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAdminAuth } from "@/pages/api/adminService";
import AdminLayout from "@/components/Layouts/AdminLayout";

const AdminProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await checkAdminAuth();
        if (response?.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push("/admin/login");
        }
      } catch (error) {
        setIsAuthenticated(false);
        router.push("/admin/login");
      }
    };

    verifyAdmin();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Checking authentication...</h1>
      </div>
    );
  }

  return isAuthenticated ? <AdminLayout>{children}</AdminLayout> : null;
};

export default AdminProtectedRoute;
