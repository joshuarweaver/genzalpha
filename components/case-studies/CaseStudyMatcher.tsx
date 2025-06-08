"use client";
import { useState } from "react";

const mockCaseStudies = [
  {
    id: 1,
    brand: "Duolingo",
    title: "Meme Mascot Mayhem",
    why: "Your playful tone and meme use align with Duolingo's TikTok-first, mascot-driven engagement.",
  },
  {
    id: 2,
    brand: "Wendy's",
    title: "Savage Social Roasts",
    why: "Your brand voice is cheeky and bold, matching Wendy’s roast-style Twitter strategy.",
  },
  {
    id: 3,
    brand: "Glossier",
    title: "Community-Driven Drops",
    why: "You value authenticity and community, much like Glossier's user-generated approach.",
  },
  {
    id: 4,
    brand: "Chipotle",
    title: "TikTok Challenge Launch",
    why: "Your campaign goal fits Chipotle's viral hashtag challenges and Gen Z collabs.",
  },
  {
    id: 5,
    brand: "Netflix",
    title: "Stan Account Strategy",
    why: "You want to build fan culture — Netflix's fandom-first meme playbook is a strong fit.",
  },
];

export default function CaseStudyMatcher({
  onRemix,
}: {
  onRemix: (caseStudy: typeof mockCaseStudies[0]) => void;
}) {
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-3">AI-Powered Case Study Matcher</h3>
      <ul className="space-y-4">
        {mockCaseStudies.map(cs => (
          <li key={cs.id} className="border rounded-lg p-4 bg-blue-50 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-bold text-blue-900">{cs.brand}: {cs.title}</div>
              <div className="text-sm text-gray-700 mb-2">Why it matches: {cs.why}</div>
            </div>
            <button
              className="bg-blue-600 text-white font-bold px-4 py-2 rounded shadow hover:bg-blue-700 transition mt-2 md:mt-0"
              onClick={() => onRemix(cs)}
            >
              Remix
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}