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
  FaClock,
  FaRandom,
} from "react-icons/fa";
import HalfAdd from "../assets/icons/add-circle-half-dot.svg";
import Video from "../assets/icons/mage_video.svg";
import Text from "../assets/icons/fluent_textbox-16-regular.svg";
import Speech from "../assets/icons/tdesign_user-talk-1.svg";
import Avatar from "../assets/icons/user-star-02.svg";
import ProjectCard from "../components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import Header from "../components/Header";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const sectionList = [
    {
      title: "Lanjutkan",
      items: [
        {
          title: "Alchemist Fragrance",
          type: "Video",
          progress: 75,
          icon: "random",
        },
        {
          title: "Beauty of Angel - Lip Scrub",
          type: "Video",
          progress: 45,
          icon: "random",
        },
      ],
    },
    {
      title: "Agenda Hari Ini",
      items: [
        {
          title: "Alchemist Fragrance",
          type: "Video",
          progress: 90,
          icon: "clock",
        },
        {
          title: "Beauty of Angel - Lip Scrub",
          type: "Design",
          progress: 60,
          icon: "clock",
        },
      ],
    },
    {
      title: "Agenda Besok",
      items: [
        {
          title: "Beauty of Angel - Lip Scrub",
          type: "Design",
          progress: 30,
          icon: "clock",
        },
        {
          title: "Beauty of Angel - Lip Scrub",
          type: "Design",
          progress: 25,
          icon: "clock",
        },
      ],
    },
    {
      title: "Recovery Delete",
      items: [
        {
          title: "Beauty of Angel - Lip Scrub",
          type: "Design",
          progress: 20,
          icon: "clock",
        },
      ],
    },
  ];

  const nextSection = () => {
    if (currentSection < sectionList.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const getTypeStyle = (type) => {
    return type === "Video"
      ? "bg-[#FFF1F1] text-[#FF5C5C]"
      : "bg-blue-50 text-blue-500";
  };

  const getIcon = (iconType) => {
    return iconType === "random" ? (
      <FaRandom className="w-3.5 h-3.5 text-white" />
    ) : (
      <FaClock className="w-3.5 h-3.5 text-white" />
    );
  };

  return (
    <div className="min-h-screen bg-[#D0D0D0]">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white m-2 rounded-lg">
        <Header />

        <section className="relative z-30 flex justify-center items-start font-poppins font-semibold gap-4 px-8 py-4 md:hidden">
          <Link to="/add-video">
            <div className="flex flex-col justify-center items-center gap-1">
              <button className="flex items-center justify-center bg-gradient-primary p-2 rounded-full w-12 h-12">
                <img
                  src={HalfAdd}
                  alt="Add Video"
                  className="w-7 h-7 filter invert"
                />
              </button>
              <p className="text-[0.5rem] text-center">Buat Video</p>
            </div>
          </Link>
          <Link to="/url-to-video">
            <div className="flex flex-col justify-center items-center gap-1">
              <button className="flex items-center justify-center bg-gradient-primary p-2 rounded-full w-12 h-12">
                <img
                  src={Video}
                  alt="URL to Video"
                  className="w-7 h-7 filter invert"
                />
              </button>
              <p className="text-[0.5rem] text-center">URL to Video</p>
            </div>
          </Link>
          <Link to="/text-to-video">
            <div className="flex flex-col justify-center items-center gap-1">
              <button className="flex items-center justify-center bg-gradient-primary p-2 rounded-full w-12 h-12">
                <img
                  src={Text}
                  alt="Text to Video"
                  className="w-7 h-7 filter invert"
                />
              </button>
              <p className="text-[0.5rem] text-center">Text to Video</p>
            </div>
          </Link>
          <Link to="/speech-to-video">
            <div className="flex flex-col justify-center items-center gap-1">
              <button className="flex items-center justify-center bg-gradient-primary p-2 rounded-full w-12 h-12">
                <img
                  src={Speech}
                  alt="Speech to Video"
                  className="w-7 h-7 filter invert"
                />
              </button>
              <p className="text-[0.5rem] text-center">Speech to Video</p>
            </div>
          </Link>
          <Link to="/AI-avatar">
            <div className="flex flex-col justify-center items-center gap-1">
              <button className="flex items-center justify-center bg-gradient-primary p-2 rounded-full w-12 h-12">
                <img
                  src={Avatar}
                  alt="AI Avatar"
                  className="w-7 h-7 filter invert"
                />
              </button>
              <p className="text-[0.5rem] text-center">AI Avatar</p>
            </div>
          </Link>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Kelola Konten Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Kelola Konten
              </h2>
            </div>
            <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
              Lainnya
            </button>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-6 pb-4 no-scrollbar">
                <Swiper
                  modules={[FreeMode]}
                  slidesPerView="auto"
                  spaceBetween={24}
                  freeMode={{
                    enabled: true,
                    momentum: true,
                    momentumRatio: 0.8,
                    momentumVelocityRatio: 0.9,
                  }}
                  mousewheel={true}
                  grabCursor={true}
                  touchEventsTarget="container"
                  touchRatio={1}
                  touchAngle={45}
                  simulateTouch={true}
                  threshold={5}
                  className="mySwiper"
                >
                  {sectionList.map((section, index) => (
                    <SwiperSlide
                      key={index}
                      style={{ width: "auto", cursor: "grab" }}
                    >
                      <div className="min-w-[300px] sm:min-w-[400px]">
                        <h3 className="text-body-xl sm:text-base font-medium text-gray-500 mb-4">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="relative bg-white rounded-2xl border border-gray-200"
                            >
                              <div className="p-4">
                                <div className="flex justify-between items-start">
                                  <div className="space-y-2">
                                    <h3 className="font-medium text-sm text-gray-900">
                                      {item.title}
                                    </h3>
                                    <span
                                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs ${getTypeStyle(
                                        item.type
                                      )}`}
                                    >
                                      {item.type}
                                    </span>
                                  </div>
                                  <button className="p-2 rounded-full bg-[#0A0B26] hover:bg-[#1a1b46] transition-colors">
                                    {getIcon(item.icon)}
                                  </button>
                                </div>
                              </div>

                              {/* Progress bar */}
                              <div className="h-0.5 w-full bg-transparent">
                                <div
                                  className="h-0.5 rounded-xl bg-violet-500 ml-2"
                                  style={{ width: `${item.progress}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Project Section */}
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
