import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import NewsletterForm from '@/components/blog/NewsletterForm';

export const metadata = {
  title: 'Blog | SecureAAi Systems',
  description:
    'Insights, guides, and industry news on AI security, ANPR, video management, smart parking, and intelligent surveillance from SecureAAi Systems.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogs;

  return (
    <main className="bg-white min-h-screen text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }

        .blog-card-img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .blog-card:hover .blog-card-img { transform: scale(1.05); }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: none; }
        }
        .anim-in { animation: fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-in-d1 { animation-delay: 0.1s; }
        .anim-in-d2 { animation-delay: 0.2s; }
        .anim-in-d3 { animation-delay: 0.3s; }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-[140px] pb-20 px-6 lg:px-10 overflow-hidden border-b border-slate-100"
        style={{
          background: 'linear-gradient(135deg, #f8faff 0%, #eef4ff 50%, #f0f7ff 100%)',
        }}
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#0161FE]/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto z-10 text-center">
          <div className="anim-in inline-flex items-center gap-2 bg-white border border-[#0161FE]/20 rounded-full px-4 py-2 text-[0.7rem] font-bold tracking-[0.1em] text-[#0161FE] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0161FE] animate-pulse" />
            SecureAAi Insights
          </div>
          <h1 className="anim-in anim-in-d1 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] text-slate-900 mb-6">
            Intelligence, Innovation &<br className="hidden md:block" />
            <span style={{ color: '#0161FE' }}>Security Insights</span>
          </h1>
          <p className="anim-in anim-in-d2 text-lg md:text-xl text-slate-500 font-medium max-w-[700px] mx-auto leading-relaxed">
            Expert perspectives on AI-powered security, smart cities, video management, and the future of intelligent infrastructure.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">

        {/* ── FEATURED POST ── */}
        <div className="mb-16">
          <div className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-6">Featured Article</div>
          <Link href={`/blog/${featured.slug}`} className="blog-card group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[28px] overflow-hidden border border-slate-200 shadow-[0_4px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_60px_rgba(1,97,254,0.12)] transition-all duration-500">
              {/* Image */}
              <div className="relative h-[280px] lg:h-auto overflow-hidden bg-slate-100">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="blog-card-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
              </div>
              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
                    style={{ background: `${featured.categoryColor}15`, color: featured.categoryColor }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-[0.75rem] text-slate-400 font-medium">{featured.date}</span>
                  <span className="text-[0.75rem] text-slate-400 font-medium">· {featured.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4 group-hover:text-[#0161FE] transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 text-[0.95rem]">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map(tag => (
                    <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-[0.1em] px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={featured.author.avatar} alt={featured.author.name} className="w-9 h-9 rounded-full" />
                    <span className="text-sm font-semibold text-slate-700">{featured.author.name}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#0161FE] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ── MORE POSTS ── */}
        {rest.length > 0 && (
          <div>
            <div className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-6">More Articles</div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {rest.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card group block rounded-[22px] overflow-hidden border border-slate-200 hover:shadow-[0_12px_40px_rgba(1,97,254,0.10)] transition-all duration-500 bg-white">
                  <div className="relative h-[220px] overflow-hidden bg-slate-100">
                    <img src={post.cover} alt={post.title} className="blog-card-img w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    <span
                      className="absolute top-4 left-4 text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm"
                      style={{ background: `${post.categoryColor}dd`, color: '#fff' }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-[0.72rem] text-slate-400 font-medium mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug tracking-tight mb-3 group-hover:text-[#0161FE] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3 mb-5">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full" />
                        <span className="text-xs font-semibold text-slate-600">{post.author.name}</span>
                      </div>
                      <span className="text-[#0161FE] text-xs font-bold flex items-center gap-1 group-hover:gap-2.5 transition-all duration-300">
                        Read
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── NEWSLETTER STRIP ── */}
        <div className="mt-20 rounded-[32px] bg-[#0161FE] px-10 py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-[600px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
              Stay Ahead in AI Security
            </h2>
            <p className="text-white/80 font-medium mb-8">
              Get the latest insights on ANPR, VMS, smart parking, and intelligent infrastructure delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
