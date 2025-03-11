import AdminLayout from "@/components/Layouts/AdminLayout";
import UserLayout from "@/components/Layouts/UserLayout";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const queryClient = new QueryClient();
  // Apply Admin Layout if the route starts with /admin
  const Layout = router.pathname.startsWith("/admin")
    ? AdminLayout
    : UserLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
