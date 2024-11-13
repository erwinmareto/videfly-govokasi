import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaLink,
  FaFileAlt,
  FaMicrophone,
  FaRobot,
  FaVideo,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">
            Mulai kreasi baru hari ini!
          </h1>

          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-6">
            <div className="flex gap-4 justify-center">
              <Link
                to="/url-to-video"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaLink className="text-2xl" />
                </div>
                <span className="text-sm">URL to Video</span>
              </Link>

              <Link
                to="/text-to-video"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaFileAlt className="text-2xl" />
                </div>
                <span className="text-sm">Text to Video</span>
              </Link>

              <Link
                to="/speech-to-video"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaMicrophone className="text-2xl" />
                </div>
                <span className="text-sm">Speech to Video</span>
              </Link>

              <Link
                to="/ai-avatar"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaRobot className="text-2xl" />
                </div>
                <span className="text-sm">AI Avatar</span>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FaVideo className="text-xl text-purple-600" />
                Kelola Konten
              </h2>
              <Link
                to="/kelola-konten"
                className="text-purple-600 text-sm hover:underline"
              >
                Lihat semua
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Automated Programme</h3>
                <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                  <img
                    src="/images/automated-program.jpg"
                    alt="Automated Programme"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Last edited 2 days ago
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Beauty of Angel - Up Scrub</h3>
                <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                  <img
                    src="/images/up-scrub.jpg"
                    alt="Up Scrub"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Last edited 3 days ago
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">
                  Beauty of Angel - Lip Scrub
                </h3>
                <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                  <img
                    src="/images/lip-scrub.jpg"
                    alt="Lip Scrub"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Last edited 5 days ago
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FaProjectDiagram className="text-xl text-purple-600" />
                Proyek
              </h2>
              <Link
                to="/proyek"
                className="text-purple-600 text-sm hover:underline"
              >
                Lihat semua
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Video Produk A</h3>
                <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                  <img
                    src="/images/product-a.jpg"
                    alt="Video Produk A"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Created 1 week ago
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Video Produk B</h3>
                <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                  <img
                    src="/images/product-b.jpg"
                    alt="Video Produk B"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Created 2 weeks ago
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Video Produk C</h3>
                <div className="bg-gray-100 h-32 rounded-lg overflow-hidden">
                  <img
                    src="/images/product-c.jpg"
                    alt="Video Produk C"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Created 3 weeks ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
