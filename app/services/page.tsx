"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    id: 1,
    slug: "wordpress-website-development",
    title: "WordPress Website Development",
    desc: "Business-ready WordPress websites designed to convert, scale, and perform.",
    tag: "Web",
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Design intuitive experiences that users love and businesses benefit from.",
    tag: "Design",
  },
  {
    id: 3,
    slug: "website-development-custom-coding",
    title: "Website Development (Custom Coding)",
    desc: "High-performance websites engineered for scale, speed, and revenue.",
    tag: "Engineering",
  },
  {
    id: 4,
    slug: "social-media-management",
    title: "Social Media Management",
    desc: "Build a strong brand presence and turn attention into business growth.",
    tag: "Growth",
  },
  {
    id: 5,
    slug: "seo-services",
    title: "SEO Services",
    desc: "Revenue-driven SEO built for growth, not vanity rankings.",
    tag: "SEO",
  },
  {
    id: 6,
    slug: "performance-marketing",
    title: "Performance Marketing",
    desc: "Profit-focused advertising engineered for growth, scale, and ROAS.",
    tag: "Ads",
  },
  {
    id: 7,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    desc: "High-performance mobile applications built for engagement and scale.",
    tag: "Mobile",
  },
  {
    id: 8,
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    desc: "Build trust, awareness, and demand through creator-driven growth.",
    tag: "Creators",
  },
  {
    id: 9,
    slug: "content-writing-services",
    title: "Content Writing Services",
    desc: "High-quality content writing that builds authority and drives conversions.",
    tag: "Content",
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ServicesPage = () => {
  return (
    <main className="relative bg-[#0b1220] text-white overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-cyan-400/10 blur-[170px]" />
        <div className="absolute -top-28 right-[-160px] h-[440px] w-[440px] rounded-full bg-cyan-500/22 blur-[120px]" />
        <div className="absolute bottom-[-260px] left-[-200px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[170px]" />
      </div>

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 text-center"
      >
        <p className="text-white/55 mb-4 text-sm tracking-wide">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>{" "}
          · Our Services
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Our <span className="text-cyan-400">Services</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70">
          We design, build, and scale digital solutions that drive measurable business growth.
        </p>

        {/* micro chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Strategy", "Design", "Engineering", "Growth"].map((x) => (
            <span
              key={x}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70 backdrop-blur-xl"
            >
              {x}
            </span>
          ))}
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-7xl mx-auto px-6 pb-24 pt-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.03 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl p-8 bg-white/[0.035] backdrop-blur-2xl
                         border border-white/10 hover:border-cyan-400/35
                         transition-all duration-300"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 rounded-3xl bg-cyan-400/5" />
                <div className="absolute -inset-10 rounded-3xl bg-cyan-400/10 blur-[70px]" />
              </div>

              {/* top row */}
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {service.tag}
                </span>

                <span className="text-white/45 text-xs font-semibold">
                  {service.id < 10 ? `0${service.id}` : service.id}
                </span>
              </div>

              <h3 className="relative text-2xl font-bold mt-4 mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="relative text-white/70 leading-relaxed mb-7">
                {service.desc}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="relative inline-flex items-center gap-2 text-cyan-300 font-semibold"
              >
                <span className="group-hover:underline underline-offset-4">Learn More</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              {/* subtle bottom line */}
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative"
      >
        <div className="max-w-7xl mx-auto px-6 pb-28">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 md:p-16 overflow-hidden">
            {/* CTA glow */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-[140px]" />
            <div className="absolute -top-24 right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative text-center">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
                We Develop the <span className="text-cyan-400">Digital Future</span>
              </h2>

              <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
                Ready to scale your business with performance-driven digital solutions?
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <a
                  href="tel:+919187154521"
                  className="px-10 py-4 rounded-full bg-cyan-400 text-black font-semibold
                             hover:scale-105 transition shadow-[0_16px_40px_rgba(34,211,238,0.22)]"
                >
                  +91 91871 54521
                </a>

                <Link
                  href="/contact"
                  className="px-10 py-4 rounded-full border border-white/20 text-white/90
                             hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  Make an Enquiry
                </Link>
              </div>

              <p className="mt-8 text-sm text-white/50">
                No spam — just a quick call to understand your goals.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ServicesPage;
