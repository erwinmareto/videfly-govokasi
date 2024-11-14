import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaProjectDiagram,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import icons from "../constant/icons";
import images from "../constant/images";
import "swiper/css";

export default function ProjectCard() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const projectItems = [
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

  return (
    <div className="max-w-7xl mx-auto px-6 mb-12 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FaProjectDiagram className="text-xl text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Project</h2>
        </div>
        <button className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
          Lainnya
        </button>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView="auto"
          grabCursor={true}
          className="!overflow-hidden"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {projectItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-[280px]">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md">
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
                    <h3 className="font-medium text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  </div>
                  <img
                    src={icons.iconButton}
                    alt="icon button"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom-right Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handlePrev}
            className="bg-purple-600 rounded-full p-2 text-white shadow-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="bg-purple-600 rounded-full p-2 text-white shadow-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
