// app/about/page.tsx
import Hero3D from "@/components/Hero3D";
import React from "react";

const AboutPage = () => {
  return (
    <main className="bg-[#0b1220] text-white">

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        
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
      </section>
 
      {/* Performance Marketing Agency */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-4">
          Performance Marketing Agency
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          A Strategic Performance Partner for Ambitious Brands
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          We don’t just execute. We partner. We plan. We perform.
        </p>
      </section>

      {/* Your Growth Is Our Business */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
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
        </div>
        <div className="h-[420px] rounded-2xl border border-white/10 flex items-center justify-center text-white/40">
          Highlights Image
        </div>
      </section>

      {/* Built for Performance */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold mb-6">Built for Performance from Day One</h3>
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
      </section>

      {/* Performance Partner */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold mb-14">
          What Being a <span className="text-cyan-400">Performance Partner</span> Means
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-white/10 rounded-xl p-8">
            <h4 className="text-2xl font-semibold text-white mb-3">
              Outcome-First Mindset
            </h4>
            <p className="text-white/80">
              Every campaign — SEO, paid media, or content — is tied to
              real business KPIs like leads, revenue, and lifetime value.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-8">
            <h4 className="text-2xl font-semibold text-white mb-3">
              Full-Funnel Visibility
            </h4>
            <p className="text-white/80">
              We go beyond lead generation. We optimize the entire funnel —
              sales enablement, nurturing flows, retention, and growth.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-8">
            <h4 className="text-2xl font-semibold text-white mb-3">
              Data-Led Experimentation
            </h4>
            <p className="text-white/80">
              We test, measure, and refine continuously.
              Performance is built through analytics, iteration, and insight.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-8">
            <h4 className="text-2xl font-semibold text-white mb-3">
              Strategy, Not Just Execution
            </h4>
            <p className="text-white/80">
              We don’t separate strategy from delivery.
              Sustainable performance lives where both overlap.
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-10">Trusted by Growing Brands</h3>
        <div className="flex flex-wrap justify-center gap-8 text-white/60 font-semibold">
          <span>Client Four</span>
          <span>Client Five</span>
          <span>Client Six</span>
          <span>Client Eight</span>
          <span>Client Nine</span>
          <span>Client Three</span>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-5xl font-bold text-cyan-400 mb-4">300+</h3>
        <p className="text-xl text-white/80">Happy Customers</p>
      </section>

      {/* Blogs */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-white mb-12">
          Insights & Blogs
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/10 rounded-xl p-8 hover:border-cyan-400 transition">
            <h4 className="text-2xl font-semibold text-white mb-3">
              Branded vs Organic Search: What Matters More in AI Search?
            </h4>
            <button className="text-cyan-400 font-semibold hover:underline">
              Read More →
            </button>
          </div>
          <div className="border border-white/10 rounded-xl p-8 hover:border-cyan-400 transition">
            <h4 className="text-2xl font-semibold text-white mb-3">
              CRO Trust Signals: 8 Ways to Convert Browsers Into Buyers
            </h4>
            <button className="text-cyan-400 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
