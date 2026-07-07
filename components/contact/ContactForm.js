'use client';

import React from 'react';

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log('Contact form submitted', data);
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 max-w-lg">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-[#0161FE]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-[#0161FE]"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-[#0161FE]"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-[#0161FE]"
      />
      <button
        type="submit"
        className="bg-[#0161FE] text-white font-semibold py-2 px-6 rounded hover:bg-[#014fce] transition"
      >
        Send Message
      </button>
    </form>
  );
}
