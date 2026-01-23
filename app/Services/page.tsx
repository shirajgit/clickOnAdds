"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const services = [
  {
    id: 1,
    slug: "wordpress-website-development",
    title: "WordPress Website Development",
    desc: "Business-ready WordPress websites designed to convert, scale, and perform.",
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Design intuitive experiences that users love and businesses benefit from.",
  },
  {
    id: 3,
    slug: "website-development-custom-coding",
    title: "Website Development (Custom Coding)",
    desc: "High-performance websites engineered for scale, speed, and revenue.",
  },
  {
    id: 4,
    slug: "social-media-management",
    title: "Social Media Management",
    desc: "Build a strong brand presence and turn attention into business growth.",
  },
  {
    id: 5,
    slug: "seo-services",
    title: "SEO Services",
    desc: "Revenue-driven SEO built for growth, not vanity rankings.",
  },
  {
    id: 6,
    slug: "performance-marketing",
    title: "Performance Marketing",
    desc: "Profit-focused advertising engineered for growth, scale, and ROAS.",
  },
  {
    id: 7,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    desc: "High-performance mobile applications built for engagement and scale.",
  },
  {
    id: 8,
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    desc: "Build trust, awareness, and demand through creator-driven growth.",
  },
  {
    id: 9,
    slug: "content-writing-services",
    title: "Content Writing Services",
    desc: "High-quality content writing that builds authority and drives conversions.",
  },
];


const ServicesPage = () => {
  return (
    <main className="relative bg-[#0b1220] text-white overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px]  blur-[200px]" />
      <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-cyan-500/50 blur-[100px] rounded-full pointer-events-none" />


      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-22 text-center z-10"
      >
        <p className="text-white/50 mb-4 text-sm tracking-wide">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link> · Our Services
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          Our <span className="text-cyan-400">Services</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70">
          We design, build, and scale digital solutions that drive measurable business growth.
        </p>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-24 z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-3xl p-8 bg-white/[0.04] backdrop-blur-xl
                         border border-white/10 hover:border-cyan-400/50
                         hover:shadow-[0_0_60px_rgba(34,211,238,0.2)]
                         transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <span className="relative text-cyan-400 text-sm font-semibold tracking-wider">
                {service.id < 10 ? `0${service.id}` : service.id}
              </span>

              <h3 className="relative text-2xl font-bold mt-4 mb-4">
                {service.title}
              </h3>

              <p className="relative text-white/70 mb-8 leading-relaxed">
                {service.desc}
              </p>
<Link
  href={`/services/${service.slug}`}
  className="relative inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all"
>
  Learn More
  <span className="transition-transform group-hover:translate-x-1">→</span>
</Link>

            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-16 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-400/10 blur-[140px]" />

            <h2 className="relative text-4xl md:text-6xl font-extrabold mb-6">
              We Develop the <span className="text-cyan-400">Digital Future</span>
            </h2>

            <p className="relative text-white/70 max-w-2xl mx-auto mb-12 text-lg">
              Ready to scale your business with performance-driven digital solutions?
            </p>

            <div className="relative flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="tel:+919187154521"
                className="px-10 py-4 rounded-full bg-cyan-400 text-black font-semibold
                           hover:scale-105 transition shadow-xl"
              >
                +91 91871 54521
              </a>

              <button
                className="px-10 py-4 rounded-full border border-white/20
                           hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Make an Enquiry
              </button>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
  );
};

export default ServicesPage;
