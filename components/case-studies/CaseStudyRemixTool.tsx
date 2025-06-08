"use client";
import { useState } from "react";

const mockRemixes = {
  1: {
    newCopy: "Meet our mascot: ready to meme, duet, and roast (lovingly). Watch for surprise TikTok takeovers. #MascotMayhem",
    visuals: ["Mascot dancing with trending audio", "Mascot reaction GIFs", "Fans dueting mascot"],
    effort: "Medium – requires mascot suit, social media manager with meme IQ, and video editing.",
  },
  2: {
    newCopy: "Dropping hot takes and spicy replies. Who's next? #BrandRoast",
    visuals: ["Screenshots of witty replies", "Meme templates for user interaction"],
    effort: "Low – can be executed by a sharp-witted community manager.",
  },
  3: {
    newCopy: "We let our community choose the next drop. Slide into our DMs to cast your vote!",
    visuals: ["DM screenshots", "User polls", "Fan-created content"],
    effort: "Medium – community engagement and content curation needed.",
  },
  4: {
    newCopy: "Join the #ChipotleChallenge: make your own bowl, post with our sound, and win free eats.",
    visuals: ["TikTok challenge videos", "Bowl customization visuals"],
    effort: "Medium – influencer outreach and UGC moderation.",
  },
  5: {
    newCopy: "Stan squad, assemble! Meme your favorite moments and get featured on our main.",
    visuals: ["Fan memes", "Reaction GIF threads", "Fan art highlights"],
    effort: "Low – mostly curation and fan engagement.",
  },
};

export default function CaseStudyRemixTool({
  caseStudy,
  onBack,
}: {
  caseStudy: { id: number; brand: string; title: string };
  onBack: () => void;
}) {
  const remix = mockRemixes[caseStudy.id as keyof typeof mockRemixes];
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <button
        className="text-blue-500 text-xs underline mb-3"
        onClick={onBack}
      >
        ← Back to Matches
      </button>
      <h3 className="text-base font-bold text-blue-700 mb-2">Remixed for Your Brand</h3>
      <div className="mb-2">
        <div className="font-semibold text-gray-800">AI-Remixed Copy:</div>
        <div className="bg-gray-50 border rounded p-2">{remix.newCopy}</div>
      </div>
      <div className="mb-2">
        <div className="font-semibold text-gray-800">Suggested Visuals:</div>
        <ul className="list-disc ml-6">
          {remix.visuals.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-semibold text-gray-800">Effort Estimation:</div>
        <div className="bg-yellow-50 border rounded p-2">{remix.effort}</div>
      </div>
    </div>
  );
}