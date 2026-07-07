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

/* ── Ecosystem of Solutions data ── */
const solutions = [
  { icon: LayoutGrid, label: "SiVMS™", title: "Enterprise VMS", desc: "A robust, scalable video management software for complex infrastructures." },
  { icon: IdCard, label: "Si.PRO™", title: "ANPR", desc: "High-accuracy automatic number plate recognition for traffic and logistics." },
  { icon: ParkingCircle, label: "ParkSi™", title: "Smart Parking", desc: "IoT-driven parking management with real-time occupancy and billing." },
  { icon: Brain, label: "CORE ANALYTICS", title: "AI Video Analytics", desc: "Intelligent behavior recognition, object tracking, and anomaly detection." },
  { icon: Video, label: "OPTIC SENSING", title: "Intelligent Cameras", desc: "Edge-processing cameras that analyze data locally for instant response." },
  { icon: Unlock, label: "SECURE ENTRY", title: "Access Control", desc: "Biometric and RFID authentication integrated with AI verification." },
  { icon: AlertTriangle, label: "PERIMETER SHIELD", title: "Intruder Alarms", desc: "Zero-false-alarm intrusion detection using multi-spectral sensing." },
  { icon: TrafficCone, label: "SMART FLOW", title: "Traffic Monitoring", desc: "City-wide monitoring systems for flow optimization and incident alerts." },
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
        <header className="relative min-h-[85vh] flex items-center pt-38 pb-26 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgteY21ARtFp4-j1BAVwfq_GQ13RWBWFCKkqjpy0ej8OtVNQHW8kEESoVvKmHJdksiciAOECsQR8Rl-6XexwNTTQWAix3IqiG64pKzVX1JXGAMWnd-uCsU0WQB_kH8gN_B1i4fWq80peO_VkbqjoBGAiO3HtbIcVKkRVaONFQva1kr1t_x3et1dmSnMDl_9CjIrXKBYInUat6qINgIJhlkdKna5hgyEHq0GzBkt-JXSVKk1RUTHtNMXtHSmiHDRfTo7HHfI4e1jmY-')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full">
            <div className="max-w-2xl">
              <div className="au-rev inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0161FE]/10 text-[#0161FE] au-eyebrow mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0161FE] animate-pulse" />
                THE FUTURE OF INTELLIGENCE
              </div>

              <h1
                className="au-rev text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.08] tracking-tight"
                style={{ transitionDelay: "0.08s" }}
              >
                About SecureAAi Systems
              </h1>

              <p
                className="au-rev text-2xl font-semibold text-[#0161FE] mb-8 leading-snug"
                style={{ transitionDelay: "0.16s" }}
              >
                Transforming Security Through Intelligence, Innovation, and Automation
              </p>

              <p
                className="au-rev text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
                style={{ transitionDelay: "0.24s" }}
              >
               SecureAAi represents a paradigm shift moving from simple observation to proactive intelligence. We leverage advanced AI algorithms to anticipate threats, automate responses, and provide actionable insights in real-time.
              </p>

              <div className="au-rev flex flex-wrap gap-4" style={{ transitionDelay: "0.32s" }}>
                <button className="au-cta-btn">
                  EXPLORE OUR CORE TECH
                  <ArrowRight size={14} />
                </button>
                <button className="au-cta-ghost">VIEW ECOSYSTEM</button>
              </div>
            </div>
          </div>
        </header>

        {/* ══════════════════════════════
            WHO WE ARE
        ══════════════════════════════ */}
        <section className="py-24 lg:py-38 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                  <span className="au-accent-line">Who We Are</span>
                </h2>
                <div className="space-y-6">
                  <p className="au-rev text-lg text-slate-600 leading-relaxed" style={{ transitionDelay: "0.08s" }}>
                    SecureAAi Systems is a technology-driven AI security specialist dedicated to revolutionizing how environments are monitored and protected. Born from the intersection of high-performance sensing and advanced computer vision, we bridge the gap between complex data and human safety.
                  </p>
                  <p className="au-rev text-base text-slate-600 leading-relaxed" style={{ transitionDelay: "0.16s" }}>
                    Our team of engineers and data scientists works at the forefront of LoRaWAN® and AI sensing technology, creating a unified ecosystem where every sensor contributes to a smarter, safer world. From large-scale industrial facilities to modern corporate campuses, we provide the neural network that powers modern security.
                  </p>
                  <div className="au-rev grid grid-cols-2 gap-8 pt-6" style={{ transitionDelay: "0.24s" }}>
                    <div>
                      <div className="au-mono text-[#0161FE] text-[40px] font-bold mb-1">500+</div>
                      <div className="text-sm font-medium text-slate-400">Global Projects</div>
                    </div>
                    <div>
                      <div className="au-mono text-[#0161FE] text-[40px] font-bold mb-1">99.9%</div>
                      <div className="text-sm font-medium text-slate-400">System Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="au-rev relative group" style={{ transitionDelay: "0.1s" }}>
                  <div className="absolute -inset-4 bg-[#0161FE]/5 rounded-3xl group-hover:bg-[#0161FE]/10 transition-colors duration-500" />
                  <img
                    alt="Modern smart building interior"
                    className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLtGNGMEjTKEIdfV27dqCuG8_C96XbZu0OU8sTbBo9GZWy_ONf5Bk0CIY9w6ie2wp_udDnMF8pq2-lOrn89QIuikqnL--ShLuvbqmSNTflrSycbd-avy84hTG6J39NZH4nUoQ24kpyp0vQZcBPTQag3BY3oEA3TaAXNS3mGEZmTirhKy_tUyKKiklI0X6PgNoKX7gxC9TclYiSUMCVfdFKGzU2fmiEaImRbvvVmAuw64Rc7XuL5jeeOapisS"
                  />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs transition-transform duration-500 group-hover:-translate-y-2 au-float">
                    <Network className="text-[#0161FE] mb-2" size={34} />
                    <p className="text-sm font-medium text-slate-900">Integrated AI-IoT Architecture Ready for Scale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            OUR JOURNEY & MILESTONES
        ══════════════════════════════ */}
        <section className="au-dotgrid relative py-24 lg:py-32 bg-slate-100 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-20 lg:mb-24">
              <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                <span className="au-accent-line">Our Journey &amp; Milestones</span>
              </h2>
              <p className="au-rev text-lg text-slate-600 max-w-2xl mx-auto" style={{ transitionDelay: "0.08s" }}>
                Two decades of pioneering intelligence and securing the future.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Vertical line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0 hidden md:block"
                style={{ background: "linear-gradient(to bottom, transparent, #0161FE 15%, #0161FE 85%, transparent)" }}
              />

              <div className="space-y-14 md:space-y-4">
                {milestones.map((m, i) => {
                  const leftSide = i % 2 === 0;
                  return (
                    <div key={m.year} className="relative flex flex-col md:flex-row items-center group py-4">
                      <div
                        className={`flex-1 w-full md:w-auto ${leftSide ? "md:pr-16 md:text-right" : "md:pr-16 hidden md:block"}`}
                      >
                        {leftSide && (
                          <div
                            className="au-rev bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-slate-200 border-l-4 border-l-[#0161FE] transition-all duration-300 md:group-hover:-translate-x-2 group-hover:shadow-xl group-hover:border-slate-300"
                            style={{ transitionDelay: `${i * 0.06}s` }}
                          >
                            <div className="au-mono text-[#0161FE] text-4xl font-bold mb-2">{m.year}</div>
                            <h4 className="text-xl font-semibold text-slate-900 mb-3">{m.title}</h4>
                            <p className="text-base text-slate-600 leading-relaxed">{m.desc}</p>
                          </div>
                        )}
                      </div>

                      <div className="relative z-10 flex items-center justify-center my-6 md:my-0 shrink-0">
                        <div
                          className={`relative flex items-center justify-center rounded-full transition-transform group-hover:scale-125 ${
                            m.hero
                              ? "w-12 h-12 bg-[#0161FE] border-4 border-slate-50 shadow-lg shadow-[#0161FE]/40"
                              : "w-10 h-10 bg-white border-4 border-[#0161FE] shadow-[0_0_20px_rgba(1,97,254,0.35)]"
                          }`}
                        >
                          {m.hero ? (
                            <Rocket className="text-white" size={20} />
                          ) : (
                            <div className={`w-3 h-3 rounded-full bg-[#0161FE] relative ${i === 0 ? "au-ping" : ""}`} />
                          )}
                        </div>
                      </div>

                      <div className={`flex-1 w-full md:w-auto ${!leftSide ? "md:pl-16" : "md:pl-16 hidden md:block"}`}>
                        {!leftSide && (
                          <div
                            className={`au-rev bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-slate-200 border-r-4 border-r-[#0161FE] transition-all duration-300 md:group-hover:translate-x-2 group-hover:shadow-xl group-hover:border-slate-300 ${
                              m.hero ? "bg-[#0161FE]/5" : ""
                            }`}
                            style={{ transitionDelay: `${i * 0.06}s` }}
                          >
                            <div className="au-mono text-[#0161FE] text-4xl font-bold mb-2">{m.year}</div>
                            <h4 className="text-xl font-semibold text-slate-900 mb-3">{m.title}</h4>
                            <p className="text-base text-slate-600 leading-relaxed">{m.desc}</p>
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
            MISSION & VISION
        ══════════════════════════════ */}
        <section className="relative bg-slate-900 py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-700/50 rounded-2xl overflow-hidden">
              <div
                className="au-rev bg-slate-900 p-10 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700/50"
              >
                <div className="au-mv-icon mb-6">
                  <Rocket className="text-blue-200" size={30} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-lg text-slate-200 opacity-90 leading-relaxed">
                  To deliver innovative and intelligent security technologies that empower organizations to protect what matters most with unprecedented precision and automated intelligence.
                </p>
              </div>

              <div className="au-rev bg-slate-900 p-10 lg:p-16 flex flex-col justify-center" style={{ transitionDelay: "0.12s" }}>
                <div className="au-mv-icon mb-6">
                  <Eye className="text-blue-200" size={30} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-lg text-slate-200 opacity-90 leading-relaxed">
                  To become a globally recognized leader in AI-powered security, setting the gold standard for intelligent monitoring through seamless hardware and software integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            OUR ECOSYSTEM OF SOLUTIONS
        ══════════════════════════════ */}
        <section className="au-dotgrid relative py-24 lg:py-42 bg-slate-50 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                <span className="au-accent-line">Our Ecosystem of Solutions</span>
              </h2>
              <p className="au-rev text-lg text-slate-600 max-w-2xl mx-auto" style={{ transitionDelay: "0.08s" }}>
                High-performance AI security tailored for enterprise-scale operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="au-rev au-card bg-white/70 backdrop-blur-md border border-slate-200/70 p-8 rounded-2xl"
                    style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
                  >
                    <div className="au-card-icon w-14 h-14 bg-[#0161FE]/10 rounded-xl flex items-center justify-center mb-6 text-[#0161FE]">
                      <Icon size={26} />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-slate-900">{s.title}</h4>
                    <p className="text-base text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            WHY CHOOSE SECUREAAI
        ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-slate-100">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                    <span className="au-accent-line">Why Organizations Choose SecureAAi</span>
                  </h2>
                  <p className="au-rev text-base text-slate-600 mb-8 leading-relaxed" style={{ transitionDelay: "0.08s" }}>
                    We don't just sell security hardware; we provide the architectural foundation for a future-ready, intelligent enterprise.
                  </p>
                  <div className="au-rev p-8 bg-[#0161FE] rounded-2xl text-white" style={{ transitionDelay: "0.16s" }}>
                    <h4 className="text-2xl font-semibold mb-4">Enterprise Grade</h4>
                    <p className="text-sm font-medium opacity-90 leading-relaxed">
                      Designed for critical infrastructure where performance is non-negotiable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {whyPoints.map((p, i) => (
                    <div
                      key={p.num}
                      className="au-rev au-point flex flex-col sm:flex-row gap-6 sm:gap-8 items-start p-6 sm:p-8 rounded-2xl transition-colors border border-transparent group"
                      style={{ transitionDelay: `${i * 0.06}s` }}
                    >
                      <span className="au-point-num au-mono text-[48px] font-bold leading-none text-[#0161FE]/20">
                        {p.num}
                      </span>
                      <div>
                        <h4 className="text-2xl font-semibold text-slate-900 mb-2">{p.title}</h4>
                        <p className="text-base text-slate-600 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            FINAL COMMITMENT
        ══════════════════════════════ */}
        <section className="py-28 lg:py-36 bg-[#0161FE] mt-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
            <h2 className="au-rev text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
              Building the Future of Intelligent Security
            </h2>
            <p className="au-rev text-lg text-white/90 mb-12 leading-relaxed" style={{ transitionDelay: "0.08s" }}>
              Our commitment goes beyond products. We are partners in your digital transformation, helping you harness the power of AI to create safer, more efficient environments for everyone.
            </p>
            <div
              className="au-rev inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-12"
              style={{ transitionDelay: "0.16s" }}
            >
              <p className="au-mono text-sm font-semibold text-white tracking-[0.2em] uppercase">
                Intelligent Security • Smarter Decisions • Connected Operations
              </p>
            </div>
            <div className="au-rev" style={{ transitionDelay: "0.24s" }}>
              <button className="bg-white text-[#0161FE] px-9 py-2 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105">
                Get in Touch With Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}