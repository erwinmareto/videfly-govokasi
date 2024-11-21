import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaProjectDiagram,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import icons from "../constant/icons";
import images from "../constant/images";

export default function ProjectCard() {
  const [currentProyekIndex, setCurrentProyekIndex] = useState(0);

  const proyekItems = [
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
  ];

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4; // default
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(proyekItems.length / itemsPerPage);

  const nextProyek = () => {
    if (currentProyekIndex < totalPages - 1) {
      setCurrentProyekIndex(currentProyekIndex + 1);
    }
  };

  const prevProyek = () => {
    if (currentProyekIndex > 0) {
      setCurrentProyekIndex(currentProyekIndex - 1);
    }
  };

  return (
    <div className="px-1 mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900">Proyek</h2>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-lg sm:px-6 hover:bg-purple-700">
          Lainnya
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 sm:gap-6"
            style={{
              transform: `translateX(-${
                currentProyekIndex * ((100 / itemsPerPage) * itemsPerPage)
              }%)`,
            }}
          >
            {proyekItems.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1.2rem)] 
                         max-w-full sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.2rem)] 
                         flex-shrink-0"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                  {/* Status and Duration Badge */}
                  <div className="absolute z-10 flex justify-between top-2 sm:top-3 left-2 sm:left-3 right-10 sm:right-12">
                    <span className="px-2 py-1 text-xs font-medium rounded-full sm:px-3 bg-white/90 backdrop-blur-sm">
                      {item.status}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full sm:px-3 bg-white/90 backdrop-blur-sm">
                      {item.duration}
                    </span>
                  </div>

                  {/* Menu Button */}
                  <button className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <BsThreeDotsVertical className="text-base text-white sm:text-lg" />
                  </button>

                  {/* Image */}
                  <div className="w-full bg-gray-100 aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex p-3 sm:p-4">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 sm:text-base line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        {item.date}
                      </p>
                    </div>
                    <img
                      src={icons.iconButton}
                      alt="icon button"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={prevProyek}
            disabled={currentProyekIndex === 0}
            className={`rounded-xl p-1.5 sm:p-2 text-white shadow-lg transition-colors bg-violet-600 hover:bg-violet-700 disabled:bg-violet-500 disabled:cursor-not-allowed`}
          >
            <FaChevronLeft className="text-lg sm:text-xl" />
          </button>
          <button
            onClick={nextProyek}
            disabled={currentProyekIndex === totalPages - 1}
            className={`rounded-xl p-1.5 sm:p-2 text-white shadow-lg transition-colors bg-violet-600 hover:bg-violet-700 disabled:bg-violet-500 disabled:cursor-not-allowed`}
          >
            <FaChevronRight className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
