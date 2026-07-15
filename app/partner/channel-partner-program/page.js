'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────
   Icon set — real inline SVGs, stroke style
   matched to the About/Technology sections
───────────────────────────────────────── */
const Icon = {
  arrowRight: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  externalLink: (p) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  check: (p) => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8.5 12.5 11 15 15.5 9.5" />
    </svg>
  ),
  box: (p) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <line x1="12" y1="13" x2="12" y2="21" />
    </svg>
  ),
  domain: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="9" width="8" height="12" />
      <rect x="13" y="3" width="8" height="18" />
      <line x1="6" y1="12" x2="6" y2="12.01" />
      <line x1="6" y1="15" x2="6" y2="15.01" />
      <line x1="6" y1="18" x2="6" y2="18.01" />
      <line x1="16" y1="7" x2="16" y2="7.01" />
      <line x1="16" y1="11" x2="16" y2="11.01" />
      <line x1="16" y1="15" x2="16" y2="15.01" />
    </svg>
  ),
  hub: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
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
  handshake: (p) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 12h4l3-3 3 3 3-3 3 3h4" />
      <path d="M6 12v4l4 4 2-2" />
      <path d="M18 12v4l-4 4-1.5-1.5" />
    </svg>
  ),
  trendingUp: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),
  engineering: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      <path d="M9.5 5.5 8 3.5M14.5 5.5 16 3.5" />
    </svg>
  ),
  school: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 9 12 4l10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <line x1="22" y1="9" x2="22" y2="15" />
    </svg>
  ),
  campaign: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2Z" />
      <path d="M15 9a3.5 3.5 0 0 1 0 6" />
      <path d="M18 6a7 7 0 0 1 0 12" />
    </svg>
  ),
  quote: (p) => (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M9.5 7c-2.9 0-5 2.3-5 5.2 0 2.6 2 4.6 4.5 4.6.4 0 .8 0 1-.1-.3 1.9-2 3.5-3.9 3.8l.4 1.5c3.2-.5 5.6-3.3 5.6-7.3V12c0-2.9-1.1-5-2.6-5Zm9 0c-2.9 0-5 2.3-5 5.2 0 2.6 2 4.6 4.5 4.6.4 0 .8 0 1-.1-.3 1.9-2 3.5-3.9 3.8l.4 1.5c3.2-.5 5.6-3.3 5.6-7.3V12c0-2.9-1.1-5-2.6-5Z" />
    </svg>
  ),
  droplet: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2s7 7.5 7 12.5a7 7 0 0 1-14 0C5 9.5 12 2 12 2Z" />
    </svg>
  ),
  group: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  sun: (p) => (
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="3.5" y1="12" x2="1" y2="12" />
      <line x1="23" y1="12" x2="20.5" y2="12" />
      <line x1="5" y1="5" x2="6.7" y2="6.7" />
      <line x1="17.3" y1="17.3" x2="19" y2="19" />
      <line x1="5" y1="19" x2="6.7" y2="17.3" />
      <line x1="17.3" y1="6.7" x2="19" y2="5" />
    </svg>
  ),
};

/* ─────────────────────────────────────────
   Motion variants
───────────────────────────────────────── */
const revealUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const whyPartner = [
  { icon: Icon.box, num: '01', title: 'Extensive Product Portfolio', desc: 'From industrial IoT sensors and gateways to advanced AI video surveillance, our hardware covers every layer of the smart ecosystem.', size: 'lg', tone: 'light' },
  { icon: Icon.domain, num: '02', title: 'Industry Depth', desc: 'Tailored solutions for smart buildings, modern retail, digital cities, and intelligent traffic management designed for rapid deployment.', size: 'sm', tone: 'light' },
  { icon: Icon.hub, num: '03', title: 'Open Ecosystem', desc: 'Seamless integration using standard protocols (LoRaWAN, MQTT) and fully documented APIs for effortless software ecosystem pairing.', size: 'sm', tone: 'light' },
  { icon: Icon.handshake, num: '04', title: 'Partner-centric Model', desc: 'We focus on channel-exclusive sales. We are here to provide the support you need to win projects, not to compete with you.', size: 'lg', tone: 'brand' },
];

const empower = [
  { icon: Icon.trendingUp, title: 'Revenue & Growth', desc: 'Access competitive tiered pricing, project protection, and performance-based rebates to ensure your profitability.' },
  { icon: Icon.engineering, title: 'Technical Resources', desc: 'Dedicated priority technical support and early access to SDKs/firmware for custom solution development.' },
  { icon: Icon.school, title: 'SecureAAI Academy', desc: 'Structured training and certification programs for your engineers and sales teams to become IoT experts.' },
  { icon: Icon.campaign, title: 'Marketing Support', desc: 'Market Development Funds (MDF), co-branded collateral, and event support to drive local demand.' },
];

const testimonials = [
  { quote: "SecureAAI's LoRaWAN gateway technology changed how we approach smart agriculture. The reliability of the hardware is unmatched in the field.", initials: 'MV', name: 'Marcos Verardi', org: 'EagleVision Solutions', featured: false },
  { quote: "The integration between SecureAAI sensors and our platform was seamless thanks to their documented protocols. They are a true partner in innovation.", initials: 'IA', name: 'izwanasri', org: 'itpss sdn bhd', featured: true },
  { quote: "The dedicated sales enablement materials provided by SecureAAI helped our team close enterprise smart building deals faster than ever.", initials: 'N', name: 'Nourhan', org: 'Xceltra', featured: false },
];

export default function ChannelPartnerPage() {
  const rootRef = useRef(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .cp-root { font-family: 'DM Sans', sans-serif; }

        /* Consistent section rhythm across the whole page */
        .cp-section { padding-top: 3.75rem; padding-bottom: 3.75rem; }
        @media (min-width: 768px) { .cp-section { padding-top: 8rem; padding-bottom: 8rem; } }
        @media (min-width: 1024px) { .cp-section { padding-top: 4rem; padding-bottom: 4rem; } }

        .cp-eyebrow { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }

        .cp-accent-line { position: relative; display: inline-block; }
        .cp-accent-line::after {
          content: ''; position: absolute; left: 0; bottom: -3px; width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff); border-radius: 2px;
          transform: scaleX(1); transform-origin: left;
        }

        .cp-mono { font-family: 'JetBrains Mono', monospace; }

        .cp-cta-btn {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: #ffffff; background: #0161FE; border: 1.5px solid #0161FE; border-radius: 9999px;
          padding: 16px 34px; transition: background .22s, color .22s, border-color .22s, transform .22s, box-shadow .22s;
          cursor: pointer; text-decoration: none; white-space: nowrap;
        }
        .cp-cta-btn:hover { background: #ffffff; color: #0161FE; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(1,97,254,0.22); }
        .cp-cta-btn:hover svg { transform: translateX(3px); }
        .cp-cta-btn svg { transition: transform .2s; }

        .cp-cta-outline {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: #0161FE; background: rgba(1,97,254,0.06); border: 1.5px solid transparent; border-radius: 9999px;
          padding: 16px 34px; transition: background .22s, transform .22s; cursor: pointer;
        }
        .cp-cta-outline:hover { background: rgba(1,97,254,0.12); transform: translateY(-2px); }

        .cp-card { transition: border-color .35s, box-shadow .35s, transform .35s; }
        .cp-card:hover { border-color: #0161FE; transform: translateY(-4px); box-shadow: 0 20px 40px -18px rgba(1,97,254,0.22); }

        .cp-icon-tile {
          width: 4.5rem; height: 4.5rem; border-radius: 1.1rem;
          background: rgba(1,97,254,0.07); border: 1px solid rgba(1,97,254,0.14);
          color: #0161FE; display: flex; align-items: center; justify-content: center;
          transition: transform .3s;
        }
        .group:hover .cp-icon-tile { transform: scale(1.08); }

        .cp-radio:has(:checked) { border-color: #0161FE; background: rgba(1,97,254,0.05); }
      `}</style>

      <main ref={rootRef} className="cp-root bg-white text-slate-900 text-base overflow-x-hidden scroll-smooth">

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative pt-24 pb-8 md:pt-36 md:pb-10 overflow-hidden h-[85vh] flex items-center bg-slate-50">
         <div className="absolute inset-0 z-0">
  <img
    alt="SecureAAI Partners Background"
    className="w-full h-full object-cover"
    src="/support/support.png"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-slate-50/40 to-slate-50/90" />
</div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
                <span className="cp-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
                  </svg>
                  Global Partner Network
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-5 text-slate-900 tracking-tight"
              >
                Built for Partners,<br />
                <span className="cp-accent-line" style={{ color: '#0161FE' }}>Designed for Growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
              >
                Collaborate with a world-leading IoT and AI provider. We empower distributors, systems integrators, and solution providers with the tools to dominate their local markets.
              </motion.p>

             

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#partner-form" className="cp-cta-btn">Apply Now <Icon.arrowRight /></a>
                <a href="#why-partner" className="cp-cta-outline">Explore Program</a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════ WHY PARTNER ══════════════ */}
        <section className="cp-section bg-white relative overflow-hidden" id="why-partner">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={stagger} className="text-center mb-16">
              <motion.span variants={revealUp} className="cp-eyebrow inline-block mb-4" style={{ color: '#0161FE' }}>The Difference</motion.span>
              <motion.h2 variants={revealUp} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Why Partner with <span className="cp-accent-line" style={{ color: '#0161FE' }}>SecureAAI</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 relative"
            >
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0161FE]/5 rounded-full blur-3xl z-0 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0 pointer-events-none" />

              {whyPartner.map((c) => (
                <motion.div
                  key={c.num}
                  variants={revealUp}
                  className={`cp-card group relative z-10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between ${
                    c.size === 'lg' ? 'md:col-span-7' : 'md:col-span-5'
                  } ${c.tone === 'brand' ? 'bg-[#0161FE]/5 border border-[#0161FE]/25' : 'bg-white border border-slate-200'}`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="cp-icon-tile" style={c.tone === 'brand' ? { background: '#0161FE', color: '#fff', border: 'none' } : {}}>
                      <c.icon />
                    </div>
                    <span className="text-4xl font-extrabold text-[#0161FE]" style={{ opacity: c.tone === 'brand' ? 0.12 : 0.06 }}>{c.num}</span>
                  </div>
                  <div>
                    <h3 className={`font-bold mb-3 text-slate-900 ${c.size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{c.title}</h3>
                    <p className={`text-slate-500 leading-relaxed ${c.size === 'lg' ? 'text-base sm:text-lg max-w-xl' : 'text-sm'}`}>{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ EMPOWERMENT FEATURES ══════════════ */}
        <section className="cp-section" style={{ background: 'radial-gradient(circle at top right, #f0f7ff 0%, #ffffff 100%)' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
                <motion.h2 variants={revealUp} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.15]">
                  We Don't Just Supply.<br />
                  <span className="cp-accent-line" style={{ color: '#0161FE' }}>We Empower.</span>
                </motion.h2>
                <motion.p variants={revealUp} className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
                  The SecureAAI Partner Program is designed to remove friction from your business cycle, providing resources at every stage from lead to support.
                </motion.p>

                <div className="space-y-7">
                  {empower.map((e) => (
                    <motion.div key={e.title} variants={revealUp} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-11 h-11 border rounded-full flex items-center justify-center transition-all group-hover:bg-[#0161FE] group-hover:text-white group-hover:border-[#0161FE]" style={{ borderColor: 'rgba(1,97,254,0.3)', color: '#0161FE' }}>
                        <e.icon />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{e.title}</h4>
                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{e.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="A professional high-tech workspace"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1AuDV6uafAiSH5jc74VK4J4wkDQHkXVVui0v6sEWdWTDtf9QVnJFRnVr6nn1S3PpBDpI4aAtlO7xQCaI9X0zJFj_UGMF25J_gB2DFa34Q_BAA9Q3Blea1HQ-R5P_0TC6Vbxx_ZV4NIviNV9Ur44remutuhJRLf668CvjIEXukRtzcmeLQJOnHPyluKpyh1rYBaB5ZXbeQ8cOPz54YcJv9-gmMBnlHMQMH8kpOY6yadDAePyPSxqycQhMMJoHAHC_-rdHZHEZRrMyV"
                  />
                  <div className="absolute inset-0 bg-[#0161FE]/10 mix-blend-multiply" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 p-6 rounded-2xl shadow-xl max-w-xs" style={{ boxShadow: '0 20px 50px rgba(1,97,254,0.15)' }}>
                  <p className="cp-eyebrow mb-2" style={{ color: '#0161FE' }}>Partner Feedback</p>
                  <h4 className="font-bold text-slate-900 mb-3 leading-tight">How feedback drives our innovation</h4>
                  <button className="flex items-center text-sm font-bold gap-1 hover:gap-2 transition-all" style={{ color: '#0161FE' }}>
                    Learn More <Icon.arrowRight />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════ TESTIMONIALS ══════════════ */}
        <section className="cp-section bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={stagger} className="text-center mb-16">
              <motion.span variants={revealUp} className="cp-eyebrow inline-block mb-4" style={{ color: '#0161FE' }}>Testimonials</motion.span>
              <motion.h2 variants={revealUp} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Trusted by Industry Leaders</motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={revealUp}
                  className={`cp-card bg-white p-8 border rounded-2xl relative ${t.featured ? 'border-[#0161FE]/30 shadow-xl md:scale-105 z-10' : 'border-slate-200'}`}
                >
                  <Icon.quote className="absolute top-5 right-5" style={{ color: 'rgba(1,97,254,0.14)' }} />
                  <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold" style={{ color: '#0161FE' }}>{t.initials}</div>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-xs font-semibold text-slate-400">{t.org}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════ GLOBAL IMPACT ══════════════ */}
        <section className="cp-section bg-slate-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger} className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <motion.div variants={revealUp} className="max-w-2xl">
                <span className="cp-eyebrow inline-block mb-3" style={{ color: '#0161FE' }}>Case Studies</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Driving Impact Across the Globe</h2>
                <p className="text-slate-500">Real-world deployments where SecureAAI partners are transforming industries with intelligent technology.</p>
              </motion.div>
              <motion.button variants={revealUp} className="hidden md:block cp-cta-outline">View All Success Stories</motion.button>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Feature Story */}
              <motion.div variants={revealUp} className="cp-card md:col-span-2 bg-white border border-slate-200 rounded-2xl relative min-h-[400px] flex items-end overflow-hidden group">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Government surveillance project"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKCnkDdslbxxlDeUzH_E_JDBl0hzLH1V7lGs78tqo192U5Rlq455vXSkH8fjDlRe5E-V-sJqzkEj2WtZllRHdP9LTJ8EEkUtZB4vNdMSdUAn15pNYLxzGsyIFpIVboEQUeWWyFVPxWquqNKN1HQaERqZXjlsznlXw_FalYIFCQC9stBlk5SvXMvtwNjSMUQjBHxyaJBKO3kUbKZbZzG4oMUlvKqQTLaK7qLCWdU62Br7Y0_ayiyrcehYc7meJCuqRd38pBk2h94Le"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-85" />
                <div className="relative z-10 p-8 text-white">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full" style={{ background: '#0161FE' }}>Government</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Cambodia National Assembly</h3>
                  <p className="text-base opacity-90 max-w-xl">Advanced 4K AI surveillance system providing high-level security for national critical infrastructure.</p>
                </div>
              </motion.div>

              {/* Small Story */}
              <motion.div variants={revealUp} className="cp-card bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(1,97,254,0.08)', color: '#0161FE' }}>
                    <Icon.droplet />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">Water Leakage Monitoring</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">1,200+ LoRaWAN sensors deployed in a massive commercial complex to prevent structural damage.</p>
                </div>
                <a className="font-bold text-sm mt-5 flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: '#0161FE' }} href="#">Case Study <Icon.externalLink /></a>
              </motion.div>

              {/* Story 3 */}
              <motion.div variants={revealUp} className="cp-card bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(1,97,254,0.08)', color: '#0161FE' }}>
                    <Icon.group />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">People Counting in Europe</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">1,000+ units across retail chains to optimize staffing and customer flow using 3D sensing technology.</p>
                </div>
                <a className="font-bold text-sm mt-5 flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: '#0161FE' }} href="#">Case Study <Icon.externalLink /></a>
              </motion.div>

              {/* Story 4 */}
              <motion.div variants={revealUp} className="md:col-span-2 rounded-2xl relative overflow-hidden flex items-center justify-between p-8 group transition-all duration-300 hover:-translate-y-1" style={{ background: '#0161FE', boxShadow: '0 20px 50px rgba(1,97,254,0.28)' }}>
                <div className="relative z-10 text-white max-w-md">
                  <h4 className="text-2xl font-bold mb-2">Solar-powered Congestion Warning</h4>
                  <p className="text-base opacity-90">Radar-based traffic sensing system for remote mountain highways, operating entirely on solar energy.</p>
                </div>
                <div className="hidden md:block text-white opacity-20 group-hover:opacity-40 transition-opacity">
                  <Icon.sun />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ BECOME A PARTNER FORM ══════════════ */}
        <section className="cp-section bg-slate-50" id="partner-form">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-start"
              style={{ boxShadow: '0 30px 80px rgba(1,97,254,0.08)' }}
            >
              <div className="lg:w-1/2">
                <span className="cp-eyebrow inline-block mb-4" style={{ color: '#0161FE' }}>Application</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-[1.1] tracking-tight">
                  Ready to Lead with<br />
                  <span className="cp-accent-line" style={{ color: '#0161FE' }}>SecureAAI?</span>
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
                  Submit your application today. Our channel management team will review your profile and reach out within 48 business hours to discuss potential synergy.
                </p>
                <ul className="space-y-4">
                  {['No forced exclusivity or hidden fees', 'Access to global marketing pool', 'First-look at next-gen product roadmaps'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-800 font-medium">
                      <span style={{ color: '#0161FE' }}><Icon.check /></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/2 w-full bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">Full Name</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all" placeholder="John Doe" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">Work Email</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all" placeholder="john@company.com" type="email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">Company Name</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all" placeholder="Tech Solutions Ltd" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">Country</label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all">
                        <option>Select your country</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                        <option>Singapore</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Business Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Distributor', 'System Integrator', 'Reseller', 'Solution Provider'].map((type) => (
                        <label key={type} className="cp-radio flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-xl cursor-pointer bg-white hover:bg-[#0161FE]/5 transition-colors">
                          <input className="text-[#0161FE] focus:ring-[#0161FE]" name="business_type" type="radio" />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Primary Area of Interest</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#0161FE]/20 focus:border-[#0161FE] outline-none transition-all">
                      <option>IoT Sensors &amp; Gateways</option>
                      <option>AI Video Surveillance</option>
                      <option>Smart Building Solutions</option>
                      <option>Industrial Connectivity</option>
                    </select>
                  </div>

                  <button className="cp-cta-btn w-full justify-center py-4" type="submit">
                    Submit Application <Icon.arrowRight />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}