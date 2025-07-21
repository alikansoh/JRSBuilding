"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiPhone, FiMail, FiChevronDown, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
      setIsDropdownHovered(false);
    }, 250);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "Installation", href: "/services/installation" },
        { label: "Repair", href: "/services/repair" },
        { label: "Maintenance", href: "/services/maintenance" },
      ],
    },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white/70 backdrop-blur-md border-b border-[#1E3A5F] transition-shadow duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[120px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center h-full transform transition-transform duration-300 hover:scale-105"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="ColdFix Logo"
            priority
            width={320}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center text-[17px] pr-6 font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isServices = item.label === "Services";

            if (isServices) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    setIsServicesHovered(true);
                    handleMouseEnter();
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`group relative px-4 py-3 flex items-center text-[#1C1C3A] transition-colors duration-300 font-semibold ${
                      isActive ? "text-[#CC3333]" : "hover:text-gradient"
                    }`}
                  >
                    <span className="relative flex items-center">
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-1.5 h-[3px] rounded-full bg-gradient-to-r from-[#CC3333] to-[#FF6F61] transition-all duration-500 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                      <FiChevronDown
                        size={22}
                        className="ml-1 text-[#A0323C] transition-transform duration-300 group-hover:rotate-180"
                      />
                    </span>
                  </Link>

                  <div
                    onMouseEnter={() => {
                      setIsDropdownHovered(true);
                      handleMouseEnter();
                    }}
                    onMouseLeave={handleMouseLeave}
                    className={`absolute left-0 mt-2 w-52 bg-white/90 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out
                      ${isServicesHovered || isDropdownHovered
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"}`}
                  >
                    <div className="py-3">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-5 py-2 text-[#1C1C3A] text-[15px] font-medium rounded-md hover:bg-gradient-to-r hover:from-[#CC3333] hover:to-[#FF6F61] hover:text-white transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-3 transition-colors duration-300 font-semibold ${
                  isActive
                    ? "text-[#CC3333]"
                    : "text-[#1C1C1C] hover:text-gradient"
                }`}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1.5 h-[3px] rounded-full bg-gradient-to-r from-[#CC3333] to-[#FF6F61] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Contact Info Desktop */}
        <div className="hidden lg:flex flex-col items-end gap-1 text-right text-[15px] leading-tight pl-6 font-semibold">
          <span className="text-sm text-[#CC3333] font-bold tracking-wide uppercase">
            Get an Instant Quote
          </span>
          <a
            href="mailto:info@coldfix.co.uk"
            className="flex items-center gap-2 hover:underline text-[#1C1C3A] font-medium"
          >
            <FiMail className="w-5 h-5 text-[#CC3333] transition-transform duration-300 hover:rotate-[15deg]" />
            <span>info@coldfix.co.uk</span>
          </a>
          <a
            href="tel:+447123456789"
            className="flex items-center gap-2 hover:underline text-[#1C1C3A] font-medium"
          >
            <FiPhone className="w-5 h-5 text-[#CC3333] transition-transform duration-300 hover:rotate-[15deg]" />
            <span>+44 7123 456789</span>
          </a>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setIsMobileServicesOpen(false);
            }}
            className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC3333] active:scale-95 transition-transform duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-7 h-7 text-[#1C1C3A]" />
            ) : (
              <div className="space-y-1">
                <span className="block h-1 w-7 rounded bg-[#1C1C3A]" />
                <span className="block h-1 w-7 rounded bg-[#1C1C3A]" />
                <span className="block h-1 w-7 rounded bg-[#1C1C3A]" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-white border-t border-gray-300 ${
          isMobileMenuOpen ? "max-h-[700px] py-6" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-start space-y-4 px-6 font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isServices = item.label === "Services";

            if (isServices) {
              return (
                <div key={item.href} className="w-full">
                  <button
                    className="w-full text-lg text-[#1C1C3A] text-left px-4 py-3 flex justify-between items-center font-semibold hover:text-[#CC3333] transition-colors duration-300"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services-submenu"
                  >
                    {item.label}
                    <FiChevronDown
                      size={28}
                      className={`ml-2 transition-transform duration-300 ${
                        isMobileServicesOpen
                          ? "rotate-180 text-[#A0323C]"
                          : "text-[#1C1C3A]"
                      }`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div
                      id="mobile-services-submenu"
                      className="space-y-3 bg-gray-50 border-t border-gray-200 py-3 rounded-lg mt-2 w-full"
                    >
                      <Link
                        href="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base text-[#1C1C3A] px-6 py-2 font-semibold rounded hover:bg-gradient-to-r hover:from-[#CC3333] hover:to-[#FF6F61] hover:text-white transition-colors"
                      >
                        All Services
                      </Link>

                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-base text-[#1C1C3A] px-6 py-2 rounded hover:bg-gradient-to-r hover:from-[#CC3333] hover:to-[#FF6F61] hover:text-white transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left text-lg px-4 py-3 transition-colors duration-300 font-semibold ${
                  isActive
                    ? "text-[#CC3333] underline underline-offset-6"
                    : "text-[#1C1C3A] hover:text-[#CC3333]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Contact Info Mobile & Tablet */}
          <div className="mt-8 w-full text-left text-base font-semibold">
            <p className="text-sm text-[#CC3333] font-bold tracking-wide uppercase mb-3">
              Get an Instant Quote
            </p>

            <a
              href="mailto:info@coldfix.co.uk"
              className="flex items-center gap-3 text-[#1C1C3A] hover:underline mb-3"
            >
              <FiMail className="w-6 h-6 text-[#CC3333]" />
              <span>info@coldfix.co.uk</span>
            </a>

            <a
              href="tel:+447123456789"
              className="flex items-center gap-3 text-[#1C1C3A] hover:underline"
            >
              <FiPhone className="w-6 h-6 text-[#CC3333]" />
              <span>+44 7123 456789</span>
            </a>
          </div>
        </nav>
      </div>

      <style jsx>{`
        /* Gradient text hover effect */
        .hover\\:text-gradient:hover {
          background: linear-gradient(90deg, #cc3333, #ff6f61);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </header>
  );
}
