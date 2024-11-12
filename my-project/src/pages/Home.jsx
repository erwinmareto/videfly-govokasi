import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img
          src="https://www.videfly.com/new-landing-page-asset/videfly-logo.svg"
          alt="Videfly Logo"
          className="h-8"
        />
        <nav className="flex space-x-4">
          <Link to="/fitur" className="text-gray-700 hover:text-purple-600">
            Fitur AI
          </Link>
          <Link to="/solusi" className="text-gray-700 hover:text-purple-600">
            Solusi Bisnis
          </Link>
          <Link to="/harga" className="text-gray-700 hover:text-purple-600">
            Harga
          </Link>
          <Link to="/support" className="text-gray-700 hover:text-purple-600">
            Support
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-purple-600">
            Sign in
          </Link>
          <Link to="/register" className="bg-purple-600 text-white px-4 py-2 rounded">
            Get Started
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center p-8 bg-purple-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sulap Link Produk Jadi Video Menawan dalam Sekejap!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Buat video produk profesional tanpa keahlian editing, hemat waktu dan
          uang!
        </p>
        <Link to="/fitur" className="bg-purple-600 text-white px-6 py-3 rounded-full">
          Coba Gratis
        </Link>
        <div className="mt-8">
          <p className="text-gray-500">Featured On</p>
          <img
            src="https://www.videfly.com/hero-section-asset/tokopedia.svg"
            alt="Tokopedia"
            className="h-6 mt-2"
          />
        </div>
      </main>
    </div>
  );
}
