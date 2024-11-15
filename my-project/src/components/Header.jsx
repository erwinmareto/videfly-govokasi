import { useState } from "react";
import { Link } from "react-router-dom";

import HalfAdd from "../assets/icons/add-circle-half-dot.svg";
import Video from "../assets/icons/mage_video.svg";
import Text from "../assets/icons/fluent_textbox-16-regular.svg";
import Speech from "../assets/icons/tdesign_user-talk-1.svg";
import Avatar from "../assets/icons/user-star-02.svg";
import Notification from "../assets/icons/notification-01.svg";
import DoubleTick from "../assets/icons/tick-double-02.svg";
import Cancel from "../assets/icons/cancel-01.svg";
import Settings from "../assets/icons/settings-02.svg";
import Logout from "../assets/icons/logout-03.svg";
import VideoLayer from "../assets/icons/f7_layers-fill.svg";
import ProfilePic1 from "../assets/images/profile-pic-1.png";
import ProfilePic2 from "../assets/images/profile-pic-2.png";
import ProfilePic3 from "../assets/images/profile-pic-3.png";
import headerVideo from "../assets/video/hero-video.mp4";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          {/* Header */}
          <div className="hidden justify-end items-center gap-2 py-4 sm:gap-4 md:flex lg:mr-24">
            <span className="font-poppins font-semibold text-white text-xs loop-border sm:text-sm">
              Sisa 5 Kredit
            </span>
            <button className="font-poppins font-semibold bg-gradient-upgrade-btn text-white text-xs px-3 py-1.5 rounded-xl transition-transform sm:text-sm sm:px-4 hover:scale-105 active:scale-90">
              Upgrade plan
            </button>
          </div>

          {/* Notification and Profile */}
          <div className="hidden absolute right-2 top-1.5 items-center gap-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-white lg:flex">
            <button
              className="flex justify-center items-center bg-accent rounded-full"
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
              <div className="absolute right-14 top-16 z-50 w-[28rem] font-poppins flex flex-col bg-neutral rounded-2xl">
                <div className="flex justify-between items-center px-6 py-4 border-b-2 border-neutral-content">
                  <h5 className="font-bold text-white text-md">
                    Notifications
                  </h5>
                  <div className="flex gap-6">
                    <img src={DoubleTick} alt="Checkmark" />
                    <img
                      src={Cancel}
                      alt="Cancel"
                      className="cursor-pointer"
                      onClick={() => toggleMenu(null)}
                    />
                  </div>
                </div>

                <div className="flex items-start px-6 py-4 border-b-2 border-neutral-content">
                  <div className="relative">
                    <span className="font-semibold text-sm text-white">
                      All inbox
                    </span>
                    <div className="inline-flex bg-alert font-semibold text-sm text-white px-2 py-0.5 rounded ml-2">
                      5
                    </div>
                    <div className="absolute -bottom-4 w-full h-1 bg-primary rounded-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-6 px-6 py-4">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-slate-200 p-2">
                      <img src={VideoLayer} alt="Video Layer" />
                    </div>
                    <div>
                      <p className="text-sm text-white leading-6">
                        <span className="font-semibold">Your</span> video is
                        rendering! This may take a moment.
                      </p>
                      <div className="flex items-center font-medium text-xs text-slate-500">
                        <span>Video</span>
                        <div className="inline-flex w-1.5 h-1.5 bg-slate-500 rounded-full mx-2" />
                        <span>Just now</span>
                      </div>

                      {/* progress bar */}
                      <div className="flex flex-col items-end">
                        <p className="font-semibold text-xs text-slate-500">
                          50%
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-blue-500 h-full w-[50%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="relative rounded-full bg-slate-200">
                      <img
                        src={ProfilePic2}
                        alt="Profile Picture 2"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-white leading-6">
                        <span className="font-semibold">Leslie Alexander</span>{" "}
                        create a new{" "}
                        <span className="font-semibold">URL to Video</span>
                      </p>
                      <div className="flex items-center font-medium text-xs text-slate-500">
                        <span>Video</span>
                        <div className="inline-flex w-1.5 h-1.5 bg-slate-500 rounded-full mx-2" />
                        <span>15 min ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="relative rounded-full bg-slate-200">
                      <img
                        src={ProfilePic3}
                        alt="Profile Picture 3"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm text-white leading-6">
                        <span className="font-semibold">James Bond</span> create
                        a new{" "}
                        <span className="font-semibold">URL to Video</span>
                      </p>
                      <div className="flex items-center font-medium text-xs text-slate-500">
                        <span>Video</span>
                        <div className="inline-flex w-1.5 h-1.5 bg-slate-500 rounded-full mx-2" />
                        <span>2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {openMenu === "profile" && (
              <div className="absolute right-4 top-16 z-50 w-[11rem] font-poppins flex flex-col bg-neutral px-6 py-4 rounded-2xl">
                <div className="flex flex-col font-poppins">
                  <div>
                    <p className="font-semibold text-white text-sm">
                      Upgrade to{" "}
                      <span className="font-medium bg-neutral-content text-neutral px-2 rounded-lg">
                        PRO
                      </span>
                    </p>
                  </div>

                  <div className="w-full h-px bg-slate-400 my-3" />

                  <div className="flex items-center text-white gap-2">
                    <img
                      src={Settings}
                      alt="Settings"
                      className="w-5 h-5 invert"
                    />
                    <span className="font-medium text-sm">Pengaturan</span>
                  </div>

                  <div className="w-full h-px bg-slate-400 my-3" />

                  <div className="flex items-center text-white gap-2">
                    <img src={Logout} alt="Log Out" className="w-5 h-5" />
                    <span className="font-medium text-sm">keluar</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content - Centered */}
          <div className="flex flex-col items-center mt-24 md:mt-10 sm:mt-16 max-sm:gap-4">
            <h1 className="font-nunito font-extrabold text-xl sm:text-4xl text-white mb-6 sm:mb-8 text-center px-4">
              Mulai kreasi baru hari ini!
            </h1>

            {/* Tablet Button */}
            <button className="bg-primary text-white px-4 py-2 rounded-xl items-center gap-2 transition-colors hidden md:mb-10 md:flex lg:hidden sm:px-6 sm:py-1.5 hover:bg-primary-hover">
              <span className="font-poppins font-semibold text-sm sm:text-base">
                Buat Video
              </span>
              <img
                src={HalfAdd}
                alt="Add"
                className="w-4 sm:w-5 h-4 sm:h-5 filter invert"
              />
            </button>

            <div className="flex justify-center items-center gap-2.5 md:hidden">
              <span className="font-poppins font-semibold text-white text-xs loop-border sm:text-sm">
                Sisa 5 Kredit
              </span>
              <button className="font-poppins font-semibold bg-gradient-upgrade-btn text-white text-xs px-3 py-1.5 rounded-lg transition-transform active:scale-90 hover:scale-105 sm:text-sm sm:px-4">
                Upgrade plan
              </button>
            </div>

            {/* Buat Video Button */}
            <div className="hidden justify-start w-full gap-2 mt-4 sm:mt-7 px-2 lg:flex">
              <Link to="/url-to-video">
                <button className="bg-primary hover:bg-primary-hover text-white px-4 sm:px-6 py-2 sm:py-1.5 rounded-xl flex items-center gap-2 transition-colors">
                  <span className="font-poppins font-semibold text-sm sm:text-base">
                    Buat Video
                  </span>
                  <img
                    src={HalfAdd}
                    alt="Add"
                    className="w-4 sm:w-5 h-4 sm:h-5 filter invert"
                  />
                </button>
              </Link>
            </div>

            {/* Feature Buttons */}
            <div className="max-w-3xl mx-auto mt-3 px-20 w-full overflow-x-auto hidden md:block">
              <div className="font-poppins font-semibold bg-gradient-primary rounded-2xl p-2 gap-2 justify-center shadow-lg min-w-max inline-flex">
                <Link
                  to="/url-to-video"
                  className="flex items-center gap-3 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2.5 hover:bg-white/10 rounded-xl full text-xs sm:text-sm whitespace-nowrap transition-colors"
                >
                  <img
                    src={Video}
                    alt="URL to Video"
                    className="w-4 sm:w-5 h-4 sm:h-5 filter invert"
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
                    className="w-4 sm:w-5 h-4 sm:h-5 filter invert"
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
                    className="w-4 sm:w-5 h-4 sm:h-5 filter invert"
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
                    className="w-4 sm:w-5 h-4 sm:h-5 filter invert"
                  />
                  <span>AI Avatar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
