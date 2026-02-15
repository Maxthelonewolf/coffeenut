"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const devices = [
  "Firestick / Fire TV",
  "Android TV / Box",
  "Smart TV (Samsung, LG, etc.)",
  "iPhone / iPad",
  "Android Phone / Tablet",
  "Computer / Laptop",
  "Other",
];

const countries = [
  "United States", "Canada", "United Kingdom", "Australia",
  "Germany", "France", "India", "Other",
];

const sources = [
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "youtube", label: "YouTube" },
  { id: "search", label: "Website Search" },
  { id: "friend", label: "Friend Referral" },
  { id: "other", label: "Other" },
];

export default function FreeTrialPage() {
  const { ref: formRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    device: "",
    hasApp: "yes",
    country: "",
    source: [] as string[],
    agreed: false,
  });

  const handleSourceChange = (sourceId: string) => {
    setFormData(prev => ({
      ...prev,
      source: prev.source.includes(sourceId)
        ? prev.source.filter(s => s !== sourceId)
        : [...prev.source, sourceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'd like to start my 24-hour free trial.\n\nUsername: ${formData.username}\nEmail: ${formData.email}\nDevice: ${formData.device}\nHas IPTV App: ${formData.hasApp}\nCountry: ${formData.country}\nFound via: ${formData.source.join(", ")}`;
    window.open(`https://wa.me/12268943166?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#d4a574]/8 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <img
              src="https://ext.same-assets.com/2445618519/4009277168.png"
              alt="Coffee & Donut TV"
              className="w-24 h-24 object-contain animate-fade-in-up"
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in-up stagger-1" style={{ fontFamily: 'Syne, sans-serif' }}>
            Start Your
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight animate-fade-in-up stagger-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="gradient-text">24-Hour Free Trial</span>
          </h2>

          <p className="text-lg md:text-xl text-[#8a8a8a] max-w-lg mx-auto animate-fade-in-up stagger-3 leading-relaxed">
            No personal info needed — only email to deliver your login.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />

        <div
          ref={formRef}
          className={`max-w-2xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <form onSubmit={handleSubmit} className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white text-center mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
              Start Your 24-Hour Free Trial
            </h3>

            <div className="space-y-6">
              {/* Row 1: Username & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm text-[#8a8a8a] mb-3 font-medium">
                    <svg className="w-4 h-4 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Name / User ID
                  </label>
                  <input
                    type="text"
                    placeholder="example: johndoe"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-4 text-white placeholder-white/30 focus:border-[#d4a574] focus:outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-[#8a8a8a] mb-3 font-medium">
                    <svg className="w-4 h-4 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-4 text-white placeholder-white/30 focus:border-[#d4a574] focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Device & Has App */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-[#8a8a8a] mb-3 block font-medium">
                    What Device Will You Use?
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#d4a574] focus:outline-none transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-[#1a1a1a]">Select your device</option>
                    {devices.map(device => (
                      <option key={device} value={device} className="bg-[#1a1a1a]">{device}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-[#8a8a8a] mb-3 block font-medium">
                    Do You Have an IPTV App Installed?
                  </label>
                  <div className="grid grid-cols-2 gap-3 h-14">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasApp: "yes" })}
                      className={`h-full rounded-xl font-semibold transition-all ${
                        formData.hasApp === "yes"
                          ? "bg-[#d4a574] text-black"
                          : "bg-black/40 border border-white/10 text-white/60 hover:border-white/20"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasApp: "no" })}
                      className={`h-full rounded-xl font-semibold transition-all ${
                        formData.hasApp === "no"
                          ? "bg-[#d4a574] text-black"
                          : "bg-black/40 border border-white/10 text-white/60 hover:border-white/20"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Country & Source */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-[#8a8a8a] mb-3 block font-medium">
                    Country / Region
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#d4a574] focus:outline-none transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-[#1a1a1a]">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country} className="bg-[#1a1a1a]">{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-[#8a8a8a] mb-3 block font-medium">
                    How Did You Find Us?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {sources.slice(0, 4).map(source => (
                      <label
                        key={source.id}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${
                          formData.source.includes(source.id)
                            ? "bg-[#d4a574]/20 border border-[#d4a574]/50 text-white"
                            : "bg-black/40 border border-white/10 text-white/60 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.source.includes(source.id)}
                          onChange={() => handleSourceChange(source.id)}
                          className="sr-only"
                        />
                        {source.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <label className="flex items-start gap-3 cursor-pointer group mt-6">
                <div
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    formData.agreed
                      ? "border-[#d4a574] bg-[#d4a574]"
                      : "border-white/30 group-hover:border-white/50"
                  }`}
                  onClick={() => setFormData({ ...formData, agreed: !formData.agreed })}
                >
                  {formData.agreed && (
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-[#8a8a8a] leading-relaxed">
                  I understand this is a 24-hour trial and Coffee & Donut TV does not collect personal information.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.agreed}
                className={`w-full h-16 mt-4 bg-gradient-to-r from-[#d4a574] to-[#c9a961] text-black font-bold text-lg rounded-xl transition-all ${
                  formData.agreed
                    ? "hover:shadow-[0_0_30px_rgba(212,165,116,0.4)] hover:scale-[1.02]"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                Get My Free Trial
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
