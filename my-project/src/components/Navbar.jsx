import React from "react";
import { Link } from "react-router-dom";
import icons from "../constant/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

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

          {/* Mobile Menu Button */}
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
              <img src={icons.Streamline} alt="AI Tools" className="mr-2 h-5 w-6" />
              <span>AI Tools</span>
            </Link>
            <Link
              to="/avatar"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={icons.AvatarIcon} alt="Avatar" className="mr-2 h-5 w-6" />
              <span>Avatar</span>
            </Link>
            <Link
              to="/brand-kit"
              className="flex items-center text-sm font-bold text-gray-700 hover:text-violet-600"
            >
              <img src={icons.HeroIcon} alt="Brand Kit" className="mr-2 h-5 w-6" />
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
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute right-0 top-16 w-64 mx-6`}>
          <div className="px-2 py-2 space-y-1 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4 p-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Naufal Roberto</p>
              </div>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200 pt-2 pb-2">
              <button className="w-full py-1.5 text-sm bg-black text-white rounded-lg hover:bg-gray-800">
                Upgrade to <span className="font-bold bg-white text-black px-1 rounded-md">PRO</span>
              </button>
            </div>
            
            <Link
              to="/"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.HomeIcon} alt="Beranda" className="mr-3 h-4 w-4" />
              <span>Beranda</span>
            </Link>
            
            <Link
              to="/kelola-konten"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.CalendarIcon} alt="Kelola Konten" className="mr-3 h-4 w-4" />
              <span>Kelola Konten</span>
            </Link>
            
            <Link
              to="/proyek"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.FileIcon} alt="Proyek" className="mr-3 h-4 w-4" />
              <span>Proyek</span>
            </Link>
            
            <Link
              to="/ai-tools"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.Streamline} alt="AI Tools" className="mr-3 h-4 w-4" />
              <span>AI Tools</span>
            </Link>
            
            <Link
              to="/avatar"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.AvatarIcon} alt="Avatar" className="mr-3 h-4 w-4" />
              <span>Avatar</span>
            </Link>
            
            <Link
              to="/brand-kit"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.HeroIcon} alt="Brand Kit" className="mr-3 h-4 w-4" />
              <span>Brand Kit</span>
            </Link>
            
            <Link
              to="/trash"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <img src={icons.TrashIcon} alt="Trash" className="mr-3 h-4 w-4" />
              <span>Trash</span>
            </Link>

            <Link
              to="/pengaturan"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <svg className="mr-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pengaturan</span>
            </Link>

            <Link
              to="/keluar"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-violet-600"
            >
              <svg className="mr-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Keluar</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
