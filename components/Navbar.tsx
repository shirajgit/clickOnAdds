"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50
  bg-gradient-to-r from-[#0b1220] via-[#0e1628] to-[#0b1220]
  backdrop-blur-md border-b border-white/5">

      <div className="bg-gradient-to-r 
from-[#0b1220] 
via-[#0e1628] 
to-[#0b1220]
backdrop-blur-md 
border-b border-white/5
">

        {/* Main Bar */}
        <div className="max-w-7xl mx-auto px-2 py-6 grid grid-cols-3 items-center">

          {/* Left: Logo */}
          <Link href="/" className="text-2xl font-bold text-white justify-self-start">
             Click<span className="text-cyan-400">On</span>
             Add<span className="text-cyan-400">s.</span>
          </Link>

          {/* Center: Menu */}
          <nav className="hidden md:flex justify-self-center gap-15 text-lg text-gray-300 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
            <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
            <Link href="/servicess" className="hover:text-indigo-400 transition">Services</Link>
            <Link href="/contact-us" className="hover:text-indigo-400 transition">Contact</Link>
          </nav>

          {/* Right: CTA + Mobile Button */}
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-5 py-2 rounded-xl
                         bg-gradient-to-r from-cyan-500 to-blue-600
                         text-white shadow-lg shadow-cyan-500/20
                         hover:opacity-90 transition"
            >
              Get Quote
            </Link>

            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#0b1220]">
            <nav className="flex flex-col gap-4 px-6 py-4 text-gray-300">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-2 rounded-xl
                           bg-gradient-to-r from-cyan-500 to-blue-600
                           text-white text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
