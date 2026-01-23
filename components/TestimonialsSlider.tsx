"use client";
import { motion, AnimatePresence } from "framer-motion";


import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    text: `We worked with Wisoft Solutions starting from the style guide.
    It was really creative and then we started working with them on the website.
    They were very helpful, very swift, they had plenty of ideas.
    We are quite satisfied with this experience.`,
    name: "Mr. Surajit Das",
    company: "Makita",
  },
  {
    text: `Wisoft Solutions helped us scale our digital presence.
    Their performance-first mindset really stands out.
    Excellent communication and execution.`,
    name: "Client Two",
    company: "TechCorp",
  },
   {
    text: '‘My website looked very professional. Since then I have recommended the Wisoft Solutions team to many of my clients and they were extremely happy about it. I can recommend them with confidence from my own personal experience that Wisoft Solutions provides very professional service and they counsel you, they tell you what is required. Instead of just taking up a job they tell you what is required to be.’ ' ,
    name: "Mr. Sijo Mathews",
    company: "Compass Finance Solutionsp",
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

      {/* Animated text change */}
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
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-60 h-72 rounded-xl bg-gray-300 flex items-center justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
        >
          <Play className="text-black" />
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={t.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 font-semibold text-black text-lg"
        >
          {t.name} <span className="font-normal">| {t.company}</span>
        </motion.p>
      </AnimatePresence>
    </motion.div>
  </div>
</section>

  );
}
