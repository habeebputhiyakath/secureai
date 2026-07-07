'use client';

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-3 max-w-[480px] mx-auto"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your work email"
        className="flex-1 px-5 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-white/50"
      />
      <button
        type="submit"
        className="px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm whitespace-nowrap hover:bg-slate-800 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
