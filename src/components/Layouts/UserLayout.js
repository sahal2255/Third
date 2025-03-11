import Link from "next/link";
import Navbar from "../user/Navbar";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </nav>

      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="bg-white shadow-md py-4 text-center text-gray-600">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </footer>
    </div>
  );
};

export default UserLayout;
