import { Link } from "react-router-dom";
import icons from "../constant/icons";
import ProfilePic2 from "../assets/images/profile-pic-2.png";

const DrawerNavigation = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* Overlay */}
      {isOpen === "sidebar" && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 bg-white dark:bg-gray-800 transition-transform overflow-y-auto ${
          isOpen === "sidebar" ? "translate-x-0" : "translate-x-full"
        } w-64 md:w-80 2xl:w-96`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 left-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="py-8">
          <div className="flex items-center px-3">
            <img
              src={ProfilePic2}
              alt="Profile"
              className="object-cover w-12 h-12 mr-4 rounded-full md:w-16 md:h-16 2xl:w-20 2xl:h-20" // Ukuran lebih besar di 2xl
            />
            <h2 className="text-lg font-semibold text-gray-900 md:text-xl 2xl:text-2xl dark:text-white">
              Naufal Roberto
            </h2>
          </div>

          <hr className="my-4 border-gray-300 dark:border-gray-600" />
          <div className="flex items-center justify-between px-3 py-3 m-2 text-sm font-semibold text-white bg-black rounded-lg md:text-base 2xl:text-lg font-poppins focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700">
            <span>Upgrade to</span>
            <span className="px-3 py-1 text-black bg-gray-200 rounded-full">
              PRO
            </span>
          </div>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />

          {/* Navigation Section */}
          <div className="flex-1 px-4 space-y-6 overflow-y-auto">
            <Link
              to="/"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 group dark:text-white"
            >
              <img
                src={icons.HomeIcon}
                alt="Home"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 group-hover:fill-current group-hover:text-violet-600 dark:invert"
              />
              <span>Beranda</span>
            </Link>

            <Link
              to="/kelola-konten"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.CalendarIcon}
                alt="Kelola Konten"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>Kelola Konten</span>
            </Link>

            <Link
              to="/proyek"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.FileIcon}
                alt="Proyek"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>Proyek</span>
            </Link>

            <Link
              to="/ai-tools"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.Streamline}
                alt="AI Tools"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>AI Tools</span>
            </Link>

            <Link
              to="/avatar"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.AvatarIcon}
                alt="Avatar"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>Avatar</span>
            </Link>

            <Link
              to="/brand-kit"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.HeroIcon}
                alt="Brand Kit"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>Brand Kit</span>
            </Link>

            <Link
              to="/trash"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.TrashIcon}
                alt="Trash"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>Trash</span>
            </Link>

            <Link
              to="/pengaturan"
              className="flex items-center text-lg font-semibold text-gray-700 transition-colors md:text-xl 2xl:text-2xl hover:text-violet-600 dark:text-white"
            >
              <img
                src={icons.SettingIcon}
                alt="Settings"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9 dark:invert"
              />
              <span>Pengaturan</span>
            </Link>

            <Link
              to="/keluar"
              className="flex items-center text-lg font-semibold text-red-600 transition-colors md:text-xl 2xl:text-2xl hover:text-red-700"
            >
              <img
                src={icons.LoggoutIcon}
                alt="Logout"
                className="w-6 h-5 mr-2 md:h-6 md:w-7 2xl:h-8 2xl:w-9"
              />
              <span>Keluar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerNavigation;
