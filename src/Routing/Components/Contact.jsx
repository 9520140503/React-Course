import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-12">
          Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you soon!
        </p>
      </div>

      <form className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-xl shadow space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
