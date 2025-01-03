import { Link } from "react-router-dom";
import {
  FaHome,
  FaVideo,
  FaProjectDiagram,
  FaRobot,
  FaUserCircle,
  FaPalette,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-lg">
      <div className="p-4">
        <img
          src="https://www.videfly.com/new-landing-page-asset/videfly-logo.svg"
          alt="Videfly Logo"
          className="h-8"
        />
      </div>

      <div className="flex flex-col flex-1 mt-4">
        <Link
          to="/buat-video"
          className="flex items-center gap-2 px-4 py-3 mx-4 text-white bg-purple-600 rounded-lg"
        >
          <FaVideo className="text-xl" />
          <span>Buat Video</span>
        </Link>

        <nav className="flex flex-col mt-6">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 btn btn-primary hover:bg-purple-50"
          >
            <FaHome className="text-xl" />
            <span>Beranda</span>
          </Link>

          <Link
            to="/kelola-konten"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50"
          >
            <FaVideo className="text-xl" />
            <span>Kelola Konten</span>
          </Link>

          <Link
            to="/proyek"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50"
          >
            <FaProjectDiagram className="text-xl" />
            <span>Proyek</span>
          </Link>

          <Link
            to="/ai-tools"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50"
          >
            <FaRobot className="text-xl" />
            <span>AI Tools</span>
          </Link>

          <Link
            to="/avatars"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50"
          >
            <FaUserCircle className="text-xl" />
            <span>Avatars</span>
          </Link>

          <Link
            to="/brand-kit"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50"
          >
            <FaPalette className="text-xl" />
            <span>Brand Kit</span>
          </Link>
        </nav>

        <div className="mt-auto">
          <Link
            to="/pengaturan"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50"
          >
            <FaCog className="text-xl" />
            <span>Pengaturan</span>
          </Link>

          <Link
            to="/logout"
            className="flex items-center gap-3 px-4 py-3 text-red-600 btn btn-error hover:bg-red-50"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Keluar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
