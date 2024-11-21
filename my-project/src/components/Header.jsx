import { useState } from "react";
import { Link } from "react-router-dom";

import HalfAdd from "../assets/icons/add-circle-half-dot.svg";
import Video from "../assets/icons/mage_video.svg";
import Text from "../assets/icons/fluent_textbox-16-regular.svg";
import Speech from "../assets/icons/tdesign_user-talk-1.svg";
import Avatar from "../assets/icons/user-star-02.svg";
import Notification from "../assets/icons/notification-01.svg";
import ProfilePic1 from "../assets/images/profile-pic-1.png";
import headerVideo from "../assets/video/hero-video.mp4";
import NotificationMenu from "./Menus/NotificationMenu";
import ProfileMenu from "./Menus/ProfileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    // If the menu clicked is already open, close it; otherwise, open the new menu
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="relative h-[250px] sm:h-[300px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill px-2 py-1.5 rounded-2xl z-10"
        src={headerVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-30">
        <div className="h-full px-4 mx-auto max-w-7xl sm:px-6">
          {/* Header */}
          <div className="items-center justify-end hidden gap-2 py-4 sm:gap-4 md:flex lg:mr-24">
            <span className="text-xs font-semibold text-white font-poppins loop-border sm:text-sm">
              Sisa 5 Kredit
            </span>
            <button className="font-poppins font-semibold bg-gradient-upgrade-btn text-white text-xs px-3 py-1.5 rounded-xl transition-transform sm:text-sm sm:px-4 hover:scale-105 active:scale-90 hover:bg-[length:600%_200%] hover:animate-gradient-flow">
              Upgrade plan
            </button>
          </div>

          {/* Notification and Profile */}
          <div className="absolute top-0 right-0 hidden pb-2 pl-2 bg-white rounded-lg lg:flex">
            <div className="bg-[#D0D0D0] pl-2 pb-2 rounded-lg rounded-tl-none rounded-br-none">
              <div className="flex items-center gap-4 p-2 bg-white rounded-lg">
                <button
                  className="flex items-center justify-center rounded-full bg-accent"
                  onClick={() => toggleMenu("notif")}
                >
                  <img src={Notification} alt="Notification" />
                </button>
                <button onClick={() => toggleMenu("profile")}>
                  <img
                    src={ProfilePic1}
                    alt="Profile Picture"
                    className="w-10 h-10 rounded-full"
                  />
                </button>

                {/* Notifications Menu */}
                {openMenu === "notif" && (
                  <NotificationMenu toggleMenu={toggleMenu} />
                )}

                {openMenu === "profile" && (
                  <ProfileMenu toggleMenu={toggleMenu} />
                )}
              </div>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="flex flex-col items-center mt-24 md:mt-10 sm:mt-16 max-sm:gap-4">
            <h1 className="px-4 mb-6 text-xl font-extrabold text-center text-white font-nunito sm:text-4xl sm:mb-8">
              Mulai kreasi baru hari ini!
            </h1>

            {/* Tablet Button */}
            <button className="bg-primary text-white px-4 py-2 rounded-xl items-center gap-2 transition-colors hidden md:mb-10 md:flex lg:hidden sm:px-6 sm:py-1.5 hover:bg-primary-hover">
              <span className="text-sm font-semibold font-poppins sm:text-base">
                Buat Video
              </span>
              <img
                src={HalfAdd}
                alt="Add"
                className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
              />
            </button>

            <div className="flex justify-center items-center gap-2.5 md:hidden">
              <span className="text-xs font-semibold text-white font-poppins loop-border sm:text-sm">
                Sisa 5 Kredit
              </span>
              <button className="font-poppins font-semibold bg-gradient-upgrade-btn text-white text-xs px-3 py-1.5 rounded-lg transition-transform active:scale-90 hover:scale-105 sm:text-sm sm:px-4">
                Upgrade plan
              </button>
            </div>

            {/* Buat Video Button */}
            <div className="justify-start hidden w-full gap-2 px-2 mt-4 sm:mt-7 lg:flex">
              <Link to="/url-to-video">
                <button className="bg-primary hover:bg-primary-hover text-white px-4 sm:px-6 py-2 sm:py-1.5 rounded-xl flex items-center gap-2 transition-colors">
                  <span className="text-sm font-semibold font-poppins sm:text-base">
                    Buat Video
                  </span>
                  <img
                    src={HalfAdd}
                    alt="Add"
                    className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
                  />
                </button>
              </Link>
            </div>

            {/* Feature Buttons */}
            {/* <div className="hidden w-full max-w-3xl px-20 mx-auto mt-3 overflow-hidden bg-orange-200 md:block"> */}
            <div className="justify-center hidden gap-2 p-2 font-semibold shadow-lg min-w-max bg-gradient-primary font-poppins rounded-2xl md:inline-flex md:mt-3 lg:mt-6">
              <Link
                to="/url-to-video"
                className="flex items-center gap-3 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2.5 hover:bg-white/10 rounded-xl full text-xs sm:text-sm whitespace-nowrap transition-colors"
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
                className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-xl text-xs sm:text-sm whitespace-nowrap transition-colors"
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
                className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-xl text-xs sm:text-sm whitespace-nowrap transition-colors"
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
                className="flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/10 rounded-xl text-xs sm:text-sm whitespace-nowrap transition-colors"
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
  );
};
export default Header;
