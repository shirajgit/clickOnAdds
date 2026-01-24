"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/* 🔢 Animated Counter */
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}%`;
      }
    });
  }, [springValue]);

  return <span ref={ref}>0%</span>;
}

export default function AboutUs() {
  return (
    <section className="relative bg-[#03040a] py-28 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[700px] bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-cyan-400">Us</span>
          </h2>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Trust is the foundation of every successful partnership. For over
            <span className="text-white font-semibold"> 5 years</span>, we’ve
            helped growth-focused businesses take full ownership of results —
            not just reports.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: 90, label: "Customer Satisfaction" },
            { value: 78, label: "Avg. Revenue Growth Delivered" },
            { value: 82, label: "Avg. Increase in Visibility" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="
                bg-white/5 backdrop-blur
                border border-white/10
                rounded-2xl p-12
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                transition
              "
            >
              <h3 className="text-5xl font-extrabold text-cyan-400">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="mt-4 text-white/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-white/70 leading-relaxed">
            We don’t just manage campaigns — we become an extension of your
            team. Our work is rooted in transparency, experimentation, and
            measurable business outcomes that compound over time.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
