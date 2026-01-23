"use client";

import Hero3D from "@/components/Hero3D";
import ImageStripSlider from "@/components/ImageStripSlider";
import React from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaSpotify,
} from "react-icons/fa";

/* ------------------ Animations ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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

  return (
    <main className="bg-[#0b1220] text-white">
 <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-cyan-500/50 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-28 text-center"
      >
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-cyan-400">Us</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-white/80">
          From SEO to social media, content marketing to PPC, our team of experts
          helps ambitious brands achieve measurable growth and long-term digital success.
        </p>
        <div className="mt-10">
          <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
            Get Free Consultation
          </button>
        </div>
      </motion.section>

      {/* Logos Marquee */}
      <motion.section
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-6 px-50 bg-[#0b1220] overflow-hidden"
      >
        <div className="w-full overflow-hidden">
          <div className="marquee gap-20 px-10 items-center">
            {[...companies, ...companies].map((company, i) => {
              const Icon = company.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition"
                >
                  <Icon size={36} />
                  <span className="text-xl font-semibold">{company.name}</span>
                </div>
              );
            })}
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
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-4">
          Performance Marketing Agency
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          A Strategic Performance Partner for Ambitious Brands
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          We don’t just execute. We partner. We plan. We perform.
        </p>
      </motion.section>

      {/* Your Growth Is Our Business */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <h3 className="text-4xl font-bold mb-6">
            Your Growth Is Our Business
          </h3>
          <p className="text-white/80 leading-relaxed mb-4">
            Wisoft Solutions is a digital marketing agency purpose-built for performance.
            For over <strong>15 years</strong>, we’ve partnered with growth-focused SMEs
            and enterprise marketing teams to turn scattered digital efforts into
            structured, business-aligned strategies.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            We don’t measure success by impressions or reports. We track what truly
            matters — <strong>revenue, conversions, and long-term value</strong>.
          </p>
          <p className="text-white/80 leading-relaxed">
            In 2024, we were proud to be named a finalist at the
            <strong> MENA Search Awards</strong>, recognizing our ROI-first,
            outcomes-driven approach.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-[410px] rounded-2xl border border-white/10 flex items-center justify-center text-white/40"
        >
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="" />
        </motion.div>
      </motion.section>

      {/* Built for Performance */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h3 className="text-4xl font-bold mb-6">
          Built for Performance from Day One
        </h3>
        <p className="text-white/80 max-w-4xl leading-relaxed mb-6">
          Most agencies chase metrics. We’ve always chased outcomes.
          From day one, our goal was to move beyond vendor-style service delivery.
          We embed ourselves as a strategic extension of your team — committed
          to performance, not just presence.
        </p>
        <blockquote className="border-l-4 border-cyan-400 pl-6 text-xl text-white italic">
          “We’re not in the business of impressions and clicks.
          We’re in the business of impact.”
        </blockquote>
      </motion.section>

      {/* Performance Partner Cards */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold mb-14">
          What Being a <span className="text-cyan-400">Performance Partner</span> Means
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Outcome-First Mindset",
              desc:
                "Every campaign — SEO, paid media, or content — is tied to real business KPIs like leads, revenue, and lifetime value.",
            },
            {
              title: "Full-Funnel Visibility",
              desc:
                "We go beyond lead generation. We optimize the entire funnel — sales enablement, nurturing flows, retention, and growth.",
            },
            {
              title: "Data-Led Experimentation",
              desc:
                "We test, measure, and refine continuously. Performance is built through analytics, iteration, and insight.",
            },
            {
              title: "Strategy, Not Just Execution",
              desc:
                "We don’t separate strategy from delivery. Sustainable performance lives where both overlap.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-white/10 rounded-xl p-8"
            >
              <h4 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ImageStripSlider />

      {/* Clients */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h3 className="text-3xl font-bold mb-10">
          Trusted by Growing Brands
        </h3>
        <div className="flex flex-wrap justify-center gap-8 text-white/60 font-semibold">
          <span>Client Four</span>
          <span>Client Five</span>
          <span>Client Six</span>
          <span>Client Eight</span>
          <span>Client Nine</span>
          <span>Client Three</span>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h3 className="text-5xl font-bold text-cyan-400 mb-4">300+</h3>
        <p className="text-xl text-white/80">Happy Customers</p>
      </motion.section>

      {/* Blogs */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h3 className="text-4xl font-bold text-white mb-12">
          Insights & Blogs
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Branded vs Organic Search: What Matters More in AI Search?",
            "CRO Trust Signals: 8 Ways to Convert Browsers Into Buyers",
          ].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="border border-white/10 rounded-xl p-8 hover:border-cyan-400 transition"
            >
              <h4 className="text-2xl font-semibold text-white mb-3">
                {title}
              </h4>
              <button className="text-cyan-400 font-semibold hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </main>
  );
};

export default AboutPage;
