import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaProjectDiagram } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import icons from '../constant/icons';
import images from '../constant/images';

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
    }
  ];

  const itemsPerPage = 4;
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
        <button className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
          Lainnya
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300" 
            style={{ transform: `translateX(-${currentProyekIndex * (100 / itemsPerPage * itemsPerPage)}%)` }}
          >
            {proyekItems.map((item, index) => (
              <div key={index} className="min-w-[calc(25%-1.2rem)] max-w-[calc(25%-1.2rem)] flex-shrink-0">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Status and Duration Badge */}
                  <div className="absolute top-3 left-3 right-12 flex justify-between z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.status}
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.duration}
                    </span>
                  </div>
                  
                  {/* Menu Button */}
                  <button className="absolute top-3 right-3 z-10 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <BsThreeDotsVertical className="text-white text-lg" />
                  </button>
                  
                  {/* Image */}
                  <div className="aspect-video w-full bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                    </div>
                    <img src={icons.iconButton} alt="icon button" className="w-10 h-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button 
            onClick={prevProyek}
            disabled={currentProyekIndex === 0}
            className={`rounded-full p-2 text-white shadow-lg transition-colors bg-purple-600 hover:bg-purple-700`}
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextProyek}
            disabled={currentProyekIndex === totalPages - 1} 
            className={`rounded-full p-2 text-white shadow-lg transition-colors bg-purple-600 hover:bg-purple-700`}
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
