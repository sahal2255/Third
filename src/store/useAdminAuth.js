import { create } from "zustand";
import { checkAdminAuth, AdminLoginPost, adminLogout } from "@/pages/api/adminService";
import toast from "react-hot-toast";
const useAdminAuthStore = create((set) => ({
  isAuthenticated: null,

  setAuthenticated: (value) => set({ isAuthenticated: value }),

  verifyAdmin: async () => {
    try {
      const response = await checkAdminAuth();
      if (response?.success) {
        set({ isAuthenticated: true });
      } else {
        set({ isAuthenticated: false });
      }
    } catch (error) {
      set({ isAuthenticated: false });
    }
  },

  adminLogin: async (data, router) => {
    try {
      const res = await AdminLoginPost(data);
      console.log("Response from Zustand login:", res);

      if (res?.success) {
        toast.success("Admin Logged In Successfully");
        set({ isAuthenticated: true });

        // ✅ Use router.replace inside the component, not Zustand
        if (router) {
          router.push("/admin");
        }
      } else {
        toast.error("Admin Login Failed");
        console.error("Login failed:", res?.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error in Zustand login:", error);
      toast.error("Admin Login Failed");
    }
  },

  adminLogout: async (router) => {
    try {
      const res = await adminLogout();
      console.log("Logout Response:", res);
      if (res?.success) {
        set({ isAuthenticated: false });
        toast.success("Admin Logged Out Successfully");

        if (router) {
          router.replace("/admin/login");
        }
      }
    } catch (error) {
      console.error("Error in admin logout:", error);
      toast.error("Logout Failed");
    }
  },
}));

export default useAdminAuthStore;
