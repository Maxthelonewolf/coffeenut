"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const channelLogos = [
  { name: "HBO", svg: "https://ext.same-assets.com/2445618519/94563639.svg" },
  { name: "Sony", img: "https://ext.same-assets.com/2445618519/692668889.png" },
  { name: "TSN", svg: "https://ext.same-assets.com/2445618519/109875500.svg" },
  { name: "CN", svg: "https://ext.same-assets.com/2445618519/2755205201.svg" },
  { name: "Zee TV", svg: "https://ext.same-assets.com/2445618519/985132198.svg" },
  { name: "ESPN", svg: "https://ext.same-assets.com/2445618519/156502069.svg" },
  { name: "Discovery", img: "https://ext.same-assets.com/2445618519/1139100259.png" },
];

const features = [
  {
    title: "Live TV",
    description: "News, sports, and entertainment channels.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "On-Demand",
    description: "Thousands of movies and series, ready anytime.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Works Everywhere",
    description: "Smart TVs, phones, tablets, and computers.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const moviePosters = [
  "https://ext.same-assets.com/2445618519/439296362.jpeg",
  "https://ext.same-assets.com/2445618519/2640006925.jpeg",
  "https://ext.same-assets.com/2445618519/948904875.jpeg",
  "https://ext.same-assets.com/2445618519/3562189087.jpeg",
  "https://ext.same-assets.com/2445618519/2707747745.jpeg",
  "https://ext.same-assets.com/2445618519/2119253642.jpeg",
];

export default function StreamingCard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax offset calculation
  const parallaxOffset = scrollY * 0.1;

  return (
    <section
      ref={sectionRef}
      className="card-section relative overflow-hidden flex-col"
      style={{
        background: `linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 50%, #0f0f0f 100%)`
      }}
    >
      {/* Animated background orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-[100px] pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#c9a961]/5 rounded-full blur-[80px] pointer-events-none"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      {/* Border decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        {/* Channel Logos Marquee with blur-in effect */}
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-8'
          }`}
        >
          <div className="overflow-hidden relative">
            <div className="flex gap-16 animate-marquee">
              {[...channelLogos, ...channelLogos, ...channelLogos].map((channel, index) => (
                <div
                  key={`${channel.name}-${index}`}
                  className="flex-shrink-0 h-16 w-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
                >
                  <img
                    src={channel.img || channel.svg}
                    alt={channel.name}
                    className="max-h-full max-w-full object-contain invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Title with scale effect */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out delay-150 ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
          }`}
        >
          <h2 className="heading-large gradient-text mb-4">
            Experience Streaming the Comfort Way
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl mx-auto">
            Everything you need for ultimate entertainment, all in one place.
          </p>
        </div>

        {/* Features Grid with staggered slide-up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass rounded-2xl p-8 premium-card transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-1'
              }`}
              style={{ transitionDelay: getStaggerDelay(index, 150) }}
            >
              <div className="text-[#d4a574] mb-4 transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-[#8a8a8a]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Movie Posters Grid with staggered scale effect */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {moviePosters.map((poster, index) => (
            <div
              key={index}
              className={`aspect-[2/3] rounded-xl overflow-hidden premium-card transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: getStaggerDelay(index + 3, 100) }}
            >
              <img
                src={poster}
                alt={`Movie ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
