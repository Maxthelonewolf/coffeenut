"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "World's Largest Premium",
    description: "From Bollywood to Hollywood, South Indian to Arabic, Punjabi to Turkish, African to European - sports, news, kids, classics... everything.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ultra-Fast, Ultra-Smooth",
    description: "Zero buffering, crisp quality, stable servers - the way streaming should be.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Smart TVs, Firestick",
    description: "Android, iOS, Tablets, Boxes, PCs, etc. - works everywhere.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Real Human Support",
    description: "Message us anytime. We reply faster than your microwave heats your coffee.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function WhyUsCard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax for background elements
  const parallaxOffset = scrollY * 0.05;

  return (
    <section
      ref={sectionRef}
      className="card-section relative overflow-hidden flex-col"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(212, 165, 116, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)
        `
      }}
    >
      {/* Animated decorative elements with parallax */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4a574]/5 rounded-full blur-[150px] pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#c9a961]/5 rounded-full blur-[120px] pointer-events-none"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        {/* Header with logo bounce effect */}
        <div
          className={`text-center mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <img
              src="https://ext.same-assets.com/2445618519/4009277168.png"
              alt="Coffee & Donut TV"
              className={`w-14 h-14 object-contain transition-transform duration-1000 ${
                isVisible ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </div>
          <h2
            className={`heading-large gradient-text mb-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            Why Coffee & Donut TV?
          </h2>
          <p
            className={`text-xl text-[#8a8a8a] max-w-2xl mx-auto transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Because paying $14.99+ for one app does not make sense.
          </p>
        </div>

        {/* Features Grid with alternating slide directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => {
            // Alternate between sliding from left and right
            const slideDirection = index % 2 === 0 ? '-translate-x-12' : 'translate-x-12';

            return (
              <div
                key={feature.title}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : `opacity-0 ${slideDirection} translate-y-8`
                }`}
                style={{ transitionDelay: getStaggerDelay(index, 150) }}
              >
                <div className="glass rounded-2xl p-8 h-full premium-card hover:border-[#d4a574]/30 transition-all duration-500 overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/0 to-[#d4a574]/0 group-hover:from-[#d4a574]/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4a574]/20 to-[#c9a961]/10 flex items-center justify-center text-[#d4a574] transition-all duration-500 ${
                        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
                      } group-hover:scale-110 group-hover:rotate-3`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#d4a574] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-[#8a8a8a] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section with scale-up effect */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="glass rounded-3xl p-12 max-w-3xl mx-auto relative overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#d4a574]/0 via-[#d4a574]/10 to-[#d4a574]/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <h3 className="heading-medium text-white mb-4 relative">
              Ready to start streaming?
            </h3>
            <p className="text-[#8a8a8a] mb-8 text-lg relative">
              Join thousands of happy customers enjoying unlimited entertainment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <a
                href="/free-trial"
                className="btn-premium text-lg hover:scale-105 transition-transform duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="https://wa.me/12268943166"
                className="px-8 py-4 rounded-full border border-white/20 hover:border-[#d4a574]/50 text-white hover:text-[#d4a574] hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
