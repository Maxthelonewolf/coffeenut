"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const plans = [
  {
    label: "Try It. Feel It.",
    name: "1 Month Pass",
    price: "$6",
    period: "/ month",
    description: "Perfect if you just want to test the power of CoffeeDonutTV.",
    features: [
      "Full access to everything",
      "Live TV + Movies + Series",
      "No contract. Cancel anytime.",
    ],
    popular: false,
  },
  {
    label: "Most Popular",
    name: "3 Month Pass",
    price: "$18",
    period: "",
    description: "For people who already know they're not going back.",
    features: [
      "Same full library",
      "Priority support",
      "Best balance of price & value.",
    ],
    popular: true,
  },
  {
    label: "Best Value",
    name: "6 Month Pass",
    price: "$36",
    period: "",
    description: "Set it and forget it.",
    features: [
      "Works on ALL devices.",
      "24/7 support",
      "Half a year of entertainment, stress-free.",
    ],
    popular: false,
  },
  {
    label: "Best Long-Term Value",
    name: "12 Month Pass",
    price: "$72",
    period: "/ year",
    description: "Maximum value. Minimum cost.",
    features: [
      "Everything included",
      "Live TV, Movies & Series",
      "Full EPG",
      "All devices supported",
      "One year of unlimited entertainment",
    ],
    popular: false,
  },
];

export default function PricingCard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="card-section relative overflow-hidden flex-col"
      style={{
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(212, 165, 116, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 70%, rgba(201, 169, 97, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)
        `
      }}
    >
      {/* Animated glow behind popular card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a574]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Border decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        {/* Header with staggered text reveal */}
        <div
          className={`text-center mb-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-[#8a8a8a]">Watch Live TV</span>
        </div>

        <div
          className={`text-center mb-6 transition-all duration-700 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h2 className="heading-large text-white">
            One simple subscription.
          </h2>
        </div>

        <div
          className={`text-center mb-16 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="/free-trial"
            className="inline-block text-[#d4a574] hover:text-[#e8c9a0] underline underline-offset-4 transition-colors duration-300"
          >
            Try It Free - No Credit Card Needed
          </a>
        </div>

        {/* Pricing Cards with 3D hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-out cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                ${plan.popular
                  ? 'bg-gradient-to-br from-[#1a1510] to-[#0d0a07] border-2 border-[#d4a574]/50 lg:scale-105 lg:-translate-y-2'
                  : 'glass border border-white/5'
                }
                ${hoveredCard === index ? 'scale-[1.02] shadow-2xl shadow-[#d4a574]/10' : ''}
              `}
              style={{
                transitionDelay: getStaggerDelay(index, 100),
                transform: hoveredCard === index ? 'translateY(-8px)' : undefined
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shine effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transform: 'skewX(-20deg) translateX(-100%)' }}
              />

              {/* Label */}
              <div className="px-6 pt-6">
                <span className={`text-xs uppercase tracking-widest ${plan.popular ? 'text-[#d4a574]' : 'text-[#666]'}`}>
                  {plan.label}
                </span>
              </div>

              {/* Plan Name & Price */}
              <div className="px-6 pt-4 pb-6 border-b border-white/5">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold gradient-text transition-transform duration-300 ${
                    hoveredCard === index ? 'scale-110' : 'scale-100'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-[#8a8a8a]">{plan.period}</span>}
                </div>
                <p className="text-sm text-[#8a8a8a] mt-3">{plan.description}</p>
              </div>

              {/* Features with staggered animation */}
              <div className="px-6 py-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm text-[#a0a0a0] transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100 + i * 50}ms` }}
                    >
                      <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/12268943166"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'btn-premium'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#d4a574]/50'
                  }`}
                >
                  Get Started
                </a>
              </div>

              {/* Popular badge glow */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
