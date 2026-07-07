import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';

export async function generateStaticParams() {
  return blogs.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogs.find(b => b.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | SecureAAi Blog`,
    description: post.excerpt,
  };
}

// Simple markdown-ish renderer (handles ## headings, ### headings, **bold**, tables, lists, paragraphs)
function renderContent(md) {
  const lines = md.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-12 mb-5 pb-4 border-b border-slate-100">
          {line.replace('## ', '')}
        </h2>
      );
      i++; continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3">
          {line.replace('### ', '')}
        </h3>
      );
      i++; continue;
    }

    // Table
    if (line.startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={i} className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {rows[0].split('|').filter(c => c.trim()).map((cell, ci) => (
                  <th key={ci} className="px-5 py-3 text-left font-bold text-slate-700 text-xs uppercase tracking-[0.08em]">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  {row.split('|').filter(c => c.trim()).map((cell, ci) => (
                    <td key={ci} className="px-5 py-3.5 text-slate-600 font-medium">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Bullet list
    if (line.startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={i} className="my-5 space-y-2.5 pl-2">
          {listItems.map((item, li) => (
            <li key={li} className="flex gap-3 text-slate-600 font-medium leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0161FE] flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty line
    if (!line.trim()) { i++; continue; }

    // Paragraph
    const html = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="bg-slate-100 text-[#0161FE] font-mono text-[0.85em] px-1.5 py-0.5 rounded">$1</code>');
    elements.push(
      <p key={i} className="text-lg text-slate-600 font-medium leading-relaxed my-5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
    i++;
  }
  return elements;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogs.find(b => b.slug === slug);
  if (!post) notFound();

  const related = blogs.filter(b => b.slug !== post.slug).slice(0, 2);

  return (
    <main className="bg-white min-h-screen text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }

        .blog-card-img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .blog-card:hover .blog-card-img { transform: scale(1.05); }
      `}</style>

      <Navbar />

      {/* ── COVER HERO ── */}
      <div className="relative h-[55vh] min-h-[400px] max-h-[620px] overflow-hidden">
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/20" />
        {/* Breadcrumb */}
        <div className="absolute top-[100px] left-6 lg:left-10 z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Blog
          </Link>
        </div>
        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-14 max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
              style={{ background: `${post.categoryColor}cc`, color: '#fff' }}
            >
              {post.category}
            </span>
            <span className="text-white/60 text-sm">{post.date}</span>
            <span className="text-white/60 text-sm">· {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── ARTICLE LAYOUT ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">

          {/* ── CONTENT ── */}
          <article>
            {/* Author bar */}
            <div className="flex items-center justify-between pb-8 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-11 h-11 rounded-full ring-2 ring-[#0161FE]/20" />
                <div>
                  <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
                  <div className="text-xs text-slate-400 font-medium">SecureAAi Systems</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[0.62rem] font-bold uppercase tracking-[0.1em] px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Lead paragraph */}
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-[#0161FE] pl-6 bg-blue-50/40 py-4 pr-4 rounded-r-2xl">
              {post.excerpt}
            </p>

            {/* Body */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* Tags footer */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">Topics:</span>
              {post.tags.map(tag => (
                <span key={tag} className="text-[0.7rem] font-bold uppercase tracking-[0.1em] px-3 py-1.5 bg-[#0161FE]/5 text-[#0161FE] border border-[#0161FE]/15 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#0161FE] font-bold hover:gap-4 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Back to all articles
              </Link>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="lg:sticky lg:top-28 space-y-8">
            {/* About box */}
            <div className="rounded-[22px] bg-[#0161FE] p-8 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-[180px] h-[180px] bg-white/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-extrabold mb-2 tracking-tight">SecureAAi Systems</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">
                  AI-powered security solutions for enterprise, government, and smart city deployments.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 bg-white text-[#0161FE] font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <div className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-5">Related Articles</div>
                <div className="space-y-5">
                  {related.map(rel => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`} className="blog-card group block rounded-[18px] overflow-hidden border border-slate-200 hover:border-[#0161FE]/30 hover:shadow-[0_8px_30px_rgba(1,97,254,0.08)] transition-all duration-400">
                      <div className="relative h-[130px] overflow-hidden bg-slate-100">
                        <img src={rel.cover} alt={rel.title} className="blog-card-img w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        <span
                          className="absolute top-3 left-3 text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                          style={{ background: `${rel.categoryColor}dd`, color: '#fff' }}
                        >
                          {rel.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <div className="text-[0.7rem] text-slate-400 font-medium mb-2">{rel.date} · {rel.readTime}</div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0161FE] transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
