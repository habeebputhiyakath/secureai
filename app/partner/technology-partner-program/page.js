import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Technology Partner Program | SecureAAI',
  description: 'Join the SecureAAI Technology Ecosystem Partner Program.',
};

export default function TechnologyPartnerPage() {
  const partners = [
    "Tridium", "Autodesk", "Delta Controls", "Disrupt-X", "J2 Innovation", 
    "KODE Labs", "Loytec", "MerciYanis", "OpenSense", "Phoenix Contact", 
    "SmartViz", "iComfort"
  ];

  return (
    <main className="bg-slate-50 text-slate-900 text-base overflow-x-hidden pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="SecureAAI IoT Ecosystem Hero" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5lI-DF1WphUSKUorrzXaH6TECIu9kt9IU8MA_XdNgIDRBVhMYvDbDkuc_e2pmx3lkAVnLKsngeBPz1tmZkFRfrKExFbQCUhiP-lGDhv1EsfszHxlLClE7GzcxcfwQ9U_N0OUjNYgr2J4cioPePJVhr3gVc3B7SNj57mXCffDnbT5X-E6tcCLULT9DAElVP6JAyB_o76kwLPGf1SwPscuchWORMauDrAYD9-ITo2uxBqy60jYJ7HXdA2cKwIa4XnSisay4PyB9U-Q1"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/60 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10">
          <nav className="flex items-center gap-2 mb-8 text-slate-600 text-xs font-semibold">
            <span>Home</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span>Partner</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-[#0058bc]">Ecosystem Partner Program</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              IoT Ecosystem Partner Program: <span className="text-[#0058bc]">Team Up, Think Ahead, Sensing for Impact</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10">
              Uniting platform and solution providers to deliver market-ready IoT offerings in Smart Building, People Sensing, and LoRaWAN Ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#0058bc] text-white rounded-lg text-sm font-medium shadow-lg shadow-[#0058bc]/20 hover:bg-[#0070eb] transition-all flex items-center gap-2">
                Become a Partner
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-4 border border-slate-300 text-slate-900 hover:bg-slate-200 rounded-lg text-sm font-medium transition-all">
                Online Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Empowering the Future of Connectivity</h2>
              <div className="w-16 h-1 bg-[#0058bc] mb-6"></div>
            </div>
            <div>
              <p className="text-base text-slate-600 leading-relaxed">
                Our Ecosystem Partner Program is a central hub designed to foster collaboration between SecureAAI and industry leaders. By combining our advanced sensing hardware with innovative software platforms, we aim to address the complex demands of modern infrastructure, focusing on Smart Building and People Sensing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Industry Verticals (Bento Style) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Focus on Core Industry Verticals</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Providing specialized IoT solutions tailored for specific industrial and commercial needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Smart Building */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-300/30 hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  alt="Smart Building Solutions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzwFjQfwJfpalSo1gk3Z6kuZZv2o2aox2FP1YjnlvZXTaWjCDnREj4xL783wxOAK0bHj0myNovt6v3DoIgGjh6lvtqU7Tql3fvQILvk1lpkgTKw0GiE6h6eyN41WtPporWmvoJx_PIUFsSYXx-9VQEKpbLJEMEUOK4CPoUw5sKL00yBXA7cbVsI94eePI-gLQYU7FhkZgz24ybH9Z72RvSMoozrVoUgJ0FM5n6GO1CZ3ASRRZZeD6nDQgZ7QSnFFNBJiaFVt3A6Ij"
                />
              </div>
              <div className="p-6 flex-grow bg-white">
                <div className="text-blue-100 bg-[#0058bc] p-2 w-fit rounded-lg mb-4">
                  <span className="material-symbols-outlined text-white">apartment</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Smart Building</h3>
                <ul className="space-y-2 text-slate-600 text-base">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">check_circle</span>
                    Streamline Facility Management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">check_circle</span>
                    Boost Energy Efficiency
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">check_circle</span>
                    Optimize Space Management
                  </li>
                </ul>
              </div>
            </div>

            {/* People Sensing */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-300/30 hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  alt="People Sensing Technology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAweMxN2IvRb4DBHrxrXw3s-TT-IzDeIRS49FRsBwk9Up7Y8D-l94F9gjoXuMPo2f7RCyIHb-48yUaYu7-1TjcRW2RHrZ0Gu42qvTQoW5Hg069Guf0xqUJ9BiJrRpJYXAmWNpWqXVeMHu1KdKprNQ1xfQ5GY2WV5b8efo0YSUfI9ubeop00lO6SjAmqxatJUlKgMk0LzXmAaizEP2SVFufHv4iovB5cQGSYjjcCpoqRloxui72V2OplzU4BKWHLy5ya-3HuirnsLbbJ"
                />
              </div>
              <div className="p-6 flex-grow bg-white">
                <div className="text-blue-100 bg-[#0058bc] p-2 w-fit rounded-lg mb-4">
                  <span className="material-symbols-outlined text-white">groups</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">People Sensing</h3>
                <p className="text-slate-600 text-base mb-4">
                  Harness state-of-the-art radar and vision technology to understand environment usage patterns.
                </p>
                <ul className="space-y-2 text-slate-600 text-base">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">insights</span>
                    Gain Precise Data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">insights</span>
                    Inform Decisions
                  </li>
                </ul>
              </div>
            </div>

            {/* LoRaWAN Ecosystem */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-300/30 hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  alt="LoRaWAN Ecosystem Map" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvf374IwcICklybH865uLqIWnrqVaaM-fiajXLp03U-wV88olzrnPN21vTZntg40MOITNLH6FCry2sH_s1cdvYrZ0I0CrzYwhgRDM6tWxmhLp94yXnQ2N-CajPB3CZZ52mjI_NB9WfPF-oCiti5lEzHFrOsLr0LlpsX-PO3dur6dAZpf2SYXUlTpmvB_8OHzrgBPa9L-dJZj3dFfVdmvrENi_LGGAWu9-ufdMGJxodHSdyVUMNBxyajI1PkrrtmMo-q2kg6mfefBsI"
                />
              </div>
              <div className="p-6 flex-grow bg-white">
                <div className="text-blue-100 bg-[#0058bc] p-2 w-fit rounded-lg mb-4">
                  <span className="material-symbols-outlined text-white">hub</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">LoRaWAN Ecosystem</h3>
                <p className="text-slate-600 text-base mb-4">
                  Global connectivity standard for long-range, low-power IoT applications.
                </p>
                <ul className="space-y-2 text-slate-600 text-base">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">router</span>
                    Wireless Solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#0058bc] text-[18px] mt-1">router</span>
                    Smart Cities &amp; Industrial Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Tabs */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center text-slate-900">Empower Your Business Growth</h2>
          <div className="w-full">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-8 border-b border-slate-300/30 mb-12">
              <button className="px-6 py-4 text-sm font-medium text-[#0058bc] border-b-2 border-[#0058bc] transition-all">Sales Benefits</button>
              <button className="px-6 py-4 text-sm font-medium text-slate-600 hover:text-[#0058bc] transition-all">Marketing Support</button>
              <button className="px-6 py-4 text-sm font-medium text-slate-600 hover:text-[#0058bc] transition-all">Products &amp; Solutions</button>
              <button className="px-6 py-4 text-sm font-medium text-slate-600 hover:text-[#0058bc] transition-all">Partner Requirements</button>
            </div>

            {/* Tab Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-300/30 hover:shadow-2xl transition-all group">
                <span className="material-symbols-outlined text-[#0058bc] text-[48px] mb-6 block group-hover:scale-110 transition-transform">redeem</span>
                <h4 className="text-2xl font-semibold mb-4">Sample Support</h4>
                <p className="text-slate-600 text-lg leading-relaxed">Access priority evaluation kits and demo hardware at special partner rates to accelerate your sales cycle.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-300/30 hover:shadow-2xl transition-all group">
                <span className="material-symbols-outlined text-[#0058bc] text-[48px] mb-6 block group-hover:scale-110 transition-transform">assignment</span>
                <h4 className="text-2xl font-semibold mb-4">Project Support</h4>
                <p className="text-slate-600 text-lg leading-relaxed">Dedicated technical engineering support and design-in assistance for complex large-scale deployments.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-300/30 hover:shadow-2xl transition-all group">
                <span className="material-symbols-outlined text-[#0058bc] text-[48px] mb-6 block group-hover:scale-110 transition-transform">handshake</span>
                <h4 className="text-2xl font-semibold mb-4">Business Opportunity</h4>
                <p className="text-slate-600 text-lg leading-relaxed">Qualified referral leads and strategic co-selling opportunities through our extensive global sales network.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-300/30 hover:shadow-2xl transition-all group">
                <span className="material-symbols-outlined text-[#0058bc] text-[48px] mb-6 block group-hover:scale-110 transition-transform">trending_up</span>
                <h4 className="text-2xl font-semibold mb-4">Partner Upgrade</h4>
                <p className="text-slate-600 text-lg leading-relaxed">A structured tiered growth system with increasing margins, marketing funds, and exclusive ecosystem access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Who we partner with</h2>
              <p className="text-slate-600">Leading platform providers already delivering SecureAAI-integrated solutions.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full border border-slate-300 text-sm font-medium hover:bg-[#0058bc] hover:text-white transition-all">Get Resources</button>
              <button className="px-6 py-2 rounded-full border border-slate-300 text-sm font-medium hover:bg-[#0058bc] hover:text-white transition-all">News</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map(name => (
              <div key={name} className="aspect-[3/2] bg-slate-100 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer group">
                <span className="font-bold text-slate-600 group-hover:text-[#0058bc] transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section className="py-24 bg-[#0058bc]/5">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-2">Get in Touch about Your Next Project</h2>
              <p className="text-slate-600">Fill out the form below to start your partnership journey.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name*</label>
                <input className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all" placeholder="Your name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Work Email*</label>
                <input className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all" placeholder="email@company.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Country*</label>
                <select className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all appearance-none bg-white">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>China</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Type*</label>
                <select className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all bg-white">
                  <option>End User</option>
                  <option>Distributor</option>
                  <option>System Integrator</option>
                  <option>MSP</option>
                  <option>OEM</option>
                </select>
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium">Area of Interest*</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {["Smart Building", "Video Surveillance", "LoRaWAN", "People Sensing", "Other IoT"].map(area => (
                    <label key={area} className="flex items-center gap-2 text-base cursor-pointer">
                      <input className="rounded text-[#0058bc] focus:ring-[#0058bc]" type="checkbox" />
                      {area}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-2 mt-4">
                <label className="text-sm font-medium">Message (Optional)</label>
                <textarea className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all" placeholder="Tell us about your project or needs..." rows="4"></textarea>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button className="w-full py-4 bg-[#0058bc] text-white rounded-lg text-2xl font-semibold shadow-lg shadow-[#0058bc]/20 hover:bg-[#0070eb] transition-all active:scale-[0.99]" type="submit">
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
     
      
    </main>
  );
}
