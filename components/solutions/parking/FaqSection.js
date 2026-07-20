'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is SecureAAi SmartPay Parking Solution?',
    a: 'SmartPay is a comprehensive parking payment and revenue management service that delivers seamless, secure, and cashless parking experiences, integrated with our Smart Parking, ANPR, VMS, and Access Control technologies.'
  },
  {
    q: 'What payment methods does SmartPay support?',
    a: 'Credit cards, debit cards, QR payments, mobile wallets, NFC payments, online banking, corporate billing, and monthly parking accounts.'
  },
  {
    q: 'Does SmartPay require paper tickets?',
    a: 'No. Using SecureAAi ANPR technology, vehicles are automatically identified on entry and exit, and charges are calculated and paid digitally — no paper ticket is ever issued.'
  },
  {
    q: 'Can SmartPay integrate with our existing ANPR or VMS systems?',
    a: 'Yes. SmartPay integrates seamlessly with Si.PRO ANPR, SiVMS Enterprise, TRACKSi Fleet Management, barrier gates, access control systems, ERP systems, and accounting software.'
  },
  {
    q: 'Does SmartPay support subscription or membership parking?',
    a: 'Yes. Flexible subscription plans are available for employees, residents, VIP members, corporate clients, fleet operators, contractors, and visitors.'
  },
  {
    q: 'Can I access revenue reports and analytics?',
    a: 'Yes. Centralized dashboards provide daily and monthly revenue, transaction history, tax reports, and business intelligence such as occupancy trends and payment method breakdowns.'
  }
];

export default function ParkingFaqSection() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pfaq-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.pfaq-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pfaq-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pfaq-rev.pfaq-vis { opacity:1; transform:none; }
        .pfaq-d0{transition-delay:0s} .pfaq-d1{transition-delay:.08s}
      `}</style>
      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-200">
        <div className="relative max-w-[800px] mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
             <div className="pfaq-rev pfaq-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(15,23,42,.08)',color:'#0f172a',border:'1px solid rgba(15,23,42,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                FAQ
              </div>
            <h2 className="pfaq-rev pfaq-d1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
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
