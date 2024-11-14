import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaLink,
  FaFileAlt,
  FaMicrophone,
  FaRobot,
  FaVideo,
  FaProjectDiagram,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
} from "react-icons/fa";
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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-7xl">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[300px] bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30">
          <div className="h-full px-6 mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex items-center justify-end gap-4 py-4">
              <span className="text-sm font-bold text-white">
                Sisa 5 Kredit
              </span>
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white text-sm px-4 py-1.5 rounded-xl">
                Upgrade plan
              </button>
            </div>

            {/* Main Content - Centered */}
            <div className="flex flex-col items-center mt-16">
              <h1 className="mb-8 text-4xl font-semibold text-white">
                Mulai kreasi baru hari ini!
              </h1>

              {/* Buat Video Button */}
              <div className="flex justify-start w-full gap-2 mt-7">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2">
                  <span className="font-medium">Buat Video</span>
                  <img
                    src={HalfAdd}
                    alt="Add"
                    className="w-5 h-5 filter invert"
                  />
                </button>
              </div>

              {/* Feature Buttons */}
              <div className="max-w-3xl mx-auto mt-3">
                <div className="bg-gradient-to-r from-violet-600 to-violet-900 rounded-2xl p-1.5 gap-2 justify-center shadow-lg inline-flex">
                  <Link
                    to="/url-to-video"
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:bg-white/10"
                  >
                    <img
                      src={Video}
                      alt="URL to Video"
                      className="text-lg filter invert"
                    />
                    <span>URL to Video</span>
                  </Link>
                  <Link
                    to="/text-to-video"
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:bg-white/10"
                  >
                    <img
                      src={Text}
                      alt="Text to Video"
                      className="text-lg filter invert"
                    />
                    <span>Text to Video</span>
                  </Link>
                  <Link
                    to="/speech-to-video"
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:bg-white/10"
                  >
                    <img
                      src={Speech}
                      alt="Speech to Video"
                      className="text-lg filter invert"
                    />
                    <span>Speech to Video</span>
                  </Link>
                  <Link
                    to="/ai-avatar"
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:bg-white/10"
                  >
                    <img
                      src={Avatar}
                      alt="AI Avatar"
                      className="text-lg filter invert"
                    />
                    <span>AI Avatar</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 py-12 mx-auto max-w-7xl">
        {/* Kelola Konten */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Kelola Konten</h2>
            <button className="text-violet-600 bg-violet-100 px-4 py-1.5 rounded-full text-sm hover:bg-violet-200">
              Lainnya
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-8 mb-6 border-b">
            <button className="px-1 pb-2 border-b-2 text-violet-600 border-violet-600">
              Lanjutkan
            </button>
            <button className="px-1 pb-2 text-gray-500 hover:text-gray-700">
              Agenda Hari ini
            </button>
            <button className="px-1 pb-2 text-gray-500 hover:text-gray-700">
              Agenda Besok
            </button>
            <button className="px-1 pb-2 text-gray-500 hover:text-gray-700">
              Recovery Delete
            </button>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 gap-4">
            {kontenItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-32 h-20 overflow-hidden bg-gray-100 rounded">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">{item.title}</h3>
                    <span className="inline-block px-3 py-1 text-sm text-pink-600 bg-pink-100 rounded-full">
                      Video
                    </span>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <FaChevronRight className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Proyek Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Proyek</h2>
            <button className="text-violet-600 bg-violet-100 px-4 py-1.5 rounded-full text-sm hover:bg-violet-200">
              Lainnya
            </button>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="flex gap-4 pb-4 overflow-x-auto">
              {kontenItems.map((item, index) => (
                <div key={index} className="flex-none w-64">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-40"
                    />
                    <div className="absolute px-2 py-1 text-xs text-white rounded top-2 left-2 bg-gray-900/60">
                      Drafted
                    </div>
                    <button className="absolute top-2 right-2 p-1.5 hover:bg-black/20 rounded">
                      <FaEllipsisH className="text-white" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="text-sm text-gray-500">
                      {item.created}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button className="absolute p-2 -translate-y-1/2 bg-white rounded-full shadow-lg -left-4 top-1/2">
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button className="absolute p-2 -translate-y-1/2 bg-white rounded-full shadow-lg -right-4 top-1/2">
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
          {/* Project Section */}
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
