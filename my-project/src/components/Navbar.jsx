import React from "react";
import { Link } from "react-router-dom";
import icons from "../constant/icons";
import NotificationMenu from "./Menus/NotificationMenu";
import ProfilePic2 from "../assets/images/profile-pic-2.png";  

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <nav className="bg-white shadow-lg rounded-b-lg mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-4">
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

          {/* Mobile Menu Button & Notification */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => toggleMenu('notification')}
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
              <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">5</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 mr-2">
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

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden fixed right-0 top-0 h-full w-[50%] bg-white z-50 shadow-xl`}
        >
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className=" rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none " 
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 rounded-lg">
              <img
                src={ProfilePic2}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-base font-semibold">Naufal Roberto</p>
              </div>
            </div>
            <div className="border-t border-black my-4"></div>
            <div className="mb-6">
              <button className="w-52 py-3 text-base bg-black text-white rounded-md hover:bg-gray-800">
                Upgrade to
                <span className="font-bold bg-white text-black px-2 py-0.5 rounded-md ml-10">
                  PRO
                </span>
              </button>
            </div>
            <div className="border-t border-black my-4"></div>

            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.HomeIcon}
                  alt="Beranda"
                  className="mr-4 h-6 w-6"
                />
                <span>Beranda</span>
              </Link>

              <Link
                to="/kelola-konten"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.CalendarIcon}
                  alt="Kelola Konten"
                  className="mr-4 h-6 w-6"
                />
                <span>Kelola Konten</span>
              </Link>

              <Link
                to="/proyek"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.FileIcon}
                  alt="Proyek"
                  className="mr-4 h-6 w-6"
                />
                <span>Proyek</span>
              </Link>

              <Link
                to="/ai-tools"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.Streamline}
                  alt="AI Tools"
                  className="mr-4 h-6 w-6"
                />
                <span>AI Tools</span>
              </Link>

              <Link
                to="/avatar"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.AvatarIcon}
                  alt="Avatar"
                  className="mr-4 h-6 w-6"
                />
                <span>Avatar</span>
              </Link>

              <Link
                to="/brand-kit"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.HeroIcon}
                  alt="Brand Kit"
                  className="mr-4 h-6 w-6"
                />
                <span>Brand Kit</span>
              </Link>

              <Link
                to="/trash"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <img
                  src={icons.TrashIcon}
                  alt="Trash"
                  className="mr-4 h-6 w-6"
                />
                <span>Trash</span>
              </Link>

              <div className="border-t border-gray-200 my-4"></div>

              <Link
                to="/pengaturan"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Pengaturan</span>
              </Link>

              <Link
                to="/keluar"
                className="flex items-center px-4 py-3 text-base font-medium text-red-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Keluar</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Notification Menu */}
        {activeMenu === 'notification' && (
          <NotificationMenu toggleMenu={toggleMenu} />
        )}
      </div>
    </nav>
  );
}
