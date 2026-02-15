"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-md py-3 md:py-4 border-b border-white/5">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* LEFT: Logo & Brand - Always visible */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src="https://ext.same-assets.com/2445618519/4009277168.png" alt="Logo" className="w-8 h-8 md:w-7 md:h-7 object-contain" />
          <span className="font-bold text-xs md:text-xs tracking-[0.1em] md:tracking-[0.2em] text-white uppercase whitespace-nowrap">
            Coffee & Donut TV
          </span>
        </Link>

        {/* CENTER: Info - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span>Premium Streaming Service</span>
          <span className="text-white/10">|</span>
          <span>Worldwide</span>
        </div>

        {/* RIGHT: Time & Contact */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Time - Hidden on mobile */}
          <div className="hidden md:flex text-[11px] font-mono text-white/50 items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            {time}
          </div>
          <a href="https://wa.me/12268943166" className="px-4 md:px-5 py-2 bg-[#d4a574] text-black text-[10px] font-bold uppercase tracking-wider md:tracking-widest rounded-full hover:bg-white transition-all">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
