"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://ext.same-assets.com/2445618519/4009277168.png"
                alt="Coffee & Donut TV"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">Coffee & Donut TV</h3>
                <p className="text-sm text-[#8a8a8a]">Epic Stories. Endless Worlds.</p>
              </div>
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              A cozy cup of entertainment - brewed daily. Stream 9,500+ Live Channels, 125,000+ Movies & Series.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-1">
            <h4 className="text-sm uppercase tracking-widest text-[#8a8a8a] mb-6">Navigation</h4>
            <nav className="grid grid-cols-2 gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Free Trial", href: "/free-trial" },
                { name: "Downloads", href: "/downloads" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#666] hover:text-[#d4a574] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h4 className="text-sm uppercase tracking-widest text-[#8a8a8a] mb-6">Let&apos;s Talk</h4>
            <a
              href="https://wa.me/12268943166"
              className="inline-block text-2xl font-semibold text-white hover:text-[#d4a574] transition-colors duration-300 mb-6"
            >
              +1 (226) 894-3166
            </a>
            <div className="flex gap-4">
              <a
                href="https://tiktok.com/@coffee.donut.tv"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8a8a8a] hover:bg-[#d4a574]/20 hover:text-[#d4a574] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/coffeedonuttv"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8a8a8a] hover:bg-[#d4a574]/20 hover:text-[#d4a574] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm text-[#666]">
            <span>Worldwide</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {time}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#666]">
            <span>COFFEE & DONUT TV</span>
            <span className="mx-2">|</span>
            <span>2014-{year}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#666]">
            <a href="/privacy" className="hover:text-[#d4a574] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#d4a574] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
