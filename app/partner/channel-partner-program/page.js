import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Channel Partner Program | SecureAAI',
  description: 'Join the SecureAAI Global Channel Partner Program.',
};

export default function ChannelPartnerPage() {
  return (
    <main className="bg-slate-50 text-slate-900 text-base font-sans overflow-x-hidden pt-16 scroll-smooth">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            alt="SecureAAI Partners Background" 
            className="w-full h-full object-cover grayscale opacity-30" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLsRkj-9ShVUoWtuFG4x-v7PidXQWDspJEVUgfXnNzqOKLiAUVTQ4unviurJ0prvfLgRAg8cKbN3DQEI6yKiM5FA4VX2Wda4gs7EJE_2xTFGbsKg4TkLhauqm1mzJngg0jJb6AcJxdugPQMJqdL2kiuAcYaKHLuGVMs11FPWhoADg0gsCru4Cpvpkx3-gIPdIUrX847HSOyGVvvTu9NRw0mXhD2FOc13vHhcxnWlWlEuZ9Da7ZAXKD82_CWI"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[#0058bc] bg-[#0058bc]/10 rounded-full">GLOBAL PARTNER NETWORK</span>
            <h1 className="text-5xl font-bold leading-tight mb-4 text-slate-900 tracking-tight">
              Built for Partners,<br/>
              <span className="text-[#0058bc]">Designed for Growth.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Collaborate with a world-leading IoT and AI provider. We empower distributors, systems integrators, and solution providers with the tools to dominate their local markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-l-2 border-[#0058bc]/20 pl-8">
              <div>
                <div className="text-2xl font-semibold text-[#0058bc]">120+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#0058bc]">Exclusive</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Partner Benefits</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#0058bc]">Mutual</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Trust Core</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#0058bc]">Open</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Framework</div>
              </div>
            </div>
            <div className="flex gap-4">
              <a className="px-8 py-4 bg-[#0058bc] text-white font-medium text-lg rounded-lg shadow-lg hover:shadow-xl transition-all" href="#partner-form">Apply Now</a>
              <a className="px-8 py-4 bg-slate-200 text-[#0058bc] font-medium text-lg rounded-lg hover:bg-slate-300 transition-all" href="#why-partner">Explore Program</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Partner */}
      <section className="py-24 bg-white relative overflow-hidden" id="why-partner">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-2">Why Partner with SecureAAI</h2>
            <div className="w-20 h-1.5 bg-[#0058bc] mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
            {/* Background Decorative Blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0058bc]/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0"></div>
            
            {/* Card 1: Large Feature */}
            <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 p-8 lg:p-12 flex flex-col justify-between relative z-10 group hover:border-[#0058bc] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,88,188,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-[#0058bc] shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">inventory_2</span>
                </div>
                <span className="text-5xl font-bold opacity-5 text-[#0058bc]">01</span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-slate-900">Extensive Product Portfolio</h3>
                <p className="text-lg text-slate-600 max-w-xl">From industrial IoT sensors and gateways to advanced AI video surveillance, our hardware covers every layer of the smart ecosystem.</p>
              </div>
            </div>
            
            {/* Card 2: Vertical Accent */}
            <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 p-8 flex flex-col relative z-10 group hover:border-[#0058bc] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,88,188,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-[#0058bc] shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">domain</span>
                </div>
                <span className="text-3xl font-bold opacity-5 text-[#0058bc]">02</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">Industry Depth</h3>
              <p className="text-base text-slate-600">Tailored solutions for smart buildings, modern retail, digital cities, and intelligent traffic management designed for rapid deployment.</p>
            </div>
            
            {/* Card 3: Standard */}
            <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 p-8 flex flex-col relative z-10 group hover:border-[#0058bc] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,88,188,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-[#0058bc] shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <span className="text-3xl font-bold opacity-5 text-[#0058bc]">03</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">Open Ecosystem</h3>
              <p className="text-base text-slate-600">Seamless integration using standard protocols (LoRaWAN, MQTT) and fully documented APIs for effortless software ecosystem pairing.</p>
            </div>
            
            {/* Card 4: Highlighted Partner Model */}
            <div className="md:col-span-7 rounded-xl border border-[#0058bc]/30 p-8 lg:p-12 flex flex-col justify-between relative z-10 bg-[#0058bc]/5 hover:bg-[#0058bc]/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,88,188,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="w-20 h-20 bg-[#0058bc] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">handshake</span>
                </div>
                <span className="text-5xl font-bold opacity-10 text-[#0058bc]">04</span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-slate-900">Partner-centric Model</h3>
                <p className="text-lg text-slate-600 max-w-xl">We focus on channel-exclusive sales. We are here to provide the support you need to win projects, not to compete with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Empowerment Features */}
      <section className="py-24" style={{ background: "radial-gradient(circle at top right, #f0f7ff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">We Don't Just Supply.<br/><span className="text-[#0058bc]">We Empower.</span></h2>
              <p className="text-lg text-slate-600 mb-8">The SecureAAI Partner Program is designed to remove friction from your business cycle, providing resources at every stage from lead to support.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#0058bc]/30 rounded-full flex items-center justify-center group-hover:bg-[#0058bc] group-hover:text-white transition-all text-[#0058bc]">
                    <span className="material-symbols-outlined text-[20px]">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Revenue &amp; Growth</h4>
                    <p className="text-sm text-slate-600 mt-1">Access competitive tiered pricing, project protection, and performance-based rebates to ensure your profitability.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#0058bc]/30 rounded-full flex items-center justify-center group-hover:bg-[#0058bc] group-hover:text-white transition-all text-[#0058bc]">
                    <span className="material-symbols-outlined text-[20px]">engineering</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Technical Resources</h4>
                    <p className="text-sm text-slate-600 mt-1">Dedicated priority technical support and early access to SDKs/firmware for custom solution development.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#0058bc]/30 rounded-full flex items-center justify-center group-hover:bg-[#0058bc] group-hover:text-white transition-all text-[#0058bc]">
                    <span className="material-symbols-outlined text-[20px]">school</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">SecureAAI Academy</h4>
                    <p className="text-sm text-slate-600 mt-1">Structured training and certification programs for your engineers and sales teams to become IoT experts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#0058bc]/30 rounded-full flex items-center justify-center group-hover:bg-[#0058bc] group-hover:text-white transition-all text-[#0058bc]">
                    <span className="material-symbols-outlined text-[20px]">campaign</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Marketing Support</h4>
                    <p className="text-sm text-slate-600 mt-1">Market Development Funds (MDF), co-branded collateral, and event support to drive local demand.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  className="w-full h-full object-cover" 
                  alt="A professional high-tech workspace" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1AuDV6uafAiSH5jc74VK4J4wkDQHkXVVui0v6sEWdWTDtf9QVnJFRnVr6nn1S3PpBDpI4aAtlO7xQCaI9X0zJFj_UGMF25J_gB2DFa34Q_BAA9Q3Blea1HQ-R5P_0TC6Vbxx_ZV4NIviNV9Ur44remutuhJRLf668CvjIEXukRtzcmeLQJOnHPyluKpyh1rYBaB5ZXbeQ8cOPz54YcJv9-gmMBnlHMQMH8kpOY6yadDAePyPSxqycQhMMJoHAHC_-rdHZHEZRrMyV"
                />
                <div className="absolute inset-0 bg-[#0058bc]/10 mix-blend-multiply"></div>
              </div>
              
              {/* Stats Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-xs font-semibold text-[#0058bc] mb-2 uppercase">Partner Feedback</p>
                <h4 className="font-bold text-slate-900 mb-2 leading-tight">How feedback drives our innovation</h4>
                <button className="flex items-center text-[#0058bc] font-bold text-sm gap-1 hover:gap-2 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl font-semibold text-center mb-16 text-slate-900">Trusted by Industry Leaders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-8 border border-slate-200 rounded-2xl relative">
              <span className="material-symbols-outlined text-[#0058bc]/20 text-6xl absolute top-4 right-4">format_quote</span>
              <p className="text-base text-slate-600 italic mb-8 relative z-10">
                "SecureAAI's LoRaWAN gateway technology changed how we approach smart agriculture. The reliability of the hardware is unmatched in the field."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#0058bc]">MV</div>
                <div>
                  <p className="font-bold text-slate-900">Marcos Verardi</p>
                  <p className="text-xs font-semibold text-slate-400">EagleVision Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 rounded-2xl relative shadow-lg md:scale-105 z-10">
              <span className="material-symbols-outlined text-[#0058bc]/20 text-6xl absolute top-4 right-4">format_quote</span>
              <p className="text-base text-slate-600 italic mb-8 relative z-10">
                "The integration between SecureAAI sensors and our platform was seamless thanks to their documented protocols. They are a true partner in innovation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#0058bc]">IA</div>
                <div>
                  <p className="font-bold text-slate-900">izwanasri</p>
                  <p className="text-xs font-semibold text-slate-400">itpss sdn bhd</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 rounded-2xl relative">
              <span className="material-symbols-outlined text-[#0058bc]/20 text-6xl absolute top-4 right-4">format_quote</span>
              <p className="text-base text-slate-600 italic mb-8 relative z-10">
                "The dedicated sales enablement materials provided by SecureAAI helped our team close enterprise smart building deals faster than ever."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#0058bc]">N</div>
                <div>
                  <p className="font-bold text-slate-900">Nourhan</p>
                  <p className="text-xs font-semibold text-slate-400">Xceltra</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 5: Global Impact Bento */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Driving Impact Across the Globe</h2>
              <p className="text-base text-slate-600">Real-world deployments where SecureAAI partners are transforming industries with intelligent technology.</p>
            </div>
            <button className="hidden md:block px-6 py-3 border border-[#0058bc] text-[#0058bc] rounded-lg text-sm font-medium hover:bg-[#0058bc]/5 transition-colors">View All Success Stories</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Story */}
            <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl relative min-h-[400px] flex items-end overflow-hidden group hover:border-[#0058bc] transition-all duration-300">
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Government surveillance project" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKCnkDdslbxxlDeUzH_E_JDBl0hzLH1V7lGs78tqo192U5Rlq455vXSkH8fjDlRe5E-V-sJqzkEj2WtZllRHdP9LTJ8EEkUtZB4vNdMSdUAn15pNYLxzGsyIFpIVboEQUeWWyFVPxWquqNKN1HQaERqZXjlsznlXw_FalYIFCQC9stBlk5SvXMvtwNjSMUQjBHxyaJBKO3kUbKZbZzG4oMUlvKqQTLaK7qLCWdU62Br7Y0_ayiyrcehYc7meJCuqRd38pBk2h94Le"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              <div className="relative z-10 p-8 text-white">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-[#0058bc] rounded-full">Government</span>
                <h3 className="text-3xl font-semibold mb-2">Cambodia National Assembly</h3>
                <p className="text-base opacity-90 max-w-xl">Advanced 4K AI surveillance system providing high-level security for national critical infrastructure.</p>
              </div>
            </div>
            
            {/* Small Story */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between hover:border-[#0058bc] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,88,188,0.15)] transition-all duration-300">
              <div>
                <div className="w-10 h-10 bg-blue-100 text-[#0058bc] flex items-center justify-center rounded-lg mb-4">
                  <span className="material-symbols-outlined">water_drop</span>
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-slate-900">Water Leakage Monitoring</h4>
                <p className="text-base text-slate-600">1,200+ LoRaWAN sensors deployed in a massive commercial complex to prevent structural damage.</p>
              </div>
              <a className="text-[#0058bc] font-bold text-sm mt-4 flex items-center gap-1 hover:underline" href="#">Case Study <span className="material-symbols-outlined text-sm">open_in_new</span></a>
            </div>
            
            {/* Story 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between hover:border-[#0058bc] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,88,188,0.15)] transition-all duration-300">
              <div>
                <div className="w-10 h-10 bg-blue-100 text-[#0058bc] flex items-center justify-center rounded-lg mb-4">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-slate-900">People Counting in Europe</h4>
                <p className="text-base text-slate-600">1,000+ units across retail chains to optimize staffing and customer flow using 3D sensing technology.</p>
              </div>
              <a className="text-[#0058bc] font-bold text-sm mt-4 flex items-center gap-1 hover:underline" href="#">Case Study <span className="material-symbols-outlined text-sm">open_in_new</span></a>
            </div>
            
            {/* Story 4 */}
            <div className="md:col-span-2 bg-[#0058bc] rounded-xl relative overflow-hidden flex items-center justify-between p-8 group hover:-translate-y-1 shadow-lg transition-all duration-300">
              <div className="relative z-10 text-white max-w-md">
                <h4 className="text-2xl font-semibold mb-2">Solar-powered Congestion Warning</h4>
                <p className="text-base opacity-90">Radar-based traffic sensing system for remote mountain highways, operating entirely on solar energy.</p>
              </div>
              <div className="hidden md:block opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-white">wb_sunny</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Become a Partner Form */}
      <section className="py-24 bg-slate-100" id="partner-form">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-start shadow-2xl">
            <div className="lg:w-1/2">
              <h2 className="text-[36px] lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">Ready to Lead with <br/><span className="text-[#0058bc]">SecureAAI?</span></h2>
              <p className="text-lg text-slate-600 mb-8">Submit your application today. Our channel management team will review your profile and reach out within 48 business hours to discuss potential synergy.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-900 font-medium">
                  <span className="material-symbols-outlined text-[#0058bc]">check_circle</span> No forced exclusivity or hidden fees
                </li>
                <li className="flex items-center gap-3 text-slate-900 font-medium">
                  <span className="material-symbols-outlined text-[#0058bc]">check_circle</span> Access to global marketing pool
                </li>
                <li className="flex items-center gap-3 text-slate-900 font-medium">
                  <span className="material-symbols-outlined text-[#0058bc]">check_circle</span> First-look at next-gen product roadmaps
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full bg-white p-8 rounded-2xl shadow-inner border border-slate-200">
              <form className="space-y-6" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Full Name</label>
                    <input className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all" placeholder="John Doe" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Work Email</label>
                    <input className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all" placeholder="john@company.com" type="email"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Company Name</label>
                    <input className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all" placeholder="Tech Solutions Ltd" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Country</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all bg-white">
                      <option>Select your country</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>Singapore</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Business Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-[#0058bc]/5 has-[:checked]:border-[#0058bc] has-[:checked]:bg-[#0058bc]/5">
                      <input className="text-[#0058bc] focus:ring-[#0058bc]" name="business_type" type="radio"/>
                      <span className="text-base">Distributor</span>
                    </label>
                    <label className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-[#0058bc]/5 has-[:checked]:border-[#0058bc] has-[:checked]:bg-[#0058bc]/5">
                      <input className="text-[#0058bc] focus:ring-[#0058bc]" name="business_type" type="radio"/>
                      <span className="text-base">System Integrator</span>
                    </label>
                    <label className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-[#0058bc]/5 has-[:checked]:border-[#0058bc] has-[:checked]:bg-[#0058bc]/5">
                      <input className="text-[#0058bc] focus:ring-[#0058bc]" name="business_type" type="radio"/>
                      <span className="text-base">Reseller</span>
                    </label>
                    <label className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-[#0058bc]/5 has-[:checked]:border-[#0058bc] has-[:checked]:bg-[#0058bc]/5">
                      <input className="text-[#0058bc] focus:ring-[#0058bc]" name="business_type" type="radio"/>
                      <span className="text-base">Solution Provider</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Primary Area of Interest</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0058bc]/20 focus:border-[#0058bc] outline-none transition-all bg-white">
                    <option>IoT Sensors &amp; Gateways</option>
                    <option>AI Video Surveillance</option>
                    <option>Smart Building Solutions</option>
                    <option>Industrial Connectivity</option>
                  </select>
                </div>
                
                <button className="w-full py-4 bg-[#0058bc] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95" type="submit">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
