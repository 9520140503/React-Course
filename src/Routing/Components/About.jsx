import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          We are a passionate team committed to delivering modern, responsive, and meaningful digital experiences. Our goal is to make technology more accessible and enjoyable for everyone.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-orange-100 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To inspire innovation and creativity by building beautiful and user-friendly applications that solve real-world problems.
          </p>
        </div>

        <div className="bg-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become a trusted source for people who want to grow with modern web technologies and design thinking.
          </p>
        </div>

        <div className="bg-purple-100 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Values</h3>
          <p className="text-gray-700">
            Creativity, collaboration, transparency, and the pursuit of excellence — we build with heart and purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
