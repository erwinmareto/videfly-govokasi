import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaLink, FaFileAlt, FaMicrophone, FaRobot, FaVideo, FaProjectDiagram, FaChevronLeft, FaChevronRight, FaEllipsisH } from "react-icons/fa";
import HalfAdd from "../assets/icons/add-circle-half-dot.svg";

export default function Home() {
  const [currentKontenIndex, setCurrentKontenIndex] = useState(0);
  const [currentProyekIndex, setCurrentProyekIndex] = useState(0);

  const kontenItems = [
    {
      title: "Automated Programme",
      image: "/images/automated-program.jpg",
      lastEdited: "2 days ago"
    },
    {
      title: "Beauty of Angel - Up Scrub", 
      image: "/images/up-scrub.jpg",
      lastEdited: "3 days ago"
    },
    {
      title: "Beauty of Angel - Lip Scrub",
      image: "/images/lip-scrub.jpg", 
      lastEdited: "5 days ago"
    }
  ];

  const proyekItems = [
    {
      title: "Video Produk A",
      image: "/images/product-a.jpg",
      created: "1 week ago"
    },
    {
      title: "Video Produk B",
      image: "/images/product-b.jpg", 
      created: "2 weeks ago"
    },
    {
      title: "Video Produk C",
      image: "/images/product-c.jpg",
      created: "3 weeks ago" 
    }
  ];

  const nextKonten = () => {
    setCurrentKontenIndex((prev) => (prev + 1) % kontenItems.length);
  };

  const prevKonten = () => {
    setCurrentKontenIndex((prev) => (prev - 1 + kontenItems.length) % kontenItems.length);
  };

  const nextProyek = () => {
    setCurrentProyekIndex((prev) => (prev + 1) % proyekItems.length);
  };

  const prevProyek = () => {
    setCurrentProyekIndex((prev) => (prev - 1 + proyekItems.length) % proyekItems.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative h-[300px] bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 h-full">
            {/* Header */}
            <div className="flex justify-end items-center gap-4 py-4">
              <span className="text-white text-sm font-bold">Sisa 5 Kredit</span>
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white text-sm px-4 py-1.5 rounded-xl">
                Upgrade plan
              </button>
            </div>

            {/* Main Content - Centered */}
            <div className="flex flex-col items-center mt-16">
              <h1 className="text-4xl font-semibold text-white mb-8">
                Mulai kreasi baru hari ini!
              </h1>
              
              {/* Buat Video Button */}
              <div className="flex justify-start w-full gap-2 mt-7">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2">
                <span className="font-medium">Buat Video</span>
                <img src={HalfAdd} alt="Add" className="w-5 h-5 filter invert" />
              </button>
              </div>

              {/* Feature Buttons */}
              <div className="max-w-3xl mx-auto mt-3">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-1.5 gap-2 justify-center shadow-lg inline-flex">
                  <Link to="/url-to-video" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <FaLink className="text-lg" />
                    <span>URL to Video</span>
                  </Link>
                  <Link to="/text-to-video" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <FaFileAlt className="text-lg" />
                    <span>Text to Video</span>
                  </Link>
                  <Link to="/speech-to-video" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <FaMicrophone className="text-lg" />
                    <span>Speech to Video</span>
                  </Link>
                  <Link to="/ai-avatar" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <FaRobot className="text-lg" />
                    <span>AI Avatar</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Kelola Konten */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Kelola Konten</h2>
            <button className="text-purple-600 bg-purple-100 px-4 py-1.5 rounded-full text-sm hover:bg-purple-200">
              Lainnya
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-8 mb-6 border-b">
            <button className="text-purple-600 border-b-2 border-purple-600 pb-2 px-1">
              Lanjutkan
            </button>
            <button className="text-gray-500 hover:text-gray-700 pb-2 px-1">
              Agenda Hari ini
            </button>
            <button className="text-gray-500 hover:text-gray-700 pb-2 px-1">
              Agenda Besok
            </button>
            <button className="text-gray-500 hover:text-gray-700 pb-2 px-1">
              Recovery Delete
            </button>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 gap-4">
            {kontenItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-32 h-20 bg-gray-100 rounded overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                      Video
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <FaChevronRight className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Proyek Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Proyek</h2>
            <button className="text-purple-600 bg-purple-100 px-4 py-1.5 rounded-full text-sm hover:bg-purple-200">
              Lainnya
            </button>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {proyekItems.map((item, index) => (
                <div key={index} className="flex-none w-64">
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-2 left-2 bg-gray-900/60 text-white text-xs px-2 py-1 rounded">
                      Drafted
                    </div>
                    <button className="absolute top-2 right-2 p-1.5 hover:bg-black/20 rounded">
                      <FaEllipsisH className="text-white" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.created}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
