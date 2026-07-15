"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Headset,
  CheckCircle2,
  ShieldCheck,
  PackageCheck,
  Compass,
  GraduationCap,
  RefreshCw,
  Radio,
  Gauge,
  Wrench,
  Globe,
  Sparkles,
  Lock,
  ChevronDown,
  FileText,
  Download,
  MessageCircle,
  LifeBuoy,
  MessageSquare,
  PenTool,
  Truck,
  SlidersHorizontal,
  TrendingUp,
  Activity,
} from "lucide-react";

/* ── Support Services data ── */
const services = [
  {
    icon: Headset,
    title: "Technical Support",
    points: ["1st & 2nd level troubleshooting", "Multi-channel support desk", "Remote diagnostics"],
    benefit: "Rapid issue resolution to minimize downtime.",
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "After-Sales Support",
    points: ["Account management", "Configuration guidance", "Performance optimization"],
    benefit: "Maximize value from your technology investment.",
  },
  {
    icon: PackageCheck,
    title: "Warranty & RMA",
    points: ["Advanced replacement program", "Extended warranty options", "Streamlined RMA portal"],
    benefit: "Guaranteed hardware reliability and peace of mind.",
  },
  {
    icon: Compass,
    title: "Professional Services",
    points: ["Custom solution architecture", "Site audits & surveys", "System integration consulting"],
    benefit: "Tailored deployments designed for specific needs.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    points: ["Certified technician workshops", "Online learning modules", "End-user operation training"],
    benefit: "Empowered teams who know the system inside out.",
  },
  {
    icon: RefreshCw,
    title: "Software Updates",
    points: ["Firmware lifecycle management", "Security patch distribution", "AI model enhancement updates"],
    benefit: "Future-proof systems with the latest features.",
  },
  {
    icon: Radio,
    title: "Remote Support",
    points: ["Real-time network monitoring", "Virtual system health checks", "Expert screen-sharing assistance"],
    benefit: "Instant expert help without waiting for travel.",
    span: "lg:col-span-2",
  },
];

/* ── Lifecycle Services data ── */
const lifecycle = [
  { num: "1", title: "Consultation", desc: "Defining project goals and technical requirements.", icon: MessageSquare },
  { num: "2", title: "Design", desc: "System architecture and sensor placement planning.", icon: PenTool },
  { num: "3", title: "Deployment", desc: "On-site installation and hardware calibration.", icon: Truck },
  { num: "4", title: "Optimization", desc: "Fine-tuning AI models and network throughput.", icon: SlidersHorizontal },
  { num: "5", title: "Support", desc: "Continuous monitoring and incident response.", icon: LifeBuoy },
  { num: "6", title: "Upgrades", desc: "Scaling and modernizing for future growth.", icon: TrendingUp },
];

/* ── Why Choose Us data ── */
const whyChoose = [
  { icon: Gauge, title: "Rapid Response", desc: "Industry-leading initial response times for critical tickets." },
  { icon: Wrench, title: "Expert Led", desc: "Direct access to L3 engineers and product developers." },
  { icon: Globe, title: "Global Reach", desc: "Localized support teams across 5 continents." },
  { icon: Sparkles, title: "AI Proactive", desc: "Proactive diagnostic tools identify issues before they fail." },
  { icon: Lock, title: "Secure Access", desc: "ISO-certified support protocols ensuring data privacy." },
];

/* ── FAQ data ── */
const faqs = [
  {
    question: "How do I initiate a hardware warranty claim?",
    answer:
      "You can initiate a claim through our unified RMA portal. Simply log in to the Partner Portal, enter the device serial number, and describe the issue. Our team will review the claim within 24 hours.",
  },
  {
    question: "Are software updates included in the standard warranty?",
    answer:
      "Yes, critical security patches and maintenance firmware updates are provided free of charge for the duration of the product's support lifecycle. Major feature upgrades may require an active service contract.",
  },
  {
    question: "Does SecureAAi offer on-site maintenance?",
    answer:
      "On-site maintenance is available through our Professional Services tier and authorized certified partners. We can arrange for regional technicians to assist with large-scale deployment tasks.",
  },
  {
    question: "What is the typical response time for support tickets?",
    answer:
      "For standard tickets, we aim to respond within 4-8 business hours. For emergency service level agreements (SLAs), response times can be as low as 1 hour, 24/7.",
  },
];

/* ── Live activity bars for the featured card ── */
const BAR_COUNT = 24;

function LiveWave() {
  const [bars, setBars] = useState(() => Array.from({ length: BAR_COUNT }, () => 18 + Math.random() * 60));

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => prev.map((v) => Math.max(14, Math.min(88, v + (Math.random() - 0.5) * 40))));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end gap-[3px] h-12">
      {bars.map((h, i) => (
        <span
          key={i}
          className="sp-bar w-[3px] rounded-full bg-white/70"
          style={{ height: `${h}%`, transitionDelay: `${i * 12}ms` }}
        />
      ))}
    </div>
  );
}

function TicketTicker() {
  const [count, setCount] = useState(1284);
  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + Math.round(Math.random() * 3)), 2600);
    return () => clearInterval(id);
  }, []);
  return <span className="sp-mono tabular-nums">{count.toLocaleString()}</span>;
}

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  /* ── Reveal on scroll, matching AboutSection's IntersectionObserver pattern ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("sp-vis");
        }),
      { threshold: 0.08 }
    );
    pageRef.current?.querySelectorAll(".sp-rev").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── Cursor-tracking spotlight for the service cards (direct DOM write, no re-render) ── */
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .sp-page { font-family: 'DM Sans', sans-serif; }
        .sp-mono { font-family: 'JetBrains Mono', monospace; }

        /* Section rhythm — one consistent scale used everywhere */
        .sp-section { padding-top: 6.5rem; padding-bottom: 6.5rem; }
        @media (min-width: 768px) { .sp-section { padding-top: 8rem; padding-bottom: 8rem; } }
        @media (min-width: 1024px) { .sp-section { padding-top: 5.5rem; padding-bottom: 5.5rem; } }

        .sp-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(15,23,42,0.09) 20%, rgba(15,23,42,0.09) 80%, transparent);
        }
        .sp-divider-dark {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent);
        }

        /* Reveal */
        .sp-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .sp-rev.sp-vis { opacity: 1; transform: none; }

        /* Dot grid bg */
        .sp-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }
        .sp-dotgrid-dark::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .sp-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .sp-accent-line { position: relative; display: inline-block; }
        .sp-accent-line::after {
          content: '';
          position: absolute; left: 0; bottom: -3px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .sp-vis .sp-accent-line::after { transform: scaleX(1); }

        /* CTA buttons */
        .sp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 32px;
          padding: 13px 26px;
          transition: background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
        }
        .sp-cta-btn:hover {
          background: #0050d6;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(1,97,254,0.28);
        }
        .sp-cta-btn:hover svg { transform: translateX(3px); }
        .sp-cta-btn svg { transition: transform 0.2s; }

        .sp-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0161FE;
          background: rgba(255,255,255,0.6);
          border: 1.5px solid #cbd5e1;
          border-radius: 32px;
          padding: 13px 26px;
          backdrop-filter: blur(8px);
          transition: background 0.22s, border-color 0.22s, transform 0.22s;
        }
        .sp-cta-ghost:hover {
          background: rgba(255,255,255,0.95);
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        /* ── Support Services — bento grid ── */
        .sp-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) { .sp-bento { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .sp-bento { grid-template-columns: repeat(3, 1fr); gap: 1.75rem; } }

        .sp-service-card {
          position: relative;
          border-radius: 22px;
          padding: 2.25rem;
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.45s;
        }
        .sp-service-card:hover { transform: translateY(-7px); }

        /* standard card */
        .sp-service-card.is-plain {
          background: #ffffff;
          border: 1px solid rgba(15,23,42,0.08);
          box-shadow: 0 1px 2px rgba(15,23,42,0.04);
        }
        .sp-service-card.is-plain:hover {
          box-shadow: 0 24px 48px -12px rgba(1,97,254,0.18);
          border-color: rgba(1,97,254,0.28);
        }
        /* cursor spotlight, plain cards only */
        .sp-service-card.is-plain::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(1,97,254,0.09), transparent 62%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .sp-service-card.is-plain:hover::before { opacity: 1; }

        /* featured card */
        .sp-service-card.is-featured {
          background: linear-gradient(155deg, #04122f 0%, #072459 46%, #0161FE 100%);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          box-shadow: 0 1px 2px rgba(4,18,47,0.2);
        }
        .sp-service-card.is-featured:hover {
          box-shadow: 0 30px 60px -14px rgba(4,18,47,0.55);
        }
        .sp-service-card.is-featured::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px);
          background-size: 22px 22px;
          -webkit-mask-image: radial-gradient(420px circle at var(--mx, 20%) var(--my, 20%), black, transparent 70%);
          mask-image: radial-gradient(420px circle at var(--mx, 20%) var(--my, 20%), black, transparent 70%);
          transition: opacity 0.3s;
        }
        .sp-service-card.is-featured::after {
          content: '';
          position: absolute; right: -60px; bottom: -60px; z-index: 0;
          width: 240px; height: 240px; border-radius: 999px;
          background: radial-gradient(circle, rgba(93,157,255,0.45), transparent 70%);
          filter: blur(8px);
        }

        .sp-service-content { position: relative; z-index: 1; }

        .sp-card-icon {
          width: 52px; height: 52px;
          border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(1,97,254,0.1);
          color: #0161FE;
          margin-bottom: 1.6rem;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.35s, color 0.35s;
        }
        .is-featured .sp-card-icon { background: rgba(255,255,255,0.14); color: #fff; }
        .sp-service-card:hover .sp-card-icon { transform: rotate(-8deg) scale(1.08); }
        .is-plain:hover .sp-card-icon { background: #0161FE; color: #fff; }

        /* radar ping on the icon, triggered on hover */
        .sp-card-icon::before,
        .sp-card-icon::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 15px;
          border: 1.5px solid rgba(1,97,254,0.55);
          opacity: 0;
          transform: scale(1);
        }
        .is-featured .sp-card-icon::before,
        .is-featured .sp-card-icon::after {
          border-color: rgba(255,255,255,0.55);
        }
        .sp-service-card:hover .sp-card-icon::before { animation: sp-ping 1.5s cubic-bezier(0.22,1,0.36,1) infinite; }
        .sp-service-card:hover .sp-card-icon::after { animation: sp-ping 1.5s cubic-bezier(0.22,1,0.36,1) infinite 0.5s; }
        @keyframes sp-ping {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        .sp-service-title { font-size: 1.3rem; font-weight: 700; margin-bottom: 1.1rem; letter-spacing: -0.01em; }

        .sp-point-list { display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem; }
        .sp-point {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.9rem;
          color: #475569;
        }
        .is-featured .sp-point { color: rgba(255,255,255,0.82); }
        .sp-point-dot {
          width: 6px; height: 6px; border-radius: 999px;
          background: #0161FE;
          flex-shrink: 0;
          transform: scale(0);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .is-featured .sp-point-dot { background: #ffffff; }
        .sp-vis .sp-point-dot { transform: scale(1); }

        .sp-benefit-row {
          display: flex; align-items: center; gap: 0.55rem;
          padding-top: 1.35rem;
          border-top: 1px solid rgba(15,23,42,0.08);
        }
        .is-featured .sp-benefit-row { border-top-color: rgba(255,255,255,0.16); }
        .sp-benefit-text { font-size: 0.78rem; font-weight: 600; color: #0161FE; line-height: 1.4; }
        .is-featured .sp-benefit-text { color: #d7e6ff; }

        /* live pulse strip on the featured card */
        .sp-live-dot {
          width: 7px; height: 7px; border-radius: 999px; background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74,222,128,0.6);
          animation: sp-live-pulse 2s infinite;
        }
        @keyframes sp-live-pulse {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); }
          70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        .sp-bar { transition: height 0.9s cubic-bezier(0.22,1,0.36,1); }

        /* Lifecycle node */
        .sp-node {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .sp-node:hover { transform: scale(1.08); box-shadow: 0 10px 24px rgba(1,97,254,0.35); }

        /* Lifecycle timeline v2 */
        .sp-lifeline-track {
          background: repeating-linear-gradient(to bottom, #cbd5e1 0, #cbd5e1 6px, transparent 6px, transparent 14px);
        }
        .sp-lifeline-fill {
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 1.7s cubic-bezier(0.22,1,0.36,1) 0.1s;
        }
        .sp-vis .sp-lifeline-fill { transform: scaleY(1); }

        .sp-node-pop {
          transform: scale(0.35) rotate(-8deg);
          opacity: 0;
          transition: transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s,
                      opacity 0.4s ease 0.2s;
        }
        .sp-rev.sp-vis .sp-node-pop { transform: scale(1) rotate(0deg); opacity: 1; }

        .sp-timeline-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, border-color 0.35s;
        }
        .sp-timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(1,97,254,0.12);
          border-color: rgba(1,97,254,0.3);
        }

        /* Why choose icon */
        .sp-why {
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .sp-why:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }
        .sp-why:hover .sp-why-icon { transform: translateY(-3px); }
        .sp-why-icon { transition: transform 0.25s; }

        /* FAQ */
        .sp-faq-btn:hover { background: rgba(1,97,254,0.03); }

        @media (prefers-reduced-motion: reduce) {
          .sp-rev, .sp-rev.sp-vis, .sp-service-card, .sp-card-icon, .sp-node-pop, .sp-lifeline-fill, .sp-bar {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <main ref={pageRef} className="sp-page bg-slate-50 text-slate-900 pt-16">
        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden py-20 md:py-0">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/support/support.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-10/90 via-slate-50/70 to-slate-50/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-12 w-full">
            <div className="max-w-2xl space-y-6">
              <span className="sp-rev inline-block px-3 py-1 bg-[#0161FE]/10 text-[#0161FE] sp-eyebrow rounded-full">
                GLOBAL SERVICES
              </span>

              <h1
                className="sp-rev text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
                style={{ transitionDelay: "0.08s" }}
              >
                Support &amp; Services: Dedicated Support for Reliable Security Operations
              </h1>

              <p className="sp-rev text-lg text-slate-600 leading-relaxed" style={{ transitionDelay: "0.16s" }}>
                At SecureAAi Systems, we believe that exceptional products are only part of the solution. Our comprehensive service ecosystem ensures your IoT and security infrastructure operates at peak performance throughout its lifecycle.
              </p>

              <div className="sp-rev flex flex-wrap gap-4 pt-6" style={{ transitionDelay: "0.24s" }}>
                <button className="sp-cta-btn ">
                  Explore Services <ArrowRight size={16} />
                </button>
                <button className="sp-cta-ghost">Submit a Ticket</button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            CUSTOMER SUCCESS
        ══════════════════════════════ */}
        <section className="sp-section bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-14 lg:gap-20">
              <div className="flex-1 space-y-6">
                <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                  <span className="sp-accent-line">Customer Success is Our Priority</span>
                </h2>
                <p className="sp-rev text-lg text-slate-600 leading-relaxed" style={{ transitionDelay: "0.08s" }}>
                  Our commitment goes beyond hardware delivery. We partner with you to ensure that every sensor, camera, and AI algorithm delivers tangible value. From initial configuration to complex system troubleshooting, our team of expert engineers is dedicated to your continuous operational uptime.
                </p>
                <div className="sp-rev grid grid-cols-2 gap-5 pt-4" style={{ transitionDelay: "0.16s" }}>
                  <div className="p-5 border-l-4 border-[#0161FE] bg-slate-50 rounded-r-xl">
                    <p className="sp-mono text-2xl font-bold text-[#0161FE]">99.8%</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1.5">Uptime Efficiency</p>
                  </div>
                  <div className="p-5 border-l-4 border-[#0161FE] bg-slate-50 rounded-r-xl">
                    <p className="sp-mono text-2xl font-bold text-[#0161FE]">24/7</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1.5">Technical Hotline</p>
                  </div>
                </div>
              </div>

              <div className="sp-rev flex-1 relative w-full" style={{ transitionDelay: "0.1s" }}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    className="w-full h-auto aspect-video object-cover"
                    alt="Customer success engineers"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbJX39QuX2OIhdhWU7CKGvXyWio9Bk5AswWPzo84ECBfqCfypIWFeDDj1VwZdU6BeHaAd4dgXc9yeZkfxCII0nM45I0qSMxo-yT50uG2rrJkxIV5DqgZ5MubT2ArtRJ4CfiwbzXy1TlcvvAWlgKsQCGsyg5DIjAej0omz0vUhk6GWMjhEwvEaGEGx5i5SsNQmMD5QoVeg3lA3vf289gswdy7NPktVJKfb9ah5IgIXbYCIfDSirNyh2z07ZwSge4T88a9VzEx9So1aQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sp-divider" />

        {/* ══════════════════════════════
            OUR SUPPORT SERVICES — animated bento grid
        ══════════════════════════════ */}
        <section className="sp-dotgrid relative sp-section bg-slate-50 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
            <div className="text-center mb-16 lg:mb-20 space-y-4">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Our Support Services</span>
              </h2>
              <p className="sp-rev text-slate-600 max-w-2xl mx-auto" style={{ transitionDelay: "0.08s" }}>
                Customized support solutions designed to meet the unique challenges of your AI-driven security ecosystem.
              </p>
            </div>

            <div className="sp-bento">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    onMouseMove={handleCardMove}
                    className={`sp-rev sp-service-card ${s.featured ? "is-featured" : "is-plain"} ${s.span || ""}`}
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    <div className="sp-service-content">
                      <div className="sp-card-icon">
                        <Icon size={24} />
                      </div>

                      <h3 className="sp-service-title">{s.title}</h3>

                      <ul className="sp-point-list">
                        {s.points.map((pt) => (
                          <li key={pt} className="sp-point">
                            <span className="sp-point-dot" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {s.featured ? (
                        <>
                          <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2">
                              <span className="sp-live-dot" />
                              <span className="sp-mono text-[11px] font-semibold tracking-wide text-white/85">
                                LIVE NETWORK ACTIVITY
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-white/70">
                              Tickets resolved: <TicketTicker />
                            </span>
                          </div>
                          <LiveWave />
                          <div className="sp-benefit-row mt-6">
                            <Activity size={15} className="text-white/80 shrink-0" />
                            <p className="sp-benefit-text">{s.benefit}</p>
                          </div>
                        </>
                      ) : (
                        <div className="sp-benefit-row">
                          <CheckCircle2 size={15} className="text-[#0161FE] shrink-0" />
                          <p className="sp-benefit-text">{s.benefit}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="sp-divider" />

        {/* ══════════════════════════════
            LIFECYCLE SERVICES FLOW
        ══════════════════════════════ */}
        <section className="sp-section bg-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
            <div className="text-center mb-16 lg:mb-20 space-y-3">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Lifecycle Services</span>
              </h2>
              <p className="sp-rev text-slate-600" style={{ transitionDelay: "0.08s" }}>
                Comprehensive support through every phase of your technology journey.
              </p>
            </div>

            <div className="sp-rev relative">
              {/* center rail: dashed track + animated blue fill, desktop only */}
              <div className="sp-lifeline-track absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] hidden md:block" />
              <div
                className="sp-lifeline-fill absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] hidden md:block rounded-full"
                style={{ background: "linear-gradient(to bottom, #0161FE, #5b9fff)" }}
              />

              <div className="space-y-10 md:space-y-16">
                {lifecycle.map((step, i) => {
                  const Icon = step.icon;
                  const isEven = i % 2 === 0;
                  return (
                    <div key={step.num} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
                      {/* mobile: icon + copy side by side */}
                      <div className="flex md:hidden items-start gap-4">
                        <div className="sp-node-pop shrink-0 w-12 h-12 rounded-full bg-[#0161FE] text-white flex items-center justify-center shadow-md">
                          <Icon size={20} />
                        </div>
                        <div className="pt-1">
                          <p className="sp-mono text-[10px] font-bold text-[#0161FE] mb-1">STEP {step.num}</p>
                          <h4 className="font-bold text-slate-900 mb-1.5">{step.title}</h4>
                          <p className="text-xs font-semibold text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>

                      {/* desktop: left slot */}
                      <div className={`hidden md:flex ${isEven ? "justify-end" : ""}`}>
                        {isEven && (
                          <div className="sp-timeline-card bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6 max-w-sm text-right">
                            <p className="sp-mono text-[10px] font-bold text-[#0161FE] mb-1.5">STEP {step.num}</p>
                            <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-xs font-semibold text-slate-600 leading-relaxed">{step.desc}</p>
                          </div>
                        )}
                      </div>

                      {/* desktop: center node */}
                      <div className="hidden md:flex flex-col items-center relative z-10">
                        <div className="sp-node sp-node-pop w-14 h-14 rounded-full bg-[#0161FE] text-white flex items-center justify-center shadow-lg">
                          <Icon size={22} />
                        </div>
                      </div>

                      {/* desktop: right slot */}
                      <div className="hidden md:flex">
                        {!isEven && (
                          <div className="sp-timeline-card bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6 max-w-sm">
                            <p className="sp-mono text-[10px] font-bold text-[#0161FE] mb-1.5">STEP {step.num}</p>
                            <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-xs font-semibold text-slate-600 leading-relaxed">{step.desc}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════ */}
        <section className="sp-dotgrid-dark relative sp-section bg-slate-900 text-white overflow-hidden">
          <div className="relative max-w-7xl  mx-auto px-5 md:px-10 lg:px-12">
            <div className="mb-16 lg:mb-20">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold">
                <span className="sp-accent-line">Why Choose SecureAAi Support?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
              {whyChoose.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.title}
                    className="sp-rev sp-why p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <Icon className="sp-why-icon text-blue-300" size={30} />
                    <h5 className="text-xl font-bold">{w.title}</h5>
                    <p className="text-xs font-semibold text-slate-300 leading-relaxed">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="sp-divider" />

        {/* ══════════════════════════════
            FAQ
        ══════════════════════════════ */}
        <section className="sp-section bg-slate-50">
          <div className="max-w-3xl mx-auto px-5 md:px-10">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Frequently Asked Questions</span>
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="sp-rev bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="sp-faq-btn w-full flex justify-between items-center gap-4 p-6 text-left focus:outline-none transition-colors"
                  >
                    <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180 text-[#0161FE]" : ""
                      }`}
                      size={22}
                    />
                  </button>

                  <div
                    className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            NEED ASSISTANCE CTA
        ══════════════════════════════ */}
        <section className="pb-28 lg:pb-36 px-5 md:px-10 lg:px-12">
          <div className="sp-rev max-w-7xl mx-auto rounded-3xl bg-[#0161FE] text-white p-10 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end overflow-hidden">
              <LifeBuoy size={400} />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">Need Assistance?</h2>
              <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
                Our dedicated support experts are standing by to assist you with any technical or operational requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-4">
                <button className="bg-white text-[#0161FE] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-md">
                  <Headset size={20} /> Contact Support
                </button>
                <button className="bg-[#3d82fe] border border-white/30 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3d82fe]/80 transition-all shadow-md">
                  <FileText size={20} /> Service Request
                </button>
                <button className="bg-[#3d82fe] border border-white/30 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3d82fe]/80 transition-all shadow-md">
                  <Download size={20} /> Download Resources
                </button>
                <button className="bg-[#3d82fe] border border-white/30 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3d82fe]/80 transition-all shadow-md">
                  <MessageCircle size={20} /> Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}