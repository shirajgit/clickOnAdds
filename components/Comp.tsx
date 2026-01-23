// components/WhyChooseWisoft.tsx
import React from "react";
import {
  BarChart3,
  Brain,
  Lightbulb,
  Search,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "AI-Powered Intelligence",
    desc: "Our AI delivers a competitive edge with predictive campaign intelligence.",
    icon: Brain,
  },
  {
    title: "Groviq as a Platform",
    desc: "Our Groviq platform unlocks growth opportunities that others cannot see.",
    icon: Award,
  },
  {
    title: "Best-in-Class Martech Stack",
    desc: "Access to premium tools for deeper market and competitor intelligence.",
    icon: Search,
  },
  {
    title: "Actionable, Board-Ready Insights",
    desc: "Clear reports that prove marketing’s direct impact on your business.",
    icon: Lightbulb,
  },
  {
    title: "Unrelenting Focus on ROI",
    desc: "We manage your budget like a portfolio, maximizing every rupee spent.",
    icon: BarChart3,
  },
  {
    title: "True Strategic Partnership",
    desc: "We act as a strategic extension of your internal leadership team.",
    icon: TrendingUp,
  },
];

const WhyChooseWisoft = () => {
  return (
    <section className="relative bg-[#03040a] py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-7xl md:text-5xl font-bold text-white mb-16 max-w-3xl">
          Why Choose <span className="text-cyan-400">  
             <Link href="/" className="text-7xl font-bold text-white justify-self-start">
             Click<span className="text-cyan-400">On</span>
             Add<span className="text-cyan-400">s.</span>
          </Link>
            </span> as Your
          <br /> Digital Partner?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 bg-white/[0.03]
                         border border-cyan-400/10
                         hover:border-cyan-400/40
                         transition-all duration-500
                         shadow-[0_0_30px_rgba(34,211,238,0.15)]
                         hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center
                           bg-cyan-400/10 text-cyan-400 mb-6
                           group-hover:scale-110 transition"
              >
                <item.icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWisoft;
