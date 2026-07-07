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

export default function WhyChooseUs() {
  const reasons = [
    { title: "AI-Powered Intelligence", desc: "Harness the power of Artificial Intelligence to enhance situational awareness and automate security operations." },
    { title: "Open Platform Architecture", desc: "Seamlessly integrate with existing infrastructure and third-party systems." },
    { title: "Enterprise Scalability", desc: "From small facilities to city-wide deployments, our solutions are built to grow with your business." },
    { title: "Future-Ready Technology", desc: "Stay ahead of evolving challenges with innovative and adaptable platforms." },
    { title: "Reliable Performance", desc: "Designed for mission-critical environments where uptime and reliability are essential." },
    { title: "Customer-Centric Approach", desc: "We work closely with customers and partners to deliver solutions that create long-term value." }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-10 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px", amount: 0.3 }} variants={staggerContainer} onViewportEnter={(e) => e?.target?.classList.add('in-view')}>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-10">
              Why Organizations Choose <span className="ab-accent-line text-[#0161FE]">SecureAAi</span>
            </motion.h2>
            <div className="space-y-6">
              {reasons.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0161FE]/10 flex items-center justify-center flex-shrink-0 text-[#0161FE] mt-0.5 border border-[#0161FE]/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[1.05rem] font-bold text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square lg:aspect-auto lg:h-[700px] rounded-[40px] overflow-hidden border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.06)] group"
          >
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="Global Security Intelligence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-5 tracking-tight">Why SecureAAi Systems?</h3>
              <div className="flex flex-wrap gap-2">
                {["Intelligent Security", "AI-Driven Innovation", "Enterprise-Grade", "Open Platform", "Future-Ready", "Global Standards"].map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 bg-white/15 border border-white/20 rounded-full text-white/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
