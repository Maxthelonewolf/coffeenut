"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const mobileFeatures = [
  "Built for touchscreens",
  "Smooth, fast navigation",
  "Clean layout for daily watching",
  "Perfect for mobile & casual viewing",
];

const tvFeatures = [
  "Designed for large screens",
  "Remote-friendly navigation",
  "Advanced EPG & channel management",
  "Favorites, categories, full control",
];

const chooseIf = [
  { condition: "Watching on your phone", app: "Mobile App" },
  { condition: "Watching on your TV", app: "TV App" },
  { condition: "Using a remote", app: "TV App" },
  { condition: "Using touch", app: "Mobile App" },
];

export default function DownloadsPage() {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: chooseRef, isVisible: chooseVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<"mobile" | "tv" | null>(null);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4a574]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#c9a961]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="inline-flex items-center gap-4 mb-8 animate-fade-in-up">
            <img
              src="https://ext.same-assets.com/2445618519/4009277168.png"
              alt="Coffee & Donut TV"
              className="w-20 h-20 object-contain"
            />
            <span className="heading-medium gradient-text">Coffee & Donut TV</span>
          </div>

          <h1 className="heading-massive text-white mb-6 animate-fade-in-up stagger-1">
            Download the App
          </h1>

          <p className="text-xl text-[#8a8a8a] max-w-2xl mx-auto mb-4 animate-fade-in-up stagger-2">
            Choose your experience. Optimized for your device. Brewed for comfort.
          </p>

          <div className="mt-12 animate-fade-in-up stagger-3">
            <h2 className="heading-medium text-white mb-3">
              One subscription. Two world-class apps.
            </h2>
            <p className="text-lg text-[#8a8a8a]">
              Optimized for how you watch TV
            </p>
          </div>
        </div>
      </section>

      {/* App Cards Section */}
      <section className="relative py-16">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent" />

        <div
          ref={cardsRef}
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Mobile App Card */}
          <div
            className={`relative glass rounded-3xl p-8 transition-all duration-700 ease-out border-2 ${
              hoveredCard === "mobile" ? "border-[#d4a574]/60" : "border-[#d4a574]/20"
            } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '100ms' }}
            onMouseEnter={() => setHoveredCard("mobile")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card glow effect */}
            <div className={`absolute inset-0 rounded-3xl bg-[#d4a574]/5 transition-opacity duration-500 ${
              hoveredCard === "mobile" ? "opacity-100" : "opacity-0"
            }`} />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <img
                    src="https://ext.same-assets.com/2445618519/4009277168.png"
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Coffee & Donut TV</h3>
                    <p className="text-lg gradient-text">Mobile & Touch Edition</p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest text-[#8a8a8a] mt-3">Powered by XCIPTV</p>
              </div>

              {/* App Screenshot */}
              <div className="relative mb-8">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#d4a574]/20 blur-2xl rounded-full" />
                <img
                  src="https://ext.same-assets.com/1630699721/2275043001.png"
                  alt="Mobile App Interface"
                  className="relative z-10 w-full max-w-sm mx-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Why people love this */}
              <p className="text-center text-[#d4a574] italic mb-6">Why people love this version</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {mobileFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 text-[#a0a0a0] transition-all duration-500 ${
                      cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: getStaggerDelay(index + 2, 100) }}
                  >
                    <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Download Code */}
              <div className="bg-black/30 rounded-2xl p-6 text-center mb-6 border border-white/5">
                <p className="text-sm text-[#8a8a8a] flex items-center justify-center gap-2 mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Install via Downloader
                </p>
                <p className="text-xs text-[#666] mb-3">Open Downloader app & enter code:</p>
                <p className="text-4xl font-mono font-bold text-white tracking-[0.2em]">8138590</p>
              </div>

              {/* Download Button */}
              <a
                href="https://drive.google.com/file/d/13F3ohJWfzIhg0JnL6lEogDo4sgA9TKTf/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-premium text-center text-lg py-4"
              >
                Install Mobile App
              </a>
              <p className="text-xs text-[#666] text-center mt-3">
                Same Coffee & Donut TV subscription. No extra cost.
              </p>
            </div>
          </div>

          {/* TV App Card */}
          <div
            className={`relative glass rounded-3xl p-8 transition-all duration-700 ease-out border-2 ${
              hoveredCard === "tv" ? "border-[#d4a574]/60 shadow-[0_0_40px_rgba(212,165,116,0.15)]" : "border-[#d4a574]/30"
            } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '200ms' }}
            onMouseEnter={() => setHoveredCard("tv")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Recommended badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4a574] to-[#c9a961] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              TV Edition
            </div>

            {/* Card glow effect */}
            <div className={`absolute inset-0 rounded-3xl bg-[#d4a574]/5 transition-opacity duration-500 ${
              hoveredCard === "tv" ? "opacity-100" : "opacity-50"
            }`} />

            {/* Animated top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8 mt-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <img
                    src="https://ext.same-assets.com/2445618519/4009277168.png"
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Coffee & Donut TV</h3>
                    <p className="text-lg gradient-text">TV Edition</p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest text-[#8a8a8a] mt-3">Powered by TiviMate</p>
              </div>

              {/* App Screenshot */}
              <div className="relative mb-8">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#d4a574]/30 blur-2xl rounded-full" />
                <img
                  src="https://ext.same-assets.com/1630699721/3569676639.png"
                  alt="TV App Interface"
                  className="relative z-10 w-full max-w-md mx-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Why this one is king */}
              <p className="text-center text-[#d4a574] italic mb-6">Why this one is king</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tvFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 text-[#a0a0a0] transition-all duration-500 ${
                      cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: getStaggerDelay(index + 2, 100) }}
                  >
                    <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Download Code */}
              <div className="bg-black/30 rounded-2xl p-6 text-center mb-6 border border-[#d4a574]/20">
                <p className="text-sm text-[#8a8a8a] flex items-center justify-center gap-2 mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Install via Downloader
                </p>
                <p className="text-xs text-[#666] mb-3">Open Downloader app & enter code:</p>
                <p className="text-4xl font-mono font-bold text-white tracking-[0.2em]">3374467</p>
              </div>

              {/* Download Button */}
              <a
                href="https://drive.google.com/file/d/1ALzIIq6ffe-gK2XhiHWg4jJF1824HZLG/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#d4a574] via-[#e8c9a0] to-[#d4a574] text-black text-center text-lg font-bold py-4 rounded-full hover:shadow-[0_0_30px_rgba(212,165,116,0.4)] transition-all duration-300"
              >
                Install TV App
              </a>
              <p className="text-xs text-[#666] text-center mt-3">
                Recommended for living room viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose This If Section */}
      <section className="relative py-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a574]/3 to-transparent pointer-events-none" />

        <div
          ref={chooseRef}
          className={`max-w-2xl mx-auto px-6 text-center transition-all duration-1000 ${
            chooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="heading-medium text-white mb-10">Choose this if...</h3>

          <div className="glass rounded-2xl p-8 inline-block">
            <div className="space-y-4 text-left">
              {chooseIf.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    chooseVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: getStaggerDelay(index, 150) }}
                >
                  <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#a0a0a0]">
                    {item.condition} → <strong className="text-white">{item.app}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-[#666]">
            Different apps. Same premium <span className="text-[#d4a574]">Coffee & Donut TV</span> experience.
          </p>

          <a
            href="/free-trial"
            className="inline-block mt-10 btn-premium text-xl px-12 py-5"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
