'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function EemParkingFeeScenarioSection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('eepf-vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.eepf-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .eepf-rev { opacity:0; transform:translateY(26px);
          transition:opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
        .eepf-rev.eepf-vis { opacity:1; transform:none; }
        .eepf-d0{transition-delay:0s} .eepf-d1{transition-delay:.08s} .eepf-d2{transition-delay:.16s}

        .eepf-scene {
          position: relative; border-radius: 28px; overflow: hidden;
          background: linear-gradient(180deg, #eef4ff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0; padding: 40px 28px 32px;
          box-shadow: 0 24px 60px -28px rgba(1,97,254,.3);
        }
        .eepf-scene::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 26px 26px; opacity: 0.5;
        }
        .eepf-lanes { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .eepf-lane {
          position: relative; background: #0f172a; border-radius: 18px; height: 190px;
          overflow: hidden; box-shadow: 0 16px 40px rgba(15,23,42,.25);
        }
        .eepf-lane::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(1,97,254,.12), transparent 60%);
        }
        .eepf-barrier {
          position: absolute; top: 14px; left: 50%; transform: translateX(-50%) rotate(-24deg);
          width: 110px; height: 8px; border-radius: 4px;
          background: repeating-linear-gradient(90deg, #fff 0 14px, #dc2626 14px 20px);
          box-shadow: 0 2px 6px rgba(0,0,0,.3);
        }
        .eepf-car {
          position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%);
          font-size: 2.4rem; filter: drop-shadow(0 8px 14px rgba(0,0,0,.4));
        }
        .eepf-plate {
          position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
          background: #fff; color: #0f172a; font-family: monospace; font-weight: 800;
          font-size: .68rem; letter-spacing: .06em; padding: 2px 8px; border-radius: 4px;
        }
        .eepf-card {
          position: absolute; top: 12px; left: 12px; right: 12px;
          background: rgba(255,255,255,.97); border-radius: 12px; padding: 10px 12px;
          box-shadow: 0 10px 24px rgba(0,0,0,.18); font-size: .68rem; line-height: 1.55;
        }
        .eepf-card-row { display:flex; justify-content:space-between; gap: 10px; color:#64748b; font-weight:600; }
        .eepf-card-row b { color:#0f172a; font-weight:800; }
        .eepf-status-paid { color:#059669; font-weight:800; }
        .eepf-status-charging { color:#d97706; font-weight:800; }

        .eepf-photo {
          position: relative; border-radius: 18px; overflow: hidden; height: 150px;
          box-shadow: 0 16px 36px -14px rgba(1,97,254,.35);
        }
        .eepf-photo img { display:block; width:100%; height:100%; object-fit:cover; }
        .eepf-photo-label {
          position:absolute; bottom:0; left:0; right:0;
          background: linear-gradient(to top, rgba(3,10,25,.85), transparent);
          color:#fff; font-size:.78rem; font-weight:700; padding: 22px 14px 10px;
        }
      `}</style>

      <section ref={ref} className="relative bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: live lane mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="eepf-scene"
            >
              <div className="eepf-lanes">
                <div className="eepf-lane">
                  <div className="eepf-card">
                    <div className="eepf-card-row"><span>Plate</span><b>DXB 2283</b></div>
                    <div className="eepf-card-row"><span>Duration</span><b>2h 15m</b></div>
                    <div className="eepf-card-row"><span>Amount Due</span><b>AED 15</b></div>
                    <div className="eepf-card-row"><span>Status</span><span className="eepf-status-paid">Paid</span></div>
                  </div>
                  <div className="eepf-barrier" />
                  <div className="eepf-car">🚙</div>
                  <div className="eepf-plate">DXB 2283</div>
                </div>
                <div className="eepf-lane">
                  <div className="eepf-card">
                    <div className="eepf-card-row"><span>Plate</span><b>DXB 1234</b></div>
                    <div className="eepf-card-row"><span>Entry Time</span><b>09:42</b></div>
                    <div className="eepf-card-row"><span>Status</span><span className="eepf-status-charging">Charging</span></div>
                  </div>
                  <div className="eepf-barrier" />
                  <div className="eepf-car">🚗</div>
                  <div className="eepf-plate">DXB 1234</div>
                </div>
              </div>
            </motion.div>

            {/* Right: copy */}
            <div>
              <div className="eepf-rev eepf-d0 mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background:'rgba(1,97,254,.08)',color:'#0161FE',border:'1px solid rgba(1,97,254,.2)',
                  fontSize:'.68rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase' }}>
                Featured Scenario
              </div>
              <h2 className="eepf-rev eepf-d1 text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: '#0161FE' }}>
                Parking Fee Management
              </h2>
              <p className="eepf-rev eepf-d1 text-slate-500 text-base leading-relaxed mb-6">
                SecureAAi Entrance &amp; Exit cameras integrate directly with the SmartPay Parking Solution, calculating duration-based charges automatically and processing digital payment before the vehicle reaches the barrier — for both ticketed and fully ticketless sites.
              </p>

              <h4 className="eepf-rev eepf-d2 text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                Typical Scenarios <span>💡</span>
              </h4>
              <p className="eepf-rev eepf-d2 text-slate-500 text-sm leading-relaxed mb-8">
                Large commercial or mixed-use parking lots, underground garages in shopping malls, residential communities, corporate campuses, and hospitals.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="eepf-photo"
              >
                <img src="/products/overview/parksi.png" alt="Multi-level commercial parking facility with automated entry and exit" />
                <div className="eepf-photo-label">Commercial Parking Facility</div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
