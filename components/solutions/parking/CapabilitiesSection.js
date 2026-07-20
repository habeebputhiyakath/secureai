'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const capabilities = [
  {
    shortLabel: 'Cashless Payments',
    title: 'Cashless Parking Payments',
    subtitle: 'Multiple Secure Payment Methods',
    desc: 'Support multiple secure payment methods including:',
    icon: '💳',
    groups: [
      { label: 'Payment Methods', items: ['Credit Cards', 'Debit Cards', 'QR Payments', 'Mobile Wallets', 'NFC Payments', 'Online Banking', 'Corporate Billing', 'Monthly Parking Accounts'] },
    ],
    benefits: [],
  },
  {
    shortLabel: 'Ticketless Entry',
    title: 'Ticketless Parking Experience',
    subtitle: 'Automatic Vehicle Identification',
    desc: 'Using SecureAAi ANPR technology, vehicles are automatically identified when entering and exiting the parking facility. The system automatically:',
    icon: '🎫',
    groups: [
      { label: 'Automated Steps', items: ['Captures Vehicle Entry', 'Records Entry Time', 'Calculates Parking Duration', 'Generates Parking Charges', 'Processes Digital Payment', 'Opens Exit Barrier Automatically'] },
    ],
    benefits: ['Drivers never need to collect or keep a paper parking ticket'],
  },
  {
    shortLabel: 'Fee Calculation',
    title: 'Automated Parking Fee Calculation',
    subtitle: 'Configurable Business Rules',
    desc: 'SmartPay automatically calculates parking charges based on configurable business rules.',
    icon: '🧮',
    groups: [
      { label: 'Pricing Models', items: ['Hourly Parking', 'Daily Parking', 'Weekend Pricing', 'Holiday Rates', 'VIP Parking', 'Employee Parking', 'Resident Parking', 'Subscription Packages', 'Event Parking', 'Dynamic Pricing'] },
    ],
    benefits: [],
  },
  {
    shortLabel: 'Revenue Management',
    title: 'Revenue Management',
    subtitle: 'Centralized Dashboards',
    desc: 'Monitor parking revenue through centralized dashboards.',
    icon: '📊',
    groups: [
      { label: 'Operators Can Track', items: ['Daily Revenue', 'Monthly Revenue', 'Outstanding Payments', 'Transaction History', 'Payment Status', 'Tax Reports', 'Refund Requests', 'Financial Performance'] },
    ],
    benefits: [],
  },
  {
    shortLabel: 'Subscriptions',
    title: 'Subscription & Membership Services',
    subtitle: 'Flexible Long-Term Plans',
    desc: 'Manage long-term parking users through flexible subscription plans.',
    icon: '🪪',
    groups: [
      { label: 'Supported User Types', items: ['Employees', 'Residents', 'VIP Members', 'Corporate Clients', 'Fleet Operators', 'Contractors', 'Visitors'] },
    ],
    benefits: [],
  },
  {
    shortLabel: 'Invoicing & Receipts',
    title: 'Digital Invoicing & Receipts',
    subtitle: 'Automatic Documentation',
    desc: 'Automatically generate:',
    icon: '🧾',
    groups: [
      { label: 'Generated Documents', items: ['Digital Receipts', 'Tax Invoices', 'Email Receipts', 'SMS Notifications', 'Payment Confirmations', 'Downloadable PDF Reports'] },
    ],
    benefits: [],
  },
  {
    shortLabel: 'Mobile App',
    title: 'Mobile Parking Experience',
    subtitle: 'Manage Parking On the Go',
    desc: 'Drivers can use mobile applications to:',
    icon: '📱',
    groups: [
      { label: 'App Capabilities', items: ['Find Available Parking', 'View Parking Duration', 'Pay Parking Fees', 'Extend Parking Time', 'Download Receipts', 'Manage Memberships', 'View Parking History'] },
    ],
    benefits: ['Parking operators can monitor facilities remotely and manage transactions from anywhere'],
  },
  {
    shortLabel: 'Analytics & BI',
    title: 'Smart Analytics & Business Intelligence',
    subtitle: 'Actionable Business Insights',
    desc: 'SmartPay transforms parking payment data into actionable business insights.',
    icon: '📈',
    groups: [
      { label: 'Available Reports', items: ['Revenue Analysis', 'Occupancy Trends', 'Peak Usage Hours', 'Payment Method Reports', 'Customer Behavior Analysis', 'Parking Duration Statistics', 'Monthly Growth Reports', 'Subscription Performance'] },
    ],
    benefits: ['Optimize pricing strategies', 'Improve resource planning', 'Increase profitability'],
  },
  {
    shortLabel: 'Integrations',
    title: 'Integration Services',
    subtitle: 'Seamless Ecosystem Connectivity',
    desc: 'SmartPay integrates seamlessly with:',
    icon: '🔗',
    groups: [
      { label: 'Integrates With', items: ['SecureAAi Smart Parking Solution', 'Si.PRO ANPR Platform', 'SiVMS Enterprise Video Management System', 'TRACKSi Fleet Management', 'Barrier Gates', 'Access Control Systems', 'Mobile Applications', 'ERP Systems', 'Accounting Software', 'Third-Party APIs'] },
    ],
    benefits: [],
  },
];

export default function ParkingCapabilitiesSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('pc-vis'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.pc-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pc-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .pc-rev.pc-vis { opacity:1; transform:none; }
        .pc-d0{transition-delay:0s} .pc-d1{transition-delay:.08s}

        .pc-tab {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 13px 16px; border-radius: 14px; text-align: left;
          background: transparent; border: 1px solid transparent; cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }
        .pc-tab:hover { background: #f8fafc; }
        .pc-tab.active { background: rgba(1,97,254,.06); border-color: rgba(1,97,254,.22); }
        .pc-tab-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.05rem;
          background: #f1f5f9; border: 1px solid #e2e8f0;
        }
        .pc-tab.active .pc-tab-icon { background: rgba(1,97,254,.12); border-color: rgba(1,97,254,.3); }
        .pc-tab-label { font-size: 0.86rem; font-weight: 700; color: #64748b; line-height: 1.25; }
        .pc-tab.active .pc-tab-label { color: #0161FE; }
        .pc-tab-chevron { margin-left: auto; opacity: 0; transition: opacity 0.18s; color: #0161FE; flex-shrink: 0; }
        .pc-tab.active .pc-tab-chevron { opacity: 1; }

        .pc-panel {
          border-radius: 28px; border: 1px solid #e2e8f0; background: #fff;
          padding: 40px; box-shadow: 0 24px 60px -24px rgba(1,97,254,.18);
          min-height: 440px;
        }
        .pc-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.7rem; margin-bottom: 16px;
          background: rgba(1,97,254,.08); border: 1px solid rgba(1,97,254,.16);
        }
        .pc-group-label {
          font-size: 0.66rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 8px; margin-top: 18px;
        }
        .pc-group-label:first-child { margin-top: 0; }
        .pc-feature-pill {
          display: inline-flex; align-items: center; padding: 5px 12px;
          border-radius: 9999px; font-size: 0.74rem; font-weight: 600;
          background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
          white-space: nowrap; margin-right: 8px; margin-bottom: 8px;
        }
        .pc-benefits {
          margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9;
        }
        .pc-benefit-row {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.86rem; color: #334155; font-weight: 600;
          margin-bottom: 9px;
        }
      `}</style>
      <section ref={ref} id="capabilities" className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <div className="pc-rev pc-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto"
              style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
              What It Does
            </div>
            <h2 className="pc-rev pc-d0 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              SmartPay Solution Features
            </h2>
            <p className="pc-rev pc-d1 text-slate-500 text-lg max-w-2xl mx-auto">
              Everything needed to run cashless, ticketless, and fully automated parking payment operations.
            </p>
          </div>

          <div className="pc-rev pc-d1 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">

            {/* Tab list */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
              {capabilities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`pc-tab shrink-0 lg:shrink${active === i ? ' active' : ''}`}
                  style={{ minWidth: 220 }}
                >
                  <span className="pc-tab-icon">{c.icon}</span>
                  <span className="pc-tab-label">{c.shortLabel}</span>
                  <svg className="pc-tab-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="pc-panel"
                >
                  <div className="pc-icon-wrap">{cap.icon}</div>
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400 mb-1">{cap.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>

                  {cap.groups.map((g, gi) => (
                    <div key={gi}>
                      <div className="pc-group-label">{g.label}</div>
                      <div>
                        {g.items.map((f, j) => <span key={j} className="pc-feature-pill">{f}</span>)}
                      </div>
                    </div>
                  ))}

                  {cap.benefits.length > 0 && (
                    <div className="pc-benefits">
                      <div className="pc-group-label" style={{ marginTop: 0 }}>Benefits</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        {cap.benefits.map((b, j) => (
                          <div key={j} className="pc-benefit-row">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0161FE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
