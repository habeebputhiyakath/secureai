"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion";
import { Rocket, Radar } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */


const defaultMilestones = [
  { year: "2005", title: "Founded", desc: "SecureAAI Systems is established with a single mission: make physical security intelligent." },
  { year: "2011", title: "SiVMS Launches", desc: "Our video management system ships to its first enterprise clients across the region." },
  { year: "2015", title: "Si.PRO Goes Live", desc: "ANPR recognition engine deployed at scale for logistics and law-enforcement partners." },
  { year: "2019", title: "ParkSi Debuts", desc: "Smart parking intelligence rolls out across commercial and municipal sites." },
  { year: "2022", title: "TRACKSi Integration", desc: "Asset tracking unifies the ecosystem into a single command layer." },
  { year: "2026", title: "Next-Gen Platform", desc: "A unified, AI-driven security ecosystem — securing what matters, in real time.", hero: true },
];

/* ------------------------------------------------------------------ */
/*  Animated year readout — counts up like a data terminal            */
/* ------------------------------------------------------------------ */

function YearReadout({ year, inView }) {
  const numeric = parseInt(year.replace(/\D/g, ""), 10) || 0;
  const mv = useMotionValue(numeric - 6);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const controls = animate(mv, numeric, { duration: 1.1, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, numeric]);

  return (
    <motion.span
      className="au-mono text-[#0161FE] text-4xl font-bold mb-2 block tabular-nums"
      initial={{ opacity: 0.4 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.4 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  Targeting-reticle node                                            */
/* ------------------------------------------------------------------ */

function ReticleNode({ hero, active }) {
  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      {/* outer rotating ring — reticle */}
      <motion.svg
        viewBox="0 0 56 56"
        className="absolute inset-0 w-full h-full"
        animate={active ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 6, repeat: active ? Infinity : 0, ease: "linear" }}
      >
        <circle
          cx="28"
          cy="28"
          r="24"
          fill="none"
          stroke="#0161FE"
          strokeOpacity={active ? 0.55 : 0.2}
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* corner ticks */}
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="28"
            y1="2"
            x2="28"
            y2="7"
            stroke="#0161FE"
            strokeWidth="1.5"
            strokeOpacity={active ? 0.9 : 0.25}
            transform={`rotate(${deg} 28 28)`}
          />
        ))}
      </motion.svg>

      {/* pulse ping for active / hero */}
      {active && (
        <motion.span
          className="absolute rounded-full bg-[#0161FE]/30"
          initial={{ width: 14, height: 14, opacity: 0.6 }}
          animate={{ width: 44, height: 44, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* core */}
      <div
        className={`relative z-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
          hero
            ? "w-6 h-6 bg-[#0161FE] shadow-[0_0_18px_rgba(1,97,254,0.65)]"
            : `w-3 h-3 ${active ? "bg-[#0161FE]" : "bg-slate-300"}`
        }`}
      >
        {hero && <Rocket className="text-white" size={13} />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Viewfinder card — corner brackets, scanline sweep on reveal       */
/* ------------------------------------------------------------------ */

function MilestoneCard({
  m,
  align,
} ) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const fromX = align === "left" ? 28 : -28;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromX, y: 12 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: fromX, y: 12 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white/70 backdrop-blur-md p-8 rounded-lg border border-slate-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
        m.hero ? "bg-[#0161FE]/5" : ""
      }`}
    >
      {/* corner brackets — viewfinder motif */}
      {[
        "top-2 left-2 border-t-2 border-l-2",
        "top-2 right-2 border-t-2 border-r-2",
        "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-2 right-2 border-b-2 border-r-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute w-3 h-3 border-[#0161FE] opacity-0 group-hover:opacity-70 transition-opacity duration-300 ${pos}`}
        />
      ))}

      {/* scanline sweep, plays once on reveal */}
      <motion.span
        className="pointer-events-none absolute left-0 right-0 h-8 bg-gradient-to-b from-[#0161FE]/25 to-transparent"
        initial={{ top: "-10%" }}
        animate={inView ? { top: "110%" } : { top: "-10%" }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      />

      <YearReadout year={m.year} inView={inView} />
      <h4 className="text-xl font-semibold text-slate-900 mb-3">{m.title}</h4>
      <p className="text-base text-slate-600 leading-relaxed">{m.desc}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Timeline row — owns its own node's in-view state                  */
/* ------------------------------------------------------------------ */

function TimelineRow({ m, leftSide }) {
  const nodeRef = useRef (null);
  const nodeActive = useInView(nodeRef, { margin: "-45% 0px -45% 0px" });

  return (
    <div className="relative flex flex-col md:flex-row items-center py-4">
      <div className={`flex-1 w-full md:w-auto ${leftSide ? "md:pr-16 md:text-right" : "md:pr-16 hidden md:block"}`}>
        {leftSide && <MilestoneCard m={m} align="left" />}
      </div>

      <div ref={nodeRef} className="relative z-10 flex items-center justify-center my-6 md:my-0 shrink-0">
        <ReticleNode hero={m.hero} active={nodeActive} />
      </div>

      <div className={`flex-1 w-full md:w-auto ${!leftSide ? "md:pl-16" : "md:pl-16 hidden md:block"}`}>
        {!leftSide && <MilestoneCard m={m} align="right" />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function JourneyMilestones({
  milestones = defaultMilestones,
}
) {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 25%"],
  });
  const fillHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const fillHeightPct = useTransform(fillHeight, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`);
  const blipTop = useTransform(fillHeight, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`);

  return (
    <section className="au-dotgrid relative py-24 lg:py-32 bg-slate-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            <span className="relative inline-block">
              Our Journey &amp; Milestones
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-[#0161FE]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Two decades of pioneering intelligence and securing the future.
          </motion.p>
        </div>

        <div ref={trackRef} className="relative max-w-5xl mx-auto">
          {/* base track */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden md:block bg-slate-300" />

          {/* animated scan-fill line, grows with scroll progress */}
          <motion.div
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 z-0 hidden md:block bg-gradient-to-b from-[#0161FE] via-[#0161FE] to-[#0161FE]/40"
            style={{ height: fillHeightPct, boxShadow: "0 0 12px rgba(1,97,254,0.6)" }}
          />

          {/* radar blip riding the tip of the fill line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-0 hidden md:flex items-center justify-center"
            style={{ top: blipTop }}
          >
            <Radar className="text-[#0161FE] -translate-y-1/2" size={14} strokeWidth={2.5} />
          </motion.div>

          <div className="space-y-14 md:space-y-4">
            {milestones.map((m, i) => (
              <TimelineRow key={m.year} m={m} leftSide={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}