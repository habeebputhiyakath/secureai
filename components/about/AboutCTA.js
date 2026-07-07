'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutCTA() {
  return (
    <section className="relative py-24 px-6 lg:px-10 border-t border-slate-100 bg-[#0161FE] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-[1280px] mx-auto text-center z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            SecureAAi Systems
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white/90 mb-8 tracking-tight">
            Intelligent Security • Smarter Decisions • Connected Operations
          </p>
          <p className="text-white/80 max-w-[800px] mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Empowering organizations with Artificial Intelligence, automation, and advanced analytics to build safer, smarter, and more efficient environments.
          </p>
          
          <div className="mt-12">
            <a href="#demo" className="inline-flex items-center gap-2 bg-white text-[#0161FE] font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)]">
              Contact Us Today
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
