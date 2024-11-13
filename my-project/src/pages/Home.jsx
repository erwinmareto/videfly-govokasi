import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaLink, FaFileAlt, FaMicrophone, FaRobot, FaVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [currentKontenIndex, setCurrentKontenIndex] = useState(0);

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

  const nextKonten = () => {
    setCurrentKontenIndex((prev) => (prev + 1) % kontenItems.length);
  };

  const prevKonten = () => {
    setCurrentKontenIndex((prev) => (prev - 1 + kontenItems.length) % kontenItems.length);
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
      <Navbar />
      </div>
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Mulai kreasi baru hari ini!</h1>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-6">
            <div className="flex gap-4 justify-center">
              <Link to="/url-to-video" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaLink className="text-2xl" />
                </div>
                <span className="text-sm">URL to Video</span>
              </Link>

              <Link to="/text-to-video" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaFileAlt className="text-2xl" />
                </div>
                <span className="text-sm">Text to Video</span>
              </Link>

              <Link to="/speech-to-video" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaMicrophone className="text-2xl" />
                </div>
                <span className="text-sm">Speech to Video</span>
              </Link>

              <Link to="/ai-avatar" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaRobot className="text-2xl" />
                </div>
                <span className="text-sm">AI Avatar</span>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FaVideo className="text-xl text-purple-600" />
                Kelola Konten
              </h2>
              <Link to="/kelola-konten" className="text-purple-600 text-sm hover:underline">Lihat semua</Link>
            </div>

            <div className="relative">
              <button onClick={prevKonten} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
                <FaChevronLeft className="text-gray-600" />
              </button>
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentKontenIndex * 100}%)` }}>
                  {kontenItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2 text-sm text-gray-500">Last edited {item.lastEdited}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={nextKonten} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Project Section */}
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
