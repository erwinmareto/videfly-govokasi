import { useState } from "react";
import { Link } from "react-router-dom";
import icons from "../constant/icons";
import DrawerNavigation from "./DrawerNavigation";
import NotificationMenu from "./Menus/NotificationMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <nav className="px-2 mb-1 bg-white rounded-b-lg shadow-lg">
      <div className="w-full lg:max-w-7xl lg:mx-auto sm:px-6 lg:px-4 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <Link to="/">
              <img
                src="https://www.videfly.com/new-landing-page-asset/videfly-logo.svg"
                alt="Videfly Logo"
                className="h-8"
              />
            </Link>
          </div>
          {/* Mobile & Tablet Menu Button & Notification */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => toggleMenu("notif")}
              className="relative p-2 text-white bg-black rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-alert rounded-full">
                3
              </span>
            </button>

            <button
              onClick={() => toggleMenu("sidebar")}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden mr-2 space-x-10 lg:flex">
            <Link
              to="/"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600 group"
            >
              <img
                src={icons.HomeIcon}
                alt="Home"
                className="w-6 h-5 mr-2 group-hover:fill-current group-hover:text-violet-600"
              />
              <span>Beranda</span>
            </Link>
            <Link
              to="/kelola-konten"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img
                src={icons.CalendarIcon}
                alt="Kelola Konten"
                className="w-6 h-5 mr-2"
              />
              <span>Kelola Konten</span>
            </Link>
            <Link
              to="/proyek"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={icons.FileIcon} alt="Proyek" className="w-6 h-5 mr-2" />
              <span>Proyek</span>
            </Link>
            <Link
              to="/ai-tools"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img
                src={icons.Streamline}
                alt="AI Tools"
                className="w-6 h-5 mr-2"
              />
              <span>AI Tools</span>
            </Link>
            <Link
              to="/avatar"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img
                src={icons.AvatarIcon}
                alt="Avatar"
                className="w-6 h-5 mr-2"
              />
              <span>Avatar</span>
            </Link>
            <Link
              to="/brand-kit"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img
                src={icons.HeroIcon}
                alt="Brand Kit"
                className="w-6 h-5 mr-2"
              />
              <span>Brand Kit</span>
            </Link>
            <Link
              to="/trash"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={icons.TrashIcon} alt="Trash" className="w-6 h-5 mr-2" />
              <span>Trash</span>
            </Link>
          </div>
        </div>
        {/* Menu Mobile */}
        <DrawerNavigation isOpen={activeMenu} setIsOpen={toggleMenu} />

        {/* Notification Menu */}
        <NotificationMenu toggleMenu={toggleMenu} isOpen={activeMenu} />
      </div>
    </nav>
  );
}
