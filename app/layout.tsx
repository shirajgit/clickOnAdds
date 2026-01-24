import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisoft Solutions",
  description: "Performance-driven digital growth solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b1220]`}
      >
        <Navbar />

        {/* Page wrapper */}
        <div className="relative min-h-screen overflow-hidden">
          <div className="relative z-10">{children}</div>
        </div>
     <ChatWidget
          brand="Wisoft Solutions"
          logoUrl="/logo.png"
          services={[
            "SEO Services",
            "Performance Marketing",
            "UI/UX Design",
            "Website Development",
            "Mobile App Development",
            "Content Writing",
            "Branding & Promotions",
            "Other",
          ]}
        />
        {/* Floating contact buttons (Call / WhatsApp / Chatbot / Enquiry) */}
        <FloatingActions
          phone="+919187154521"
          whatsapp="+919187154521"
          whatsappMessage="Hi! I want a free consultation."
          enquiryHref="/contact"
        />

        {/* Chatbot widget (opens via event) */}
   

        <Footer />
      </body>
    </html>
  );
}
