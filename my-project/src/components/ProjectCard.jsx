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
  ];

  const nextProyek = () => {
    setCurrentProyekIndex((prev) => (prev + 1) % proyekItems.length);
  };

  const prevProyek = () => {
    setCurrentProyekIndex(
      (prev) => (prev - 1 + proyekItems.length) % proyekItems.length
    );
  };

  return (
    <div className="container px-4 mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FaProjectDiagram className="text-xl text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Proyek</h2>
        </div>
        <button className="px-6 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700">
          Lainnya
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{ transform: `translateX(-${currentProyekIndex * 100}%)` }}
          >
            {proyekItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] flex-shrink-0"
              >
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
                  {/* Status and Duration Badge */}
                  <div className="absolute z-10 flex justify-between top-3 left-3 right-12">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm">
                      {item.status}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm">
                      {item.duration}
                    </span>
                  </div>

                  {/* Menu Button */}
                  <button className="absolute top-3 right-3 z-10 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <BsThreeDotsVertical className="text-lg text-white" />
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
                  <div className="flex p-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.date}</p>
                    </div>
                    <img
                      src={icons.iconButton}
                      alt="icon button"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={prevProyek}
            className="p-2 text-white transition-colors bg-purple-600 rounded-full shadow-lg hover:bg-purple-700"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextProyek}
            className="p-2 text-white transition-colors bg-purple-600 rounded-full shadow-lg hover:bg-purple-700"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
