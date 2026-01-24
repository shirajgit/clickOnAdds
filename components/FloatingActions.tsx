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
  phone?: string;
  whatsapp?: string;
  whatsappMessage?: string;
  enquiryHref?: string;
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
    "group relative h-14 w-14 rounded-full border border-white/10 bg-cyan-400 " +
    "shadow-[0_16px_40px_rgba(0,0,0,0.45)] " +
    "hover:border-cyan-400/40 hover:bg-cyan-300 transition " +
    "flex items-center justify-center";

  const inner =
    "absolute -inset-3 rounded-full bg-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition";

  const Body = (
    <>
      <span className={inner} />
      <span className="relative flex items-center justify-center text-xl text-black">
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
    </>
  );

  // ✅ External links (WhatsApp/tel)
  if (href && (href.startsWith("http") || href.startsWith("tel:"))) {
    return (
      <a
        aria-label={label}
        href={href}
        target={target}
        rel={rel}
        className={cls}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {Body}
      </a>
    );
  }

  // ✅ Internal links
  if (href) {
    return (
      <Link
        aria-label={label}
        href={href}
        className={cls}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {Body}
      </Link>
    );
  }

  // ✅ Button action
  return (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cls}
      type="button"
    >
      {Body}
    </button>
  );
}

export default function FloatingActions({
  phone = "+919187154521",
  whatsapp = "+919019597056",
  whatsappMessage = "Hi! I want to know more about your services.",
  enquiryHref = "/contact-us",
}: FloatingActionsProps) {
  const [open, setOpen] = useState(false);

  // ✅ WhatsApp link (more reliable on desktop too)
  const waLink = useMemo(() => {
    const waNum = whatsapp.replace(/\D/g, ""); // only digits
    const msg = encodeURIComponent(whatsappMessage);
    return `https://api.whatsapp.com/send?phone=${waNum}&text=${msg}`;
  }, [whatsapp, whatsappMessage]);

  // ✅ Tel link (clean)
  const telLink = useMemo(() => {
    const telNum = phone.replace(/[^\d+]/g, "");
    return `tel:${telNum}`;
  }, [phone]);

  return (
    <div className="fixed right-6 bottom-8 z-[60] flex flex-col items-end gap-3">
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
            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.02 }}
            >
              <FabButton label="Call us" href={telLink}>
                <FaPhoneAlt />
              </FabButton>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.06 }}
            >
              <FabButton
                label="WhatsApp"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </FabButton>
            </motion.div>

            {/* ✅ OPEN CHAT WIDGET */}
            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <FabButton
                label="Chatbot"
                onClick={() => {
                  window.dispatchEvent(new Event("open-chat"));
                  setOpen(false);
                }}
              >
                <FaRobot />
              </FabButton>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.14 }}
            >
              <FabButton label="Make an enquiry" href={enquiryHref}>
                <FaComments />
              </FabButton>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

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
