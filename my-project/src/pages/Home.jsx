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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30">
          <div className="h-full px-4 mx-auto max-w-7xl sm:px-6">
            {/* Header */}
            <div className="flex items-center justify-end gap-2 py-4 sm:gap-4">
              <span className="text-xs font-bold text-white sm:text-sm">
                Sisa 5 Kredit
              </span>
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-xl">
                Upgrade plan
              </button>
            </div>

            {/* Main Content - Centered */}
            <div className="flex flex-col items-center mt-8 sm:mt-16">
              <h1 className="px-4 mb-6 text-2xl font-semibold text-center text-white sm:text-4xl sm:mb-8">
                Mulai kreasi baru hari ini!
              </h1>

              {/* Buat Video Button */}
              <div className="flex justify-start w-full gap-2 px-2 mt-4 sm:mt-7">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl flex items-center gap-2">
                  <span className="text-sm font-medium sm:text-base">
                    Buat Video
                  </span>
                  <img
                    src={HalfAdd}
                    alt="Add"
                    className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
                  />
                </button>
              </div>

              {/* Feature Buttons */}
              <div className="w-full max-w-3xl px-20 mx-auto mt-3 overflow-x-auto">
                <div className="bg-gradient-to-r from-violet-600 to-violet-900 rounded-2xl p-1.5 gap-2 justify-center shadow-lg inline-flex min-w-max">
                  <Link
                    to="/url-to-video"
                    className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap"
                  >
                    <img
                      src={Video}
                      alt="URL to Video"
                      className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
                    />
                    <span>URL to Video</span>
                  </Link>
                  <Link
                    to="/text-to-video"
                    className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap"
                  >
                    <img
                      src={Text}
                      alt="Text to Video"
                      className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
                    />
                    <span>Text to Video</span>
                  </Link>
                  <Link
                    to="/speech-to-video"
                    className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap"
                  >
                    <img
                      src={Speech}
                      alt="Speech to Video"
                      className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
                    />
                    <span>Speech to Video</span>
                  </Link>
                  <Link
                    to="/ai-avatar"
                    className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-full text-xs sm:text-sm whitespace-nowrap"
                  >
                    <img
                      src={Avatar}
                      alt="AI Avatar"
                      className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
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
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12">
        {/* Kelola Konten Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
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
                      <h3 className="mb-4 font-medium text-gray-500 text-body-xl sm:text-base">
                        {section.title}
                      </h3>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="relative bg-white border border-gray-200 rounded-2xl"
                          >
                            <div className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                  <h3 className="text-sm font-medium text-gray-900">
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
  );
}
