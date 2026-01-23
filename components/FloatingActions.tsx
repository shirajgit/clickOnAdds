"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRobot,
  FaComments,
  FaTimes,
} from "react-icons/fa";

type FloatingActionsProps = {
  phone?: string; // "+919187154521"
  whatsapp?: string; // "+919187154521"
  whatsappMessage?: string; // "Hi, I want to know more..."
  chatbotHref?: string; // "/chat" or "#"
  enquiryHref?: string; // "/contact"
};

const pop = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const item = {
  hidden: { opacity: 0, x: 12, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

function Tooltip({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg border border-white/10 bg-[#0b1220]/90 px-3 py-1.5 text-xs text-white/80 backdrop-blur-xl shadow-lg">
      {text}
    </span>
  );
}

function FabButton({
  children,
  label,
  onClick,
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const [hover, setHover] = useState(false);

  const cls =
    "group relative h-12 w-12 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl " +
    "shadow-[0_16px_40px_rgba(0,0,0,0.45)] " +
    "hover:border-cyan-400/40 hover:bg-white/[0.10] transition";

  const inner =
    "absolute -inset-3 rounded-full bg-cyan-400/15 blur-xl opacity-0 group-hover:opacity-100 transition";

  const content = (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cls}
      type="button"
    >
      <span className={inner} />
      <span className="relative flex h-full w-full items-center justify-center text-lg text-white/90">
        {children}
      </span>

      <AnimatePresence>
        {hover ? (
          <motion.span
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
          >
            <Tooltip text={label} />
          </motion.span>
        ) : null}
      </AnimatePresence>
    </button>
  );

  if (href) {
    // Use <a> for tel/wa + external
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} className="block">
          {content}
        </a>
      );
    }
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}

export default function FloatingActions({
  phone = "+919187154521",
  whatsapp = "+919187154521",
  whatsappMessage = "Hi! I want to know more about your services.",
  chatbotHref = "/contact", // change to your chatbot route if you have
  enquiryHref = "/contact",
}: FloatingActionsProps) {
  const [open, setOpen] = useState(false);

  const waLink = useMemo(() => {
    const num = whatsapp.replace(/[^\d+]/g, "");
    const msg = encodeURIComponent(whatsappMessage);
    // wa.me requires number without +
    const waNum = num.replace("+", "");
    return `https://wa.me/${waNum}?text=${msg}`;
  }, [whatsapp, whatsappMessage]);

  return (
    <div className="fixed right-6 bottom-8 z-[60] flex flex-col items-end gap-3">
      {/* small stack */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="stack"
            variants={pop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-end gap-3"
          >
            <motion.div variants={item} initial="hidden" animate="visible" transition={{ delay: 0.02 }}>
              <FabButton label="Call us" href={`tel:${phone}`}>
                <FaPhoneAlt />
              </FabButton>
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="visible" transition={{ delay: 0.06 }}>
              <FabButton label="WhatsApp" href={waLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </FabButton>
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="visible" transition={{ delay: 0.10 }}>
              <FabButton label="Chatbot" href={chatbotHref}>
                <FaRobot />
              </FabButton>
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="visible" transition={{ delay: 0.14 }}>
              <FabButton label="Make an enquiry" href={enquiryHref}>
                <FaComments />
              </FabButton>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* main toggle */}
      <motion.div whileTap={{ scale: 0.96 }}>
        <FabButton
          label={open ? "Close" : "Contact"}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FaTimes /> : <FaComments />}
        </FabButton>
      </motion.div>
    </div>
  );
}
