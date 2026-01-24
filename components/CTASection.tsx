"use client";

import { motion } from "framer-motion";
import Link from "next/link";
 

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CTASection = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative bg-[#0b1220]"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          We Develop the <span className="text-cyan-400">Digital Future</span>
        </h2>

        <p className="text-xl text-white/80 mb-10">
          Let’s Talk?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:+919187154521"
            className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
          >
            +91 91871 54521
          </a>
         <a href="/contact-us">
          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition">
            Make an enquiry
          </button>
           </a>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
