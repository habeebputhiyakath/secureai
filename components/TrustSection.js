'use client';
import { useEffect, useRef } from 'react';

const logos = [
  { name: 'SENTINEL.CORP', icon: '🛡️' },
  { name: 'NEXUS SYSTEMS', icon: '🔗' },
  { name: 'METRO_GOV',     icon: '🏛️' },
  { name: 'OMNI_TECH',     icon: '🌐' },
  { name: 'SKYPORT_INTL',  icon: '✈️' },
  { name: 'GUARDIAN AI',   icon: '🤖' },
  { name: 'APEX SECURE',   icon: '🔐' },
  { name: 'URBANFLOW',     icon: '🏙️' },
];

export default function TrustSection() {
  const ref = useRef(null);

  /* ── Reveal-on-scroll ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('opacity-100', '!translate-y-0');
        }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.tr-rev');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Counting number animation ── */
  useEffect(() => {
    const counters = ref.current?.querySelectorAll('[data-target]');
    if (!counters) return;

    const animate = (el) => {
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      const duration = 1800;
      const start = performance.now();

      const update = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = ease * target;
        el.textContent = decimals > 0
          ? val.toFixed(decimals) + suffix
          : Math.round(val) + suffix;
        if (p < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.3 }
    );
    counters.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-white py-20 overflow-hidden font-sans">
      <style>{`
        @keyframes navisScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .navis-marquee-track {
          animation: navisScroll 34s linear infinite;
        }
        .navis-marquee-outer:hover .navis-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* ── Eyebrow + Heading (centered) ── */}
        <div className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Expertise
          </span>
          <h2 className="mt-6 mx-auto max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug tracking-tight">
            <span className="text-neutral-900">
              Discover our commitment to security excellence.{' '}
            </span>
            <span className="text-neutral-400">
              With over a decade of experience, we deliver AI-powered
              infrastructure that empowers your organization to operate
              safely. By understanding your unique risk landscape, our team
              provides mission-critical protection through collaboration and
              innovation.
            </span>
          </h2>
        </div>

        {/* ── 3-col image / stat grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-5 mb-16 lg:mb-20">

          {/* Left photo */}
          <div
            className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out sm:col-span-1 rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/5] sm:aspect-auto sm:h-full min-h-[280px]"
            style={{ transitionDelay: '60ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80"
              alt="Security operations specialist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle: stacked stat cards */}
          <div
            className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out sm:col-span-2 grid grid-rows-2 gap-4 lg:gap-5"
            style={{ transitionDelay: '120ms' }}
          >
            {/* Blue stat card */}
            <div className="rounded-3xl bg-[#0161FE] p-6 sm:p-8 flex flex-col justify-between text-white">
              <p className="text-sm sm:text-base leading-relaxed max-w-sm">
                Complete enterprise protection through AI-driven security
                infrastructure and a commitment to excellence.
              </p>
              <span
                className="font-mono text-5xl sm:text-6xl font-semibold tabular-nums mt-6"
                data-target="98.7"
                data-suffix="%"
                data-decimals="1"
              >
                0%
              </span>
            </div>

            {/* Dark stat card */}
            <div className="rounded-3xl bg-neutral-900 p-6 sm:p-8 flex flex-col justify-between text-white">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base">
                🛡️
              </div>
              <div>
                <span
                  className="font-mono text-5xl sm:text-6xl font-semibold tabular-nums"
                  data-target="15"
                  data-suffix="+"
                  data-decimals="0"
                >
                  0+
                </span>
                <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed max-w-sm">
                  Countries served, with global security operations running
                  at enterprise scale around the clock.
                </p>
              </div>
            </div>
          </div>

          {/* Right photo */}
          <div
            className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out sm:col-span-1 rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/5] sm:aspect-auto sm:h-full min-h-[280px]"
            style={{ transitionDelay: '180ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
              alt="Enterprise client"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* ── Logo marquee ── */}
        <div
          className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out relative rounded-3xl border border-neutral-200 bg-neutral-50 py-6 overflow-hidden"
          style={{ transitionDelay: '240ms' }}
        >
          <div className="navis-marquee-outer relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none" />
            <div className="navis-marquee-track flex gap-3 w-max">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-xs font-semibold text-neutral-600 tracking-wide whitespace-nowrap hover:border-[#0161FE]/30 hover:text-[#0161FE] hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-[15px]">{logo.icon}</span>
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}