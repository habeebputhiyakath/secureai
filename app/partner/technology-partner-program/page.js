'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────
   Icon set — real inline SVGs (stroke style
   matched to AboutSection's arrow icon:
   currentColor, strokeWidth 2.5, round caps)
───────────────────────────────────────── */
const Icon = {
  chevronRight: (p) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  ),
  arrowRight: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  building: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="9" y1="6" x2="9" y2="6.01" />
      <line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" />
      <line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" />
      <line x1="15" y1="14" x2="15" y2="14.01" />
      <line x1="10" y1="22" x2="10" y2="18" />
      <line x1="14" y1="22" x2="14" y2="18" />
    </svg>
  ),
  people: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  hub: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="4" cy="5" r="1.8" />
      <circle cx="20" cy="5" r="1.8" />
      <circle cx="4" cy="19" r="1.8" />
      <circle cx="20" cy="19" r="1.8" />
      <line x1="10.2" y1="10.2" x2="5.3" y2="6.3" />
      <line x1="13.8" y1="10.2" x2="18.7" y2="6.3" />
      <line x1="10.2" y1="13.8" x2="5.3" y2="17.7" />
      <line x1="13.8" y1="13.8" x2="18.7" y2="17.7" />
    </svg>
  ),
  check: (p) => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8.5 12.5 11 15 15.5 9.5" />
    </svg>
  ),
  insights: (p) => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),
  router: (p) => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="14" width="20" height="7" rx="1.5" />
      <line x1="6.5" y1="17.5" x2="6.51" y2="17.5" />
      <line x1="10.5" y1="17.5" x2="10.5" y2="17.5" />
      <path d="M8 10a4 4 0 0 1 8 0" />
      <path d="M5 7a8 8 0 0 1 14 0" />
    </svg>
  ),
  gift: (p) => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="8" width="18" height="4" />
      <rect x="4" y="12" width="16" height="9" />
      <line x1="12" y1="8" x2="12" y2="21" />
      <path d="M12 8c-1.5-4-6-4.5-6-1.5C6 8 8.5 8 12 8Z" />
      <path d="M12 8c1.5-4 6-4.5 6-1.5C18 8 15.5 8 12 8Z" />
    </svg>
  ),
  clipboard: (p) => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="16" y2="15" />
    </svg>
  ),
  handshake: (p) => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 12h4l3-3 3 3 3-3 3 3h4" />
      <path d="M6 12v4l4 4 2-2" />
      <path d="M18 12v4l-4 4-1.5-1.5" />
    </svg>
  ),
  trendingUp: (p) => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),
};

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const verticals = [
  {
    icon: Icon.building,
    title: 'Smart Building',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPzwFjQfwJfpalSo1gk3Z6kuZZv2o2aox2FP1YjnlvZXTaWjCDnREj4xL783wxOAK0bHj0myNovt6v3DoIgGjh6lvtqU7Tql3fvQILvk1lpkgTKw0GiE6h6eyN41WtPporWmvoJx_PIUFsSYXx-9VQEKpbLJEMEUOK4CPoUw5sKL00yBXA7cbVsI94eePI-gLQYU7FhkZgz24ybH9Z72RvSMoozrVoUgJ0FM5n6GO1CZ3ASRRZZeD6nDQgZ7QSnFFNBJiaFVt3A6Ij",
    points: ['Streamline Facility Management', 'Boost Energy Efficiency', 'Optimize Space Management'],
    bullet: Icon.check,
  },
  {
    icon: Icon.people,
    title: 'People Sensing',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAweMxN2IvRb4DBHrxrXw3s-TT-IzDeIRS49FRsBwk9Up7Y8D-l94F9gjoXuMPo2f7RCyIHb-48yUaYu7-1TjcRW2RHrZ0Gu42qvTQoW5Hg069Guf0xqUJ9BiJrRpJYXAmWNpWqXVeMHu1KdKprNQ1xfQ5GY2WV5b8efo0YSUfI9ubeop00lO6SjAmqxatJUlKgMk0LzXmAaizEP2SVFufHv4iovB5cQGSYjjcCpoqRloxui72V2OplzU4BKWHLy5ya-3HuirnsLbbJ",
    desc: 'Harness state-of-the-art radar and vision technology to understand environment usage patterns.',
    points: ['Gain Precise Data', 'Inform Decisions'],
    bullet: Icon.insights,
  },
  {
    icon: Icon.hub,
    title: 'LoRaWAN Ecosystem',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf374IwcICklybH865uLqIWnrqVaaM-fiajXLp03U-wV88olzrnPN21vTZntg40MOITNLH6FCry2sH_s1cdvYrZ0I0CrzYwhgRDM6tWxmhLp94yXnQ2N-CajPB3CZZ52mjI_NB9WfPF-oCiti5lEzHFrOsLr0LlpsX-PO3dur6dAZpf2SYXUlTpmvB_8OHzrgBPa9L-dJZj3dFfVdmvrENi_LGGAWu9-ufdMGJxodHSdyVUMNBxyajI1PkrrtmMo-q2kg6mfefBsI",
    desc: 'Global connectivity standard for long-range, low-power IoT applications.',
    points: ['Wireless Solutions', 'Smart Cities & Industrial Monitoring'],
    bullet: Icon.router,
  },
];

const benefits = [
  { icon: Icon.gift, title: 'Sample Support', desc: 'Access priority evaluation kits and demo hardware at special partner rates to accelerate your sales cycle.' },
  { icon: Icon.clipboard, title: 'Project Support', desc: 'Dedicated technical engineering support and design-in assistance for complex large-scale deployments.' },
  { icon: Icon.handshake, title: 'Business Opportunity', desc: 'Qualified referral leads and strategic co-selling opportunities through our extensive global sales network.' },
  { icon: Icon.trendingUp, title: 'Partner Upgrade', desc: 'A structured tiered growth system with increasing margins, marketing funds, and exclusive ecosystem access.' },
];

const partners = [
  "Tridium", "Autodesk", "Delta Controls", "Disrupt-X", "J2 Innovation",
  "KODE Labs", "Loytec", "MerciYanis", "OpenSense", "Phoenix Contact",
  "SmartViz", "iComfort"
];

/* ─────────────────────────────────────────
   Motion variants — mirrors AboutSection's
   translateY reveal + staggered delay
───────────────────────────────────────── */
const revealUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const metadataInfo = {
  title: 'Technology Partner Program | SecureAAI',
  description: 'Join the SecureAAI Technology Ecosystem Partner Program.',
};

export default function TechnologyPartnerPage() {
  const rootRef = useRef(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .tp-root { font-family: 'DM Sans', sans-serif; }

        /* Consistent section rhythm across the whole page */
        .tp-section { padding-top: 4.5rem; padding-bottom: 4.5rem; }
        @media (min-width: 768px) { .tp-section { padding-top: 8rem; padding-bottom: 8rem; } }
        @media (min-width: 1024px) { .tp-section { padding-top: 5rem; padding-bottom: 5rem; } }

        .tp-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tp-accent-line { position: relative; display: inline-block; }
        .tp-accent-line::after {
          content: '';
          position: absolute; left: 0; bottom: -3px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px;
          transform: scaleX(1);
          transform-origin: left;
        }

        .tp-mono { font-family: 'JetBrains Mono', monospace; }

        .tp-cta-btn {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #ffffff; background: #0161FE;
          border: 1.5px solid #0161FE; border-radius: 9999px; padding: 15px 34px;
          transition: background .22s, color .22s, border-color .22s, transform .22s, box-shadow .22s;
          cursor: pointer; text-decoration: none; white-space: nowrap;
        }
        .tp-cta-btn:hover {
          background: #ffffff; color: #0161FE; border-color: #0161FE;
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(1,97,254,0.22);
        }
        .tp-cta-btn:hover svg { transform: translateX(3px); }
        .tp-cta-btn svg { transition: transform .2s; }

        .tp-cta-outline {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #0f172a; background: transparent;
          border: 1.5px solid #cbd5e1; border-radius: 9999px; padding: 15px 34px;
          transition: border-color .22s, color .22s, transform .22s;
          cursor: pointer;
        }
        .tp-cta-outline:hover { border-color: #0161FE; color: #0161FE; transform: translateY(-2px); }

        .tp-dotgrid::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px; opacity: 0.45;
        }

        .tp-vcard:hover { border-color: #a3c4fe; box-shadow: 0 12px 40px rgba(1,97,254,0.10); transform: translateY(-4px); }
        .tp-vcard { transition: border-color .35s, box-shadow .35s, transform .35s; }

        .tp-tab { position: relative; }
        .tp-tab.tp-tab-active { color: #0161FE; }
        .tp-tab.tp-tab-active::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: #0161FE;
        }
      `}</style>

      <Navbar />
      <main ref={rootRef} className="tp-root bg-white text-slate-900 text-base overflow-x-hidden">

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative min-h-[78vh] flex items-center pt-28 pb-20 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0">
            <img
              alt="SecureAAI IoT Ecosystem Hero"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5lI-DF1WphUSKUorrzXaH6TECIu9kt9IU8MA_XdNgIDRBVhMYvDbDkuc_e2pmx3lkAVnLKsngeBPz1tmZkFRfrKExFbQCUhiP-lGDhv1EsfszHxlLClE7GzcxcfwQ9U_N0OUjNYgr2J4cioPePJVhr3gVc3B7SNj57mXCffDnbT5X-E6tcCLULT9DAElVP6JAyB_o76kwLPGf1SwPscuchWORMauDrAYD9-ITo2uxBqy60jYJ7HXdA2cKwIa4XnSisay4PyB9U-Q1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/65 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-10">
           

            <div className="max-w-2xl">
              <motion.div initial="hidden" animate="show" variants={revealUp} className="mb-6 self-start">
                <span
                  className="tp-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Team Up · Think Ahead · Sense For Impact
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.08] text-slate-900"
              >
                IoT Ecosystem<br />
                <span className="tp-accent-line" style={{ color: '#0161FE' }}>Partner Program</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10"
              >
                Uniting platform and solution providers to deliver market-ready IoT offerings in Smart Building, People Sensing, and LoRaWAN Ecosystem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#partner-form" className="tp-cta-btn">
                  Become a Partner
                  <Icon.arrowRight />
                </a>
                <button className="tp-cta-outline">Online Demo</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════ INTRO ══════════════ */}
        <section className="tp-section bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <motion.div variants={revealUp}>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-slate-900 mb-4">
                  Empowering the<br />
                  <span className="tp-accent-line" style={{ color: '#0161FE' }}>Future of Connectivity</span>
                </h2>
              </motion.div>
              <motion.div variants={revealUp}>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                  Our Ecosystem Partner Program is a central hub designed to foster collaboration between SecureAAI and industry leaders. By combining our advanced sensing hardware with innovative software platforms, we address the complex demands of modern infrastructure — with a focus on Smart Building and People Sensing excellence.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ CORE VERTICALS ══════════════ */}
        <section className="tp-dotgrid relative tp-section bg-slate-50 overflow-hidden">
          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.span variants={revealUp} className="tp-eyebrow inline-block mb-4" style={{ color: '#0161FE' }}>
                Core Industry Verticals
              </motion.span>
              <motion.h2 variants={revealUp} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                Built For Specialized IoT Needs
              </motion.h2>
              <motion.p variants={revealUp} className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                Providing tailored IoT solutions for specific industrial and commercial environments.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {verticals.map((v) => (
                <motion.div
                  key={v.title}
                  variants={revealUp}
                  className="tp-vcard group relative overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={v.img}
                    />
                  </div>
                  <div className="p-7 flex-grow">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-5" style={{ background: 'rgba(1,97,254,0.08)', color: '#0161FE' }}>
                      <v.icon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                    {v.desc && <p className="text-slate-500 text-sm leading-relaxed mb-4">{v.desc}</p>}
                    <ul className="space-y-2.5 text-slate-600 text-sm">
                      {v.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <v.bullet className="mt-0.5 shrink-0" style={{ color: '#0161FE' }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ PROGRAM BENEFITS ══════════════ */}
        <section className="tp-section bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.span variants={revealUp} className="tp-eyebrow inline-block mb-4" style={{ color: '#0161FE' }}>
                Program Benefits
              </motion.span>
              <motion.h2 variants={revealUp} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Empower Your Business Growth
              </motion.h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 border-b border-slate-200 mb-12 text-sm font-semibold text-slate-500">
              <span className="tp-tab tp-tab-active pb-4">Sales Benefits</span>
              <span className="tp-tab pb-4 hover:text-[#0161FE] transition-colors cursor-default">Marketing Support</span>
              <span className="tp-tab pb-4 hover:text-[#0161FE] transition-colors cursor-default">Products &amp; Solutions</span>
              <span className="tp-tab pb-4 hover:text-[#0161FE] transition-colors cursor-default">Partner Requirements</span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={revealUp}
                  className="tp-vcard p-8 bg-white rounded-2xl border border-slate-200"
                >
                  <div className="mb-6" style={{ color: '#0161FE' }}>
                    <b.icon />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{b.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ PARTNER SHOWCASE ══════════════ */}
        <section className="tp-section bg-slate-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
              className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8"
            >
              <motion.div variants={revealUp}>
                <span className="tp-eyebrow inline-block mb-3" style={{ color: '#0161FE' }}>Ecosystem</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-3">Who We Partner With</h2>
                <p className="text-slate-500 max-w-md">Leading platform providers already delivering SecureAAI-integrated solutions.</p>
              </motion.div>
              <motion.div variants={revealUp} className="flex gap-3">
                <button className="tp-cta-outline">Get Resources</button>
                <button className="tp-cta-outline">News</button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
            >
              {partners.map((name) => (
                <motion.div
                  key={name}
                  variants={revealUp}
                  className="aspect-[3/2] bg-white border border-slate-200 rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:border-[#0161FE]/40 transition-all cursor-pointer group"
                >
                  <span className="font-bold text-sm text-slate-500 group-hover:text-[#0161FE] transition-colors text-center">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ LEAD FORM ══════════════ */}
        <section id="partner-form" className="tp-section bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12"
              style={{ boxShadow: '0 20px 60px rgba(1,97,254,0.06)' }}
            >
              <div className="text-center mb-10">
                <span className="tp-eyebrow inline-block mb-3" style={{ color: '#0161FE' }}>Get Started</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Talk To Us About Your Next Project</h2>
                <p className="text-slate-500">Fill out the form below to start your partnership journey.</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name*</label>
                  <input className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all" placeholder="Your name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Work Email*</label>
                  <input className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all" placeholder="email@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Country*</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all appearance-none">
                    <option>Select Country</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>China</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Business Type*</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all">
                    <option>End User</option>
                    <option>Distributor</option>
                    <option>System Integrator</option>
                    <option>MSP</option>
                    <option>OEM</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Area of Interest*</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Smart Building", "Video Surveillance", "LoRaWAN", "People Sensing", "Other IoT"].map((area) => (
                      <label key={area} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input className="rounded text-[#0161FE] focus:ring-[#0161FE]" type="checkbox" />
                        {area}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                  <textarea className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all" placeholder="Tell us about your project or needs..." rows="4" />
                </div>

                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="tp-cta-btn w-full justify-center py-4 text-sm">
                    Let's Talk
                    <Icon.arrowRight />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}