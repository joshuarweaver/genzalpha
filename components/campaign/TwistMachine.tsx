"use client";
import { useState } from "react";

const knownCampaign = {
  brand: "Duolingo",
  campaign: "Duo on TikTok",
  description: "Duolingo's mascot posts chaotic, meme-heavy TikToks, interacting with trending sounds and user comments",
};

const mockTwist = {
  headline: "Your Mascot, Your Way",
  description:
    "Adapt the Duo formula by making your own mascot the star — have them react to trending memes, duet with users, and break the fourth wall. Bonus: give them a Gen Zalpha catchphrase.",
  samplePost: "Our mascot just dropped some 🔥, should we delete or keep? #MascotTakeover",
};

export default function TwistMachine() {
  const [showTwist, setShowTwist] = useState(false);

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">Twist Machine</h3>
      <div className="mb-3">
        <div className="text-sm font-semibold text-gray-700">Viral Campaign Example:</div>
        <div className="mb-1 font-bold">{knownCampaign.brand} — {knownCampaign.campaign}</div>
        <div className="text-gray-600 mb-2">{knownCampaign.description}</div>
        <button
          className="bg-blue-600 text-white rounded px-4 py-2 font-bold"
          onClick={() => setShowTwist(s => !s)}
        >
          {showTwist ? "Hide Adaptation" : "See Your Brand's Twist"}
        </button>
      </div>
      {showTwist && (
        <div className="bg-blue-50 border rounded-lg p-4 mt-2">
          <div className="font-semibold text-blue-900 mb-1">{mockTwist.headline}</div>
          <div className="text-gray-800 mb-1">{mockTwist.description}</div>
          <div className="text-sm text-gray-600 italic">Sample Post: {mockTwist.samplePost}</div>
        </div>
      )}
    </div>
  );
}