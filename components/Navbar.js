'use client';
import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'Products', type: 'mega' },
  { label: 'Solutions', type: 'mega' },
  {
    label: 'Success Stories', type: 'dropdown',
  },
  {
    label: 'Support', type: 'link', href: '/support'
  },
  {
    label: 'Partners', type: 'dropdown',
    items: ['Technology Partner Program', 'Channel Partner Program'],
  },
  {
    label: 'Company', type: 'dropdown',
    items: ['About Us', 'trust center', 'blog', 'Contact'],
  },
];

/* ─── PRODUCTS MEGA ─────────────────────────────────────────────── */
function ProductsMega() {
  return (
    <div className="mega-panel">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.1fr', gap: 0 }}>
          {/* Software */}
          <div className="mega-col">
            <div className="mega-col-head">Software</div>
            <MegaItem title="Overview" desc="Platform overview & architecture" href="/products/overview" />
            <MegaItem title="SI.PRO" desc="ANPR & Plate Recognition" href="/products/si.pro"  badge="SIRA Approved" badgeColor="#0161FE" badgeBg="#eaf1ff" />

            <MegaItem title="ParkSi" desc="Smart Parking Management" href="/products/parksi" badge="New" badgeColor="#15803d" badgeBg="#f0fdf4" />
            <MegaItem title="SiVMS" desc="Enterprise Video Management" href="/products/sivms" />
            <MegaItem title="TrackSi" desc="GPS Fleet Tracking" href="/products/tracksi" />
          </div>
          {/* Hardware */}
          <div className="mega-col" style={{ borderLeft: '1px solid #f1f5f9' }}>
            <div className="mega-col-head">Hardware</div>
            <MegaItem title="Intelligent Cameras" desc="Edge-AI ANPR & Surveillance" href="/products/cameras" />
            <MegaItem title="Processing Units" desc="On-premise AI Inference Servers" href="/products/processing" />
            <MegaItem title="Accessories" desc="Mounts, Housing & Cabling" href="/products/accessories" />
          </div>
          {/* Services */}
          <div className="mega-col" style={{ borderLeft: '1px solid #f1f5f9' }}>
            <div className="mega-col-head">Services</div>
            <MegaItem title="SICare Support" desc="Maintenance & Technical Services" href="/products/sicare" />
            <MegaItem title="Professional Services" desc="Install, Configure & Commission" href="/products/professional" />
            <MegaItem title="Contact Support" desc="24/7 Ticket Support Portal" />
          </div>
          {/* Featured */}
          <div style={{ padding: '20px 20px 20px 16px', borderLeft: '1px solid #f1f5f9' }}>
            <div className="mega-col-head">Featured</div>
            <div style={{
              background: 'linear-gradient(135deg, #0042b3 0%, #0161FE 100%)',
              borderRadius: 12, padding: '16px', marginTop: 4,
            }}>
              <span style={{
                display: 'inline-block', background: 'rgba(255,255,255,0.2)',
                color: '#fff', fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '3px 10px', borderRadius: 100, marginBottom: 10,
              }}>Latest Release</span>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 6 }}>SI.PRO ANPR v3.5</div>
              <p style={{ color: 'rgba(219,234,254,0.85)', fontSize: '0.78rem', lineHeight: 1.6, marginBottom: 12 }}>
                New AI engine, 98.7% accuracy, 60+ plate formats, full edge processing.
              </p>
              <a href="#" style={{
                color: '#fff', fontSize: '0.78rem', fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                textDecoration: 'none',
              }}>See What's New →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SOLUTIONS MEGA ─────────────────────────────────────────────── */
function SolutionsMega() {
  const capabilities = [
    { label: 'ANPR Central Monitoring Solution', href: '/solutions/anpr' },
    { label: 'Entrance & Exit Management', href: '/solutions/entrance-exit-management' },
    { label: 'Smart Pay Parking Solution', href: '/solutions/parking' },
    { label: 'Parking Lot Management', href: '/solutions/parking-lot-management' },
    { label: 'VMS Solution', href: '/solutions/vms' },
  ];
  return (
    <div className="mega-panel">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 340 }}>
          <div className="mega-col">
            <div className="mega-col-head">Capabilities</div>
            {capabilities.map(c => (
              <a key={c.label} href={c.href} className="mega-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0161FE', flexShrink: 0 }} />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── DROPDOWN ───────────────────────────────────────────────────── */
function DropdownMenu({ items }) {
  const getHref = (item) => {
    if (item === 'About Us') return '/about';
    if (item === 'blog') return '/blog';
    if (item === 'trust center') return '/trust';
    if (item === 'Contact') return '/contact';
    if (item === 'Technology Partner Program') return '/partner/technology-partner-program';
    if (item === 'Channel Partner Program') return '/partner/channel-partner-program';
    return '#';
  };
  return (
    <div className="dropdown-panel">
      {items?.map(item => (
        <a key={item} href={getHref(item)} className="dropdown-item" style={{ textTransform: item === 'blog' ? 'capitalize' : 'none' }}>
          {item === 'blog' ? 'Blog' : item}
        </a>
      ))}
    </div>
  );
}

/* ─── MEGA ITEM ──────────────────────────────────────────────────── */
function MegaItem({ title, desc, badge, badgeColor, badgeBg, href = '#' }) {
  return (
    <a href={href} className="mega-item">
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2 }}>
        <span className="mega-item-title">{title}</span>
        {badge && (
          <span style={{
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', padding: '2px 7px', borderRadius: 100,
            background: badgeBg, color: badgeColor, flexShrink: 0,
          }}>{badge}</span>
        )}
      </div>
      <span className="mega-item-desc">{desc}</span>
    </a>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(hoverTimeout.current);
    setHovered(label);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHovered(null), 120);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .saai-nav * { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }

        /* ── MEGA PANEL — full width ── */
        .mega-panel {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          width: 100%;
          background: #fff;
          border-top: 1px solid #e8edf4;
          border-bottom: 1px solid #e8edf4;
          box-shadow: 0 12px 40px rgba(1,40,130,0.10), 0 2px 8px rgba(15,23,42,0.06);
          z-index: 200;
          animation: navFadeIn 0.18s ease;
        }

        /* ── DROPDOWN PANEL — stays anchored to trigger ── */
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border: 1px solid #e8edf4;
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(1,40,130,0.10), 0 2px 8px rgba(15,23,42,0.06);
          min-width: 200px;
          padding: 6px;
          z-index: 200;
          animation: navFadeIn 0.18s ease;
        }

        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* dropdown still uses translateX trick so keep it separate */
        .dropdown-panel {
          animation: dropFadeIn 0.18s ease;
        }
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .mega-col { padding: 20px; }
        .mega-col-head {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #94a3b8; margin-bottom: 12px;
        }
        .mega-item {
          display: flex; flex-direction: column; gap: 1px;
          padding: 8px 10px; border-radius: 9px; text-decoration: none;
          transition: background 0.15s ease; margin-bottom: 2px;
        }
        .mega-item:hover { background: #eaf1ff; }
        .mega-item-title {
          font-size: 0.82rem; font-weight: 600; color: #1e293b;
          transition: color 0.15s;
        }
        .mega-item:hover .mega-item-title { color: #0161FE; }
        .mega-item-desc { font-size: 0.72rem; color: #94a3b8; }

        .mega-link {
          display: block; padding: 6px 10px; border-radius: 8px;
          font-size: 0.8rem; font-weight: 500; color: #475569;
          text-decoration: none; transition: all 0.15s ease;
        }
        .mega-link:hover { background: #eaf1ff; color: #0161FE; }

        .dropdown-item {
          display: flex; align-items: center;
          padding: 9px 14px; border-radius: 9px;
          font-size: 0.82rem; font-weight: 500; color: #374151;
          text-decoration: none; transition: all 0.15s ease;
          white-space: nowrap;
        }
        .dropdown-item:hover { background: #eaf1ff; color: #0161FE; }

        /* ── NAV BUTTON ── */
        .nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #374151;
          background: none;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-btn:hover, .nav-btn.active { background: #eaf1ff; color: #0161FE; }
        .nav-btn svg { transition: transform 0.2s ease; flex-shrink: 0; }
        .nav-btn.active svg { transform: rotate(180deg); }

        /* ── CTA ── */
        .nav-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0161FE; color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 400; font-size: 0.82rem;
          padding: 10px 22px; border-radius: 100px; text-decoration: none;
          border: none; cursor: pointer; transition: all 0.18s ease;
          white-space: nowrap;
          text-transform: uppercase;
        }
        .nav-cta:hover { background: #0052d6; box-shadow: 0 6px 20px rgba(1,97,254,0.35); transform: translateY(-1px); }

        /* ── ICON BTNS ── */
        .nav-icon-btn {
          width: 38px; height: 38px; border-radius: 100px;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; background: none; border: none; cursor: pointer;
          transition: all 0.15s ease; flex-shrink: 0;
        }
        .nav-icon-btn:hover { background: #eaf1ff; color: #0161FE; }

        .nav-lang-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 8px 12px; border-radius: 100px;
          font-size: 0.82rem; font-weight: 600; color: #64748b;
          background: none; border: none; cursor: pointer;
          transition: all 0.15s ease; font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .nav-lang-btn:hover { background: #eaf1ff; color: #0161FE; }

        /* ── MOBILE ── */
        .mobile-menu {
          background: #fff;
          border-top: 1px solid #f1f5f9;
          padding: 8px 0 16px;
          max-height: calc(100vh - 72px);
          overflow-y: auto;
        }
        .mobile-nav-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 12px 20px; font-size: 0.9rem; font-weight: 600; color: #1e293b;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; text-align: left;
          transition: color 0.15s ease;
        }
        .mobile-nav-btn:hover { color: #0161FE; }
        .mobile-sub-link {
          display: block; padding: 9px 20px 9px 36px;
          font-size: 0.83rem; color: #64748b; font-weight: 500;
          text-decoration: none; transition: color 0.15s;
        }
        .mobile-sub-link:hover { color: #0161FE; }

        /* ── HAMBURGER ── */
        .hamburger {
          width: 40px; height: 40px; border-radius: 100px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 5px; background: none; border: none; cursor: pointer;
          transition: background 0.15s ease; flex-shrink: 0;
        }
        .hamburger:hover { background: #eaf1ff; }
        .hamburger span {
          display: block; width: 20px; height: 2px;
          background: #374151; border-radius: 2px;
          transition: all 0.25s ease; transform-origin: center;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-desktop-right { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <header
        className="saai-nav"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: '#ffffff',
          boxShadow: scrolled
            ? '0 1px 0 rgba(226,232,240,0.9), 0 4px 24px rgba(1,40,130,0.06)'
            : '0 1px 0 rgba(226,232,240,0.6)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

            {/* ── LOGO ── */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <img
                src="/logo.png"
                alt="SecureAAI Logo"
                style={{
                  height: '30px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </a>

            {/* ── DESKTOP NAV ── */}
            <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <a href={item.href} className="nav-btn" style={{ textDecoration: 'none' }}>
                      {item.label}
                    </a>
                  ) : (
                    <button className={`nav-btn${hovered === item.label ? ' active' : ''}`}>
                      {item.label}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  )}

                  {hovered === item.label && !item.href && (
                    <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                      {item.label === 'Products' && <ProductsMega />}
                      {item.label === 'Solutions' && <SolutionsMega />}
                      {item.type === 'dropdown' && <DropdownMenu items={item.items} />}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── DESKTOP RIGHT ── */}
            <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button className="nav-lang-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                AR
              </button>
              <a href="#demo" className="nav-cta">Request Demo</a>
            </div>

            {/* ── HAMBURGER ── */}
            <button
              className="hamburger nav-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(0, 7px)' : 'none' }} />
              <span style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? 'scaleX(0)' : 'none' }} />
              <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(0, -7px)' : 'none' }} />
            </button>
          </div>
        </nav>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="mobile-menu">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a href={item.href} className="mobile-nav-btn" style={{ textDecoration: 'none' }}>
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="mobile-nav-btn"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      style={{ transition: 'transform 0.2s ease', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}

                {mobileExpanded === item.label && !item.href && (
                  <div>
                    {item.label === 'Products' && (
                      <>
                        {[
                          { label: 'Overview', href: '/products/overview' },
                          { label: 'SI.PRO — ANPR', href: '/products/si.pro' },
                          { label: 'ParkSi — Smart Parking', href: '/products/parksi' },
                          { label: 'SiVMS — Video Mgmt', href: '/products/sivms' },
                          { label: 'TrackSi — GPS Tracking', href: '/products/tracksi' },
                          { label: 'Intelligent Cameras', href: '/products/cameras' },
                          { label: 'Processing Units', href: '/products/processing' },
                          { label: 'Accessories', href: '/products/accessories' },
                          { label: 'SICare Support', href: '/products/sicare' },
                          { label: 'Professional Services', href: '/products/professional' },
                        ].map(s => (
                          <a key={s.label} href={s.href} className="mobile-sub-link">{s.label}</a>
                        ))}
                      </>
                    )}
                    {item.label === 'Solutions' && (
                      <>
                        {[
                          { label: 'ANPR Central Monitoring Solution', href: '/solutions/anpr' },
                          { label: 'Entrance & Exit Management', href: '/solutions/entrance-exit-management' },
                          { label: 'Smart Pay Parking Solution', href: '/solutions/parking' },
                          { label: 'Parking Lot Management', href: '/solutions/parking-lot-management' },
                          { label: 'VMS Solution', href: '/solutions/vms' }
                        ].map(s => (
                          <a key={s.label} href={s.href} className="mobile-sub-link">{s.label}</a>
                        ))}
                      </>
                    )}
                    {item.items && item.type === 'dropdown' && item.items.map(sub => {
                      const href = sub === 'About Us' ? '/about' : sub === 'blog' ? '/blog' : sub === 'Contact' ? '/contact' : sub === 'trust center' ? '/trust' : sub === 'Technology Partner Program' ? '/partner/technology-partner-program' : sub === 'Channel Partner Program' ? '/partner/channel-partner-program' : '#';
                      return <a key={sub} href={href} className="mobile-sub-link">{sub === 'blog' ? 'Blog' : sub === 'trust center' ? 'Trust Center' : sub}</a>;
                    })}
                  </div>
                )}
              </div>
            ))}

            <div style={{ padding: '12px 20px 4px', borderTop: '1px solid #f1f5f9', marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#demo" className="nav-cta" style={{ justifyContent: 'center' }}>Request Demo</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}