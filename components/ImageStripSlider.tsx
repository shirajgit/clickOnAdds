"use client";

import { motion } from "framer-motion";

const images = [
  "/Business Growth.jpeg",
  "/Digital Marketing.jpeg",
  "/Team Collaboration.jpeg",
  "/web.jpeg",
  "/img1.jpeg",
  "/img02.jpeg",
];

export default function SmoothImageSlider() {
  return (
    <section className="relative w-screen overflow-hidden py-10">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50, // ultra smooth
        }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="min-w-[260px] md:min-w-[320px] h-[380px]
                       rounded-2xl overflow-hidden
                       bg-white/5 border border-white/10
                       shadow-2xl"
          >
            <img
              src={`${img}?auto=format&fit=crop&w=900&q=80`}
              alt="Team culture"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Pro edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b1220] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b1220] to-transparent" />
    </section>
  );
}
