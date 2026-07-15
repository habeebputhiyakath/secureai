"use client";

import React, { useEffect, useRef } from "react";
import {
  Network,
  LayoutGrid,
  IdCard,
  ParkingCircle,
  Brain,
  Video,
  Unlock,
  AlertTriangle,
  TrafficCone,
  Rocket,
  Eye,
  ArrowRight,
} from "lucide-react";
import { FaVideo, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import JourneyMilestones from "../../components/about/Journeymilestones";   
import EcosystemShowcase from "../../components/about/EcosystemShowcase"
import WhyOrganizationsSection from "../../components/about/WhyOrganizationsSection";


const solutions = [
  {
    icon: LayoutGrid,
    label: "SiVMS™",
    title: "Enterprise VMS",
    desc: "A robust, scalable video management software for complex infrastructures.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=Enterprise+VMS",
  },
  {
    icon: IdCard,
    label: "Si.PRO™",
    title: "ANPR",
    desc: "High-accuracy automatic number plate recognition for traffic and logistics.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=ANPR",
  },
  {
    icon: ParkingCircle,
    label: "ParkSi™",
    title: "Smart Parking",
    desc: "IoT-driven parking management with real-time occupancy and billing.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=Smart+Parking",
  },
  {
    icon: Brain,
    label: "CORE ANALYTICS",
    title: "AI Video Analytics",
    desc: "Intelligent behavior recognition, object tracking, and anomaly detection.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=AI+Video+Analytics",
  },
  {
    icon: Video,
    label: "OPTIC SENSING",
    title: "Intelligent Cameras",
    desc: "Edge-processing cameras that analyze data locally for instant response.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=Intelligent+Cameras",
  },
  {
    icon: Unlock,
    label: "SECURE ENTRY",
    title: "Access Control",
    desc: "Biometric and RFID authentication integrated with AI verification.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=Access+Control",
  },
  {
    icon: AlertTriangle,
    label: "PERIMETER SHIELD",
    title: "Intruder Alarms",
    desc: "Zero-false-alarm intrusion detection using multi-spectral sensing.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=Intruder+Alarms",
  },
  {
    icon: TrafficCone,
    label: "SMART FLOW",
    title: "Traffic Monitoring",
    desc: "City-wide monitoring systems for flow optimization and incident alerts.",
    image: "https://placehold.co/1200x800/0f172a/5b9fff?text=Traffic+Monitoring",
  },
];


/* ── Journey & Milestones data ── */
const milestones = [
  { year: "2001", title: "Foundation", desc: "Pioneering AI research in security systems and foundational protocols.", hero: false },
  { year: "2006", title: "Global Expansion", desc: "Operations extended across 120+ countries, establishing a global footprint.", hero: false },
  { year: "2012", title: "SiVMS™ Launch", desc: "Revolutionizing enterprise video management with the first SiVMS platform.", hero: false },
  { year: "2014", title: "AI Integration", desc: "Introduction of advanced neural network analytics into the core ecosystem.", hero: false },
  { year: "2017", title: "Smart Cities", desc: "Implementation of major intelligent infrastructure projects in global hubs.", hero: false },
  { year: "2018", title: "LoRaWAN®", desc: "Launching next-gen low-power, long-range security networks for the future.", hero: true },
];

/* ── Why Choose data ── */
const whyPoints = [
  { num: "01", title: "AI-Powered Intelligence", desc: "Beyond simple motion detection, our systems identify specific events, behaviors, and objects with 99% accuracy." },
  { num: "02", title: "Open Platform Architecture", desc: "Seamlessly integrate with existing hardware and third-party software via our robust API ecosystem." },
  { num: "03", title: "Enterprise Scalability", desc: "From a single office to a global network of smart cities, our cloud-ready architecture grows with your needs." },
  { num: "04", title: "Future-Ready Technology", desc: "Regular OTA updates and modular hardware ensure your security ecosystem never becomes obsolete." },
  { num: "05", title: "Reliable Performance", desc: "Industrial-grade durability with military-standard testing for extreme environments and critical operations." },
  { num: "06", title: "Customer-Centric Approach", desc: "Dedicated solution architects and 24/7 technical support to ensure your operational continuity." },
];

export default function AboutUsPage() {
  const pageRef = useRef(null);

  /* ── Reveal on scroll, matching AboutSection's IntersectionObserver pattern ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("au-vis");
        }),
      { threshold: 0.08 }
    );
    pageRef.current?.querySelectorAll(".au-rev").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .au-page { font-family: 'DM Sans', sans-serif; }
        .au-mono { font-family: 'JetBrains Mono', monospace; }

        /* Reveal */
        .au-rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .au-rev.au-vis { opacity: 1; transform: none; }

        /* Dot grid bg */
        .au-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* Float */
        @keyframes auFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        .au-float { animation: auFloat 3.6s ease-in-out infinite; }

        /* Heading accent underline */
        .au-accent-line { position: relative; display: inline-block; }
        .au-accent-line::after {
          content: '';
          position: absolute; left: 0; bottom: -3px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .au-vis .au-accent-line::after { transform: scaleX(1); }

        .au-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* CTA pill button */
        .au-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          background: #0161FE;
          border: 1.5px solid #0161FE;
          border-radius: 9999px;
          padding: 15px 34px;
          transition: background 0.22s, color 0.22s, border-color 0.22s,
                      transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
        }
        .au-cta-btn:hover {
          background: #ffffff;
          color: #0161FE;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .au-cta-btn:hover svg { transform: translateX(3px); }
        .au-cta-btn svg { transition: transform 0.2s; }

        .au-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0f172a;
          background: rgba(255,255,255,0.6);
          border: 1.5px solid #cbd5e1;
          border-radius: 9999px;
          padding: 15px 34px;
          backdrop-filter: blur(8px);
          transition: background 0.22s, border-color 0.22s, transform 0.22s;
        }
        .au-cta-ghost:hover {
          background: rgba(255,255,255,0.95);
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        /* Ecosystem card */
        .au-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, border-color 0.35s;
        }
        .au-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(1,97,254,0.10);
          border-color: rgba(1,97,254,0.35) !important;
        }
        .au-card:hover .au-card-icon {
          background: #0161FE;
          color: #ffffff;
        }
        .au-card-icon {
          transition: background 0.3s, color 0.3s;
        }

        /* Timeline node pulse */
        @keyframes auPing {
          0%   { transform: scale(1); opacity: 1; }
          75%,100% { transform: scale(2.2); opacity: 0; }
        }
        .au-ping::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 9999px;
          background: #0161FE;
          animation: auPing 1.8s cubic-bezier(0,0,0.2,1) infinite;
        }

        /* Why-choose point hover */
        .au-point:hover { background: #ffffff; box-shadow: 0 6px 24px rgba(0,0,0,0.05); }
        .au-point:hover .au-point-num { color: #0161FE; }
        .au-point-num { transition: color 0.25s; }

        /* Mission/vision card */
        .au-mv-icon {
          width: 64px; height: 64px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.08);
        }
      `}</style>

      <main
        ref={pageRef}
        className="au-page bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-16 scroll-smooth"
      >
        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
      <header className="relative h-[85vh] flex items-center pt-38 pb-26 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
      style={{
        backgroundImage: "url('/about/use.png')",
      }}
    />
    {/* Optional dark overlay for better readability */}
    <div className="absolute inset-0 bg-black/40" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full">
    <div className="max-w-2xl">
      <div className="au-rev inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 au-eyebrow mb-6 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-[#0161FE] animate-pulse" />
        THE FUTURE OF INTELLIGENCE
      </div>

      <h1
        className="au-rev text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight"
        style={{ transitionDelay: "0.08s" }}
      >
        About SecureAAi Systems
      </h1>

      <p
        className="au-rev text-lg text-white/80 mb-10 max-w-xl leading-relaxed"
        style={{ transitionDelay: "0.24s" }}
      >
        SecureAAi represents a paradigm shift moving from simple observation
        to proactive intelligence. We leverage advanced AI algorithms to
        anticipate threats, automate responses, and provide actionable insights
        in real-time.
      </p>

      <div
        className="au-rev flex flex-wrap gap-4"
        style={{ transitionDelay: "0.32s" }}
      >
        <button className="au-cta-btn">
          EXPLORE OUR CORE TECH
          <ArrowRight size={14} />
        </button>

       
      </div>
    </div>
  </div>
</header>

        {/* ══════════════════════════════
            WHO WE ARE
        ══════════════════════════════ */}
       {/* ==========================================
    WHO WE ARE
========================================== */}
<section className="py-24 lg:py-38 bg-white">
  <div className="max-w-7xl mx-auto px-5 md:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <div className="order-2 lg:order-1">

        <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
          <span className="au-accent-line">Who We Are</span>
        </h2>

        <div className="space-y-6">

          <p
            className="au-rev text-lg text-slate-600 leading-relaxed"
            style={{ transitionDelay: "0.08s" }}
          >
            SecureAAi Systems is a technology-driven AI security specialist
            dedicated to revolutionizing how environments are monitored and
            protected. Born from the intersection of high-performance sensing
            and advanced computer vision, we bridge the gap between complex data
            and human safety.
          </p>

          <p
            className="au-rev text-base text-slate-600 leading-relaxed"
            style={{ transitionDelay: "0.16s" }}
          >
            Our team of engineers and data scientists works at the forefront of
            LoRaWAN® and AI sensing technology, creating a unified ecosystem
            where every sensor contributes to a smarter, safer world. From
            large-scale industrial facilities to modern corporate campuses, we
            provide the neural network that powers modern security.
          </p>

          {/* Stats */}
          <div
            className="au-rev grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10"
            style={{ transitionDelay: "0.24s" }}
          >
            {/* Happy Clients */}
            <div className="flex items-center gap-5 group">

              <div className="w-24 h-24 rounded-full bg-[#F5F9FF] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
                <FaVideo className="text-[#5DA8FF] text-[50px]" />
              </div>

              <div>
                <h3 className="text-[48px] lg:text-[52px] font-bold leading-none text-slate-900">
                  <CountUp
                    end={1001}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>

                <p className="mt-2 text-[20px] lg:text-[22px] font-medium text-[#5DA8FF]">
                  Happy Clients
                </p>
              </div>

            </div>

            {/* Projects Done */}
            <div className="flex items-center gap-5 group">

              <div className="w-24 h-24 rounded-full bg-[#F5F9FF] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
                <FaUsers className="text-[#5DA8FF] text-[50px]" />
              </div>

              <div>
                <h3 className="text-[48px] lg:text-[52px] font-bold leading-none text-slate-900">
                  <CountUp
                    end={620}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>

                <p className="mt-2 text-[20px] lg:text-[22px] font-medium text-[#5DA8FF]">
                  Projects Done
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Right Image */}
      <div className="order-1 lg:order-2">

        <div
          className="au-rev relative group"
          style={{ transitionDelay: "0.1s" }}
        >

          <div className="absolute -inset-4 bg-[#0161FE]/5 rounded-3xl group-hover:bg-[#0161FE]/10 transition-colors duration-500" />

          <img
            src="/about/who we are.png"
            alt="Modern smart building interior"
            className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs transition-transform duration-500 group-hover:-translate-y-2">

            <Network
              className="text-[#0161FE] mb-3"
              size={36}
            />

            <p className="text-sm font-medium text-slate-900">
              Integrated AI-IoT Architecture Ready for Scale.
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>

        {/* ══════════════════════════════
            OUR JOURNEY & MILESTONES
        ══════════════════════════════ */}
       <JourneyMilestones milestones={milestones} />
        {/* ══════════════════════════════
            MISSION & VISION
        ══════════════════════════════ */}
       <section className="relative bg-slate-900 py-28 lg:py-40 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
    style={{
      backgroundImage: "url('/about/vision.png')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-slate-900/80" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-700/50 rounded-2xl overflow-hidden">

      {/* Mission */}
      <div className="au-rev bg-slate-900/70 backdrop-blur-sm p-10 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700/50">
        <div className="au-mv-icon mb-6">
          <Rocket className="text-blue-200" size={30} />
        </div>

        <h3 className="text-3xl font-bold text-white mb-6">
          Our Mission
        </h3>

        <p className="text-lg text-slate-200 leading-relaxed">
          To deliver innovative and intelligent security technologies that empower organizations to protect what matters most with unprecedented precision and automated intelligence.
        </p>
      </div>

      {/* Vision */}
      <div
        className="au-rev bg-slate-900/70 backdrop-blur-sm p-10 lg:p-16 flex flex-col justify-center"
        style={{ transitionDelay: "0.12s" }}
      >
        <div className="au-mv-icon mb-6">
          <Eye className="text-blue-200" size={30} />
        </div>

        <h3 className="text-3xl font-bold text-white mb-6">
          Our Vision
        </h3>

        <p className="text-lg text-slate-200 leading-relaxed">
          To become a globally recognized leader in AI-powered security, setting the gold standard for intelligent monitoring through seamless hardware and software integration.
        </p>
      </div>

    </div>
  </div>
</section>
        {/* ══════════════════════════════
            OUR ECOSYSTEM OF SOLUTIONS
      {/* ══════════════════════════════ */}
<section className="au-ecosystem relative py-24 lg:py-42 bg-slate-50 overflow-hidden">
  <div className="absolute inset-0 au-dotgrid opacity-60" />

  <div className="relative max-w-7xl mx-auto px-5 md:px-10">
    <div className="text-center mb-16 lg:mb-20">
      <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
        <span className="au-accent-line">
          Our{" "}
          <span className="bg-gradient-to-r from-[#0161FE] to-[#4d8dff] bg-clip-text text-transparent">
            Ecosystem
          </span>{" "}
          of Solutions
        </span>
      </h2>
      <p className="au-rev text-lg text-slate-600 max-w-2xl mx-auto" style={{ transitionDelay: "0.08s" }}>
        High-performance AI security tailored for enterprise-scale operations.
      </p>
    </div>

    <EcosystemShowcase solutions={solutions} />
  </div>
</section>
        {/* ══════════════════════════════
            WHY CHOOSE SECUREAAI
        ══════════════════════════════ */}
    {/* ══════════════════════════════ */}
<section className="py-24 lg:py-32 bg-slate-100 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-5 md:px-10">
    <WhyOrganizationsSection whyPoints={whyPoints} />
  </div>
</section>

        {/* ══════════════════════════════
            FINAL COMMITMENT
        ══════════════════════════════ */}
       <section className="relative overflow-hidden py-32 lg:py-40 mt-8">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/about/bg.png')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-slate-950/80" />

  {/* Blue Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0161FE]/40 via-slate-950/60 to-slate-950/90" />

  {/* Decorative Blur */}
  <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#0161FE]/20 blur-3xl" />
  <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold tracking-[0.25em] uppercase text-white backdrop-blur-md">
      SecureAAi Systems
    </span>

    <h2 className="mt-8 text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
      Building the Future of
      <br />
      <span className="text-blue-300">
        Intelligent Security
      </span>
    </h2>

   

    <div className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
      <p className="text-sm lg:text-base font-thin uppercase trackin text-white">
        Intelligent Security • Smarter Decisions • Connected Operations
      </p>
    </div>

    <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

      <button className="rounded-full bg-[#0161FE] px-10 py-4 text-lg font-semibold text-white shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
        Get in Touch
      </button>

      <button className="rounded-full border border-white/25 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0161FE]">
        Explore Solutions
      </button>

    </div>

  </div>

</section>
      </main>
    </>
  );
}