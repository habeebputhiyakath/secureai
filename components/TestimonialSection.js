'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const testimonials = [
  {
    quote: "SecureAAI helped us modernize our surveillance infrastructure with intelligent monitoring and centralized management. The ANPR accuracy and speed of deployment exceeded our expectations.",
    name: "David Chen",
    title: "Chief Security Officer",
    company: "Global Logistics Corporation",
    avatar: "DC",
    rating: 5,
  },
  {
    quote: "Implementing SecureAAI's smart parking solution reduced our operational costs by 40% and improved customer satisfaction dramatically. The AI analytics dashboard is incredibly powerful.",
    name: "Sarah Al-Rashid",
    title: "Director of Operations",
    company: "Skyport International",
    avatar: "SA",
    rating: 5,
  },
  {
    quote: "The integration with our existing infrastructure was seamless. SecureAAI's team provided exceptional support throughout and the system has been performing flawlessly since day one.",
    name: "Michael Torres",
    title: "Head of Smart City Division",
    company: "Metro Government Authority",
    avatar: "MT",
    rating: 5,
  },
  {
    quote: "For critical infrastructure security, you need reliability above everything else. SecureAAI delivers 99.9% uptime with proactive monitoring that has prevented numerous incidents.",
    name: "Priya Nair",
    title: "VP of Security Technology",
    company: "Nexus Systems MENA",
    avatar: "PN",
    rating: 5,
  },
];

const AUTOPLAY_MS = 5000;

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex]   = useState(0);
  const [prevIndex,   setPrevIndex]     = useState(null);
  const [direction,   setDirection]     = useState(1); // 1 = forward, -1 = backward
  const [paused,      setPaused]        = useState(false);
  const [progress,    setProgress]      = useState(0);
  const ref        = useRef(null);
  const intervalRef = useRef(null);
  const rafRef      = useRef(null);
  const startRef    = useRef(null);

  const goTo = useCallback((index, dir = 1) => {
    setPrevIndex(activeIndex);
    setDirection(dir);
    setActiveIndex(index);
    setProgress(0);
    startRef.current = performance.now();
  }, [activeIndex]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length, 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length, -1);
  }, [activeIndex, goTo]);

  // Autoplay + progress bar
  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(rafRef.current);
      return;
    }
    startRef.current = performance.now();
    const tick = (now) => {
      setProgress(Math.min(((now - startRef.current) / AUTOPLAY_MS) * 100, 100));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => { clearInterval(intervalRef.current); cancelAnimationFrame(rafRef.current); };
  }, [paused, activeIndex, next]);

  // Scroll reveal
  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = testimonials[activeIndex];

  return (
    <>
      <style>{`
        @keyframes ts-slide-in-right  { from { opacity:0; transform:translateX(40px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes ts-slide-in-left   { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes ts-slide-out-left  { from { opacity:1; transform:translateX(0);     } to { opacity:0; transform:translateX(-40px); } }
        @keyframes ts-slide-out-right { from { opacity:1; transform:translateX(0);     } to { opacity:0; transform:translateX(40px);  } }
        @keyframes ts-fade-up         { from { opacity:0; transform:translateY(12px);  } to { opacity:1; transform:translateY(0); } }
        @keyframes ts-quote-pop       { 0%   { transform:scale(0.85) rotate(-4deg); opacity:0; } 60% { transform:scale(1.05) rotate(1deg); } 100% { transform:scale(1) rotate(0deg); opacity:1; } }
        .ts-enter-forward  { animation: ts-slide-in-right  0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .ts-enter-backward { animation: ts-slide-in-left   0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .ts-avatar-pop     { animation: ts-quote-pop       0.5s  cubic-bezier(0.34,1.56,0.64,1) both 0.1s; }
        .ts-quote-fade     { animation: ts-fade-up         0.4s  ease both 0.05s; }
        .ts-author-fade    { animation: ts-fade-up         0.4s  ease both 0.18s; }
      `}</style>

      <section
        ref={ref}
        className="py-21 bg-white  overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* ── Header ── */}
          <div
            data-reveal
            style={{ opacity:0, transform:'translateY(16px)', transition:'opacity 0.5s ease, transform 0.5s ease' }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-slate-200 pb-10 mb-14"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                Client Stories
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                What Our Clients <em className="font-light not-italic text-slate-400">Say</em>
              </h2>
            </div>

            {/* Prev / next arrows */}
            <div className="flex gap-2 self-start sm:self-auto">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border-[1.5px] border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 transition-all duration-200 hover:-translate-x-[1px]"
                aria-label="Previous testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border-[1.5px] border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 transition-all duration-200 hover:translate-x-[1px]"
                aria-label="Next testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── Main quote card ── */}
          <div
            data-reveal
            style={{ opacity:0, transform:'translateY(20px)', transition:'opacity 0.6s ease, transform 0.6s ease' }}
            className="relative"
          >
            {/* Large quote glyph */}
            <span
              className="absolute -top-6 left-0 text-[120px] leading-none select-none text-slate-100 font-serif pointer-events-none ts-quote-pop"
              key={`q-${activeIndex}`}
            >
              "
            </span>

            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 overflow-hidden">

              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#0f172a" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                key={`bq-${activeIndex}`}
                className={`text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed mb-10 tracking-tight ts-quote-fade ${direction === 1 ? 'ts-enter-forward' : 'ts-enter-backward'}`}
              >
                {active.quote}
              </blockquote>

              {/* Author */}
              <div
                key={`au-${activeIndex}`}
                className="flex items-center gap-4 ts-author-fade"
              >
                <div className="ts-avatar-pop w-12 h-12 rounded-xl bg-slate-900 text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                  {active.avatar}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-slate-900 tracking-tight">{active.name}</p>
                  <p className="text-[12.5px] text-slate-500">{active.title}</p>
                  <p className="text-[12.5px] font-semibold text-slate-700">{active.company}</p>
                </div>

                {/* Progress bar — right side */}
                <div className="ml-auto hidden sm:flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>
                  <div className="w-28 h-px bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-900 rounded-full"
                      style={{ width: `${progress}%`, transition: 'none' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mini previews ── */}
         

        </div>
      </section>
    </>
  );
}