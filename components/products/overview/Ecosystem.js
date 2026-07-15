'use client';
import { useEffect, useRef } from 'react';

const products = [
  {
    id: 'sivms',
    unit: '01',
    name: 'SiVMS™',
    desc: 'Enterprise Video Management',
    color: '#0161FE',
    icon: 'camera',
  },
  {
    id: 'sipro',
    unit: '02',
    name: 'Si.PRO™',
    desc: 'ANPR & Traffic Intelligence',
    color: '#2F6FE0',
    icon: 'plate',
  },
  {
    id: 'parksi',
    unit: '03',
    name: 'ParkSi™',
    desc: 'Smart Parking Platform',
    color: '#0E7C86',
    icon: 'park',
  },
  {
    id: 'tracksi',
    unit: '04',
    name: 'TRACKSi™',
    desc: 'Real-Time Asset Tracking',
    color: '#0B5FA5',
    icon: 'target',
  },
];

function ArrowIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ProductIcon({ type, color }) {
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'camera') {
    return (
      <svg {...common}>
        <path d="M3 8.2c0-.66.53-1.2 1.2-1.2h3.1l1.1-1.6h7.2l1.1 1.6h3.1c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H4.2c-.66 0-1.2-.54-1.2-1.2V8.2z" />
        <circle cx="12" cy="13" r="3.4" />
        <circle cx="17.6" cy="10" r=".4" fill={color} stroke="none" />
      </svg>
    );
  }
  if (type === 'plate') {
    return (
      <svg {...common}>
        <rect x="2.5" y="7.5" width="19" height="9" rx="1.6" />
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="13" y1="12" x2="19" y2="12" />
        <line x1="2.5" y1="10.4" x2="21.5" y2="10.4" strokeDasharray="1.2 1.6" opacity="0.55" />
      </svg>
    );
  }
  if (type === 'park') {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M9.5 16V8h3.4a2.5 2.5 0 0 1 0 5H9.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.1" fill={color} stroke="none" />
      <line x1="12" y1="1.7" x2="12" y2="4.6" />
      <line x1="12" y1="19.4" x2="12" y2="22.3" />
      <line x1="1.7" y1="12" x2="4.6" y2="12" />
      <line x1="19.4" y1="12" x2="22.3" y2="12" />
    </svg>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eco3-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eco3-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eco3-rev { opacity: 0; transform: translateY(20px); transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .eco3-rev.eco3-vis { opacity: 1; transform: none; }

        .eco3-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .eco3-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -20px rgba(11,27,63,0.16); border-color: rgba(11,27,63,0.14); }
      `}</style>

      <section ref={ref} className="relative overflow-hidden bg-[#FAFBFD] border-t border-[#E7EAF2] py-32">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="eco3-rev inline-block mb-5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase" style={{ color: '#0161FE' }}>
              Product Suite
            </span>
            <h2 className="eco3-rev text-4xl lg:text-[2.5rem] font-extrabold tracking-tight leading-[1.08]" style={{ color: '#0B1B3F', transitionDelay: '0.06s' }}>
              The SecureAI <span style={{ color: '#0161FE' }}>Ecosystem</span>
            </h2>
            <p className="eco3-rev mt-4 text-[0.95rem] leading-relaxed" style={{ color: '#64708A', transitionDelay: '0.1s' }}>
              Four purpose-built platforms, one unified command layer — engineered to work independently or as a connected whole.
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <div
                key={p.id}
                className="eco3-rev eco3-card group relative rounded-[16px] cursor-pointer border p-6 flex flex-col gap-4"
                style={{ background: '#FFFFFF', borderColor: '#E7EAF2', transitionDelay: `${0.12 + i * 0.09}s` }}
              >
                <div className="w-11 h-11 rounded-[10px] flex items-center justify-center border"
                  style={{ borderColor: `${p.color}33`, background: `${p.color}0D` }}>
                  <ProductIcon type={p.icon} color={p.color} />
                </div>

                <div>
                  <h3 className="text-[1.05rem] font-bold mb-1 tracking-tight" style={{ color: '#0B1B3F' }}>{p.name}</h3>
                  <p className="text-[0.85rem] leading-relaxed" style={{ color: '#64708A' }}>{p.desc}</p>
                </div>

                <div className="mt-auto pt-4 border-t flex items-center" style={{ borderColor: '#EEF0F5' }}>
                  <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: p.color }}>
                    View spec <ArrowIcon size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}