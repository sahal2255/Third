import React, { useState } from "react";
import AdminSidebar from "../admin/AdminSidebar";
import AdminHeader from "../admin/AdminHeader";
// import useAdminAuth from "@/hook/useAdminAuth";
// import { Router, useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <AdminHeader setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div className="flex flex-1">
        <div
          className={`fixed lg:relative w-64 bg-black transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <AdminSidebar setSidebarOpen={setSidebarOpen} />
        </div>

        <div className="flex-1 p-5 bg-gray-100 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
