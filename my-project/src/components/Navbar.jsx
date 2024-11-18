import { useState } from "react";
import { Link } from "react-router-dom";
import icons from "../constant/icons";
import DrawerNavigation from "./DrawerNavigation";
import NotificationMenu from "./Menus/NotificationMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <nav className="bg-white shadow-lg rounded-b-lg mb-1">
      <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-4 lg:sm:px-6">
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
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => toggleMenu("notification")}
              className="relative p-2 rounded-full bg-black text-white hover:bg-gray-800 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
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
              <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                5
              </span>
            </button>

            <button
              onClick={() => toggleMenu("sidebar")}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10 mr-2">
            <Link
              to="/"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600 group"
            >
              <img
                src={icons.HomeIcon}
                alt="Home"
                className="mr-2 h-5 w-6 group-hover:fill-current group-hover:text-violet-600"
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
                className="mr-2 h-5 w-6"
              />
              <span>Kelola Konten</span>
            </Link>
            <Link
              to="/proyek"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={icons.FileIcon} alt="Proyek" className="mr-2 h-5 w-6" />
              <span>Proyek</span>
            </Link>
            <Link
              to="/ai-tools"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img
                src={icons.Streamline}
                alt="AI Tools"
                className="mr-2 h-5 w-6"
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
                className="mr-2 h-5 w-6"
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
                className="mr-2 h-5 w-6"
              />
              <span>Brand Kit</span>
            </Link>
            <Link
              to="/trash"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={icons.TrashIcon} alt="Trash" className="mr-2 h-5 w-6" />
              <span>Trash</span>
            </Link>
          </div>
        </div>
        {/* Menu Mobile */}
        <DrawerNavigation isOpen={activeMenu} setIsOpen={toggleMenu} />

        {/* Notification Menu */}
        {activeMenu === "notification" && (
          <NotificationMenu toggleMenu={toggleMenu} />
        )}
      </div>
    </nav>
  );
}
