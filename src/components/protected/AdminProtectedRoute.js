import { useEffect } from "react";
import { useRouter } from "next/router";
import useAdminAuthStore from "@/store/useAdminAuth";
import AdminLayout from "@/components/Layouts/AdminLayout";

const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, verifyAdmin } = useAdminAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === null) {
      verifyAdmin();
    }
  }, [isAuthenticated, verifyAdmin]);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Checking authentication...</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.replace("/admin/login");
    return null;
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminProtectedRoute;
