import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaLink, FaFileAlt, FaMicrophone, FaRobot, FaVideo, FaProjectDiagram, FaChevronLeft, FaChevronRight, FaEllipsisH } from "react-icons/fa";
import HalfAdd from "../assets/icons/add-circle-half-dot.svg";
import Video from "../assets/icons/mage_video.svg";
import Text from "../assets/icons/fluent_textbox-16-regular.svg";
import Speech from "../assets/icons/tdesign_user-talk-1.svg";
import Avatar from "../assets/icons/user-star-02.svg";
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
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2">
                <span className="font-medium">Buat Video</span>
                <img src={HalfAdd} alt="Add" className="w-5 h-5 filter invert" />
              </button>
              </div>

              {/* Feature Buttons */}
              <div className="max-w-3xl mx-auto mt-3">
                <div className="bg-gradient-to-r from-violet-600 to-violet-900 rounded-2xl p-1.5 gap-2 justify-center shadow-lg inline-flex">
                  <Link to="/url-to-video" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <img src={Video} alt="URL to Video" className="text-lg filter invert" />
                    <span>URL to Video</span>
                  </Link>
                  <Link to="/text-to-video" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <img src={Text} alt="Text to Video" className="text-lg filter invert" />
                    <span>Text to Video</span>
                  </Link>
                  <Link to="/speech-to-video" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <img src={Speech} alt="Speech to Video" className="text-lg filter invert" />
                    <span>Speech to Video</span>
                  </Link>
                  <Link to="/ai-avatar" className="flex items-center gap-2 text-white px-4 py-2 hover:bg-white/10 rounded-full">
                    <img src={Avatar} alt="AI Avatar" className="text-lg filter invert" />
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
            <button className="text-violet-600 bg-violet-100 px-4 py-1.5 rounded-full text-sm hover:bg-violet-200">
              Lainnya
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-8 mb-6 border-b">
              <button className="text-violet-600 border-b-2 border-violet-600 pb-2 px-1">
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
        
          {/* Project Section */}
          <ProjectCard />
      </div>
    </div>
  );
}
