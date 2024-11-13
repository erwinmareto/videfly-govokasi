import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { RiFileList2Line } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';
import { TbSmartHome } from "react-icons/tb";
import { PiMagicWandThin } from "react-icons/pi";
import { IoPerson } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="https://www.videfly.com/new-landing-page-asset/videfly-logo.svg" 
                alt="Videfly Logo"
                className="h-6" 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-16 mr-6">
            <Link 
              to="/" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <TbSmartHome className="mr-1.5 h-4 w-4" />
              <span>Beranda</span>
            </Link>
            <Link 
              to="/kelola-konten" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <RiFileList2Line className="mr-1.5 h-4 w-4" />
              <span>Kelola Konten</span>
            </Link>
            <Link 
              to="/proyek" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <BiMoviePlay className="mr-1.5 h-4 w-4" />
              <span>Proyek</span>
            </Link>
            <Link 
              to="/ai-tools" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <PiMagicWandThin className="mr-1.5 h-4 w-4" />
              <span>AI Tools</span>
            </Link>
            <Link 
              to="/avatar" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <IoPerson className="mr-1.5 h-4 w-4" />
              <span>Avatar</span>
            </Link>
            <Link 
              to="/brand-kit" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <AiOutlineSetting className="mr-1.5 h-4 w-4" />
              <span>Brand Kit</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
