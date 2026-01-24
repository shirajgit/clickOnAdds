"use client";

// app/contact/page.tsx
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0b1220] text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[-220px] left-[-160px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-[-260px] right-[-200px] h-[560px] w-[560px] rounded-full bg-cyan-300/10 blur-[170px]" />
        <div className="absolute top-[-140px] right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-400/16 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="relative">
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
                Ready to begin your journey?
              </h1>

              <p className="mt-6 text-white/65 leading-relaxed">
                Partner with us to turn your business goals into action, unlock smart strategies,
                and craft a winning roadmap for digital growth!
              </p>

              {/* quick highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                {[
                  ["24h", "Response time"],
                  ["300+", "Happy customers"],
                  ["ROI", "Performance-first"],
                  ["Full", "Funnel strategy"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4"
                  >
                    <div className="text-2xl font-extrabold text-cyan-300">{k}</div>
                    <div className="text-sm text-white/60 mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
              className="relative w-full max-w-xl"
            >
              <ModernContactCard />

              {/* ambient glows */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-[260px] w-[260px] bg-cyan-400/20 blur-[90px] rounded-full -z-10" />
              <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-white/5 blur-[100px] -z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations + map */}
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
                address: "Office-163, Al-Wurud, Riyadh, KSA",
                phone: "+971 4 321 0710",
              },
              {
                country: "United States",
                address: "101 S Garland Avenue Ste108, Orlando",
                phone: "+1 407 000 0000",
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.04 }}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl
                     border border-white/10 p-6
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                     transition"
              >
                <h3 className="text-lg font-semibold mb-2">{loc.country}</h3>

                <p className="text-white/65 text-sm leading-relaxed mb-4">{loc.address}</p>

                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">{loc.phone}</span>

                  <a href="#" className="text-sm font-semibold text-cyan-400 hover:underline">
                    View on Map
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT – MAP */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl">
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

/* -------------------- Contact Card (CONNECTED TO BACKEND) -------------------- */
function ModernContactCard() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [service, setService] = React.useState("");
  const [message, setMessage] = React.useState("");

  const canSubmit =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    phone.trim() &&
    service.trim() &&
    message.trim();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          phone,
          service,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || data?.ok === false) {
        setStatus("error");
        setErrorMsg(data?.message || "Failed to send message");
        return;
      }

      setStatus("success");

      setFirstName("");
      setLastName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setService("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Network error");
    }
  };

  return (
    <div className="w-full max-w-xl relative">
      {/* Animated border wrapper (real animation via background-position) */}
      <motion.div
        className="relative rounded-[28px] p-[1.5px] overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.22), rgba(34,211,238,0.65), rgba(59,130,246,0.35), rgba(34,211,238,0.65))",
          backgroundSize: "240% 240%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {/* subtle inner sheen */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(34,211,238,0.22), transparent 55%)",
          }}
        />

        {/* Card body */}
        <div className="relative rounded-[26px] bg-white/[0.03] backdrop-blur-2xl border border-white/10">
          {/* top highlight line */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="p-7 md:p-9">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Let’s get in touch</h2>
                <p className="text-sm text-white/55 mt-1">
                  Tell us what you need — we’ll reply within 24 hours.
                </p>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-sm text-cyan-300 font-semibold"
                  >
                    Sent ✅
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GlowInput placeholder="Enter First Name" value={firstName} onChange={setFirstName} />
                <GlowInput placeholder="Enter Last Name" value={lastName} onChange={setLastName} />
              </div>

              <GlowInput type="email" placeholder="Enter Your Email" value={email} onChange={setEmail} />
              <GlowInput placeholder="Enter Your Company (optional)" value={company} onChange={setCompany} />

              <div className="flex gap-3">
                <div className="w-24 shrink-0">
                  <GlowInput value="+91" readOnly />
                </div>
                <GlowInput placeholder="Enter Phone Number" value={phone} onChange={setPhone} />
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
                value={service}
                onChange={setService}
              />

              <GlowTextarea placeholder="Tell us about the project" value={message} onChange={setMessage} />

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70 flex flex-col gap-1">
                <span>🔒 Your details are safe with us.</span>
                <span>
                  ⚡ Expect a response within{" "}
                  <span className="text-cyan-400 font-semibold">24 hours</span>.
                </span>
              </div>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200"
                >
                  {errorMsg}
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {status === "success" ? (
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
                      transition={{ type: "spring", stiffness: 320, damping: 16 }}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20"
                    >
                      ✓
                    </motion.span>
                    We’ll reach out shortly.
                  </motion.div>
                ) : (
                  <motion.div key="idle" exit={{ opacity: 0, y: -6 }}>
                    <MagneticButton type="submit" disabled={!canSubmit || status === "loading"}>
                      {status === "loading" ? "Sending..." : "Submit"}
                    </MagneticButton>

                    {!canSubmit && status !== "loading" ? (
                      <p className="mt-2 text-xs text-white/45">
                        Fill required fields to enable submit.
                      </p>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.div>

      {/* soft card glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] bg-cyan-400/10 blur-[80px]" />
    </div>
  );
}

/* -------------------- Magnetic Button -------------------- */
function MagneticButton({
  children,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
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
      onMouseMove={disabled ? undefined : onMove}
      onMouseLeave={disabled ? undefined : onLeave}
      style={{ x: sx, y: sy }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      disabled={disabled}
      className={[
        "mt-2 w-full rounded-2xl py-3 font-semibold text-black will-change-transform transition",
        "shadow-[0_14px_40px_rgba(34,211,238,0.20)]",
        disabled
          ? "opacity-60 cursor-not-allowed bg-cyan-500/70"
          : "bg-cyan-500 hover:bg-cyan-400",
      ].join(" ")}
    >
      {children}
    </motion.button>
  );
}

/* -------------------- Focus Glow Inputs (CONTROLLED) -------------------- */
function GlowInput({
  placeholder,
  type = "text",
  value,
  readOnly,
  onChange,
}: {
  placeholder?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (v: string) => void;
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
        value={value ?? ""}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
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

function GlowTextarea({
  placeholder,
  value,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
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

      <textarea
        placeholder={placeholder}
        rows={4}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
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
  value,
  onChange,
}: {
  placeholder: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
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
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
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
