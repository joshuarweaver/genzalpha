"use client";

import { useRef, useEffect, useState } from "react";

export default function GenZalphaStrategyPage() {
  const secondaryRef = useRef<HTMLDivElement | null>(null);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!secondaryRef.current) return;
      const rect = secondaryRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setShowSecondary(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Reveal immediately if already in view
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-50 via-white to-white">
      {/* Primary Hero */}
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Your Brand + <span className="text-blue-600">Gen Zalpha</span> = ?
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          AI-powered strategies that actually work.<br className="hidden md:block" />
          No cringe. No guesswork. Just results.
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl">
          Every brand gets a completely different playbook. Built from 50+ viral campaigns, powered by real-time AI, and customized for <span className="font-bold text-blue-600">YOUR</span> specific goals.
        </p>
        <a
          href="#zalpha-strategy-builder"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg transition"
        >
          Build My Zalpha Strategy
        </a>
        <div className="mt-2 text-sm text-gray-500">
          ⚡ Takes 5 minutes &nbsp;•&nbsp; 🤖 AI-powered &nbsp;•&nbsp; 🎯 100% personalized
        </div>
      </section>

      {/* Placeholder for the actual strategy builder */}
      <section
        id="zalpha-strategy-builder"
        className="w-full max-w-2xl mx-auto mt-8 mb-24"
      >
        <div className="bg-white border rounded-xl shadow p-8 flex flex-col items-center">
          <span className="uppercase font-bold text-blue-500 text-xs tracking-wide mb-2">Strategy Builder</span>
          <h3 className="text-lg font-semibold mb-2">Coming soon: Interactive Gen Zalpha Strategy Builder</h3>
          <p className="text-gray-500 mb-1 text-center">
            This is where your personalized marketing blueprint will be built in real time.
          </p>
          <p className="text-gray-400 text-sm">(Strategy builder UI placeholder)</p>
        </div>
      </section>

      {/* Secondary Hero */}
      <section
        ref={secondaryRef}
        className={`w-full max-w-3xl mx-auto pt-16 pb-16 px-4 transition-opacity duration-700 ${
          showSecondary ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Stop Guessing What Gen Zalpha Wants
        </h2>
        <ul className="space-y-4 text-left max-w-xl mx-auto text-lg text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            Real-time trend intelligence from TikTok, Discord, and beyond
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            AI that speaks fluent Zalpha <span className="italic text-gray-500">(no cap)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            Case studies from Duolingo, Wendy's, and 20+ brands that get it
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            Your personal Zalpha translator on-demand
          </li>
        </ul>
      </section>
    </div>
  );
}