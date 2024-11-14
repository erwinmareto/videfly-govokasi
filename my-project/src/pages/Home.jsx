import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaLink, FaFileAlt, FaMicrophone, FaRobot, FaVideo, FaProjectDiagram, FaChevronLeft, FaChevronRight, FaEllipsisH, FaClock, FaRandom } from "react-icons/fa";
import HalfAdd from "../assets/icons/add-circle-half-dot.svg";
import Video from "../assets/icons/mage_video.svg";
import Text from "../assets/icons/fluent_textbox-16-regular.svg";
import Speech from "../assets/icons/tdesign_user-talk-1.svg";
import Avatar from "../assets/icons/user-star-02.svg";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const sections = {
    lanjutkan: [
      {
        title: "Alchemist Fragrance",
        type: "Video",
        progress: 75,
        icon: "random"
      },
      {
        title: "Beauty of Angel - Lip Scrub",
        type: "Video",
        progress: 45,
        icon: "random"
      }
    ],
    agendaHariIni: [
      {
        title: "Alchemist Fragrance",
        type: "Video",
        progress: 90,
        icon: "clock"
      },
      {
        title: "Beauty of Angel - Lip Scrub",
        type: "Design",
        progress: 60,
        icon: "clock"
      }
    ],
    agendaBesok: [
      {
        title: "Beauty of Angel - Lip Scrub",
        type: "Design",
        progress: 30,
        icon: "clock"
      },
      {
        title: "Beauty of Angel - Lip Scrub",
        type: "Design",
        progress: 25,
        icon: "clock"
      }
    ],
    recoveryDelete: [
      {
        title: "Beauty of Angel - Lip Scrub",
        type: "Design",
        progress: 20,
        icon: "clock"
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('lanjutkan');

  const getTypeStyle = (type) => {
    return type === "Video" 
      ? "bg-pink-50 text-pink-500"
      : "bg-blue-50 text-blue-500";
  };

  const getIcon = (iconType) => {
    return iconType === "random" 
      ? <FaRandom className="w-4 h-4 text-white" />
      : <FaClock className="w-4 h-4 text-white" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Navbar />
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
            {/* Header */}
            <div className="flex justify-end items-center gap-2 sm:gap-4 py-4">
              <span className="text-white text-xs sm:text-sm font-bold">Sisa 5 Kredit</span>
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-xl">
                Upgrade plan
              </button>
            </div>

            {/* Main Content - Centered */}
            <div className="flex flex-col items-center mt-8 sm:mt-16">
              <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-6 sm:mb-8 text-center px-4">
                Mulai kreasi baru hari ini!
              </h1>
              
              {/* Buat Video Button */}
              <div className="flex justify-start w-full gap-2 mt-4 sm:mt-7 px-4">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl flex items-center gap-2">
                  <span className="font-medium text-sm sm:text-base">Buat Video</span>
                  <img src={HalfAdd} alt="Add" className="w-4 sm:w-5 h-4 sm:h-5 filter invert" />
                </button>
              </div>

              {/* Feature Buttons */}
              <div className="max-w-3xl mx-auto mt-3 px-20 w-full overflow-x-auto">
                <div className="bg-gradient-to-r from-violet-600 to-violet-900 rounded-2xl p-1.5 gap-2 justify-center shadow-lg inline-flex min-w-max">
                  <Link to="/url-to-video" className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    <img src={Video} alt="URL to Video" className="w-4 sm:w-5 h-4 sm:h-5 filter invert" />
                    <span>URL to Video</span>
                  </Link>
                  <Link to="/text-to-video" className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    <img src={Text} alt="Text to Video" className="w-4 sm:w-5 h-4 sm:h-5 filter invert" />
                    <span>Text to Video</span>
                  </Link>
                  <Link to="/speech-to-video" className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    <img src={Speech} alt="Speech to Video" className="w-4 sm:w-5 h-4 sm:h-5 filter invert" />
                    <span>Speech to Video</span>
                  </Link>
                  <Link to="/ai-avatar" className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    <img src={Avatar} alt="AI Avatar" className="w-4 sm:w-5 h-4 sm:h-5 filter invert" />
                    <span>AI Avatar</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Kelola Konten */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Kelola Konten</h2>
          </div>
          <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
            Lainnya
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 sm:gap-8 mb-6 border-b overflow-x-auto">
          <button 
            onClick={() => setActiveTab('lanjutkan')}
            className={`pb-2 px-1 text-sm sm:text-base whitespace-nowrap ${activeTab === 'lanjutkan' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-500'}`}
          >
            Lanjutkan
          </button>
          <button 
            onClick={() => setActiveTab('agendaHariIni')}
            className={`pb-2 px-1 text-sm sm:text-base whitespace-nowrap ${activeTab === 'agendaHariIni' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-500'}`}
          >
            Agenda Hari ini
          </button>
          <button 
            onClick={() => setActiveTab('agendaBesok')}
            className={`pb-2 px-1 text-sm sm:text-base whitespace-nowrap ${activeTab === 'agendaBesok' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-500'}`}
          >
            Agenda Besok
          </button>
          <button 
            onClick={() => setActiveTab('recoveryDelete')}
            className={`pb-2 px-1 text-sm sm:text-base whitespace-nowrap ${activeTab === 'recoveryDelete' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-500'}`}
          >
            Recovery Delete
          </button>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections[activeTab].map((item, index) => (
            <div key={index} className="border rounded-lg p-3 sm:p-4 relative">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-2">{item.title}</h3>
                  <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs ${getTypeStyle(item.type)}`}>
                    {item.type}
                  </span>
                </div>
                <button className="p-1.5 sm:p-2 rounded-full bg-[#0A0B26]">
                  {getIcon(item.icon)}
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Project Section */}
        <ProjectCard />
      </div>
    </div>
  );
}
