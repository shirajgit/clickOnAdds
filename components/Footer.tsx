// components/Footer.tsx
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
 
const Footer = () => {
  return (
    <footer className="relative bg-[#03040a] text-white py-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[600px] bg-cyan-400/10 blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">

        {/* Logo & About */}
        <div>
           <Link href="/" className="text-3xl p-2 font-bold text-white justify-self-start">
             Click<span className="text-cyan-400">On</span>
             Add<span className="text-cyan-400">zz.</span>
          </Link>
          <p className="text-white/70 leading-relaxed">
            Performance marketing agency helping brands grow with strategy, data, and creativity.
          </p>
<div className="flex gap-4 mt-6">
  {[
    {
      href: "https://www.facebook.com/people/Clickonadzz/61584464079686/",
      label: "Facebook",
      Icon: FaFacebookF,
    },
    {
      href: "https://twitter.com/",
      label: "Twitter",
      Icon: FaTwitter,
    },
    {
      href: "https://www.linkedin.com/company/in/clickonadzz",
      label: "LinkedIn",
      Icon: FaLinkedinIn,
    },
    {
      href: "https://www.instagram.com/clickonadzz/",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ].map(({ href, label, Icon }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-white/5 hover:bg-cyan-400/20
                 text-white hover:text-cyan-400 transition duration-300
                 shadow-[0_0_15px_rgba(34,211,238,0.3)]
                 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
    >
      <Icon />
    </a>
  ))}
</div>
        </div>


{/* Navigation Links */} 
    <div>
  <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
  <ul className="space-y-2 text-white/70">
    {[
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ].map((link, i) => (
      <li key={i}>
        <Link
          href={link.href}
          className="inline-block hover:text-cyan-400 transition-all duration-300 hover:translate-x-1"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>


        {/* Newsletter / Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
          <p className="text-white/70 mb-4">
            Subscribe to get our latest news and updates directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-white/5 placeholder-white/50 text-white
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-cyan-400 text-black font-semibold
                         hover:scale-105 transition shadow-[0_0_10px_rgba(34,211,238,0.5)]
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-16 relative z-10"></div>

      {/* Copyright */}
      <p className="text-center text-white/50 mt-6 relative z-10">
        &copy; {new Date().getFullYear()} ClickOnAddzz. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
