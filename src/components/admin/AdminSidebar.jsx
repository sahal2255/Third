import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoHomeOutline,IoCloseOutline ,IoSettingsOutline} from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";

const AdminSidebar = ({ setSidebarOpen }) => {
  const router = useRouter();
  const links = [
    { name: "Dashboard", href: "/admin", icon: <IoHomeOutline size={20} /> },
    { name: "Products", href: "/admin/products", icon: <FiPackage size={20} /> },
    { name: "Users", href: "/admin/users", icon: <AiOutlineUsergroupAdd size={20} /> },
    // { name: "Settings", href: "/admin/settings", icon: <IoSettingsOutline size={20} /> },
  ];

  return (
    <div className="bg-slate-800 w-64 min-h-screen text-white fixed top-0 left-0 p-5 z-50 lg:relative">
      <button className="absolute top-4 right-4 text-white text-2xl lg:hidden" onClick={() => setSidebarOpen(false)}>
        <IoCloseOutline />
      </button>

      <h2 className="text-xl font-bold text-center py-4 border-b border-gray-700">
        Admin Panel
      </h2>

      <nav className="mt-5">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={`flex items-center gap-3 py-3 px-4 rounded-lg transition duration-300 ${router.pathname === link.href ? "bg-gray-800" : "hover:bg-gray-700"}`}>
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
