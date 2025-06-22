import React from "react";
import { Link } from "react-router-dom";

export default function Nothing() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}
