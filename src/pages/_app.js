import React from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminProtectedRoute from "@/components/Protected/AdminProtectedRoute";
import UserLayout from "@/components/Layouts/UserLayout";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const queryClient = new QueryClient();

  const isAdminLogin = router.pathname === "/admin/login";
  const isAdminPage = router.pathname.startsWith("/admin");

  let Layout;
  if (isAdminLogin) {
    Layout = ({ children }) => <>{children}</>; // No layout for admin login
  } else if (isAdminPage) {
    Layout = AdminProtectedRoute; // Protect admin routes
  } else {
    Layout = UserLayout; // Default user layout
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" reverseOrder={false} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
