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

export default function Commitment() {
  return (
    <section className="relative py-24 px-6 lg:px-10 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0161FE]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="ab-dotgrid absolute inset-0"></div>

      <div className="relative max-w-[1000px] mx-auto text-center z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px", amount: 0.3 }} variants={staggerContainer} onViewportEnter={(e) => e?.target?.classList.add('in-view')}>
          <motion.div variants={fadeInUp} className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-8">
              Our <span className="ab-accent-line text-[#0161FE]">Commitment</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium max-w-[800px] mx-auto">
              At SecureAAi Systems, we believe that security is no longer just about monitoring—it is about intelligence, automation, and actionable insights. Our commitment is to help organizations embrace digital transformation and build resilient, efficient, and future-ready environments.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-[800px] mx-auto">
              Through continuous innovation, technical expertise, and a passion for excellence, we strive to deliver solutions that empower organizations to achieve greater security, operational efficiency, and peace of mind.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-10 md:p-14 rounded-[40px] bg-white border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.06)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#0161FE] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"></div>
            
            <div className="w-16 h-16 rounded-full bg-[#0161FE]/10 flex items-center justify-center mx-auto mb-8 text-[#0161FE]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
              Building the Future of Intelligent Security
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium max-w-[700px] mx-auto">
              As technology continues to evolve, SecureAAi Systems remains committed to shaping the future of intelligent security through AI-driven innovation, advanced analytics, and integrated ecosystems.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-[700px] mx-auto">
              Whether enabling smart cities, modernizing surveillance infrastructure, optimizing traffic management, or transforming parking operations, SecureAAi Systems is your trusted partner for intelligent security solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
