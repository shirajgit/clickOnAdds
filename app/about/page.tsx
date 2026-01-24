"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaSpotify,
} from "react-icons/fa";
import ImageStripSlider from "@/components/ImageStripSlider";

/* ------------------ Animations ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
/* ------------------------------------------------ */

const AboutPage = () => {
  const companies = [
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Meta" },
    { icon: FaSpotify, name: "Spotify" },
    { icon: FaAmazon, name: "Adobe" },
  ];

  const partnerCards = [
    {
      title: "Outcome-first thinking",
      desc: "Everything we ship is tied to revenue, pipeline, and measurable growth.",
    },
    {
      title: "Full-funnel execution",
      desc: "From acquisition to retention — we optimize the entire customer journey.",
    },
    {
      title: "Relentless iteration",
      desc: "Test → learn → improve. Performance is built through consistent experiments.",
    },
    {
      title: "Strategy + delivery",
      desc: "We don’t separate planning from execution — we deliver end-to-end.",
    },
  ];

  const brands = [
    "Wisoft Solutions",
    "ClickOnAddz",
    "Henry Wiltshire",
    "Sobha Realty",
    "Emaar Properties",
    "Manipal University",
    "Al-Futtaim",
    "Nipal University",
  ];

  return (
    <main className="relative bg-[#0b1220] text-white overflow-hidden">
      {/* Global glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[720px] w-[980px] rounded-full bg-cyan-400/10 blur-[170px]" />
        <div className="absolute -top-24 right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-500/16 blur-[140px]" />
        <div className="absolute bottom-[-220px] left-[-140px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 pt-28 pb-18 text-center"
      >
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Performance-first marketing & growth
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
          About <span className="text-cyan-400">Us</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed">
          From SEO to social media, content marketing to PPC — we help ambitious
          brands achieve measurable growth and long-term digital success.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                       bg-cyan-400 text-black font-semibold
                       shadow-[0_18px_50px_rgba(34,211,238,0.25)]
                       hover:scale-[1.03] transition"
          >
            Get Free Consultation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full
                       border border-white/15 bg-white/[0.03] text-white/85
                       hover:border-cyan-400/40 hover:text-cyan-300
                       transition backdrop-blur-xl"
          >
            Explore Services
          </a>
        </div>
      </motion.section>

      {/* Logos Marquee */}
      <motion.section
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            <div className="py-6">
              <div className="marquee gap-16 px-10 items-center">
                {[...companies, ...companies].map((company, i) => {
                  const Icon = company.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/65 hover:text-cyan-300 transition"
                    >
                      <Icon size={32} />
                      <span className="text-lg font-semibold tracking-wide">
                        {company.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Performance Marketing Agency */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <p className="text-cyan-300 font-semibold uppercase tracking-[0.25em] mb-4 text-sm">
          Performance Marketing Agency
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          A Strategic Performance Partner for{" "}
          <span className="text-cyan-400">Ambitious Brands</span>
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
          We don’t just execute. We partner. We plan. We perform.
        </p>
      </motion.section>

      {/* Your Growth Is Our Business */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Your Growth Is Our{" "}
            <span className="text-cyan-400">Business</span>
          </h3>

          <div className="space-y-4 text-white/70 leading-relaxed text-lg">
            <p>
              Wisoft Solutions is a digital marketing agency purpose-built for
              performance. For over <strong className="text-white">15 years</strong>,
              we’ve helped growth-focused SMEs and enterprise teams turn scattered
              digital efforts into structured strategies.
            </p>
            <p>
              We don’t measure success by impressions. We track what truly matters —{" "}
              <strong className="text-white">revenue, conversions, and long-term value</strong>.
            </p>
            <p>
              In 2024, we were proud to be named a finalist at the{" "}
              <strong className="text-white">MENA Search Awards</strong>, recognizing
              our ROI-first approach.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
            {[
              ["15+", "Years experience"],
              ["300+", "Happy customers"],
              ["ROI", "Outcomes driven"],
              ["Full", "Funnel execution"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4"
              >
                <div className="text-2xl font-extrabold text-cyan-300">{k}</div>
                <div className="text-sm text-white/60 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/14 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Team collaboration"
            className="h-[420px] w-full object-cover opacity-90"
          />

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#0b1220]/55 backdrop-blur-xl p-4">
            <p className="text-white/80 text-sm">
              “We don’t chase vanity metrics — we build predictable growth systems.”
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Built for Performance */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 py-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 md:p-12">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-5">
            Built for Performance from Day One
          </h3>
          <p className="text-white/70 max-w-4xl leading-relaxed text-lg mb-8">
            Most agencies chase metrics. We’ve always chased outcomes. We embed
            ourselves as a strategic extension of your team — committed to performance,
            not just presence.
          </p>

          <blockquote className="border-l-4 border-cyan-400 pl-6 text-lg md:text-xl text-white/90 italic">
            “We’re not in the business of impressions and clicks. We’re in the business
            of impact.”
          </blockquote>
        </div>
      </motion.section>

      {/* Performance Partner Cards */}
      <motion.section
        className="relative max-w-7xl mx-auto px-6 py-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold mb-12">
          What Being a{" "}
          <span className="text-cyan-400">Performance Partner</span> Means
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerCards.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8
                         hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
                         transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <h4 className="relative text-2xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="relative text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ImageStripSlider />

      {/* Trusted by brands */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-24 text-center"
      >
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-400/10 blur-[140px]" />

        <h3 className="relative text-3xl md:text-4xl font-extrabold mb-14">
          Trusted by <span className="text-cyan-400">Growing Brands</span>
        </h3>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {brands.map((brand) => (
            <motion.div
              key={brand}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl
                         px-6 py-5 hover:border-cyan-400/40
                         hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
                         transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <span className="relative text-sm md:text-base font-semibold tracking-wide text-white/70 group-hover:text-white transition">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-white/60 text-sm">
          From startups to enterprises — trusted across industries worldwide.
        </p>
      </motion.section>

      {/* Modern stats block (your illustration) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#071120] via-[#0b1220] to-[#0b1220]" />

        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-cyan-400/12 blur-[150px]" />
        <div className="pointer-events-none absolute -top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative flex items-center justify-center min-h-[520px]">
            <svg
              className="pointer-events-none absolute inset-0 m-auto w-[780px] max-w-[110%] opacity-[0.35]"
              viewBox="0 0 900 600"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M610 150c140 40 210 140 160 220s-175 90-280 90-250-20-290-110 50-240 190-260 130 20 220 60z"
                fill="#ffffff"
                fillOpacity="0.08"
              />
              <path
                d="M520 420c110 30 160 90 120 130s-130 40-210 40-190-10-220-70 40-150 140-160 90 10 170 60z"
                fill="#ffffff"
                fillOpacity="0.07"
              />
              <circle cx="250" cy="210" r="6" fill="#22d3ee" fillOpacity="0.35" />
              <circle cx="710" cy="260" r="8" fill="#60a5fa" fillOpacity="0.25" />
              <circle cx="640" cy="470" r="5" fill="#22d3ee" fillOpacity="0.25" />
            </svg>

            <motion.h3
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[92px] sm:text-[120px] md:text-[160px] font-extrabold tracking-tight leading-none"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                300+
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="absolute top-1/2 -translate-y-1/2 px-5 py-2 rounded-full
                         border border-white/10 bg-white/[0.05] backdrop-blur-xl
                         text-white/90 text-lg sm:text-xl font-semibold"
            >
              Happy Customers
            </motion.div>

            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="absolute bottom-14 h-20 w-20 rounded-full bg-white
                         shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                         flex items-center justify-center"
              aria-label="Scroll / Explore"
              onClick={() => window.scrollBy({ top: 600, behavior: "smooth" })}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9.5 11.5V7.8a1.3 1.3 0 0 1 2.6 0v3.1"
                  stroke="#0b1220"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12.1 10.9V7.2a1.3 1.3 0 1 1 2.6 0v4.3"
                  stroke="#0b1220"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M14.7 11.6V8.6a1.3 1.3 0 1 1 2.6 0v5.2"
                  stroke="#0b1220"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5 11.5l-1.2-.8a1.4 1.4 0 0 0-2 1.8l2.7 4.4A5 5 0 0 0 13.2 20h1.8a5 5 0 0 0 5-5v-2.2"
                  stroke="#0b1220"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          <p className="text-center text-white/60 mt-6">
            Real results, real relationships — built over consistent delivery.
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
