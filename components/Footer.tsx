"use client";

import Link from "next/link";
import React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function GlowLine() {
  return (
    <div className="absolute inset-x-0 top-0 h-[1px] overflow-hidden">
      <motion.div
        className="h-full w-[40%] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
        initial={{ x: "-40%" }}
        animate={{ x: "140%" }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://www.facebook.com/people/Clickonadzz/61584464079686/",
      label: "Facebook",
      Icon: FaFacebookF,
    },
    { href: "https://twitter.com/", label: "Twitter", Icon: FaTwitter },
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

  // ----- Parallax glow (mouse move) -----
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });

  const glowX = useTransform(sx, (v) => `${v}px`);
  const glowY = useTransform(sy, (v) => `${v}px`);

  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mx.set(e.clientX - (rect.left + rect.width / 2));
    my.set(e.clientY - (rect.top + rect.height / 2));
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed ✅ (connect API later)");
  };

  return (
    <footer
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative bg-[#03040a] text-white overflow-hidden"
    >
      {/* animated top line */}
      <GlowLine />

      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050615] via-[#03040a] to-[#03040a]" />
        <div className="absolute -top-48 right-[-180px] w-[620px] h-[620px] rounded-full bg-cyan-400/10 blur-[180px]" />
        <div className="absolute -bottom-48 left-[-200px] w-[680px] h-[680px] rounded-full bg-blue-500/10 blur-[200px]" />
      </div>

      {/* parallax glow that follows mouse */}
      <motion.div
        style={{
          translateX: glowX,
          translateY: glowY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[560px] h-[560px] rounded-full bg-cyan-400/10 blur-[160px]"
      />

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

            {/* socials */}
            <div className="flex gap-3 mt-7">
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative p-3 rounded-full border border-white/10 bg-white/5
                             text-white/80 hover:text-cyan-200 hover:border-cyan-400/30
                             shadow-[0_0_18px_rgba(34,211,238,0.14)]
                             hover:shadow-[0_0_34px_rgba(34,211,238,0.28)]
                             transition"
                >
                  {/* ring pulse on hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <span className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-xl" />
                  </span>
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
                    className="group inline-flex items-center gap-3 hover:text-cyan-200 transition"
                  >
                    <motion.span
                      className="h-[2px] w-6 bg-gradient-to-r from-cyan-400/70 to-transparent opacity-40"
                      whileHover={{ width: 28, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    />
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

            <div className="relative rounded-3xl p-[1.5px] overflow-hidden">
              {/* animated gradient border */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.20), rgba(34,211,238,0.55), rgba(59,130,246,0.28), rgba(34,211,238,0.55))",
                  backgroundSize: "200% 200%",
                }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative rounded-[22px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4">
                {/* shine sweep */}
                <motion.div
                  className="pointer-events-none absolute -inset-y-10 -left-40 w-40 rotate-12
                             bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 780, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                />

                <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-3">
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
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold
                               shadow-[0_14px_35px_rgba(34,211,238,0.20)]
                               hover:bg-cyan-300 transition whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </form>

                <p className="mt-3 text-xs text-white/50">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            &copy; {year} ClickOnAddzz. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/55">
            <Link href="/privacy" className="hover:text-cyan-200 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cyan-200 transition">
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
