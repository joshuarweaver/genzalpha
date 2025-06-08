"use client";
import { useState } from "react";

const mockPosts = [
  {
    id: 1,
    tags: ["TikTok", "Product"],
    yourVoice: "Try our new moisturizer and see the results yourself!",
    zalpha: "POV: you just leveled up your skincare game. #GlowUp #ForYou",
  },
  {
    id: 2,
    tags: ["Instagram", "Drop"],
    yourVoice: "Limited edition now available.",
    zalpha: "When the main character energy hits... 💅✨ #LimitedDrop",
  },
  {
    id: 3,
    tags: ["X", "Humor"],
    yourVoice: "Our team is working hard on new features.",
    zalpha: "Plot twist: our devs are fueled by memes and bubble tea 🧋",
  },
  {
    id: 4,
    tags: ["Discord", "Community"],
    yourVoice: "Join our server for updates.",
    zalpha: "Pull up to the squad — Discord is where the real ones hang.",
  },
  {
    id: 5,
    tags: ["TikTok", "Challenge"],
    yourVoice: "Participate in our summer challenge!",
    zalpha: "Drop your #SummerFlex and tag us to get featured 🌞🔥",
  },
  {
    id: 6,
    tags: ["Instagram", "UGC"],
    yourVoice: "Share your moments with us.",
    zalpha: "Show us your vibe — best UGC gets a shoutout!",
  },
  {
    id: 7,
    tags: ["X", "Meme"],
    yourVoice: "Mondays are tough.",
    zalpha: "POV: It’s Monday, but at least your skin is poppin’.",
  },
  {
    id: 8,
    tags: ["TikTok", "Influencer"],
    yourVoice: "Check out our collab with @influencer!",
    zalpha: "Collab drop with @influencer is live. Who’s copping?",
  },
  {
    id: 9,
    tags: ["Instagram", "Product"],
    yourVoice: "Our lip balm is back in stock.",
    zalpha: "Real ones know… our lip balm > the rest. #BackInStock",
  },
  {
    id: 10,
    tags: ["Discord", "Event"],
    yourVoice: "Join our live event on Discord.",
    zalpha: "Discord fam, you ready? Live event going down tonight!",
  },
];

const allTags = Array.from(new Set(mockPosts.flatMap(p => p.tags)));

export default function CustomContentLibrary() {
  const [voice, setVoice] = useState<"your" | "zalpha">("your");
  const [tag, setTag] = useState<string>("");

  const filtered = tag ? mockPosts.filter(p => p.tags.includes(tag)) : mockPosts;

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h3 className="text-base font-bold text-blue-700">Custom Content Library</h3>
        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium">Voice:</span>
          <button
            className={`rounded px-3 py-1 font-medium border ${
              voice === "your"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-blue-700 border-gray-200"
            }`}
            onClick={() => setVoice("your")}
          >
            Your voice
          </button>
          <button
            className={`rounded px-3 py-1 font-medium border ${
              voice === "zalpha"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-blue-700 border-gray-200"
            }`}
            onClick={() => setVoice("zalpha")}
          >
            Zalpha-optimized
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium">Tags:</span>
          <select
            className="border rounded px-2 py-1"
            value={tag}
            onChange={e => setTag(e.target.value)}
          >
            <option value="">All</option>
            {allTags.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(p => (
          <div key={p.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="text-xs text-gray-400 mb-1">{p.tags.join(", ")}</div>
            <div className="font-semibold mb-1">
              {voice === "your" ? p.yourVoice : p.zalpha}
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-300 mt-6">
        Toggle between your voice and Gen Zalpha-optimized content. Filter by tag to explore ideas.
      </div>
    </div>
  );
}