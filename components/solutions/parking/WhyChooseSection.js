'use client';
import { motion } from 'framer-motion';

export default function ParkingWhyChooseSection() {
  return (
    <>
      <style>{`
        .pwc-scan { position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.35) 50%,transparent);
        }
      `}</style>
      <section className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: 'linear-gradient(135deg, #0042b3 0%, #0161FE 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)' }} />

        <div className="relative max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
            The SecureAAi Advantage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15] mb-8"
          >
            Why Choose SecureAAi SmartPay Solution?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sky-100 text-base sm:text-lg leading-relaxed mb-6"
          >
            SecureAAi delivers more than a payment platform — we provide a complete parking payment ecosystem that integrates seamlessly with intelligent parking management, AI-powered ANPR, access control, and enterprise video management systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sky-100 text-base sm:text-lg leading-relaxed"
          >
            Our SmartPay solution helps organizations modernize parking operations, maximize revenue, reduce manual intervention, and create a frictionless parking experience for every visitor.
          </motion.p>
        </div>
      </section>
    </>
  );
}
