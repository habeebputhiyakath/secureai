'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is ANPR?',
    a: 'Automatic Number Plate Recognition (ANPR) uses AI and optical character recognition to identify vehicle license plates automatically.'
  },
  {
    q: 'Can SecureAAi ANPR work at night?',
    a: 'Yes. The system supports 24/7 operation and performs reliably in low-light conditions.'
  },
  {
    q: 'Does ANPR support blacklist and whitelist vehicles?',
    a: 'Yes. SecureAAi supports real-time vehicle authorization and alert management.'
  },
  {
    q: 'Can the solution integrate with parking systems?',
    a: 'Yes. SecureAAi ANPR integrates seamlessly with parking management, access control, and video management systems.'
  },
  {
    q: 'Can I search historical vehicle records?',
    a: 'Yes. Advanced search capabilities enable rapid investigation and evidence retrieval.'
  }
];

export default function SiproFaqSection() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('spf-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.spf-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .spf-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .spf-rev.spf-vis { opacity:1; transform:none; }
        .spf-d0{transition-delay:0s} .spf-d1{transition-delay:.08s}
      `}</style>
      <section ref={ref} className="relative bg-slate-50 py-24 lg:py-32">
        <div className="relative max-w-[800px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
             <div className="spf-rev spf-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                FAQ
              </div>
            <h2 className="spf-rev spf-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
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
                  className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-white border-sky-200 shadow-md' : 'bg-slate-100 border-slate-200 hover:border-slate-300'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                    <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : 'text-slate-400'}`}>
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
