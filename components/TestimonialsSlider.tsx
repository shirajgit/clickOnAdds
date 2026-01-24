"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    text: `We worked with ClickOnAdzz. starting from the style guide.
It was really creative and then we started working with them on the website.
They were very helpful, very swift, they had plenty of ideas.
We are quite satisfied with this experience.`,
    name: "Mr. Surajit Das",
    company: "Makita",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
  },
  {
    text: `ClickOnAdzz. helped us scale our digital presence.
Their performance-first mindset really stands out.
Excellent communication and execution.`,
    name: "Client Two",
    company: "TechCorp",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    text:
      "My website looked very professional. Since then I have recommended the ClickOnAdzz. team to many of my clients and they were extremely happy about it. I can recommend them with confidence from my own personal experience that ClickOnAdzz. provides very professional service.",
    name: "Mr. Sijo Mathews",
    company: "Compass Finance Solutions",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop",
  },
];


export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
    startAutoSlide();
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
    startAutoSlide();
  };

  const t = testimonials[index];

  return (
    <section
      className="relative bg-[#03040a] py-28 overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            What Our Clients <br /> Are Saying…
          </h2>

          <div className="text-7xl text-white/20 mb-6">“</div>

          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-white/80 leading-relaxed max-w-xl mb-10"
            >
              {t.text}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center
                         border border-white/20 rounded-md
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <ChevronLeft />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 flex items-center justify-center
                         bg-cyan-400 text-black rounded-md"
            >
              <ChevronRight />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative bg-[#e5e5e5] rounded-2xl p-8 flex flex-col items-center shadow-xl"
        >
          {/* Image / Video card */}
          <div className="relative w-full max-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.img || t.name}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-[360px] rounded-xl overflow-hidden bg-gray-300 shadow-lg"
              >
                {/* image */}
                {t.img ? (
                  <Image
                    src={t.img}
                    alt={`${t.name} - ${t.company}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 320px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700 font-semibold">
                    No Image
                  </div>
                )}

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                {/* play button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg"
                >
                  <Play className="text-black" />
                </motion.button>

                {/* mini badge */}
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
                  Client Story
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Name */}
          <AnimatePresence mode="wait">
            <motion.p
              key={t.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 font-semibold text-black text-lg text-center"
            >
              {t.name} <span className="font-normal">| {t.company}</span>
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
