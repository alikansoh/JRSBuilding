"use client"
import React, { useState } from 'react';
import { 
  BarChart3, 
  FolderPlus, 
  Users, 
  Calendar, 
  Menu,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { id: 'projects', label: 'Projects', icon: FolderPlus, href: '/admin/projects' },
    { id: 'users', label: 'Users', icon: Users, href: '/admin/users' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, href: '/admin/bookings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-gray-800/95 backdrop-blur-xl border-r border-gray-700/50 transform transition-all duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <p className="text-xs text-gray-400">Management System</p>
            </div>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            {navigationLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)} // Close sidebar on mobile
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`} />
                  <span className="font-medium">{item.label}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Profile Section */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-700/30 border border-gray-600/30">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400 truncate">admin@company.com</p>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-6 sm:p-8 overflow-auto">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden mb-4 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
