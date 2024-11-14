import { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import icons from "../constant/icons";
import images from "../constant/images";

function ProjectCard() {
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [currentProyekIndex, setCurrentProyekIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const swiperRef = useRef(null);

  const proyekItems = [
    { 
      title: "Product A Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product B Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product C Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product D Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product E Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product F Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product G Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product H Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product IU Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
    {
      title: "Product DX Skincare",
      status: "Drafted",
      date: "9 Oktober 2024",
      duration: "01:00",
      image: images.productA,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const totalPages = Math.ceil(proyekItems.length / itemsPerPage);

  const nextProyek = () => {
    if (currentProyekIndex < proyekItems.length - itemsPerPage) {
      const nextIndex = currentProyekIndex + itemsPerPage;
      setCurrentProyekIndex(nextIndex >= proyekItems.length ? proyekItems.length - 1 : nextIndex);
      swiperRef.current?.slideTo(nextIndex >= proyekItems.length ? proyekItems.length - 1 : nextIndex);
    }
  };

  const prevProyek = () => {
    if (currentProyekIndex > 0) {
      const prevIndex = currentProyekIndex - itemsPerPage;
      setCurrentProyekIndex(prevIndex < 0 ? 0 : prevIndex);
      swiperRef.current?.slideTo(prevIndex < 0 ? 0 : prevIndex);
    }
  };

  return (
    <div className="px-1 mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900">Project</h2>
        </div>
        <button className="px-4 sm:px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
          Lainnya
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[FreeMode]}
            slidesPerView={itemsPerPage}
            spaceBetween={24}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.8,
              momentumVelocityRatio: 0.9,
            }}
            onSlideChange={(swiper) => {
              setCurrentProyekIndex(swiper.activeIndex);
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
            {proyekItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                  {/* Status and Duration Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-10 sm:right-12 flex justify-between z-10">
                    <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.status}
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.duration}
                    </span>
                  </div>

                  {/* Menu Button */}
                  <button className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <BsThreeDotsVertical className="text-white text-base sm:text-lg" />
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
                  <div className="p-3 sm:p-4 flex">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm sm:text-base text-gray-900 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
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
              </SwiperSlide>
            ))}
          </Swiper>
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
            disabled={currentProyekIndex >= proyekItems.length - itemsPerPage}
            className={`rounded-xl p-1.5 sm:p-2 text-white shadow-lg transition-colors bg-violet-600 hover:bg-violet-700 disabled:bg-violet-500 disabled:cursor-not-allowed`}
          >
            <FaChevronRight className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
