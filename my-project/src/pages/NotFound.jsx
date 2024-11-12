import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const [isWobbling, setIsWobbling] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleHover = () => {
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 1000);
  };

  const handleMouseMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width - 0.5) * 20;
    const y = ((e.clientY - box.top) / box.height - 0.5) * 20;
    setPosition({ x, y });
  };

  const handleClick = () => {
    setIsJumping(true);
    setClickCount(prev => prev + 1);
    setTimeout(() => setIsJumping(false), 500);
  };

  useEffect(() => {
    if (clickCount >= 5) {
      const colors = ['bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-purple-300', 'bg-pink-300'];
      document.body.className = colors[Math.floor(Math.random() * colors.length)];
    }
  }, [clickCount]);

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-8 transition-colors duration-500">
      <div 
        className={`bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-2xl w-full transition-all duration-300 
          hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
          ${isWobbling ? 'animate-[wobble_1s_ease-in-out]' : ''}
          ${isJumping ? 'animate-bounce' : ''}`}
        onMouseEnter={handleHover}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{
          transform: `perspective(1000px) rotateX(${position.y}deg) rotateY(${position.x}deg)`
        }}
      >
        <h1 className="text-8xl font-bold mb-4 text-black hover:scale-105 transition-transform cursor-pointer select-none">
          4<span className="inline-block hover:rotate-180 transition-transform duration-500">0</span>4
        </h1>
        <h2 className="text-4xl font-bold mb-6 text-black hover:text-yellow-600 transition-colors cursor-pointer select-none">
          Halaman Tidak Ditemukan!
        </h2>
        <p className="text-xl mb-8 text-gray-700 hover:text-black transition-colors cursor-pointer select-none">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin telah dipindahkan atau dihapus.
          {clickCount >= 5 && " 🎉 Anda menemukan easter egg!"}
        </p>
        <Link 
          to="/"
          className="inline-block bg-black text-white text-xl font-bold px-8 py-4 
            hover:bg-yellow-500 hover:text-black transform hover:-translate-y-1 
            hover:scale-105 transition-all active:translate-y-1 hover:rotate-2"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
