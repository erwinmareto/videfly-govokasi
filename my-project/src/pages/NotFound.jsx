import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-8">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-2xl w-full">
        <h1 className="text-8xl font-bold mb-4 text-black">404</h1>
        <h2 className="text-4xl font-bold mb-6 text-black">Halaman Tidak Ditemukan!</h2>
        <p className="text-xl mb-8 text-gray-700">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin telah dipindahkan atau dihapus.
        </p>
        <Link 
          to="/"
          className="inline-block bg-black text-white text-xl font-bold px-8 py-4 hover:bg-gray-800 transform hover:-translate-y-1 transition-transform"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
