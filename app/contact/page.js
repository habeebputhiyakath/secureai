"use client";

import React, { useEffect, useRef } from 'react';
import ContactForm from '../../components/contact/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const ref = useRef(null);

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');

        .contact-page { font-family: 'DM Sans', sans-serif; }

        .rev {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .rev.rev-vis { opacity: 1; transform: none; }
        
        .d0 { transition-delay: 0.00s; }
        .d1 { transition-delay: 0.08s; }
        .d2 { transition-delay: 0.16s; }
        .d3 { transition-delay: 0.24s; }
        .d4 { transition-delay: 0.32s; }
        .d5 { transition-delay: 0.40s; }
        
        .accent-line {
          position: relative;
          display: inline-block;
        }
        .accent-line::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #0161FE, #5b9fff);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .rev-vis .accent-line::after { transform: scaleX(1); }

        .contact-dotgrid::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }
      `}</style>
      
      <main ref={ref} className="contact-page bg-white min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900 pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[350px] max-h-[500px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-9c58c332c8ae?w=1920&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
          </div>
          
          <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-10 text-center lg:text-left pt-10">
            <h1 className="rev d0 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="rev d1 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              We’d love to hear about your project, answer any questions, or discuss partnership opportunities.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="relative contact-dotgrid py-20 lg:py-32 border-b border-slate-100 overflow-hidden">
          {/* Soft blue blobs */}
          <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle at 40% 40%, #dbeafe, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none opacity-15"
            style={{ background: 'radial-gradient(circle at 60% 60%, #e0f2fe, transparent 70%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - AboutSection Style Text & Info */}
            <div className="flex flex-col pr-0 lg:pr-10">
              {/* Eyebrow pill */}
              <div className="rev d0 mb-6 self-start">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                  style={{ background: 'rgba(1,97,254,0.07)', color: '#0161FE', border: '1px solid rgba(1,97,254,0.18)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Global Security Standard Certified
                </span>
              </div>

              {/* Heading */}
              <h2 className="rev d1 text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-5">
                Building Smarter &amp;<br />
                <span className="accent-line" style={{ color: '#0161FE' }}>Safer Environments</span><br />
                with AI
              </h2>

              {/* Body */}
              <p className="rev d2 text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
                SecureAAI Systems delivers next-generation AI-powered security solutions including ANPR, Video Management Systems, Smart Parking, and Intelligent Video Analytics. Let us help you secure your future.
              </p>

              {/* Contact Details */}
              <div className="rev d3 space-y-6 bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Our Office</h4>
                  <p className="text-lg font-semibold text-slate-800">SecureAAi Ltd.</p>
                  <p className="text-slate-600 mt-1">1234 Innovation Drive<br />Bengaluru, Karnataka 560001, India</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Contact</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-3 text-slate-600 hover:text-[#0161FE] transition-colors">
                      <span className="material-symbols-outlined text-[#0161FE]">call</span>
                      <a href="tel:+918012345678" className="font-medium">+91 80 1234 5678</a>
                    </p>
                    <p className="flex items-center gap-3 text-slate-600 hover:text-[#0161FE] transition-colors">
                      <span className="material-symbols-outlined text-[#0161FE]">mail</span>
                      <a href="mailto:info@secureaai.com" className="font-medium">info@secureaai.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rev d2 bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-8 lg:p-10 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How Can We Help You?</h3>
              <ContactForm />
            </div>

          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="rev d0 text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Global Offices</h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Find us at our headquarters in Bengaluru, or reach out to our regional teams.</p>
            </div>
            <div className="rev d1 aspect-w-21 aspect-h-9 md:aspect-w-16 md:aspect-h-6 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.566131099285!2d77.594562!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167148b6f741%3A0x8b1c0c5b8db1a8c!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                className="w-full h-[400px] md:h-[500px]"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
