import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa"; // ⬅️ social icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="leading-relaxed">
            We’re a team dedicated to building modern, responsive, and beautiful web experiences that make a difference.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <p>Email: <a href="mailto:support@example.com" className="hover:text-white">support@example.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="hover:text-white">+91 123 456 7890</a></p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-white transition"><FaGlobe /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} YourCompanyName. All rights reserved.
      </div>
    </footer>
  );
}
