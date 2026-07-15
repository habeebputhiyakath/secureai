import React from "react";
function WhyOrganizationsSection({ whyPoints }) {
  const containerRef = React.useRef(null);
  const pointRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [lineProgress, setLineProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh * 0.5;
      const scrolled = vh * 0.65 - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      setLineProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.idx));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    pointRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    // gap-12 on mobile (columns stack, don't need the big 64px gap),
    // gap-20 on desktop so the rail has real separation from the sticky panel
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

      {/* ── Left sticky panel ── */}
      <div className="lg:col-span-4">
        <div className="sticky top-32 space-y-8">
          <div>
            <h2 className="au-rev text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
              <span className="au-accent-line">Why Organizations Choose SecureAAi</span>
            </h2>
            <p
              className="au-rev text-base text-slate-600 mt-10 leading-relaxed"
              style={{ transitionDelay: "0.08s" }}
            >
              We don't just sell security hardware; we provide the architectural
              foundation for a future-ready, intelligent enterprise.
            </p>
          </div>

          <div className="au-why-card relative p-20 bg-[#0161FE] rounded-2xl text-white overflow-hidden">
            <div className="au-why-card-glow" />

            <span className="relative block font-mono text-xs tracking-wide uppercase opacity-70 mb-4">
              {whyPoints[activeIndex].num} / {String(whyPoints.length).padStart(2, "0")}
            </span>

            <h4 key={activeIndex} className="au-why-card-title relative text-2xl font-semibold mb-3 leading-snug">
              {whyPoints[activeIndex].title}
            </h4>

            <p key={`desc-${activeIndex}`} className="au-why-card-desc relative text-sm font-medium opacity-90 leading-relaxed">
              {whyPoints[activeIndex].desc}
            </p>

            <div className="relative flex gap-2 mt-7">
              {whyPoints.map((_, i) => (
                <span
                  key={i}
                  className="h-1 rounded-full bg-white transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    opacity: i === activeIndex ? 1 : 0.35,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: scroll-drawn timeline ── */}
      <div className="lg:col-span-8 relative pl-8 lg:pl-10" ref={containerRef}>
        <div className="au-timeline-track" />
        <div className="au-timeline-progress" style={{ height: `${lineProgress * 100}%` }} />

        {/* space-y-6 gives each card breathing room without the rail dots
            visually colliding with the card above/below */}
        <div className="space-y-6">
          {whyPoints.map((p, i) => (
            <TimelinePoint
              key={p.num}
              point={p}
              index={i}
              isActive={i === activeIndex}
              setRef={(el) => (pointRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelinePoint({ point, index, isActive, setRef }) {
  const [hasRevealed, setHasRevealed] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const numericTarget = parseInt(point.num, 10) || index + 1;

  React.useEffect(() => {
    const el = document.getElementById(`why-point-${index}`);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true);
          const duration = 700;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            setCount(Math.round(progress * numericTarget));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRevealed, numericTarget, index]);

  return (
    <div
      id={`why-point-${index}`}
      ref={setRef}
      data-idx={index}
      className="au-point group relative flex flex-col sm:flex-row gap-5 sm:gap-8 items-start p-6 sm:p-8 rounded-2xl border transition-all duration-500"
      style={{
        borderColor: isActive ? "rgba(1,97,254,0.25)" : "transparent",
        backgroundColor: isActive ? "#ffffff" : "transparent",
        boxShadow: isActive ? "0 20px 45px -20px rgba(1,97,254,0.25)" : "none",
        transform: isActive ? "translateX(4px)" : "translateX(0)",
      }}
    >
      {/* Timeline dot — vertically centered against the number block, not eyeballed */}
      <span
        className="au-timeline-dot"
        style={{
          backgroundColor: isActive ? "#0161FE" : "#cbd5e1",
          boxShadow: isActive ? "0 0 0 6px rgba(1,97,254,0.15)" : "none",
        }}
      />

      <span
        className="au-mono text-[40px] sm:text-[48px] font-bold leading-none shrink-0 transition-colors duration-500"
        style={{ color: isActive ? "rgba(1,97,254,0.9)" : "rgba(1,97,254,0.2)" }}
      >
        {String(count).padStart(2, "0")}
      </span>

      <div className="pt-1">
        <h4 className="text-2xl font-semibold text-slate-900 mb-2 leading-snug">{point.title}</h4>
        <p className="text-base text-slate-600 leading-relaxed max-w-xl">{point.desc}</p>
      </div>
    </div>
  );
}
export default WhyOrganizationsSection;