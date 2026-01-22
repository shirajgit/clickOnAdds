"use client";

export default function Hero3D() {
  return (
    <div className="relative w-full h-80 md:h-96 flex justify-center  items-start overflow-hidden">

      {/* Layer 1: Big soft glow */}
      <div className="absolute -top-16 w-72 h-72 md:w-96 md:h-96
                      rounded-full
                      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                      opacity-30 blur-3xl
                      animate-spin-slow mix-blend-soft-light">
      </div>

      {/* Layer 2: Medium glow */}
      <div className="absolute -top-12 w-56 h-56 md:w-80 md:h-80
                      rounded-full
                      bg-gradient-to-tr from-pink-400 via-cyan-400 to-blue-500
                      opacity-25 blur-2xl
                      animate-spin-slow-reverse mix-blend-overlay">
      </div>

      {/* Layer 3: Small accent glow */}
      <div className="absolute -top-8 w-36 h-36 md:w-56 md:h-56
                      rounded-full
                      bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400
                      opacity-20 blur-xl
                      animate-spin-slow mix-blend-soft-light">
      </div>

    </div>
  );
}
