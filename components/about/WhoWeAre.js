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

export default function WhoWeAre() {
  return (
    <section className="relative py-24 px-6 lg:px-10 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px", amount: 0.3 }} variants={staggerContainer}
            onViewportEnter={(e) => e?.target?.classList.add('in-view')}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-8">
              Who <span className="ab-accent-line text-[#0161FE]">We Are</span>
            </motion.h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
              <motion.p variants={fadeInUp}>
                SecureAAi Systems is a technology-driven company specializing in AI-powered security and surveillance solutions. We combine advanced software platforms, intelligent cameras, analytics engines, and enterprise-grade infrastructure to create complete security ecosystems tailored to the needs of modern organizations.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Our solutions are designed to support businesses, government agencies, transportation networks, healthcare institutions, educational campuses, industrial facilities, and smart city projects through intelligent automation and data-driven decision-making.
              </motion.p>
              <motion.p variants={fadeInUp}>
                By integrating Artificial Intelligence, Machine Learning, Computer Vision, and advanced analytics, SecureAAi enables organizations to transform traditional security operations into proactive and intelligent environments.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px", amount: 0.3 }} variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div 
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-[28px] p-8 lg:p-10 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(1,97,254,0.08)] transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0161FE]/10 flex items-center justify-center mb-6 text-[#0161FE] group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                To deliver innovative and intelligent security technologies that help organizations protect assets, optimize operations, and make smarter decisions through Artificial Intelligence, automation, and advanced analytics.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-[28px] p-8 lg:p-10 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(1,97,254,0.08)] transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0161FE]/10 flex items-center justify-center mb-6 text-[#0161FE] group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                To become a globally recognized leader in AI-powered security and intelligent infrastructure solutions by creating technologies that contribute to safer communities, smarter cities, and more connected environments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
