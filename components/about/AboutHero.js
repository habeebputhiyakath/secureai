'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function AboutHero() {
  return (
  <section
  className="relative pt-[150px] pb-24 lg:pt-[200px] lg:pb-32 px-6 lg:px-10 overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://cdn.wallpapersafari.com/50/32/Y7GnuH.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65 z-0" />

  {/* Blue Glow */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0161FE]/20 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 z-0" />

  <div className="relative max-w-[1000px] mx-auto text-center z-10">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeInUp}
        className="inline-flex items-center gap-[7px] bg-white/10 border border-white/20 rounded-full px-[14px] py-[6px] text-[0.72rem] font-bold tracking-[0.1em] text-white uppercase mb-8 backdrop-blur-sm"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        About SecureAAi Systems
      </motion.div>

      
      <motion.p
        variants={fadeInUp}
        className="text-lg md:text-xl text-white/85 leading-relaxed max-w-[800px] mx-auto font-medium"
      >
        In an increasingly connected world, organizations face growing
        challenges in protecting people, assets, infrastructure, and
        operations. Traditional security systems are no longer sufficient to
        address evolving threats, operational complexities, and the need for
        real-time decision-making. Modern enterprises require intelligent
        solutions that provide visibility, automation, and actionable insights.
      </motion.p>
    </motion.div>
  </div>
</section>
  );
}
