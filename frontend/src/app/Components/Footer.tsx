import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h3 className="text-2xl font-bold text-[#CC3333] mb-3">JRS Building Contractors</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            JRS is your trusted partner for building, renovations, extensions and property transformations across London. Quality and reliability  built in.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#CC3333]" /> +44 7555 123456
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#CC3333]" /> info@jrs-building.co.uk
            </li>
            <li>Greater London, UK</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-[#CC3333] hover:bg-[#a82828] p-2 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#CC3333] hover:bg-[#a82828] p-2 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#CC3333] hover:bg-[#a82828] p-2 rounded-full transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JRS Building Contractors. All rights reserved.
      </div>
    </footer>
  );
}
