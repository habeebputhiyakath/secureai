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
  Building2,
  Landmark,
  Stethoscope,
  Factory,
  ShoppingCart,
  PlaneTakeoff,
  Leaf,
  BedDouble,
  Wheat,
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
} from "lucide-react";

/* ── Support Services data ── */
const services = [
  {
    icon: Headset,
    title: "Technical Support",
    points: ["1st & 2nd level troubleshooting", "Multi-channel support desk", "Remote diagnostics"],
    benefit: "Benefit: Rapid issue resolution to minimize downtime.",
  },
  {
    icon: ShieldCheck,
    title: "After-Sales Support",
    points: ["Account management", "Configuration guidance", "Performance optimization"],
    benefit: "Benefit: Maximize value from your technology investment.",
  },
  {
    icon: PackageCheck,
    title: "Warranty & RMA",
    points: ["Advanced replacement program", "Extended warranty options", "Streamlined RMA portal"],
    benefit: "Benefit: Guaranteed hardware reliability and peace of mind.",
  },
  {
    icon: Compass,
    title: "Professional Services",
    points: ["Custom solution architecture", "Site audits & surveys", "System integration consulting"],
    benefit: "Benefit: Tailored deployments designed for specific needs.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    points: ["Certified technician workshops", "Online learning modules", "End-user operation training"],
    benefit: "Benefit: Empowered teams who know the system inside out.",
  },
  {
    icon: RefreshCw,
    title: "Software Updates",
    points: ["Firmware lifecycle management", "Security patch distribution", "AI model enhancement updates"],
    benefit: "Benefit: Future-proof systems with the latest features.",
  },
  {
    icon: Radio,
    title: "Remote Support",
    points: ["Real-time network monitoring", "Virtual system health checks", "Expert screen-sharing assistance"],
    benefit: "Benefit: Instant expert help without waiting for travel.",
    span: "md:col-span-2 lg:col-span-1 lg:col-start-2",
  },
];

/* ── Lifecycle Services data ── */
const lifecycle = [
  { num: "1", title: "Consultation", desc: "Defining project goals and technical requirements." },
  { num: "2", title: "Design", desc: "System architecture and sensor placement planning." },
  { num: "3", title: "Deployment", desc: "On-site installation and hardware calibration." },
  { num: "4", title: "Optimization", desc: "Fine-tuning AI models and network throughput." },
  { num: "5", title: "Support", desc: "Continuous monitoring and incident response." },
  { num: "6", title: "Upgrades", desc: "Scaling and modernizing for future growth." },
];

/* ── Industries data ── */
const industries = [
  { icon: Building2, label: "Smart Cities" },
  { icon: Landmark, label: "Government" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Factory, label: "Industrial" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: PlaneTakeoff, label: "Transportation" },
  { icon: Leaf, label: "Energy" },
  { icon: BedDouble, label: "Hospitality" },
  { icon: Wheat, label: "Agriculture" },
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
    answer: "You can initiate a claim through our unified RMA portal. Simply log in to the Partner Portal, enter the device serial number, and describe the issue. Our team will review the claim within 24 hours.",
  },
  {
    question: "Are software updates included in the standard warranty?",
    answer: "Yes, critical security patches and maintenance firmware updates are provided free of charge for the duration of the product's support lifecycle. Major feature upgrades may require an active service contract.",
  },
  {
    question: "Does SecureAAi offer on-site maintenance?",
    answer: "On-site maintenance is available through our Professional Services tier and authorized certified partners. We can arrange for regional technicians to assist with large-scale deployment tasks.",
  },
  {
    question: "What is the typical response time for support tickets?",
    answer: "For standard tickets, we aim to respond within 4-8 business hours. For emergency service level agreements (SLAs), response times can be as low as 1 hour, 24/7.",
  },
];

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .sp-page { font-family: 'DM Sans', sans-serif; }
        .sp-mono { font-family: 'JetBrains Mono', monospace; }

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
          border-radius: 12px;
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
          border-radius: 12px;
          padding: 13px 26px;
          backdrop-filter: blur(8px);
          transition: background 0.22s, border-color 0.22s, transform 0.22s;
        }
        .sp-cta-ghost:hover {
          background: rgba(255,255,255,0.95);
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        /* Service card */
        .sp-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, border-color 0.35s;
        }
        .sp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(1,97,254,0.10);
          border-color: rgba(1,97,254,0.35) !important;
        }
        .sp-card:hover .sp-card-icon {
          background: #0161FE;
          color: #ffffff;
        }
        .sp-card-icon { transition: background 0.3s, color 0.3s; }

        /* Lifecycle node */
        .sp-node {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .sp-node:hover { transform: scale(1.08); box-shadow: 0 10px 24px rgba(1,97,254,0.35); }

        /* Industry tile */
        .sp-industry:hover { background: #ffffff; border-color: #e2e8f0; }
        .sp-industry:hover .sp-industry-icon { color: #0161FE; transform: translateY(-2px); }
        .sp-industry-icon { transition: color 0.25s, transform 0.25s; }

        /* Why choose icon */
        .sp-why:hover .sp-why-icon { transform: translateY(-3px); }
        .sp-why-icon { transition: transform 0.25s; }

        /* FAQ */
        .sp-faq-btn:hover { background: rgba(1,97,254,0.03); }
      `}</style>

      <main ref={pageRef} className="sp-page bg-slate-50 text-slate-900 pt-16">
        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section className="relative h-[620px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNr_k-XQEqaiB7jqZM2MaMk9VfVSAHB4z7lgl9qdLFIg3QfaMjaqFKeCwf_aCvjOiF2M3MhwU9w9C7t0nKrigtZDqCSvsZ9felj4niB-4KuhJpabwvcNkeuNvzgKol69Ad5X0in0zG114ek-bc-Cc8Hv91D4iMfyMH5YB878t0FpSQR8EDk5vrQW1h0oUk0KqzIhr_MWy-2Ck2V4wjE-zsgnmmrVZsM_e-rn8HpPdnx6ZCEyiMum_aCE8b5qkxsEs4DnFAu_324PLE')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full">
            <div className="max-w-2xl space-y-5">
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

              <div className="sp-rev flex flex-wrap gap-4 pt-4" style={{ transitionDelay: "0.24s" }}>
                <button className="sp-cta-btn">
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
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                  <span className="sp-accent-line">Customer Success is Our Priority</span>
                </h2>
                <p className="sp-rev text-lg text-slate-600 leading-relaxed" style={{ transitionDelay: "0.08s" }}>
                  Our commitment goes beyond hardware delivery. We partner with you to ensure that every sensor, camera, and AI algorithm delivers tangible value. From initial configuration to complex system troubleshooting, our team of expert engineers is dedicated to your continuous operational uptime.
                </p>
                <div className="sp-rev grid grid-cols-2 gap-4 pt-4" style={{ transitionDelay: "0.16s" }}>
                  <div className="p-5 border-l-4 border-[#0161FE] bg-slate-50 rounded-r-xl">
                    <p className="sp-mono text-2xl font-bold text-[#0161FE]">99.8%</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1">Uptime Efficiency</p>
                  </div>
                  <div className="p-5 border-l-4 border-[#0161FE] bg-slate-50 rounded-r-xl">
                    <p className="sp-mono text-2xl font-bold text-[#0161FE]">24/7</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1">Technical Hotline</p>
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

        {/* ══════════════════════════════
            OUR SUPPORT SERVICES
        ══════════════════════════════ */}
        <section className="sp-dotgrid relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-16 lg:mb-20 space-y-3">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Our Support Services</span>
              </h2>
              <p className="sp-rev text-slate-600 max-w-2xl mx-auto" style={{ transitionDelay: "0.08s" }}>
                Customized support solutions designed to meet the unique challenges of your AI-driven security ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className={`sp-rev sp-card p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm ${s.span || ""}`}
                    style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
                  >
                    <div className="sp-card-icon w-12 h-12 rounded-xl bg-[#0161FE]/10 flex items-center justify-center text-[#0161FE] mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                    <ul className="space-y-3 mb-6 text-slate-600">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <CheckCircle2 className="text-[#0161FE] shrink-0" size={18} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs font-semibold text-[#0161FE]">{s.benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            LIFECYCLE SERVICES FLOW
        ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-16 lg:mb-20 space-y-2">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Lifecycle Services</span>
              </h2>
              <p className="sp-rev text-slate-600" style={{ transitionDelay: "0.08s" }}>
                Comprehensive support through every phase of your technology journey.
              </p>
            </div>

            <div className="relative flex flex-col md:flex-row justify-between gap-12">
              <div
                className="absolute top-[24px] left-[50px] right-[50px] h-[2px] hidden md:block"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #cbd5e1 0, #cbd5e1 8px, transparent 8px, transparent 16px)",
                  zIndex: 0,
                }}
              />

              {lifecycle.map((step, i) => (
                <div
                  key={step.num}
                  className="sp-rev relative z-10 flex flex-col items-center text-center space-y-4 md:w-48"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="sp-node w-12 h-12 rounded-full bg-[#0161FE] text-white flex items-center justify-center font-bold shadow-md sp-mono">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            INDUSTRIES WE SUPPORT
        ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-16 space-y-2">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Industries We Support</span>
              </h2>
              <p className="sp-rev text-slate-600" style={{ transitionDelay: "0.08s" }}>
                Tailored security and IoT ecosystems across global sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="sp-rev sp-industry flex flex-col items-center gap-4 p-6 rounded-xl transition-all border border-transparent hover:shadow-sm"
                    style={{ transitionDelay: `${(i % 5) * 0.06}s` }}
                  >
                    <Icon className="sp-industry-icon text-[#0161FE]" size={36} />
                    <span className="text-sm font-semibold text-slate-900">{ind.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════ */}
        <section className="sp-dotgrid-dark relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-5 md:px-10">
            <div className="mb-16">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold">
                <span className="sp-accent-line">Why Choose SecureAAi Support?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {whyChoose.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="sp-rev sp-why space-y-4" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <Icon className="sp-why-icon text-blue-300" size={30} />
                    <h5 className="text-xl font-bold">{w.title}</h5>
                    <p className="text-xs font-semibold text-slate-300 leading-relaxed">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            FAQ
        ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-3xl mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="sp-rev text-3xl lg:text-4xl font-bold text-slate-900">
                <span className="sp-accent-line">Frequently Asked Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
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
        <section className="pb-24 lg:pb-32 px-5 md:px-10">
          <div className="sp-rev max-w-7xl mx-auto rounded-3xl bg-[#0161FE] text-white p-12 md:p-20 overflow-hidden relative shadow-2xl">
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