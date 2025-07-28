"use client";

import React, { useState, ReactNode } from "react";
import { Users, Calendar, Folder, Menu, X, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface AdminSidebarProps {
  children: ReactNode;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { name: "Projects", href: "/admin/projects", icon: Folder },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Bookings", href: "/admin/bookings", icon: Calendar },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative flex w-full max-w-xs flex-col bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
              <div className="flex items-center px-4">
                <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
              </div>
              <nav className="mt-5 space-y-1 px-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600"
                  >
                    <item.icon className="mr-4 h-6 w-6 text-gray-400 group-hover:text-red-600" />
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full text-left group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut className="mr-4 h-6 w-6 text-gray-400 group-hover:text-red-600" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r border-gray-200">
          <div className="flex h-16 shrink-0 items-center">
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
          </div>
          <nav className="flex flex-1 flex-col justify-between">
            <ul role="list" className="flex flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:text-red-600 hover:bg-red-50"
                      >
                        <item.icon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600" />
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <div className="h-6 w-px bg-gray-200" />
          <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
        </div>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminSidebar;
