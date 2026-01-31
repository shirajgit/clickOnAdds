"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why are digital marketing services important for my business in Bangalore?",
    a: "As one of the fastest-growing cities in India, Bangalore offers immense opportunities for businesses. Digital marketing helps you tap into this potential by targeting specific audiences and generating qualified leads. ClickOnAdzz Solutionscombines AI-powered insights, creative strategies, and real-time data to help businesses like yours grow.",
  },
  {
    q: "How do I choose the right digital marketing agency in Bangalore?",
    a: "Look for a digital marketing agency that not only understands your goals but also has a proven track record of delivering measurable results. ClickOnAdzz Solutionshas worked with industry leaders like Damac, EMAAR, and BITS Pilani to drive meaningful business growth.",
  },
  {
    q: "How can digital marketing boost my revenue?",
    a: "By targeting the right audience with the right message at the right time, digital marketing enhances visibility, drives high-quality traffic, and boosts conversion rates. With AI-powered optimisation, we ensure every aspect of your marketing strategy contributes to a better bottom line.",
  },
  {
    q: "How do I trust digital marketing agencies for my business?",
    a: "Trust is built on transparency and results. At ClickOnAdzz Solutions, we deliver measurable KPIs, transparent reporting, and AI-driven optimisation to ensure your marketing budget delivers the best possible results.",
  },

  /* 🔹 NEW QUESTIONS ADDED BELOW */

  {
    q: "What is a digital solutions agency?",
    a: "A digital solution agency in Bangalore helps businesses grow by combining strategy, creativity, and technology. Instead of offering just one service, such an agency builds full-spectrum digital ecosystems, from website design and SEO to social media, automation, and analytics. At ClickOnAdzz Solutions, we go beyond campaigns; we create connected digital experiences that attract the right audience, build trust, and drive measurable revenue growth.",
  },
  {
    q: "Which digital marketing tool is best?",
    a: "There isn’t one single ‘best’ tool — it depends on your business goals. As a leading SEO and digital marketing agency, we use platforms aligned with your objectives. For SEO, tools like Google Analytics, Ahrefs, and Semrush track visibility and performance. For automation and lead nurturing, platforms like HubSpot and Mailchimp deliver strong results. The best tool is the one that makes your marketing smarter, faster, and more measurable.",
  },
  {
    q: "How are digital marketing services useful for already established businesses?",
    a: "Even established brands need to evolve with changing market dynamics. Partnering with a trusted digital solution agency in Bangalore helps businesses stay relevant, improve customer retention, and identify new growth channels. From SEO and content marketing to performance ads and automation, we ensure brands don’t just maintain visibility — they scale sustainably with data-driven decisions.",
  },
  {
    q: "What are the 5 advantages of digital marketing?",
    a: "Working with an experienced SEO and digital marketing agency offers multiple benefits: precise targeting, measurable performance, cost efficiency, deep customer insights, and scalability. At ClickOnAdzz Solutions, every strategy is designed to bring clarity, accountability, and long-term business results.",
  },
  {
    q: "Why does every business need a digital marketing strategy?",
    a: "Every business operates in a digital-first world. Without a defined strategy, brands risk losing visibility, consistency, and customer trust. A strategic partner like ClickOnAdzz aligns business goals with the right channels and messaging, ensuring SEO, content, and paid campaigns work as one connected system.",
  },
  {
    q: "How much does a digital marketing agency cost per month?",
    a: "The cost of hiring a digital marketing company in Bengaluru depends on your goals, target market, and service scope. For small to mid-sized businesses, monthly retainers typically range from ₹50,000 to ₹3,00,000. At ClickOnAdzz, pricing is tailored to your growth stage — you pay for outcomes, not just deliverables.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#05060d] py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid  grid-cols-1 lg:grid-cols-2  items-start">

        {/* Left Illustration */}
      <div className="hidden lg:flex mt-54 justify-center relative">
  {/* Decorative Glow Background */}
  <div className="absolute w-96 h-96 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
  
  {/* Decorative Sparkles */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg animate-bounce delay-1000"></div>
  <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-white rounded-full shadow-lg animate-bounce delay-2000"></div>
  <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-white rounded-full shadow-lg animate-bounce delay-1500"></div>

  {/* Main Question Mark */}
  <div className="relative w-80 h-80 flex items-center justify-center">
    <span className="text-[14rem] font-extrabold text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] animate-pulse">
      ?
    </span>
  </div>
</div>
          
        {/* Right FAQ */}
        <div className="space-y-6">
          <h1 className="text-3xl"> Frequently Asked Questions</h1>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return ( <>
              <div
                key={i}
                className="
                  bg-white/5 backdrop-blur
                  border border-white/10
                  rounded-xl
                  transition
                "
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5 text-left
                  "
                >
                  <span className="text-white font-medium">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`text-cyan-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div></>
            );
          })}
        </div>

      </div>
    </section>
  );
}
