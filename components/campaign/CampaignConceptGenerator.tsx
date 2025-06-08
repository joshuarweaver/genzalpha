"use client";
import { useState } from "react";

const mockCampaigns = [
  {
    title: "Late-Night TikTok Challenge",
    platforms: ["TikTok", "IG Reels"],
    hook: "Share your 'up-too-late' moment with #BrandAfterDark",
    virality: 9,
  },
  {
    title: "Duet with Our Mascot",
    platforms: ["TikTok"],
    hook: "Duet with our mascot doing your best dance move",
    virality: 8,
  },
  {
    title: "Discord AMA Party",
    platforms: ["Discord", "YouTube"],
    hook: "Get the real scoop in a live chat with our founders",
    virality: 7,
  },
  {
    title: "BeReal Product Hunt",
    platforms: ["BeReal"],
    hook: "Post your rawest unboxing, win a monthly care pack",
    virality: 8,
  },
  {
    title: "Meme This Moment",
    platforms: ["IG", "X", "TikTok"],
    hook: "We drop a photo, you meme it — best post wins",
    virality: 10,
  },
];

export default function CampaignConceptGenerator() {
  const [goal, setGoal] = useState("");
  const [cards, setCards] = useState<typeof mockCampaigns | null>(null);
  const [loading, setLoading] = useState(false);

  function generateCampaigns(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setCards(mockCampaigns);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">Campaign Concept Generator</h3>
      <form className="flex gap-2 mb-4" onSubmit={generateCampaigns}>
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500"
          placeholder="What is your campaign goal?"
          value={goal}
          onChange={e => setGoal(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-bold"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {cards && (
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="border rounded-lg p-4 shadow bg-blue-50">
              <div className="font-bold text-blue-900 mb-1">{c.title}</div>
              <div className="text-sm text-gray-800 mb-1">
                <span className="font-semibold">Platforms:</span> {c.platforms.join(", ")}
              </div>
              <div className="mb-1"><span className="font-semibold">Hook:</span> {c.hook}</div>
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Virality:</span>
                <span className="text-yellow-500">
                  {Array.from({ length: c.virality }, (_, idx) => "🔥").join("")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}