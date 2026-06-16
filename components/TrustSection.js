'use client';
import { useEffect, useRef } from 'react';

const logos = Array.from({ length: 10 }, (_, i) => ({
  src: `/clients/${i + 1}.png`,
  alt: `Client logo ${i + 1}`,
}));

export default function TrustSection() {
  const ref = useRef(null);

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
    <section ref={ref} className="relative bg-white pt-22 pb-10 overflow-hidden font-sans">
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

        {/* ── Eyebrow + Heading ── */}
        <div className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Expertise
          </span>
          <h2 className="mt-6 mx-auto max-w-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight">
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

        {/* ── 3-col grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-5 mb-16 lg:mb-20">

          <div
            className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out sm:col-span-1 rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/5] sm:aspect-auto sm:h-full min-h-[280px]"
            style={{ transitionDelay: '60ms' }}
          >
            <img
              src="https://www.ecmag.com/images/default-source/articles/shutterstock_755270563fcc168a3-2dff-42e3-b3fc-725196559716.tmb-art-detail.jpg?Culture=en&sfvrsn=405b3b56_2"
              alt="Security operations specialist"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out sm:col-span-2 grid grid-rows-2 gap-4 lg:gap-5"
            style={{ transitionDelay: '120ms' }}
          >
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

            <div className="rounded-3xl bg-neutral-900 p-20 sm:p-8 flex flex-col justify-between text-white">
             
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

          <div
            className="tr-rev opacity-0 translate-y-6 transition-all duration-700 ease-out sm:col-span-1 rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/5] sm:aspect-auto sm:h-full min-h-[280px]"
            style={{ transitionDelay: '180ms' }}
          >
            <img
              src="/trust.png"
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
            <div className="navis-marquee-track flex items-center gap-0 w-max">
              {[...logos, ...logos, ...logos].map((logo, i) => (
              
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className=" w-auto max-w-[180px] object-contain"
                  />
                
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}