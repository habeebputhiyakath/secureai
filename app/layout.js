import { Inter, Syne, JetBrains_Mono, Barlow_Condensed, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Body / UI font
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// Heading accent (used sparingly)
const syne = Syne({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-syne',
  display: 'swap',
});

// Code / monospace (ANPR plates, stats, timestamps)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// Logo wordmark — closest match to Gothic821 Cn BT
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

// URL / tagline in logo — matches brand spec exactly
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'SecureAAI – AI-Powered Security & Intelligent Surveillance',
  description:
    'SecureAAI Systems delivers enterprise-grade AI security solutions including ANPR, VMS, Smart Parking, and Intelligent Video Analytics for smart cities, enterprises, and critical infrastructure worldwide.',
  keywords:
    'AI security, ANPR, video management system, smart parking, intelligent surveillance, SecureAAI, enterprise security',
  openGraph: {
    title: 'SecureAAI – AI-Powered Security & Intelligent Surveillance',
    description:
      'Enterprise-grade AI security solutions for smart cities, enterprises, and critical infrastructure.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SecureAAI – AI-Powered Security',
    description: 'Enterprise AI security: ANPR, VMS, Smart Parking & Intelligent Video Analytics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${inter.variable}
        ${syne.variable}
        ${jetbrainsMono.variable}
        ${barlowCondensed.variable}
        ${poppins.variable}
      `}
    >
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}