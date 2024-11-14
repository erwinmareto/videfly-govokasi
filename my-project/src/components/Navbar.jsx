import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/icons/home-03.svg";
import Streamline from "../assets/icons/streamline_ai-edit-spark.svg";
import HeroIcon from "../assets/icons/heroicons-outline_color-swatch.svg";
import AvatarIcon from "../assets/icons/user-star-02.svg";
import CalendarIcon from "../assets/icons/calendar-03.svg";
import FileIcon from "../assets/icons/solar_library-linear.svg";
import TrashIcon from "../assets/icons/delete-02.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg rounded-b-lg mb-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://www.videfly.com/new-landing-page-asset/videfly-logo.svg"
                alt="Videfly Logo"
                className="h-8"
              />
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-100 focus:outline-none"
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
            </button>
          </div>

          {/* Navigation Links untuk Desktop */}
          <div className="hidden md:flex space-x-10 mr-6">
            <Link
              to="/"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600 group"
            >
              <img
                src={HomeIcon}
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
                src={CalendarIcon}
                alt="Kelola Konten"
                className="mr-2 h-5 w-6"
              />
              <span>Kelola Konten</span>
            </Link>
            <Link
              to="/proyek"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={FileIcon} alt="Proyek" className="mr-2 h-5 w-6" />
              <span>Proyek</span>
            </Link>
            <Link
              to="/ai-tools"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={Streamline} alt="AI Tools" className="mr-2 h-5 w-6" />
              <span>AI Tools</span>
            </Link>
            <Link
              to="/avatar"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={AvatarIcon} alt="Avatar" className="mr-2 h-5 w-6" />
              <span>Avatar</span>
            </Link>
            <Link
              to="/brand-kit"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={HeroIcon} alt="Brand Kit" className="mr-2 h-5 w-6" />
              <span>Brand Kit</span>
            </Link>
            <Link
              to="/brand-kit"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={TrashIcon} alt="Trash" className="mr-2 h-5 w-6" />
              <span>Trash</span>
            </Link>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={HomeIcon} alt="Home" className="mr-2 h-5 w-6" />
              <span>Beranda</span>
            </Link>
            <Link
              to="/kelola-konten"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={CalendarIcon} alt="Kelola Konten" className="mr-2 h-5 w-6" />
              <span>Kelola Konten</span>
            </Link>
            <Link
              to="/proyek"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={FileIcon} alt="Proyek" className="mr-2 h-5 w-6" />
              <span>Proyek</span>
            </Link>
            <Link
              to="/ai-tools"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={Streamline} alt="AI Tools" className="mr-2 h-5 w-6" />
              <span>AI Tools</span>
            </Link>
            <Link
              to="/avatar"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={AvatarIcon} alt="Avatar" className="mr-2 h-5 w-6" />
              <span>Avatar</span>
            </Link>
            <Link
              to="/brand-kit"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={HeroIcon} alt="Brand Kit" className="mr-2 h-5 w-6" />
              <span>Brand Kit</span>
            </Link>
            <Link
              to="/trash"
              className="flex items-center px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-violet-600 hover:bg-gray-100"
            >
              <img src={TrashIcon} alt="Trash" className="mr-2 h-5 w-6" />
              <span>Trash</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
