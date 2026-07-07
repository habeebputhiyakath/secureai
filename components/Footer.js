'use client';

import { ShieldCheck, Award, Lock, Camera } from 'lucide-react';

const footerLinks = {
  Solutions: [
    'ANPR Systems',
    'Video Management',
    'Smart Parking',
    'Access Control',
    'AI Analytics',
  ],
  Industries: [
    'Smart Cities',
    'Critical Infrastructure',
    'Enterprise',
    'Logistics',
    'Airports',
  ],
  Company: [
    'About Us',
    'Careers',
    'News & Press',
    'Privacy Policy',
    'Terms of Service',
  ],
};

const certifications = [
  { label: 'SIRA Approved', icon: ShieldCheck },
  { label: 'ISO 27001', icon: Award },
  { label: 'GDPR', icon: Lock },
  { label: 'ONVIF', icon: Camera },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="10 8 16 12 10 16" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: '#F8FAFC',
        borderColor: '#E2E8F0',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-22">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png" // update with your logo path
                alt="SecureAAI Logo"
                className="h-13 w-auto"
              />
            </a>

            <p className="text-slate-500 leading-relaxed max-w-md mb-8">
              Delivering intelligent ANPR, smart parking,
              video analytics and AI-powered security
              solutions for enterprises, governments,
              and smart cities worldwide.
            </p>

            {/* CERTIFICATIONS */}
            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(1,97,254,.08)',
                    color: '#0161FE',
                    border: '1px solid rgba(1,97,254,.15)',
                  }}
                >
                  <Icon size={14} strokeWidth={2.25} />
                  {label}
                </span>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="
                    w-11 h-11 rounded-2xl flex items-center justify-center
                    bg-white border border-slate-200 text-slate-500
                    hover:bg-[#0161FE] hover:text-white hover:-translate-y-1
                    transition-all duration-300 shadow-sm hover:shadow-lg
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-slate-900 mb-5">
                {title}
              </h4>

              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-slate-500
                        hover:text-[#0161FE]
                        transition-colors
                        duration-300
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-16
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
          style={{
            borderTop: '1px solid #E2E8F0',
          }}
        >
          <p className="text-slate-500 text-sm">
            © 2026 SecureAAI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-[#0161FE]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-[#0161FE]"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-[#0161FE]"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}