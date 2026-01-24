"use client";

// app/contact/page.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
 
import {  AnimatePresence, useMotionValue, useSpring } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0b1220] text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* top center */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-cyan-400/10 blur-[140px]" />
        {/* bottom left */}
        <div className="absolute bottom-[-220px] left-[-160px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />
        {/* bottom right */}
        <div className="absolute bottom-[-260px] right-[-200px] h-[560px] w-[560px] rounded-full bg-cyan-300/10 blur-[170px]" />
        {/* TOP RIGHT glow (requested) */}
        <div className="absolute top-[-140px] right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-400/16 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="relative">
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1628] via-[#0b1220] to-[#0b1220]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <p className="text-white/55 text-sm mb-5 tracking-wide">
                <Link href="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>{" "}
                · Contact
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Ready to begin your  
                journey?
              </h1>

              <p className="mt-6 text-white/65 leading-relaxed">
                Partner with us to turn your business goals into action, unlock smart
                strategies, and craft a winning roadmap for digital growth!
              </p>
            </motion.div>

            <div className="relative w-full max-w-xl">

  {/* Gradient border wrapper */}
  <div className="relative rounded-[28px] p-[3px]
                  bg-gradient-to-br
                  from-white/25 via-cyan-400/50 to-blue-500/30">

    {/* subtle animated shine */}
    <div className="absolute inset-0 rounded-[28px]
                    bg-gradient-to-br
                    from-cyan-400/20 via-transparent to-transparent
                    opacity-60 blur-xl pointer-events-none" />

    {/* Card body */}
   <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
  className="lg:flex lg:justify-end"
>
  <ModernContactCard />
</motion.div>

  </div>

  {/* Directional outer glow (bottom-right bias) */}
  <div className="pointer-events-none absolute -bottom-10 -right-10
                  h-[260px] w-[260px]
                  bg-cyan-400/20 blur-[90px] rounded-full -z-10" />

  {/* Soft ambient glow */}
  <div className="pointer-events-none absolute -inset-8
                  rounded-[32px]
                  bg-white/5 blur-[80px] -z-20" />
</div>


            {/* Right form card */}
       
          </div>
        </div>
      </section>

       

      <section className="relative max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

    {/* LEFT – LOCATIONS */}
    <div className="space-y-6">

      {[
        {
          country: "India",
          address:
            "Office - 001, Ground Floor, Workafella, No 77/A, Industrial Layout, Koramangala, Bengaluru, Karnataka 560095",
          phone: "+91 4466384745",
        },
        {
          country: "United Arab Emirates",
          address:
            "P.O. Box: 237159, Office M-38, Curve Building, Sheikh Zayed Road, Dubai, UAE",
          phone: "+971 4 321 0710",
        },
        {
          country: "Saudi Arabia",
          address:
            "Office-163, Al-Wurud, Riyadh, KSA",
          phone: "+971 4 321 0710",
        },
        {
          country: "United States",
          address:
            "101 S Garland Avenue Ste108, Orlando",
          phone: "+1 407 000 0000",
        },
      ].map((loc, i) => (
        <div
          key={i}
          className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl
                     border border-white/10 p-6
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                     transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            {loc.country}
          </h3>

          <p className="text-white/65 text-sm leading-relaxed mb-4">
            {loc.address}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">
              {loc.phone}
            </span>

            <a
              href="#"
              className="text-sm font-semibold text-cyan-400 hover:underline"
            >
              View on Map
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT – MAP */}
    <div className="relative rounded-3xl overflow-hidden border border-white/10
                    bg-white/[0.02] backdrop-blur-xl">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-[120px]" />

    <iframe
  title="Office Location"
  className="relative w-full h-[650px] rounded-3xl"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.773070871246!2d77.6150063!3d12.934533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1441b9a2b1d9%3A0x2d0a8b0d89b9c8a4!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
/>


    </div>
  </div>
</section>

    </main>
  );
}

/* ---------- small UI helpers ---------- */

function Input({
  placeholder,
  type = "text",
  value,
  readOnly,
}: {
  placeholder?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      className="w-full h-11 rounded-xl bg-white/[0.96] text-[#0b1220]
                 px-4 text-sm outline-none
                 border border-transparent
                 focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30
                 placeholder:text-[#0b1220]/45 transition"
    />
  );
}

function Textarea({ placeholder }: { placeholder?: string }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className="w-full rounded-xl bg-white/[0.96] text-[#0b1220]
                 px-4 py-3 text-sm outline-none resize-none
                 border border-transparent
                 focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30
                 placeholder:text-[#0b1220]/45 transition"
    />
  );
}

function Select({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  return (
    <select
      defaultValue=""
      className="w-full h-11 rounded-xl bg-white/[0.96] text-[#0b1220]
                 px-4 text-sm outline-none
                 border border-transparent
                 focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30 transition"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function FloatingBtn({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <motion.button
      aria-label={label}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="h-12 w-12 rounded-full bg-white/[0.06] backdrop-blur-xl
                 border border-white/15 hover:border-cyan-400/50 transition
                 shadow-[0_18px_45px_rgba(34,211,238,0.18)]
                 flex items-center justify-center text-lg"
    >
      {children}
    </motion.button>
  );
}
function ModernContactCard() {
  const [status, setStatus] = React.useState<"idle" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");

    // Optional: auto reset after 4s
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="w-full max-w-xl relative">
      {/* Animated gradient border */}
      <motion.div
        className="relative rounded-[28px] p-[1.5px] overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.22), rgba(34,211,238,0.55), rgba(59,130,246,0.32), rgba(34,211,238,0.55))",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {/* Soft shine */}
        <div className="pointer-events-none absolute inset-0 opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(34,211,238,0.25), transparent 60%)",
          }}
        />

        {/* Card body */}
        <div className="relative rounded-[26px] bg-white/[0.03] backdrop-blur-2xl border border-white/10">
          <div className="p-7 md:p-9">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Let’s get in touch</h2>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-sm text-cyan-300 font-semibold"
                  >
                    Sent successfully ✅
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GlowInput placeholder="Enter First Name" />
                <GlowInput placeholder="Enter Last Name" />
              </div>

              <GlowInput type="email" placeholder="Enter Your Email" />
              <GlowInput placeholder="Enter Your Company" />

              <div className="flex gap-3">
                <div className="w-24 shrink-0">
                  <GlowInput value="+91" readOnly />
                </div>
                <GlowInput placeholder="Enter Phone Number" />
              </div>

              <GlowSelect
                placeholder="Select a Service"
                options={[
                  "WordPress Website Development",
                  "UI/UX Design",
                  "Website Development (Custom Coding)",
                  "Social Media Management",
                  "SEO & Performance Marketing",
                ]}
              />

              <GlowTextarea placeholder="Tell us about the project" />

              {/* reCAPTCHA placeholder */}
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded border border-white/20 bg-white/10" />
                  <span className="text-sm text-white/70">I&apos;m not a robot</span>
                </div>
                <div className="text-xs text-white/45 text-right">
                  reCAPTCHA
                  <div className="text-white/35">Privacy - Terms</div>
                </div>
              </div>

              {/* Success animation area */}
              <AnimatePresence mode="wait">
                {status === "idle" ? (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                  >
                    <MagneticButton type="submit">
                      Submit
                    </MagneticButton>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-2 w-full rounded-2xl border border-cyan-400/30 bg-cyan-400/10
                               py-3 font-semibold text-cyan-200 flex items-center justify-center gap-2"
                  >
                    <motion.span
                      initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16 }}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20"
                    >
                      ✓
                    </motion.span>
                    We’ll reach out shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Directional glow */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-[260px] w-[260px] bg-cyan-400/20 blur-[90px] rounded-full -z-10" />
      <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-white/5 blur-[90px] -z-20" />
    </div>
  );
}

/* -------------------- Magnetic Button -------------------- */
function MagneticButton({
  children,
  type = "button",
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
}) {
  const ref = React.useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    // strength
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.98 }}
      className="mt-2 w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition
                 py-3 font-semibold text-black
                 shadow-[0_14px_40px_rgba(34,211,238,0.20)]
                 will-change-transform"
    >
      {children}
    </motion.button>
  );
}

/* -------------------- Focus Glow Inputs -------------------- */
function GlowInput({
  placeholder,
  type = "text",
  value,
  readOnly,
}: {
  placeholder?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
}) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute -inset-2 rounded-2xl bg-cyan-400/15 blur-[18px]"
          />
        )}
      </AnimatePresence>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative w-full h-11 rounded-xl bg-white/[0.96] text-[#0b1220]
                   px-4 text-sm outline-none
                   border border-transparent
                   focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30
                   placeholder:text-[#0b1220]/45 transition"
      />
    </div>
  );
}

function GlowTextarea({ placeholder }: { placeholder?: string }) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute -inset-2 rounded-2xl bg-cyan-400/15 blur-[18px]"
          />
        )}
      </AnimatePresence>

      <textarea
        placeholder={placeholder}
        rows={4}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative w-full rounded-xl bg-white/[0.96] text-[#0b1220]
                   px-4 py-3 text-sm outline-none resize-none
                   border border-transparent
                   focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30
                   placeholder:text-[#0b1220]/45 transition"
      />
    </div>
  );
}

function GlowSelect({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute -inset-2 rounded-2xl bg-cyan-400/15 blur-[18px]"
          />
        )}
      </AnimatePresence>

      <select
        defaultValue=""
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative w-full h-11 rounded-xl bg-white/[0.96] text-[#0b1220]
                   px-4 text-sm outline-none
                   border border-transparent
                   focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30 transition"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
