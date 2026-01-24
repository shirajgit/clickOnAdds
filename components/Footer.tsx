"use client";

// components/Footer.tsx
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
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
  ];

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault(); // stops page refresh
    // TODO: connect your newsletter API here
    // for now just a placeholder
    alert("Subscribed ✅ (connect API later)");
  };

  return (
    <footer className="relative bg-[#03040a] text-white overflow-hidden">
      {/* soft glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-cyan-400/10 blur-[160px]" />
        <div className="absolute -top-40 right-[-140px] w-[520px] h-[520px] bg-blue-500/10 blur-[170px] rounded-full" />
        <div className="absolute -bottom-48 left-[-180px] w-[560px] h-[560px] bg-cyan-300/10 blur-[190px] rounded-full" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10"
      >
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link href="/" className="inline-flex items-baseline gap-1 text-3xl font-bold">
              Click<span className="text-cyan-400">On</span>
              Add<span className="text-cyan-400">zz.</span>
            </Link>

            <p className="mt-4 text-white/70 leading-relaxed max-w-md">
              Performance marketing agency helping brands grow with strategy,
              data, and creativity.
            </p>

            <div className="flex gap-3 mt-7">
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative p-3 rounded-full border border-white/10 bg-white/5
                             text-white/80 hover:text-cyan-300 hover:border-cyan-400/30
                             shadow-[0_0_18px_rgba(34,211,238,0.18)]
                             hover:shadow-[0_0_34px_rgba(34,211,238,0.35)]
                             transition"
                >
                  {/* tiny hover glow */}
                  <span className="pointer-events-none absolute -inset-4 rounded-full bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
                  <span className="relative">
                    <Icon />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-white/70">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 hover:text-cyan-300 transition"
                  >
                    <span className="h-[2px] w-0 bg-cyan-400/70 transition-all duration-300 group-hover:w-5" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>

            <p className="text-white/70 mb-5">
              Subscribe to get our latest news and updates directly in your inbox.
            </p>

            <form
              onSubmit={onSubscribe}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.92] text-[#0b1220]
                             placeholder:text-[#0b1220]/50 outline-none
                             focus:ring-2 focus:ring-cyan-300/40"
                />

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold
                             shadow-[0_14px_35px_rgba(34,211,238,0.20)]
                             hover:bg-cyan-300 transition whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>

              <p className="mt-3 text-xs text-white/50">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            &copy; {year} ClickOnAddzz. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/55">
            <Link href="/privacy" className="hover:text-cyan-300 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cyan-300 transition">
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
