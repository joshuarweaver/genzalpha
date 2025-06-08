"use client";

import { useRef, useEffect, useState } from "react";

function SectionHeader({
  title,
  subtitle,
  body,
  align = "center",
  className = "",
}: {
  title: string;
  subtitle?: string;
  body?: string | React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <header className={`max-w-2xl mx-auto mb-8 ${alignClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-xl font-medium text-blue-600 mb-2">{subtitle}</p>
      )}
      {body && (
        <div className="text-gray-600 text-lg">{body}</div>
      )}
    </header>
  );
}

function HowItWorksStep({
  title,
  desc,
  num,
}: {
  title: string;
  desc: string;
  num: number;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
          {num}
        </span>
      </div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600">{desc}</div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white border rounded-xl shadow p-6 flex flex-col space-y-2 h-full">
      {icon}
      <div className="font-bold text-lg mb-1">{title}</div>
      <div className="text-gray-600">{copy}</div>
    </div>
  );
}

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-50 via-white to-white">

      {/* Executive Overview/Hero */}
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

      {/* The Problem */}
      <section className="w-full py-16 px-4 bg-white border-t border-b">
        <SectionHeader
          title="87% of Brands Are Speaking Boomer to Zalpha"
          subtitle="And they wonder why their TikToks flop"
          body={
            <>
              Gen Zalpha can smell inauthenticity from a mile away. They've grown up with algorithms.
              They speak in memes. And they're reshaping commerce with <span className="font-semibold text-blue-600">$750B</span> in spending power.
            </>
          }
        />
      </section>

      {/* The Solution */}
      <section className="w-full py-16 px-4 bg-blue-50 border-b">
        <SectionHeader
          title="Meet Your AI-Powered Zalpha Strategist"
          subtitle="It learns your brand, studies the culture, and builds strategies that slap"
          body="Not another generic template. Our AI analyzes YOUR brand's DNA and creates strategies based on what's actually working right now."
        />
      </section>

      {/* How It Works */}
      <section className="w-full py-16 px-4 bg-white border-b">
        <header className="max-w-2xl mx-auto mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">From Cheugy to Bussin' in 5 Steps</h2>
        </header>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <HowItWorksStep num={1} title="Drop Your Brand Deets" desc="We analyze your vibe" />
            <HowItWorksStep num={2} title="AI Does Its Thing" desc="Scans millions of data points" />
            <HowItWorksStep num={3} title="Get Your Personas" desc="Meet your Zalpha audience" />
          </div>
          <div className="space-y-6">
            <HowItWorksStep num={4} title="Pick Your Platforms" desc="See where to show up" />
            <HowItWorksStep num={5} title="Launch Your Strategy" desc="With content that actually converts" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-16 px-4 bg-blue-50 border-b">
        <SectionHeader
          title="These Brands Cracked the Code"
          subtitle="Now it's your turn"
        />
        {/* Placeholder for case studies carousel or cards */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl shadow p-4 flex flex-col items-center">
            <img src="https://logo.clearbit.com/duolingo.com" alt="Duolingo" className="h-12 mb-2" />
            <div className="font-semibold">Duolingo</div>
            <div className="text-gray-500 text-sm text-center">Turned TikTok into a brand playground</div>
          </div>
          <div className="bg-white border rounded-xl shadow p-4 flex flex-col items-center">
            <img src="https://logo.clearbit.com/wendys.com" alt="Wendy's" className="h-12 mb-2" />
            <div className="font-semibold">Wendy's</div>
            <div className="text-gray-500 text-sm text-center">Mastered meme culture for real engagement</div>
          </div>
          <div className="bg-white border rounded-xl shadow p-4 flex flex-col items-center">
            <span className="h-12 mb-2 flex items-center justify-center">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#EFF6FF"/><text x="20" y="24" textAnchor="middle" fontSize="18" fill="#2563eb">20+</text></svg>
            </span>
            <div className="font-semibold">More Brands</div>
            <div className="text-gray-500 text-sm text-center">See how leading brands connect with Zalpha</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 px-4 bg-white border-b">
        <SectionHeader
          title="Everything You Need to Win Zalpha"
          subtitle="No cap, this toolkit goes hard"
        />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <FeatureCard
            icon={
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 mb-2">
                <svg width="24" height="24" fill="none" className="text-blue-600"><path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            }
            title="Personas That Actually Exist IRL"
            copy="Our AI builds Zalpha personas based on real behavioral data, not outdated demographics. Meet Emma, 19, who discovered your brand through BeReal and shops exclusively at 2am."
          />
          <FeatureCard
            icon={
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-yellow-100 mb-2">
                <svg width="24" height="24" fill="none" className="text-yellow-500"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 13l5 5 5-5M12 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            }
            title="Test Before You Post"
            copy="See how your campaign will perform before spending a dime. Our AI predicts engagement, virality potential, and (most importantly) cringe factor."
          />
          <FeatureCard
            icon={
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-100 mb-2">
                <svg width="24" height="24" fill="none" className="text-green-500"><path d="M12 8v8m0 0l3-3m-3 3l-3-3M19 4v2a2 2 0 01-2 2h-1M5 20v-2a2 2 0 012-2h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            }
            title="Never Miss a Moment"
            copy="Real-time alerts when trends match your brand. Plus pre-written content so you can be first, not fifth."
          />
          <FeatureCard
            icon={
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 mb-2">
                <svg width="24" height="24" fill="none" className="text-pink-500"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            }
            title="Is This Giving What You Think It's Giving?"
            copy="Paste any content. Get an instant Zalpha vibe check. Our AI explains what hits and what's mid."
          />
        </div>
      </section>

      {/* Placeholder for the actual strategy builder */}
      <section
        id="zalpha-strategy-builder"
        className="w-full max-w-2xl mx-auto mt-16 mb-24"
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