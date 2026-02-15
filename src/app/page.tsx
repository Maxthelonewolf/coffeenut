"use client";

import { useEffect, useState } from "react";
import HeroCard from "@/components/HeroCard";
import StreamingCard from "@/components/StreamingCard";
import PricingCard from "@/components/PricingCard";
import WhyUsCard from "@/components/WhyUsCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercent = (scrolled / scrollHeight) * 100;
      setProgress(progressPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#d4a574] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="relative">
      <ScrollProgress />
      <Header />
      <HeroCard />
      <StreamingCard />
      <PricingCard />
      <WhyUsCard />
      <Footer />
    </main>
  );
}
