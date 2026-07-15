import React from "react";


function EcosystemShowcase({ solutions }) {
  const [active, setActive] = React.useState(0);
  const ActiveIcon = solutions[active].icon;

  return (
    <div className="au-rev grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-4 items-stretch">

      {/* ── Left: vertical solution list ── */}
      <div className="lg:col-span-5 flex flex-col border-t border-slate-200">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <button
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="au-list-item group relative w-full text-left py-6 px-2 border-b border-slate-200 flex items-start gap-4"
              data-active={isActive}
            >
              {/* Progress bar that fills while active (optional autoplay hook) */}
              <span className="au-list-progress" data-active={isActive} />

              <span className="au-list-num font-mono text-sm mt-1" data-active={isActive}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="au-list-icon" data-active={isActive}>
                    <Icon size={18} />
                  </span>
                  <h4 className="text-lg font-semibold transition-colors duration-300"
                      style={{ color: isActive ? "#0161FE" : "#0f172a" }}>
                    {s.title}
                  </h4>
                </div>
                <p
                  className="au-list-desc text-sm text-slate-500 leading-relaxed overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isActive ? "80px" : "0px",
                    opacity: isActive ? 1 : 0,
                    marginLeft: "30px",
                  }}
                >
                  {s.desc}
                </p>
              </div>

              <svg
                className="au-list-arrow shrink-0 mt-1.5"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                data-active={isActive}
              >
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          );
        })}
      </div>

      {/* ── Right: live preview panel ── */}
      <div className="lg:col-span-7 mt-8 lg:mt-0">
        <div className="au-preview relative h-full min-h-[380px] rounded-3xl bg-slate-900 overflow-hidden flex items-center justify-center p-10">

          {/* Animated mesh-gradient backdrop, shifts with active index */}
          <div
            key={active}
            className="au-preview-mesh"
            style={{ "--hue": `${active * 40}deg` }}
          />

          {/* Grid overlay for texture */}
          <div className="absolute inset-0 au-preview-grid" />

          {/* Content, cross-fades in on tab change */}
          <div key={`content-${active}`} className="au-preview-content relative text-center">
            <div className="au-preview-icon mx-auto mb-6 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
              <ActiveIcon size={36} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {solutions[active].title}
            </h3>
            <p className="text-slate-300 max-w-sm mx-auto leading-relaxed">
              {solutions[active].desc}
            </p>
          </div>

          {/* Corner index badge */}
          <span className="absolute bottom-6 right-7 font-mono text-white/20 text-5xl font-bold">
            {String(active + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
export default EcosystemShowcase;