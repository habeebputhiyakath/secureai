'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is Parking Lot Management?',
    a: 'It is an intelligent ecosystem that transforms traditional parking facilities using AI-powered ANPR, occupancy detection, parking guidance, enforcement, and centralized management.'
  },
  {
    q: 'How does ANPR-based parking management work?',
    a: 'ANPR cameras automatically read the license plates of vehicles entering and exiting, allowing for ticketless, contactless access and automated billing without manual intervention.'
  },
  {
    q: 'Can the system support multiple parking sites?',
    a: 'Yes, the Centralized Parking Management Platform enables you to monitor and manage multiple distributed parking facilities from a single dashboard.'
  },
  {
    q: 'Is cloud management available?',
    a: 'Yes, our solution features a Cloud Platform for remote monitoring, multi-site management, and secure access from anywhere.'
  },
  {
    q: 'Does SecureAAi support dynamic pricing?',
    a: 'Yes, the intelligent bay monitoring and centralized software support dynamic pricing based on occupancy levels, peak hours, and stay duration.'
  },
  {
    q: 'Can occupancy information be displayed on LED boards?',
    a: 'Absolutely. The Parking Guidance System integrates with indoor and outdoor LED display boards to guide drivers directly to available zones or bays in real time.'
  }
];

export default function PlmFaqSection() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('plfaq-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.plfaq-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .plfaq-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .plfaq-rev.plfaq-vis { opacity:1; transform:none; }
        .plfaq-d0{transition-delay:0s} .plfaq-d1{transition-delay:.08s}
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[800px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
             <div className="plfaq-rev plfaq-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                FAQ
              </div>
            <h2 className="plfaq-rev plfaq-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-slate-50 shadow-md' : 'bg-white border-slate-200'}`}
                  style={isOpen ? { borderColor: 'rgba(1,97,254,.3)' } : undefined}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                    <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : 'text-slate-400'}`}
                      style={isOpen ? { color: '#0161FE' } : undefined}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
