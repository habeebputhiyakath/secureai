"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ScanLine, Radar, Building2, Send, ArrowUpRight, Camera } from 'lucide-react';

export default function ContactPage() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: 'ANPR', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('rev-vis');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };

  const teams = [
    {
      icon: Camera,
      label: 'Sales & solutions',
      desc: 'ANPR, VMS, smart parking and analytics inquiries, quotes, and live demos.',
      email: 'sales@secureaai.com',
      tag: '01 · Pre-sale',
    },
    {
      icon: Radar,
      label: 'Technical support',
      desc: 'Deployment help, firmware, and troubleshooting for existing installations.',
      email: 'support@secureaai.com',
      tag: '02 · Post-sale',
    },
    {
      icon: Building2,
      label: 'Partnerships & media',
      desc: 'Integrators, distributors, channel programs, and press inquiries.',
      email: 'partnerships@secureaai.com',
      tag: '03 · Ecosystem',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .contact-page { font-family: 'DM Sans', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .rev { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .rev.rev-vis { opacity: 1; transform: none; }
        .d0 { transition-delay: 0.00s; } .d1 { transition-delay: 0.08s; } .d2 { transition-delay: 0.16s; }
        .d3 { transition-delay: 0.24s; } .d4 { transition-delay: 0.32s; }

        @keyframes scan { 0% { top: 6%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 92%; opacity: 0; } }
        .scanline { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #22D3EE, transparent); animation: scan 3.6s ease-in-out infinite; }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        .live-dot { animation: blink 1.8s ease-in-out infinite; }

        .bracket { position: absolute; width: 22px; height: 22px; border-color: #22D3EE; opacity: 0.85; }
        .bracket.tl { top: 18px; left: 18px; border-top: 2px solid; border-left: 2px solid; }
        .bracket.tr { top: 18px; right: 18px; border-top: 2px solid; border-right: 2px solid; }
        .bracket.bl { bottom: 18px; left: 18px; border-bottom: 2px solid; border-left: 2px solid; }
        .bracket.br { bottom: 18px; right: 18px; border-bottom: 2px solid; border-right: 2px solid; }

        .team-card { transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; }
        .team-card:hover { transform: translateY(-4px); border-color: #0161FE; box-shadow: 0 14px 32px -12px rgba(1,97,254,0.18); }
        .team-card .reticle { opacity: 0; transition: opacity 0.3s ease; }
        .team-card:hover .reticle { opacity: 1; }
        .team-card a { transition: gap 0.2s ease; }
        .team-card a:hover { gap: 8px; }

        .field { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .field:focus { outline: none; border-color: #0161FE; box-shadow: 0 0 0 3px rgba(1,97,254,0.12); }

        .submit-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px -8px rgba(1,97,254,0.4); }
        .submit-btn:active { transform: translateY(0); }

        .office-link { transition: color 0.2s ease; }
        .office-link:hover { color: #0161FE; }
      `}</style>

      <main ref={ref} className="contact-page bg-white min-h-screen text-slate-900">

        {/* Hero — viewfinder scan */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A1120 0%, #0F1B33 100%)' }}>
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: 'linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)',
            backgroundSize: '38px 38px'
          }} />
          <div className="scanline" />
          <div className="bracket tl" /><div className="bracket tr" /><div className="bracket bl" /><div className="bracket br" />

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-28 text-center">
            <div className="rev d0 inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full mono text-[0.7rem] tracking-wider uppercase"
              style={{ background: 'rgba(34,211,238,0.08)', color: '#67E8F9', border: '1px solid rgba(34,211,238,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 live-dot" />
              System online · Global Security Standard Certified
            </div>
            <h1 className="rev d1 text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
              Let's secure what<br className="hidden md:block" /> matters to you.
            </h1>
            <p className="rev d2 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
              Tell us about your ANPR, video surveillance, or smart parking project, and the right team will get back to you within one business day.
            </p>
          </div>
        </section>

        {/* Route to the right team */}
        <section className="py-24 lg:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="rev d0 mb-14 max-w-2xl">
              <span className="mono text-xs tracking-widest uppercase font-medium" style={{ color: '#0161FE' }}>Where to point this</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.08] text-slate-900 mt-3">Three teams, one response window</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {teams.map((t, i) => (
                <div key={t.label} className={`rev d${i + 1} team-card relative bg-white border border-slate-200 rounded-2xl p-7`}>
                  <div className="reticle bracket tl" style={{ borderColor: '#0161FE', top: 8, left: 8, width: 14, height: 14 }} />
                  <div className="reticle bracket br" style={{ borderColor: '#0161FE', bottom: 8, right: 8, width: 14, height: 14 }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(1,97,254,0.08)' }}>
                    <t.icon size={20} color="#0161FE" strokeWidth={1.8} />
                  </div>
                  <p className="mono text-[0.68rem] tracking-widest uppercase text-slate-400 mb-2.5">{t.tag}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight">{t.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{t.desc}</p>
                  <a href={`mailto:${t.email}`} className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#0161FE' }}>
                    {t.email} <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + office info */}
        <section className="relative py-24 lg:py-28" style={{ background: '#F7F9FC' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12 lg:gap-14">

            {/* Form */}
            <div className="rev d0 lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-8 lg:p-10">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1.5">Send us a message</h3>
              <p className="text-sm text-slate-500 mb-9">We'll route it to the right team automatically.</p>

              {status === 'sent' ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(1,97,254,0.08)' }}>
                    <ScanLine size={24} color="#0161FE" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1.5">Message received</h4>
                  <p className="text-sm text-slate-500 max-w-xs leading-relaxed">Someone from our team will reach out within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Full name</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="field w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm" placeholder="Aisha Verma" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Work email</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="field w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm" placeholder="aisha@company.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Company</label>
                      <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                        className="field w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Area of interest</label>
                      <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}
                        className="field w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white">
                        <option>ANPR</option>
                        <option>Video Management System</option>
                        <option>Smart Parking</option>
                        <option>Intelligent Video Analytics</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm resize-none" placeholder="Tell us about your project or site" />
                  </div>
                  <button type="submit" className="submit-btn w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl"
                    style={{ background: '#0161FE' }}>
                    Send message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Office info */}
            <div className="rev d1 lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">Our office</h4>
                <p className="text-lg font-bold text-slate-900 tracking-tight">SecureAAi Ltd.</p>
                <p className="text-slate-500 mt-2 leading-relaxed flex gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" color="#0161FE" />
                  1234 Innovation Drive, Bengaluru, Karnataka 560001, India
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3.5">
                  <a href="tel:+918012345678" className="office-link flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={16} color="#0161FE" /> +91 80 1234 5678
                  </a>
                  <a href="mailto:info@secureaai.com" className="office-link flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={16} color="#0161FE" /> info@secureaai.com
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border p-8 text-white relative overflow-hidden" style={{ background: '#0A1120', borderColor: '#0A1120' }}>
                <ShieldCheck size={22} color="#22D3EE" className="mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every deployment we ship is built to Global Security Standard certification, from ANPR capture to video analytics inference at the edge.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.566131099285!2d77.594562!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167148b6f741%3A0x8b1c0c5b8db1a8c!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                  className="w-full h-[220px]" style={{ border: 0 }} loading="lazy" title="SecureAAi office location"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}