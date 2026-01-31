"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `relative transition ${
      isActive(path)
        ? "text-cyan-400"
        : "text-gray-300 hover:text-indigo-400"
    }`;

  return (
    <header
      className="sticky top-0 z-50
      bg-gradient-to-r from-[#0b1220] via-[#0e1628] to-[#0b1220]
      backdrop-blur-md border-b border-white/5"
    >
      <div
        className="bg-gradient-to-r 
        from-[#0b1220] 
        via-[#0e1628] 
        to-[#0b1220]
        backdrop-blur-md 
        border-b border-white/5"
      >
        {/* Main Bar */}
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
 
          >
      <img
  src="/logo.png"
  alt="logo"
  className="h-10 sm:h-10 md:h-10 w-auto"
 />


          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-self-center gap-10 text-lg font-medium">
            <Link href="/" className={linkClass("/")}>
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded-full" />
              )}
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded-full" />
              )}
            </Link>

            <Link href="/services" className={linkClass("/services")}>
              Services
              {isActive("/services") && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded-full" />
              )}
            </Link>

            <Link href="/contact-us" className={linkClass("/contact")}>
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href="/contact-us"
              className="hidden md:inline-flex px-5 py-2 rounded-xl
                         bg-gradient-to-r from-cyan-500 to-blue-600
                         text-white shadow-lg shadow-cyan-500/20
                         hover:opacity-90 transition"
            >
              Get Quote
            </Link>

            <button
              className="md:hidden fixed right-5 text-white"
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
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={isActive("/") ? "text-cyan-400" : ""}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={isActive("/about") ? "text-cyan-400" : ""}
              >
                About
              </Link>

              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={isActive("/services") ? "text-cyan-400" : ""}
              >
                Services
              </Link>

              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className={isActive("/contact-us") ? "text-cyan-400" : ""}
              >
                Contact
              </Link>

              <Link
                href="/contact-us"
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
