import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaLink,
  FaFileAlt,
  FaMicrophone,
  FaRobot,
  FaVideo,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [currentKontenIndex, setCurrentKontenIndex] = useState(0);

  const kontenItems = [
    {
      title: "Automated Programme",
      image: "/images/automated-program.jpg",
      lastEdited: "2 days ago",
    },
    {
      title: "Beauty of Angel - Up Scrub",
      image: "/images/up-scrub.jpg",
      lastEdited: "3 days ago",
    },
    {
      title: "Beauty of Angel - Lip Scrub",
      image: "/images/lip-scrub.jpg",
      lastEdited: "5 days ago",
    },
  ];

  const nextKonten = () => {
    setCurrentKontenIndex((prev) => (prev + 1) % kontenItems.length);
  };

  const prevKonten = () => {
    setCurrentKontenIndex(
      (prev) => (prev - 1 + kontenItems.length) % kontenItems.length
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <h1 className="mb-6 text-2xl font-bold">
            Mulai kreasi baru hari ini!
          </h1>

          <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl">
            <div className="flex justify-center gap-4">
              <Link
                to="/url-to-video"
                className="flex flex-col items-center gap-2 p-4 text-white rounded-lg bg-white/10 hover:bg-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
                  <FaLink className="text-2xl" />
                </div>
                <span className="text-sm">URL to Video</span>
              </Link>

              <Link
                to="/text-to-video"
                className="flex flex-col items-center gap-2 p-4 text-white rounded-lg bg-white/10 hover:bg-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
                  <FaFileAlt className="text-2xl" />
                </div>
                <span className="text-sm">Text to Video</span>
              </Link>

              <Link
                to="/speech-to-video"
                className="flex flex-col items-center gap-2 p-4 text-white rounded-lg bg-white/10 hover:bg-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
                  <FaMicrophone className="text-2xl" />
                </div>
                <span className="text-sm">Speech to Video</span>
              </Link>

              <Link
                to="/ai-avatar"
                className="flex flex-col items-center gap-2 p-4 text-white rounded-lg bg-white/10 hover:bg-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
                  <FaRobot className="text-2xl" />
                </div>
                <span className="text-sm">AI Avatar</span>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <FaVideo className="text-xl text-purple-600" />
                Kelola Konten
              </h2>
              <Link
                to="/kelola-konten"
                className="text-sm text-purple-600 hover:underline"
              >
                Lihat semua
              </Link>
            </div>

            <div className="relative">
              <button
                onClick={prevKonten}
                className="absolute left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentKontenIndex * 100}%)`,
                  }}
                >
                  {kontenItems.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h3 className="mb-2 font-medium">{item.title}</h3>
                        <div className="h-32 overflow-hidden bg-gray-100 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          Last edited {item.lastEdited}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={nextKonten}
                className="absolute right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
              >
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
