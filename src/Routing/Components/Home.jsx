import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-down">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in-up">
          Discover amazing content, learn something new every day, and explore what we offer. We're here to empower your journey.
        </p>
        <Link
          to="/about"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg animate-fade-in"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
