import HalfAdd from "../assets/icons/add-circle-half-dot.svg";
import Video from "../assets/icons/mage_video.svg";
import Text from "../assets/icons/fluent_textbox-16-regular.svg";
import Speech from "../assets/icons/tdesign_user-talk-1.svg";
import Avatar from "../assets/icons/user-star-02.svg";
import Notification from "../assets/icons/notification-01.svg";
import ProfilePic from "../assets/images/profile-pic.png";
import headerVideo from "../assets/video/hero-video.mp4";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative h-[250px] sm:h-[300px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill px-2 py-1.5 rounded-2xl -z-10"
        src={headerVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          {/* Header */}
          <div className="hidden justify-end items-center gap-2 py-4 mr-24 sm:gap-4 md:flex">
            <span className="font-poppins font-semibold text-white text-xs loop-border sm:text-sm">
              Sisa 5 Kredit
            </span>
            <button className="font-poppins font-semibold bg-gradient-upgrade-btn text-white text-xs px-3 py-1.5 rounded-xl transition-transform sm:text-sm sm:px-4 hover:scale-105 active:scale-90">
              Upgrade plan
            </button>

            {/* Notification and Profile
            <div className="flex items-center gap-4 rounded-lg">
              <button className="flex justify-center items-center bg-accent rounded-full">
                <img src={Notification} alt="Notification" />
              </button>
              <button>
                <img
                  src={ProfilePic}
                  alt="Profile Picture"
                  className="w-10 h-10 rounded-full"
                />
              </button>
            </div> */}
          </div>

          {/* Notification and Profile */}
          <div className="absolute right-2 top-1.5 flex items-center gap-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-white">
            <button className="flex justify-center items-center bg-accent rounded-full">
              <img src={Notification} alt="Notification" />
            </button>
            <button>
              <img
                src={ProfilePic}
                alt="Profile Picture"
                className="w-10 h-10 rounded-full"
              />
            </button>
          </div>

          {/* Main Content - Centered */}
          <div className="flex flex-col items-center mt-24 md:mt-10 sm:mt-16 max-sm:gap-4">
            <h1 className="font-nunito font-extrabold text-2xl sm:text-4xl text-white mb-6 sm:mb-8 text-center px-4">
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
              <button className="font-poppins font-semibold bg-gradient-upgrade-btn text-white text-xs px-3 py-1.5 rounded-lg transition-transform hover:scale-105 sm:text-sm sm:px-4">
                Upgrade plan
              </button>
            </div>

            {/* Buat Video Button */}
            <div className="hidden justify-start w-full gap-2 mt-4 sm:mt-7 px-2 lg:flex">
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
            </div>

            {/* Feature Buttons */}
            <div className="max-w-3xl mx-auto mt-3 px-20 w-full overflow-x-auto max-sm:hidden">
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
