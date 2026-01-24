"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

type Step =
  | "pickService"
  | "askName"
  | "askEmail"
  | "askPhone"
  | "askMessage"
  | "success";

type ChatWidgetProps = {
  brand?: string;
  logoUrl?: string;
  services?: string[];
};

type Msg = {
  id: string;
  from: "bot" | "user";
  text: string;
};

const pop = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 18, scale: 0.97 },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

function clsx(...x: (string | false | undefined)[]) {
  return x.filter(Boolean).join(" ");
}

function BotBubble({ text }: { text: string }) {
  return (
    <div className="max-w-[88%] rounded-2xl bg-black/5 border border-black/5 px-4 py-3 text-[13px] leading-relaxed text-[#0b1220]/80 whitespace-pre-line">
      {text}
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="ml-auto max-w-[88%] rounded-2xl bg-cyan-600 px-4 py-2.5 text-[13px] leading-relaxed text-white shadow-[0_12px_28px_rgba(34,211,238,0.22)] whitespace-pre-line">
      {text}
    </div>
  );
}

function Chip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#0b1220]/80 hover:border-cyan-400/60 hover:text-cyan-700 transition"
      type="button"
    >
      {label}
    </button>
  );
}

function Typing() {
  return (
    <div className="max-w-[88%] rounded-2xl bg-black/5 border border-black/5 px-4 py-3">
      <div className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-[#0b1220]/30 animate-bounce" />
        <span className="h-2 w-2 rounded-full bg-[#0b1220]/30 animate-bounce [animation-delay:120ms]" />
        <span className="h-2 w-2 rounded-full bg-[#0b1220]/30 animate-bounce [animation-delay:240ms]" />
      </div>
    </div>
  );
}

export default function ChatWidget({
  brand = "Wisoft Solutions",
  logoUrl,
  services = [
    "SEO Services",
    "Performance Marketing",
    "UI/UX Design",
    "Website Development",
    "Mobile App Development",
    "Content Writing",
    "Branding & Promotions",
    "Other",
  ],
}: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("pickService");
  const [typing, setTyping] = useState(false);
  const [sending, setSending] = useState(false);

  const [lead, setLead] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "m1",
      from: "bot",
      text: "Got it 👍 We’d love to share a tailored quote.\nCan I ask which service you’re most interested in?",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const safeServices = useMemo(
    () => services.filter(Boolean).slice(0, 10),
    [services]
  );

  // ✅ Open from FloatingActions
  useEffect(() => {
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);

    window.addEventListener("open-chat", openHandler);
    window.addEventListener("close-chat", closeHandler);

    return () => {
      window.removeEventListener("open-chat", openHandler);
      window.removeEventListener("close-chat", closeHandler);
    };
  }, []);

  const scrollBottom = () => {
    requestAnimationFrame(() => {
      if (!listRef.current) return;
      listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  };

  useEffect(() => {
    scrollBottom();
  }, [messages, open, typing]);

  const botSay = async (text: string, delay = 550) => {
    setTyping(true);
    await new Promise((r) => setTimeout(r, delay));
    setTyping(false);
    setMessages((m) => [...m, { id: crypto.randomUUID(), from: "bot", text }]);
  };

  const userSay = (text: string) => {
    setMessages((m) => [...m, { id: crypto.randomUUID(), from: "user", text }]);
  };

  const handlePickService = async (s: string) => {
    userSay(s);
    setLead((p) => ({ ...p, service: s }));
    setStep("askName");
    await botSay("Great! Your Full Name?");
  };

  const askNext = async () => {
    if (step === "askName") {
      setStep("askEmail");
      await botSay("Nice. Your Email?");
      return;
    }
    if (step === "askEmail") {
      setStep("askPhone");
      await botSay("Cool. Phone Number?");
      return;
    }
    if (step === "askPhone") {
      setStep("askMessage");
      await botSay("Tell us about the project (optional).");
      return;
    }
    if (step === "askMessage") {
      setStep("success");
      await botSay("✅ Submitted! Our team will contact you shortly.");
      return;
    }
  };

  const [input, setInput] = useState("");

  const placeholder =
    step === "askName"
      ? "Enter your Full Name"
      : step === "askEmail"
      ? "Enter your Email"
      : step === "askPhone"
      ? "Enter your Phone Number"
      : step === "askMessage"
      ? "Tell us about your project"
      : "Type here...";

  const validate = (value: string) => {
    const v = value.trim();
    if (step === "askName") return v.length >= 2;
    if (step === "askEmail") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (step === "askPhone") return v.replace(/[^\d]/g, "").length >= 10;
    return true;
  };

  const storeToLead = (value: string) => {
    const v = value.trim();
    if (step === "askName") setLead((p) => ({ ...p, name: v }));
    if (step === "askEmail") setLead((p) => ({ ...p, email: v }));
    if (step === "askPhone") setLead((p) => ({ ...p, phone: v }));
    if (step === "askMessage") setLead((p) => ({ ...p, message: v }));
  };

  const submitLead = async (payload: typeof lead) => {
    setSending(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // ignore for now
    } finally {
      setSending(false);
    }
  };

  const onSend = async () => {
    if (step === "pickService" || step === "success" || sending) return;

    if (!validate(input)) {
      userSay(input || "…");
      setInput("");
      await botSay("Please enter a valid value 🙂", 400);
      return;
    }

    userSay(input);
    storeToLead(input);

    const nextValue = input;
    setInput("");

    if (step === "askMessage") {
      await botSay("Submitting…", 450);
      await submitLead({ ...lead, message: nextValue.trim() });
    }

    await askNext();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          key="chat"
          variants={pop}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed right-6 bottom-8 z-[75] w-[360px] max-w-[calc(100vw-48px)]
                     overflow-hidden rounded-3xl border border-white/10 bg-white
                     shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-cyan-700 to-blue-600 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center overflow-hidden">
                {logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logoUrl} alt={brand} className="h-8 w-8 object-contain" />
                ) : (
                  <span className="text-sm font-extrabold">W</span>
                )}
              </div>

              <div className="min-w-0">
                <div className="font-semibold leading-tight truncate">{brand}</div>
                <div className="text-xs text-white/80">Typically replies in a few minutes</div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="ml-auto h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
                aria-label="Close"
                type="button"
              >
                <FaTimes />
              </button>
            </div>

            <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-10 bg-white/90 rotate-[-6deg]" />
          </div>

          {/* Body */}
          <div className="bg-white">
            <div ref={listRef} className="max-h-[420px] overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  variants={bounceIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {m.from === "bot" ? <BotBubble text={m.text} /> : <UserBubble text={m.text} />}
                </motion.div>
              ))}

              {step === "pickService" ? (
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {safeServices.map((s) => (
                      <Chip key={s} label={s} onClick={() => handlePickService(s)} />
                    ))}
                  </div>
                </div>
              ) : null}

              {typing ? <Typing /> : null}

              {step === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-[13px] text-green-800"
                >
                  🎉 Done! We’ve received your details.
                </motion.div>
              ) : null}
            </div>

            {/* Footer input */}
            <div className="border-t border-black/5 px-3 py-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSend()}
                  placeholder={step === "pickService" ? "Pick a service above…" : placeholder}
                  disabled={step === "pickService" || step === "success" || sending}
                  className={clsx(
                    "h-11 w-full rounded-xl border px-4 text-sm outline-none transition",
                    "border-black/10 bg-white text-[#0b1220]",
                    "focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-300/30",
                    (step === "pickService" || step === "success" || sending) &&
                      "opacity-60 cursor-not-allowed"
                  )}
                />

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={onSend}
                  disabled={step === "pickService" || step === "success" || sending}
                  className={clsx(
                    "h-11 w-11 rounded-xl flex items-center justify-center",
                    "bg-cyan-600 text-white shadow-[0_14px_30px_rgba(34,211,238,0.22)]",
                    "hover:bg-cyan-500 transition",
                    (step === "pickService" || step === "success" || sending) &&
                      "opacity-60 cursor-not-allowed"
                  )}
                  aria-label="Send"
                  type="button"
                >
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-black/40">
                <span>Powered by your website</span>
                <Link className="hover:text-cyan-700 transition" href="/contact">
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
