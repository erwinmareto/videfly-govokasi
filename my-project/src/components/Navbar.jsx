import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/icons/home-03.svg'
import Streamline from '../assets/icons/streamline_ai-edit-spark.svg'
import HeroIcon from '../assets/icons/heroicons-outline_color-swatch.svg'
import AvatarIcon from '../assets/icons/user-star-02.svg'
import CalendarIcon from '../assets/icons/calendar-03.svg'
import FileIcon from '../assets/icons/solar_library-linear.svg'

export default function Navbar() {
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
              <img src={HomeIcon} alt="Home" className="mr-1.5 h-4 w-4" />
              <span>Beranda</span>
            </Link>
            <Link 
              to="/kelola-konten" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <img src={CalendarIcon} alt="Kelola Konten" className="mr-1.5 h-4 w-4" />
              <span>Kelola Konten</span>
            </Link>
            <Link 
              to="/proyek" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <img src={FileIcon} alt="Proyek" className="mr-1.5 h-4 w-4" />
              <span>Proyek</span>
            </Link>
            <Link 
              to="/ai-tools" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <img src={Streamline} alt="AI Tools" className="mr-1.5 h-4 w-4" />
              <span>AI Tools</span>
            </Link>
            <Link 
              to="/avatar" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <img src={AvatarIcon} alt="Avatar" className="mr-1.5 h-4 w-4" />
              <span>Avatar</span>
            </Link>
            <Link 
              to="/brand-kit" 
              className="flex items-center text-base font-medium text-gray-700 hover:text-purple-600"
            >
              <img src={HeroIcon} alt="Brand Kit" className="mr-1.5 h-4 w-4" />
              <span>Brand Kit</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
