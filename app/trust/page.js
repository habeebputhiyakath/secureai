'use client';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TABS = ['Compliance', 'Security', 'Privacy', 'Terms of Use'];

/* ── SVG Icons ── */
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const LockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const EyeOffIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);
const AlertIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const DocIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const UserIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

function IconBox({ icon, color = '#0161FE' }) {
  return (
    <div style={{
      width: 64, height: 64, borderRadius: 16, flexShrink: 0,
      background: `${color}18`, color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {icon}
    </div>
  );
}

function TrustCard({ icon, title, bullets, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid #e8edf5', borderRadius: 20,
        padding: '28px 32px', background: '#fff',
        boxShadow: hovered ? '0 8px 32px rgba(1,97,254,0.10)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        <IconBox icon={icon} color={color || '#0161FE'} />
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.84rem', color: '#475569', lineHeight: 1.55 }}>
                <span style={{ color: color || '#0161FE', fontSize: '0.6rem', marginTop: 5, flexShrink: 0 }}>●</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ id, label, children }) {
  return (
    <section id={id} style={{ paddingTop: 72, paddingBottom: 64 }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: 16, letterSpacing: '-0.02em' }}>{label}</h2>
      {children}
    </section>
  );
}

function ComplianceBadge({ name, desc, abbr }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid #e8edf5', borderRadius: 16, padding: '22px 24px',
        background: '#fff', display: 'flex', flexDirection: 'column', gap: 10,
        boxShadow: hovered ? '0 6px 24px rgba(1,97,254,0.10)' : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{
        width: 52, height: 52, background: '#0161FE10', borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.65rem', fontWeight: 800, color: '#0161FE',
        letterSpacing: '0.04em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.2,
      }}>
        {abbr || name.split(' ')[0]}
      </div>
      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>{name}</div>
      <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function TermsAccordion() {
  const terms = [
    { num: '01', title: "User's Acknowledgment and Acceptance of Terms", body: `SECUREAAi ("Us" or "We") provides the SECUREAAi SYSTEMS Website and various related services (collectively, the "site") to you, the user, subject to your compliance with all the terms, conditions, and notices contained or referenced herein (the "Terms of Use"). These Terms of Use are effective as of 20 March 2016. We expressly reserve the right to change these Terms of Use from time to time without notice to you. Your continued use of this site after such modifications will constitute acknowledgement of the modified Terms of Use.` },
    { num: '02', title: 'Description of Services', body: "No goods or services are directly offered through this website, which is for information purposes only. Information provided is, to the best of our knowledge, correct at the time of publication. We reserve the sole right to either modify or discontinue the site at any time with or without notice to you. We will not be liable to you or any third party should we exercise such a right." },
    { num: '03', title: 'Conduct on Site', body: 'Your use of the site is subject to all applicable laws and regulations, and you are solely responsible for the substance of your communications through the site. You agree that you will not upload, share, post, or otherwise distribute any content—including text, communications, software, images, sounds, data, or other information—that is illegal or potentially offensive.' },
    { num: '04', title: 'Third Party Sites and Information', body: 'This site may link you to other sites on the Internet or otherwise include references to information, documents, software, materials and/or services provided by other parties. These other sites and parties are not under our control, and you acknowledge that we are not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content of such sites.' },
    { num: '05', title: 'Intellectual Property Information', body: 'Copyright (c) Secureaai All Rights Reserved. All content presented to you on this site is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws, and is the sole property of Secureaai and/or its Affiliates. You are only permitted to use the content as expressly authorized by us or the specific content provider.' },
    { num: '06', title: 'Unauthorized Use of Materials', body: 'Any communication or material that you transmit to this site or to us, for any reason, will be treated as non-confidential and non-proprietary. While you retain all rights in such communications or material, you grant us a non-exclusive, paid-up, perpetual, and worldwide right to copy, distribute, display, perform, publish, translate, adapt, modify, and otherwise use such material for any purpose.' },
    { num: '07', title: 'Disclaimer of Warranties', body: 'All materials and services on this site are provided on an "as is" and "as available" basis without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability or fitness for a particular purpose, or the warranty of non-infringement. We make no warranty that the services and materials will meet your requirements or be uninterrupted, timely, secure, or error-free.' },
    { num: '08', title: 'Limitation of Liability', body: 'In no event shall we or our affiliates be liable to you or any third party for any special, punitive, incidental, indirect or consequential damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of use, data or profits, whether or not we have been advised of the possibility of such damages.' },
    { num: '09', title: 'Indemnification', body: "Upon a request by us, you agree to defend, indemnify, and hold us and our Affiliates harmless from all liabilities, claims, and expenses, including attorney's fees, that arise from your use or misuse of this site. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you." },
    { num: '10', title: 'Security and Password', body: 'You are solely responsible for maintaining the confidentiality of your password and account and for any and all statements made and acts or omissions that occur through the use of your password and account. Our personnel will never ask you for your password. You may not transfer or share your account with anyone.' },
    { num: '15', title: 'Governing Law', body: 'This site is controlled by us from our offices within South Korea. By accessing this site both parties agree that the statutes and laws of South Korea, without regard to the conflicts of laws principles thereof, will apply to all matters relating to the use of this site and the purchase of products and services available through this site.' },
    { num: '19', title: 'Contact Information', body: 'Except as explicitly noted on this site, the services available through this site are offered by Secureaai located at UK. If you notice that any user is violating these Terms of Use, please contact us via the "Contact Us" page. All notices to a party shall be in writing and shall be made either via email or conventional mail.' },
    { num: '20', title: 'Processed Personal Information and Processing Purpose', body: "Unless permitted by relevant laws and regulations or with the personal information provider's prior consent, Secureaai will not process any sensitive information. Information concerning the customer includes: Name, postal address, email, company information, service usage data, access information, cookies, log file, and IP address." },
  ];

  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {terms.map((t, i) => (
        <div key={i} style={{ border: '1px solid #e8edf5', borderRadius: 16, overflow: 'hidden', background: '#fff' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: 16, padding: '20px 28px',
              background: open === i ? '#f8fafc' : '#fff',
              border: 'none', cursor: 'pointer', textAlign: 'left',
              transition: 'background 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{
                fontSize: '0.68rem', fontWeight: 800, color: '#0161FE',
                letterSpacing: '0.08em', padding: '3px 10px',
                background: '#0161FE12', borderRadius: 100, flexShrink: 0,
              }}>{t.num}</span>
              <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.4 }}>{t.title}</span>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {open === i && (
            <div style={{ padding: '0 28px 22px', borderTop: '1px solid #f1f5f9' }}>
              <p style={{ paddingTop: 16, fontSize: '0.84rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{t.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TrustPage() {
  const [activeTab, setActiveTab] = useState('Compliance');
  const [stickyTab, setStickyTab] = useState(false);
  const tabBarRef = useRef(null);
  const tabBarTop = useRef(0);

  useEffect(() => {
    if (tabBarRef.current) {
      tabBarTop.current = tabBarRef.current.getBoundingClientRect().top + window.scrollY;
    }

    const onScroll = () => {
      const scrollY = window.scrollY;
      setStickyTab(scrollY + 72 >= tabBarTop.current);

      const sectionIds = ['compliance', 'security', 'privacy', 'terms-of-use'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveTab(TABS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (tab) => {
    const id = tab.toLowerCase().replace(/ /g, '-');
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveTab(tab);
  };

  const complianceBadges = [
  {
    name: "ISO 27001",
    image: "/trust/iso27.png",
    desc: "Information Security Management System certified to global standards.",
  },
  {
    name: "ISO 9001",
    image: "/trust/iso90.png",
    desc: "Quality Management System ensuring consistent, high-quality products and services.",
  },
  {
    name: "GDPR",
    image: "/trust/gdpr.png",
    desc: "Full compliance with EU General Data Protection Regulation requirements.",
  },
  {
    name: "NDAA",
    image: "/trust/ndaa.png",
    desc: "National Defense Authorization Act compliance for government deployments.",
  },
  {
    name: "NIS2",
    image: "/trust/nis2.png",
    desc: "Adherence to the EU Network and Information Systems Directive.",
  },
  {
    name: "PSTI",
    image: "/trust/psti.png",
    desc: "Compliance with the Product Security and Telecommunications Infrastructure (PSTI) requirements.",
  },
];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* ── Shared Navbar ── */}
      <Navbar />

     {/* ── Hero Banner ── */}
<div
  style={{
    position: "relative",
    backgroundImage: "url('/trust/trust.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: 144,
    paddingBottom: 96,
    paddingLeft: 24,
    paddingRight: 24,
    overflow: "hidden",
  }}
>
  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(5, 15, 35, 0.78)",
      zIndex: 1,
    }}
  />

  {/* Blue Gradient Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(135deg, rgba(1,97,254,0.45) 0%, rgba(15,23,42,0.65) 50%, rgba(1,97,254,0.25) 100%)",
      zIndex: 2,
    }}
  />

  {/* Content */}
  <div
    style={{
      position: "relative",
      zIndex: 3,
      maxWidth: 1280,
      margin: "0 auto",
    }}
  >
    {/* Breadcrumb */}
    <div
      style={{
        fontSize: "0.82rem",
        color: "rgba(255,255,255,0.65)",
        marginBottom: 28,
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <a
        href="/"
        style={{
          color: "rgba(255,255,255,0.65)",
          textDecoration: "none",
        }}
      >
        Home
      </a>

      <span>›</span>

      <a
        href="/about"
        style={{
          color: "rgba(255,255,255,0.65)",
          textDecoration: "none",
        }}
      >
        Company
      </a>

      <span>›</span>

      <span style={{ color: "#fff" }}>Trust Center</span>
    </div>

    {/* Heading */}
    <h1
      style={{
        fontSize: "clamp(1.8rem, 6vw, 3.8rem)",
        fontWeight: 800,
        color: "#fff",
        marginBottom: 24,
        lineHeight: 1.05,
        letterSpacing: "-0.04em",
      }}
    >
      Trust Center
    </h1>

    {/* Description */}
    <p
      style={{
        fontSize: "1.15rem",
        color: "rgba(255,255,255,0.85)",
        maxWidth: 680,
        lineHeight: 1.8,
      }}
    >
      At SecureAAi, security and transparency are at the heart of everything we
      do. This Trust Center provides clear, up-to-date information about our
      security practices, compliance policies, and vulnerability management,
      ensuring confidence in every solution we deliver.
    </p>
  </div>
</div>

      {/* ── Sticky Tab Nav ── */}
      <div
        ref={tabBarRef}
        style={{
          position: 'sticky', top: 72, zIndex: 90,
          background: '#fff',
          borderBottom: '1px solid #e8edf5',
          boxShadow: stickyTab ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.2s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 0 }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => scrollTo(tab)}
              style={{
                padding: '18px 28px', background: 'none', border: 'none',
                cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600,
                color: activeTab === tab ? '#0161FE' : '#64748b',
                borderBottom: `2px solid ${activeTab === tab ? '#0161FE' : 'transparent'}`,
                transition: 'all 0.15s ease',
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* COMPLIANCE */}
        <Section id="compliance" label="Compliance">
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: 680, lineHeight: 1.75, marginBottom: 36 }}>
            SecureAAi maintains rigorous compliance with internationally recognized security and quality standards. Our certifications demonstrate our commitment to maintaining the highest levels of security and operational excellence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 16 }}>
            {complianceBadges.map((b, i) => <ComplianceBadge key={i} {...b} />)}
          </div>
        </Section>

        <hr style={{ border: 'none', borderTop: '1px solid #e8edf5' }} />

        {/* SECURITY */}
        <Section id="security" label="Security">
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: 680, lineHeight: 1.75, marginBottom: 36 }}>
            Our multi-layered security architecture ensures your data and systems remain protected at all times, with proactive monitoring and defined incident response processes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 20 }}>
            <TrustCard icon={<ShieldIcon />} color="#0161FE" title="Security Policies & Practices" bullets={['Enterprise-grade technical controls across all systems.', 'Clearly defined accountability measures and audit trails.', 'A pervasive security culture embedded in every team.', 'Regular penetration testing and red-team exercises.']} />
            <TrustCard icon={<LockIcon />} color="#6366f1" title="Security Organization" bullets={['Dedicated Cyber Security Group to oversee all cybersecurity issues.', 'Responsible for establishing comprehensive security policies.', 'Proactive defense measures against emerging threats.', 'Company-wide cybersecurity awareness and training programs.']} />
            <TrustCard icon={<GlobeIcon />} color="#0891b2" title="Network & Infrastructure Security" bullets={['Encrypted communications using TLS 1.3 across all endpoints.', 'Zero-trust network architecture principles applied.', 'Redundant global infrastructure with 99.9% uptime SLA.', 'Real-time threat monitoring and automated incident response.']} />
            <TrustCard icon={<AlertIcon />} color="#d97706" title="Vulnerability Management" bullets={['Structured vulnerability disclosure program for responsible reporting.', 'CVE tracking and remediation with defined SLA timelines.', 'Continuous monitoring of third-party and open-source dependencies.', 'Regular security advisories published for all critical findings.']} />
          </div>
        </Section>

        <hr style={{ border: 'none', borderTop: '1px solid #e8edf5' }} />

        {/* PRIVACY */}
        <Section id="privacy" label="Privacy">
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: 680, lineHeight: 1.75, marginBottom: 36 }}>
            We are committed to protecting the privacy of individuals whose data we process. Our privacy practices are grounded in the principles of transparency, accountability, and respect for personal information.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 20 }}>
            <TrustCard icon={<DocIcon />} color="#0161FE" title="Data Privacy" bullets={['Minimal & consensual data handling — collect only what is necessary.', 'End-to-end protection: enforce encryption at rest and in transit.', 'Access discipline: implement strict role-based access controls.', 'User sovereignty: guarantee data ownership and right to deletion.', 'Continuous vigilance: regular data audits and privacy assessments.']} />
            <TrustCard icon={<EyeOffIcon />} color="#6366f1" title="Privacy Protection in Video Surveillance" bullets={['Configurable automatic and manual privacy masking tools.', 'Privacy Mode that obscures designated areas in real-time.', 'Compliant with GDPR requirements for facial data anonymization.', 'Adaptable privacy safeguards that preserve operational effectiveness.']} />
            <TrustCard icon={<UserIcon />} color="#0891b2" title="Identity-blind People Sensing" bullets={['Time-of-Flight (ToF) sensors that capture only depth data.', 'No facial or biometric data collected during occupancy analytics.', 'IR break beam, thermopile, and radar-based counting technologies.', 'Maintains accurate analytics while preserving full personal privacy.']} />
            <TrustCard icon={<CheckIcon />} color="#059669" title="Privacy by Design" bullets={['Privacy considerations integrated at every stage of product design.', 'Automated tools to detect and remediate privacy risks early.', 'Third-party data processing agreements aligned with GDPR standards.', 'Annual privacy impact assessments for all major data processing activities.']} />
          </div>
        </Section>

        <hr style={{ border: 'none', borderTop: '1px solid #e8edf5' }} />

        {/* TERMS OF USE */}
        <Section id="terms-of-use" label="Terms of Use">
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: 680, lineHeight: 1.75, marginBottom: 36 }}>
            By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before using our site.
          </p>
          <TermsAccordion />
        </Section>

      </div>

     
    </div>
  );
}
