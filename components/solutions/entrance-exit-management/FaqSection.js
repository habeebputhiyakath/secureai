'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is Entrance & Exit Management?',
    a: 'It automatically recognizes vehicle license plates to streamline entry and exit at gates and barriers — enabling ticketless, contactless access without manual verification.'
  },
  {
    q: 'Does it require paper tickets or physical access cards?',
    a: 'No. Vehicles are identified automatically by ANPR, checked against whitelist and blacklist records, and the barrier opens without any ticket, card, or manual interaction.'
  },
  {
    q: 'How fast is recognition at the gate?',
    a: 'Plate recognition and authorization happen in under 150ms, so authorized vehicles pass through without stopping to wait.'
  },
  {
    q: 'Can it support multiple lanes at busy sites?',
    a: 'Yes. The system supports simultaneous multi-lane capture and is built to maintain throughput during peak-hour traffic.'
  },
  {
    q: 'Does it integrate with our parking or video management systems?',
    a: 'Yes. Entrance and exit events integrate directly with SmartPay Parking, SiVMS Enterprise, and access control systems for a unified event history.'
  },
  {
    q: 'Can specific vehicles be blocked or granted priority access?',
    a: 'Yes. Blacklist and whitelist management lets you automatically deny suspicious or unauthorized vehicles while granting instant access to employees, VIPs, or pre-registered visitors.'
  }
];

export default function EemFaqSection() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eefaq-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eefaq-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eefaq-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eefaq-rev.eefaq-vis { opacity:1; transform:none; }
        .eefaq-d0{transition-delay:0s} .eefaq-d1{transition-delay:.08s}
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[800px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
             <div className="eefaq-rev eefaq-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                FAQ
              </div>
            <h2 className="eefaq-rev eefaq-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
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
