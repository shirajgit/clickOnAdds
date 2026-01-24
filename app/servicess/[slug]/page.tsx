"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  ctaText: string;

  whyTitle: string;
  whyIntro: string;

  highlights: { title: string; desc: string }[];

  deliverTitle: string;
  deliverItems: string[];

  forTitle: string;
  forItems: string[];

  capabilitiesTitle: string;
  capabilitiesItems: string[];

  processTitle: string;
  processSteps: { title: string; desc: string }[];

  chooseTitle: string;
  chooseItems: string[];

  closing: string;
};

const SERVICE_DATA: Record<string, ServiceDetail> = {
  "wordpress-website-development": {
    slug: "wordpress-website-development",
    title: "WordPress Website Development",
    subtitle:
      "Business-ready WordPress websites designed to convert, scale, and perform.",
    intro:
      "At ClickOnAdzz, we design and develop WordPress websites that are not just beautiful — they are built to support your business goals, marketing efforts, and long-term growth.\n\nOur WordPress builds combine strategy, design, performance, and conversion optimization into one growth-ready platform.",
    ctaText: "Request a WordPress Consultation",

    whyTitle: "Why WordPress with ClickOnAdzz?",
    whyIntro:
      "WordPress is powerful — but only when built correctly.\nWe don’t use bloated themes or generic templates.\nWe build clean, optimized, conversion-focused WordPress websites that:",

    highlights: [
      {
        title: "Load Fast",
        desc:
          "Clean code, lightweight themes, optimized images, caching, and CDN configuration ensure excellent Core Web Vitals, better UX, and higher conversions.",
      },
      {
        title: "Rank Better",
        desc:
          "SEO-friendly structure with clean URLs, metadata, schema, internal linking, and mobile-first design for higher search visibility.",
      },
      {
        title: "Convert Visitors",
        desc:
          "Strategic layouts, intuitive navigation, and optimized CTAs turn traffic into leads, customers, and revenue.",
      },
      {
        title: "Scale With You",
        desc:
          "Flexible WordPress architecture that supports new features, integrations, and traffic without rebuilds.",
      },
    ],

    deliverTitle: "What We Deliver",
    deliverItems: [
      "Custom-designed business websites",
      "Mobile-first responsive design",
      "SEO-friendly site architecture",
      "Fast loading performance optimization",
      "Lead capture & conversion flows",
      "Secure, scalable backend",
      "Easy content & page management",
    ],

    forTitle: "Who This Is For",
    forItems: [
      "Businesses needing a professional website quickly",
      "Startups validating a product or market",
      "Service-based businesses generating leads",
      "Brands that want flexibility without custom coding",
      "Marketing teams that need easy content control",
    ],

    capabilitiesTitle: "Our WordPress Capabilities",
    capabilitiesItems: [
      "Custom theme development (no bloated templates)",
      "Elementor, Gutenberg & custom block setups",
      "Speed optimization (Core Web Vitals)",
      "SEO structure & schema setup",
      "CRM, payment & tool integrations",
      "Security hardening & backups",
      "Hosting & performance configuration",
    ],

    processTitle: "Our Process",
    processSteps: [
      { title: "Discovery", desc: "Understand your business, audience, and goals" },
      { title: "UX & Structure", desc: "Design user flows for conversion" },
      { title: "Design & Development", desc: "Build a clean, responsive site" },
      { title: "Optimization", desc: "Speed, SEO, security, conversion testing" },
      { title: "Launch & Support", desc: "Deploy, monitor, and improve" },
    ],

    chooseTitle: "Why Businesses Choose ClickOnAdzz",
    chooseItems: [
      "Business-first approach",
      "Marketing & conversion mindset",
      "Performance optimization built-in",
      "SEO-friendly from day one",
      "Transparent timelines & pricing",
      "Ongoing support & scalability",
    ],

    closing: "We don’t just deliver a website — we deliver a growth platform.",
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Design intuitive experiences that users love and businesses benefit from.",
    intro:
      "At ClickOnAdzz, we design user experiences that combine usability, clarity, and conversion psychology — helping digital products perform better and grow faster.\n\nWe work closely with product, marketing, and engineering teams to design experiences that are beautiful, usable, and commercially effective.",
    ctaText: "Request a UI/UX Consultation",

    whyTitle: "Our UI/UX Capabilities",
    whyIntro: "",

    highlights: [
      {
        title: "User Research & Personas",
        desc:
          "We conduct qualitative and quantitative research to understand user needs, behaviors, and pain points — building accurate personas that guide design decisions.",
      },
      {
        title: "User Journey Mapping",
        desc:
          "We map the complete user journey to identify friction, drop-offs, and opportunities for smoother, higher-converting experiences.",
      },
      {
        title: "Wireframing & Prototyping",
        desc:
          "We create wireframes and interactive prototypes to validate structure, flows, and usability before development.",
      },
      {
        title: "Visual Interface Design",
        desc:
          "We design modern, intuitive, brand-aligned interfaces focused on clarity, hierarchy, and accessibility.",
      },
      {
        title: "Usability Testing",
        desc:
          "We test with real users to identify confusion and friction, refining designs for better usability and conversion.",
      },
      {
        title: "Design Systems",
        desc:
          "We build scalable design systems and reusable components for consistency, speed, and long-term product growth.",
      },
    ],

    deliverTitle: "Tools We Use",
    deliverItems: ["Figma", "Adobe XD", "Framer", "Miro", "Maze", "Hotjar", "Google Analytics"],

    forTitle: "Frameworks & Methodologies",
    forItems: [
      "Design Thinking",
      "Human-Centered Design",
      "Jobs-to-be-Done (JTBD)",
      "Lean UX",
      "Atomic Design",
      "WCAG Accessibility Guidelines",
    ],

    capabilitiesTitle: "Our Process",
    capabilitiesItems: [
      "Research & discovery",
      "User flows & information architecture",
      "Wireframes & prototypes",
      "Visual design & branding",
      "Usability testing",
      "Handoff & implementation support",
    ],

    processTitle: "Who This Is For",
    processSteps: [
      { title: "SaaS and tech products", desc: "" },
      { title: "E-commerce platforms", desc: "" },
      { title: "Mobile and web apps", desc: "" },
      { title: "Businesses redesigning poor UX", desc: "" },
      { title: "Founders launching new products", desc: "" },
    ],

    chooseTitle: "Why ClickOnAdzz",
    chooseItems: [
      "User-first mindset",
      "Business and conversion focus",
      "Strong collaboration with developers",
      "Scalable and consistent design systems",
      "Long-term design partnership",
    ],

    closing: "Good design isn’t decoration — it’s strategy.",
  },

  "website-development-custom-coding": {
  slug: "website-development-custom-coding",
  title: "Website Development (Custom Coding)",
  subtitle: "High-performance websites engineered for scale, speed, and revenue.",
  intro:
    "At ClickOnAdzz, we design and develop custom-coded websites built for businesses that need more than templates.\n\nWe build platforms that are fast, secure, scalable, SEO-ready, and conversion-optimized — so your website becomes a growth asset, not a limitation.",
  ctaText: "Request a Development Consultation",

  whyTitle: "Built for Performance",
  whyIntro: "",

  highlights: [
    {
      title: "Speed is a Business Advantage",
      desc:
        "Clean code, lightweight frameworks, and performance-first architecture ensure fast load times, better UX, higher conversions, and stronger SEO.",
    },
    {
      title: "Secure",
      desc:
        "Best practices for data protection, authentication, encryption, and server security to protect your users, business, and reputation.",
    },
    {
      title: "Scalable",
      desc:
        "Modular architecture that grows with your business — new features, higher traffic, and global expansion without limits.",
    },
    {
      title: "SEO-Ready",
      desc:
        "Clean URLs, semantic HTML, schema markup, and fast loading for strong organic visibility.",
    },
    {
      title: "Conversion-Optimized",
      desc:
        "Strategic layouts, intuitive navigation, and optimized CTAs that turn visitors into leads and customers.",
    },
    {
      title: "Growth-Ready Platform",
      desc:
        "Whether you’re launching, scaling, or modernizing — your website should support growth, not slow it down.",
    },
  ],

  deliverTitle: "Why Custom Coding?",
  deliverItems: [
    "Faster load times",
    "Better SEO performance",
    "Higher security",
    "Full design & functionality control",
    "Long-term scalability without technical debt",
  ],

  forTitle: "Our Development Philosophy",
  forItems: [
    "Strategy → Architecture → Design → Development → Optimization → Scale",
    "Every line of code is written with performance, UX, and business goals in mind.",
  ],

  capabilitiesTitle: "What We Build",
  capabilitiesItems: [
    "Corporate & enterprise websites",
    "High-conversion landing pages",
    "SaaS platforms",
    "Web applications & dashboards",
    "E-commerce platforms",
    "Booking & reservation systems",
    "Custom portals & CRM integrations",
  ],

  processTitle: "Our Technology Stack",
  processSteps: [
    { title: "Frontend: HTML5, CSS3, JavaScript, React, Next.js, Vue", desc: "" },
    { title: "Backend: Node.js, PHP, Python, Laravel, Django", desc: "" },
    { title: "Databases: MySQL, PostgreSQL, MongoDB", desc: "" },
    { title: "Infrastructure: AWS, Cloudflare, CDN optimization, security", desc: "" },
  ],

  chooseTitle: "Performance & Optimization Built-In",
  chooseItems: [
    "Core Web Vitals",
    "Mobile-first performance",
    "SEO-friendly architecture",
    "Clean codebase",
    "Scalable infrastructure",
    "Security best practices",
  ],

  closing:
    "We don’t just deliver a website — we deliver a growth platform.",
},

"branding-promotions": {
  slug: "branding-promotions",
  title: "Branding & Promotions",
  subtitle: "Build a brand people trust, remember, and choose.",
  intro:
    "At ClickOnAdzz, we help businesses build strong, distinctive brands that stand out in crowded markets and connect emotionally with the right audience.\n\nWe don’t just design logos or visuals — we build brand systems that communicate value, build trust, and drive long-term business growth.",
  ctaText: "Request a Branding Consultation",

  whyTitle: "Why Branding Matters",
  whyIntro:
    "Your brand is not your logo. Your brand is how people perceive you, remember you, and decide to choose you.",

  highlights: [
    {
      title: "Credibility & Trust",
      desc:
        "A strong brand signals professionalism, reliability, and quality — reducing hesitation and speeding up buying decisions.",
    },
    {
      title: "Recognition & Recall",
      desc:
        "Consistent branding makes your business instantly recognizable across platforms and touchpoints.",
    },
    {
      title: "Emotional Connection",
      desc:
        "Strong brands align with values and identity, building loyalty beyond price and features.",
    },
    {
      title: "Market Differentiation",
      desc:
        "Clear positioning helps you stand out in crowded markets.",
    },
    {
      title: "Premium Value",
      desc:
        "Trusted brands command higher value and long-term customer loyalty.",
    },
  ],

  deliverTitle: "What We Do",
  deliverItems: [
    "Brand identity & positioning (purpose, values, messaging, tone, positioning)",
    "Visual branding (logo, colors, typography, design style system)",
    "Communication strategy (website, ads, social media, campaigns messaging)",
    "Launch & promotion (brand launches and storytelling campaigns)",
  ],

  forTitle: "Our Branding Approach",
  forItems: [
    "Research & Discovery — Understand your market, customers, and competition",
    "Positioning & Strategy — Define your brand direction",
    "Identity & Design — Create your visual and verbal system",
    "Implementation — Apply across platforms and campaigns",
    "Promotion & Growth — Launch and amplify your brand",
  ],

  capabilitiesTitle: "Who This Is For",
  capabilitiesItems: [
    "New brands launching in competitive markets",
    "Businesses rebranding or repositioning",
    "Startups preparing for scale or investment",
    "Brands struggling with recognition or trust",
    "Companies entering new segments or regions",
  ],

  processTitle: "Why ClickOnAdzz",
  processSteps: [
    { title: "Strategy before design", desc: "" },
    { title: "Business-first branding", desc: "" },
    { title: "Deep market and audience understanding", desc: "" },
    { title: "Consistent, scalable brand systems", desc: "" },
    { title: "Integrated with marketing and growth", desc: "" },
  ],

  chooseTitle: "Outcome",
  chooseItems: ["We don’t just deliver branding & promotions — we deliver a growth platform."],

  closing:
    "We don’t just deliver branding & promotions — we deliver a growth platform.",
},

"social-media-management": {
  slug: "social-media-management",
  title: "Social Media Management",
  subtitle: "Build a strong brand presence and turn attention into business growth.",
  intro:
    "At ClickOnAdzz, we manage social media with a clear business objective — building brand trust, increasing visibility, and driving measurable growth.\n\nWe don’t post for the sake of posting. We create and manage content systems that grow your audience, strengthen your brand, and support your sales and marketing efforts.",
  ctaText: "Request a Social Media Strategy Session",

  whyTitle: "What We Do",
  whyIntro: "",

  highlights: [
    {
      title: "Content Planning & Calendars",
      desc:
        "We create structured content calendars aligned with your brand, campaigns, and business goals to ensure consistent, strategic posting.",
    },
    {
      title: "Platform-Specific Strategy",
      desc:
        "We design tailored strategies for Instagram, Facebook, LinkedIn, and X based on audience behavior and business objectives.",
    },
    {
      title: "Creative Design & Copy",
      desc:
        "We produce compelling visuals and persuasive copy that reflect your brand voice and drive engagement.",
    },
    {
      title: "Community Management",
      desc:
        "We manage comments and messages to build relationships, answer questions, and nurture trust.",
    },
    {
      title: "Growth Campaigns",
      desc:
        "We execute campaigns to grow your audience, promote launches, and increase visibility.",
    },
    {
      title: "Performance Reporting",
      desc:
        "We track engagement, reach, growth, and conversions with clear insights and recommendations.",
    },
  ],

  deliverTitle: "Our Focus",
  deliverItems: [
    "Brand consistency and recognition",
    "Audience growth and engagement",
    "Messaging aligned with business goals",
    "Content that supports campaigns and launches",
    "Measurable performance and insights",
  ],

  forTitle: "Who This Is For",
  forItems: [
    "Brands building visibility and trust",
    "Startups launching new products",
    "Businesses needing consistent presence",
    "Companies entering new markets",
    "Founders who want a professional brand image",
  ],

  capabilitiesTitle: "How We Work",
  capabilitiesItems: [
    "Strategy-first planning",
    "Content systems (not random posting)",
    "Creative + analytics balance",
    "Clear reporting and communication",
    "Aligned with marketing + growth efforts",
  ],

  processTitle: "Why ClickOnAdzz",
  processSteps: [
    { title: "Strategy-first approach", desc: "" },
    { title: "Business-driven content", desc: "" },
    { title: "Strong creative + analytics balance", desc: "" },
    { title: "Clear reporting and communication", desc: "" },
    { title: "Integrated with your marketing and growth efforts", desc: "" },
  ],

  chooseTitle: "Results",
  chooseItems: [
    "We don’t manage accounts — we manage brand growth.",
  ],

  closing:
    "We don’t manage accounts — we manage brand growth.",
},

"seo-services": {
  slug: "seo-services",
  title: "SEO Services",
  subtitle: "Revenue-driven SEO built for growth, not vanity rankings.",
  intro:
    "At ClickOnAdzz, we use SEO as a growth channel — not a traffic channel.\n\nWe don’t chase keywords for the sake of rankings. We attract high-intent users, fix conversion leaks, and turn organic traffic into consistent business revenue.\n\nOur SEO focus: ✔ Visibility ✔ Usability ✔ Conversion\n\nSo your website becomes discoverable, usable, and profitable.",
  ctaText: "Request an SEO Growth Audit",

  whyTitle: "Why SEO Matters",
  whyIntro:
    "SEO isn’t just about ranking on Google — it’s about attracting the right users, delivering the right experience, and converting them into customers.",

  highlights: [
    {
      title: "Lower Ad Dependency",
      desc:
        "SEO creates a consistent flow of organic traffic, reducing reliance on rising ad costs.",
    },
    {
      title: "Brand Authority",
      desc:
        "Ranking for relevant topics positions your brand as a trusted industry authority.",
    },
    {
      title: "High-Intent Users",
      desc:
        "SEO attracts users actively searching for solutions — more likely to convert.",
    },
    {
      title: "Better UX",
      desc:
        "Technical SEO improves speed, navigation, and clarity for a smoother experience.",
    },
    {
      title: "Compounding ROI",
      desc:
        "Unlike ads, SEO continues generating traffic and revenue over time.",
    },
  ],

  deliverTitle: "What We Do",
  deliverItems: [
    "Keyword & Intent Research (high-intent terms your customers use)",
    "Technical & On-Page SEO (speed, mobile UX, metadata, schema, crawlability)",
    "Content Optimization (improve existing + create new intent-led pages)",
    "Conversion-Focused SEO (fix UX friction, funnels, and organic conversions)",
  ],

  forTitle: "Our SEO Philosophy",
  forItems: [
    "Traffic without conversion is wasted opportunity.",
    "We don’t just bring users to your site — we make sure your site is ready for them.",
  ],

  capabilitiesTitle: "Our Process",
  capabilitiesItems: [
    "Audit & Analysis",
    "Keyword & Intent Mapping",
    "Technical & UX Optimization",
    "Content Strategy",
    "Conversion Optimization",
    "Reporting & Scaling",
  ],

  processTitle: "What We Optimize For",
  processSteps: [
    { title: "Organic revenue", desc: "" },
    { title: "Conversion rate", desc: "" },
    { title: "Cost per acquisition", desc: "" },
    { title: "User engagement", desc: "" },
    { title: "Retention & loyalty", desc: "" },
  ],

  chooseTitle: "Who This Is For",
  chooseItems: [
    "Businesses wanting long-term organic growth",
    "Brands tired of rising ad costs",
    "Companies with traffic but low conversions",
    "SaaS, e-commerce & service businesses",
    "Brands building category authority",
  ],

  closing:
    "Why ClickOnAdzz: Business-first SEO mindset · Revenue-focused strategy · Deep technical + UX expertise · Transparent reporting · Long-term growth orientation.\n\nWe don’t sell rankings. We build growth.",
},

"mobile-app-development": {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  subtitle: "High-performance mobile applications engineered for growth, engagement, and scale.",
  intro:
    "At ClickOnAdzz, we design and develop custom mobile applications that are fast, intuitive, secure, and built for real-world business use.\n\nWe don’t just build apps that work — we build apps that users love to use and businesses rely on to grow.\n\nWhether you’re launching a new product, digitizing operations, or scaling an existing platform, we engineer mobile solutions that support long-term performance and business impact.",
  ctaText: "Request a Mobile App Consultation",

  whyTitle: "What We Build",
  whyIntro: "",

  highlights: [
    {
      title: "Consumer Apps (B2C)",
      desc:
        "Consumer-facing apps focused on usability, performance, and engagement — improving retention, satisfaction, and brand loyalty.",
    },
    {
      title: "Business Platforms (B2B)",
      desc:
        "Enterprise-grade apps with secure workflows, role-based access, and system integrations for reliable operations.",
    },
    {
      title: "SaaS Products",
      desc:
        "Scalable SaaS apps with secure authentication, subscriptions, analytics, and API-driven architecture for product-led growth.",
    },
    {
      title: "Marketplaces",
      desc:
        "Secure platforms with search, payments, messaging, reviews, and smooth buyer–seller interactions.",
    },
    {
      title: "Booking Systems",
      desc:
        "Real-time availability, scheduling, and payments to reduce manual work and improve customer convenience.",
    },
    {
      title: "On-Demand Services",
      desc:
        "Real-time tracking, instant requests, notifications, and service management for fast delivery businesses.",
    },
    {
      title: "Internal Tools",
      desc:
        "Productivity apps for reporting, approvals, and data management with seamless system integrations.",
    },
  ],

  deliverTitle: "Our Core Focus",
  deliverItems: [
    "Intuitive UI/UX (built around real user behavior)",
    "High performance (speed, responsiveness, reliability)",
    "Secure backend (auth, encryption, role-based access, API protection)",
    "Scalable architecture (users, features, integrations, traffic)",
  ],

  forTitle: "Our Technology Stack",
  forItems: [
    "Frontend: Flutter, React Native, Swift, Kotlin",
    "Backend: Node.js, Python, Laravel",
    "Databases: PostgreSQL, MongoDB, Firebase",
    "Cloud: AWS, GCP, Firebase",
    "APIs: REST, GraphQL",
    "Stack chosen for performance, scalability, and maintainability.",
  ],

  capabilitiesTitle: "Our Development Process",
  capabilitiesItems: [
    "Product & Strategy – Understand goals, users, and growth plan",
    "UX & Flow Design – Design journeys and interactions",
    "Architecture Planning – Build secure, scalable systems",
    "Development – Clean, modular, tested code",
    "Testing & Optimization – Performance, security, usability",
    "Launch & Scale Support – Deploy, monitor, and grow",
  ],

  processTitle: "Why ClickOnAdzz",
  processSteps: [
    { title: "Business-first product thinking", desc: "" },
    { title: "Strong UI/UX and engineering balance", desc: "" },
    { title: "Secure and scalable foundations", desc: "" },
    { title: "Transparent process and communication", desc: "" },
    { title: "Long-term technical partnership", desc: "" },
  ],

  chooseTitle: "Outcome",
  chooseItems: ["We don’t just deliver a mobile app — we deliver a growth platform."],

  closing:
    "We don’t just deliver a mobile app — we deliver a growth platform.",
},

"influencer-marketing": {
  slug: "influencer-marketing",
  title: "Influencer Marketing",
  subtitle: "Build trust, awareness, and demand through creator-driven growth.",
  intro:
    "At ClickOnAdzz, we help businesses grow by partnering with the right creators — not just popular ones.\n\nWe design influencer campaigns that build credibility, drive awareness, and generate measurable business results. By combining creator content with paid amplification, we turn influence into predictable growth.",
  ctaText: "Request an Influencer Strategy Session",

  whyTitle: "Why Influencer Marketing Works",
  whyIntro:
    "People trust people more than ads. Influencers act as trusted voices in their communities, helping your brand:",

  highlights: [
    {
      title: "Instant Credibility",
      desc:
        "When a trusted creator recommends your brand, credibility transfers instantly — faster than traditional advertising.",
    },
    {
      title: "Niche Audience Reach",
      desc:
        "Access highly engaged, interest-based communities that already care about your category.",
    },
    {
      title: "Authentic Engagement",
      desc:
        "Creator-led content feels natural and relatable, driving genuine interactions, shares, and conversations.",
    },
    {
      title: "Purchase Influence",
      desc:
        "Audiences trust creator opinions during buying decisions, moving people from consideration to action.",
    },
    {
      title: "Reusable Content",
      desc:
        "Influencer content can be repurposed across ads, websites, and social channels for long-term value.",
    },
  ],

  deliverTitle: "What We Do",
  deliverItems: [
    "Influencer sourcing (identify + vet right-fit creators)",
    "Campaign planning (strategy, messaging, timelines, deliverables, funnels)",
    "Content strategy (formats, hooks, storytelling, CTAs)",
    "Paid amplification (scale best content with ads for reach + ROAS)",
    "Performance tracking (engagement, traffic, conversions, revenue)",
  ],

  forTitle: "Our Approach",
  forItems: [
    "Creators + Strategy + Paid Media = Scalable Growth",
    "We don’t treat influencer marketing as a branding expense — we treat it as a growth channel.",
  ],

  capabilitiesTitle: "Who This Is For",
  capabilitiesItems: [
    "D2C & e-commerce brands",
    "Consumer product companies",
    "Mobile apps & SaaS",
    "Lifestyle, beauty, fitness & education brands",
    "Businesses entering new markets",
  ],

  processTitle: "Why ClickOnAdzz",
  processSteps: [
    { title: "Data-driven influencer selection", desc: "" },
    { title: "Performance + branding integration", desc: "" },
    { title: "Transparent reporting", desc: "" },
    { title: "Strong creator relationships", desc: "" },
    { title: "Content + ads working together", desc: "" },
  ],

  chooseTitle: "Result",
  chooseItems: ["We don’t chase virality — we build consistent results."],

  closing:
    "We don’t chase virality — we build consistent results.",
},


"performance-marketing": {
  slug: "performance-marketing",
  title: "Performance Marketing",
  subtitle: "Profit-focused advertising engineered for growth, scale, and ROAS.",
  intro:
    "At ClickOnAdzz, we run data-driven advertising campaigns focused purely on business outcomes — revenue, profitability, and scale.\n\nWe don’t chase impressions, clicks, or vanity metrics. We build profitable acquisition systems using Google Ads and Meta Ads, then scale what works.\n\nOur goal is simple: Turn ad spend into predictable, scalable revenue.",
  ctaText: "Request a Performance Audit",

  whyTitle: "Platforms We Use",
  whyIntro: "",

  highlights: [
    { title: "Google Ads", desc: "Search, Display, Shopping, YouTube" },
    { title: "Meta Ads", desc: "Facebook & Instagram" },
  ],

  deliverTitle: "What We Do",
  deliverItems: [
    "Lead generation funnels (high-intent prospects → qualified leads)",
    "E-commerce sales campaigns (optimize creatives, targeting, funnels)",
    "Funnel building (awareness → conversion → retargeting)",
    "Conversion tracking (advanced tracking for every lead/sale)",
  ],

  forTitle: "Our Performance Philosophy",
  forItems: ["Test → Measure → Optimize → Scale", "Find what’s profitable, improve it, scale it aggressively."],

  capabilitiesTitle: "Our Process",
  capabilitiesItems: [
    "Audit & Strategy – Analyze your business, margins, and audience",
    "Funnel & Offer Design – Structure offers and landing pages",
    "Campaign Build & Launch – Targeting, creatives, tracking",
    "Optimization & Testing – Improve ROAS through testing",
    "Scaling – Increase budgets only on profitable campaigns",
  ],

  processTitle: "What We Optimize For",
  processSteps: [
    { title: "ROAS (Return on Ad Spend)", desc: "" },
    { title: "Cost per acquisition", desc: "" },
    { title: "Conversion rate", desc: "" },
    { title: "Customer lifetime value", desc: "" },
    { title: "Funnel efficiency", desc: "" },
  ],

  chooseTitle: "Who This Is For",
  chooseItems: [
    "E-commerce brands",
    "Service businesses with proven offers",
    "SaaS companies with clear funnels",
    "Businesses ready to scale",
    "Founders serious about ROI",
  ],

  closing:
    "Why ClickOnAdzz: Business-first mindset · Performance before scale · Deep funnel & conversion focus · Transparent reporting · No vanity metrics.\n\nWe don’t just deliver results — we deliver a growth platform.",
},

"content-writing-services": {
  slug: "content-writing-services",
  title: "Content Writing Services",
  subtitle: "High-quality content writing that attracts, engages, and converts.",
  intro:
    "At ClickOnAdzz, we provide high-quality content writing services that help businesses attract, engage, and convert their target audience.\n\nOur content improves search visibility, builds brand authority, and drives measurable growth.\n\nWhether you’re a startup, B2C, B2B, D2C, or ecommerce brand, our strategies support SEO, performance marketing, and long-term brand building across global markets.\n\nWe combine SEO expertise, persuasive storytelling, and audience-focused writing to turn content into a powerful growth asset.",
  ctaText: "Request a Content Strategy Session",

  whyTitle: "Our Content Writing Services",
  whyIntro: "",

  highlights: [
    {
      title: "SEO Content Writing",
      desc:
        "SEO-optimized content designed to improve rankings, organic traffic, and long-term visibility.\n• Website content\n• Landing pages\n• Blog articles\n• Service pages",
    },
    {
      title: "Ecommerce & D2C Content",
      desc:
        "Content that increases conversions and strengthens brand engagement.\n• Product descriptions\n• Category pages\n• Brand storytelling\n• Promotional content",
    },
    {
      title: "B2B Content & Thought Leadership",
      desc:
        "Authority-building content for professional and enterprise audiences.\n• Corporate websites\n• Blogs & articles\n• Case studies & whitepapers\n• LinkedIn content",
    },
    {
      title: "B2C Content Writing",
      desc:
        "Emotion-driven content that connects with consumers.\n• Website copy\n• Blogs & articles\n• Social captions\n• Campaign content",
    },
    {
      title: "Marketing & Ad Copy",
      desc:
        "High-converting copy for performance-driven campaigns.\n• Google & Meta Ads\n• Social campaigns\n• Email marketing\n• Product launches",
    },
  ],

  deliverTitle: "Our Content Writing Framework",
  deliverItems: [
    "Content research & strategy – Industry, competitor, and audience research",
    "SEO & keyword optimization – Search intent, internal linking, and keywords",
    "Conversion-focused writing – Designed to drive action",
    "Performance tracking – Continuous optimization for results",
  ],

  forTitle: "Why Choose ClickOnAdzz?",
  forItems: [
    "Professional content writing agency",
    "Expertise in B2B, B2C, D2C & Ecommerce",
    "SEO + conversion-driven content",
    "Native-quality writing for global audiences",
    "Industry-specific strategies",
    "End-to-end content execution",
  ],

  capabilitiesTitle: "Results We Deliver",
  capabilitiesItems: [
    "Improved organic traffic & rankings",
    "Higher engagement & time on site",
    "Stronger brand authority",
    "More leads & sales",
    "Long-term digital growth",
  ],

  processTitle: "Our Philosophy",
  processSteps: [
    { title: "Content is not an expense — it’s a growth asset", desc: "" },
    { title: "Strategy before writing", desc: "" },
    { title: "SEO + storytelling + conversion working together", desc: "" },
  ],

  chooseTitle: "Outcome",
  chooseItems: [
    "We don’t just write content — we build growth engines.",
  ],

  closing:
    "We don’t just write content — we build growth engines.",
},




};

function SectionTitle({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>

      {/* accent line */}
      <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-cyan-400/80 to-transparent" />

      {sub ? (
        <p className="mt-4 text-white/65 leading-relaxed max-w-4xl">{sub}</p>
      ) : null}
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_55px_rgba(34,211,238,0.14)]">
      {/* top accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400/70 via-white/10 to-transparent opacity-60" />

      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />

      <h3 className="relative text-xl font-bold tracking-tight mb-2">{title}</h3>
      <p className="relative text-white/70 leading-relaxed whitespace-pre-line">
        {desc}
      </p>
    </div>
  );
}

function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid md:grid-cols-2 gap-4 text-white/75">
      {items.map((x) => (
        <li
          key={x}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 transition-all duration-300 hover:border-cyan-400/35 hover:bg-white/[0.035]"
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.14),transparent_60%)]" />

          <div className="relative flex gap-3">
            <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              ✓
            </span>
            <span className="leading-relaxed">{x}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const data = slug ? SERVICE_DATA[slug] : null;

  if (!data) {
    return (
      <main className="min-h-screen bg-[#0b1220] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white/70 mb-4">Service not found.</p>
          <Link
            href="/services"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Back to Services →
          </Link>
        </div>
      </main>
    );
  }

  const processAsBullets = data.processSteps.every((s) => !s.desc?.trim());

  return (
    <main className="relative min-h-screen bg-[#0b1220] text-white overflow-hidden">
      {/* glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute top-[-140px] right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-400/16 blur-[180px]" />
        <div className="absolute bottom-[-240px] left-[-160px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* breadcrumb */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white/55 text-sm mb-6 tracking-wide"
        >
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>{" "}
          <span className="text-white/35 mx-2">/</span>
          <Link href="/services" className="hover:text-cyan-400 transition">
            Services
          </Link>{" "}
          <span className="text-white/35 mx-2">/</span>
          {data.title}
        </motion.p>

        {/* header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-7">
            {data.subtitle}
          </p>

          <p className="text-white/70 leading-relaxed whitespace-pre-line">
            {data.intro}
          </p>

          <div className="mt-10">
            <button className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-black bg-cyan-400 transition hover:scale-[1.03]">
              <span className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <span className="relative">👉 {data.ctaText}</span>
            </button>
          </div>
        </motion.div>

        {/* divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Why */}
        <div className="mt-16">
          <SectionTitle sub={data.whyIntro?.trim() ? data.whyIntro : undefined}>
            {data.whyTitle}
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-7">
            {data.highlights.map((h) => (
              <Card key={h.title} title={h.title} desc={h.desc} />
            ))}
          </div>
        </div>

        {/* Deliver */}
        <div className="mt-20">
          <SectionTitle>{data.deliverTitle}</SectionTitle>
          <BulletGrid items={data.deliverItems} />
        </div>

        {/* For */}
        <div className="mt-20">
          <SectionTitle>{data.forTitle}</SectionTitle>
          <BulletGrid items={data.forItems} />
        </div>

        {/* Capabilities */}
        <div className="mt-20">
          <SectionTitle>{data.capabilitiesTitle}</SectionTitle>
          <BulletGrid items={data.capabilitiesItems} />
        </div>

        {/* Process */}
        <div className="mt-20">
          <SectionTitle>{data.processTitle}</SectionTitle>

          {processAsBullets ? (
            <BulletGrid items={data.processSteps.map((s) => s.title)} />
          ) : (
            <div className="grid md:grid-cols-2 gap-7">
              {data.processSteps.map((s) => (
                <Card key={s.title} title={s.title} desc={s.desc} />
              ))}
            </div>
          )}
        </div>

        {/* Choose */}
        <div className="mt-20">
          <SectionTitle>{data.chooseTitle}</SectionTitle>
          <BulletGrid items={data.chooseItems} />

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7">
            <p className="text-white/85 font-semibold whitespace-pre-line">
              {data.closing}
            </p>
          </div>
        </div>

        {/* back */}
        <div className="mt-16">
          <Link href="/services" className="text-cyan-400 font-semibold hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    </main>
  );
}
