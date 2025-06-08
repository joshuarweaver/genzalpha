"use client";
import { useState } from "react";

const types = [
  { label: "Tweet", value: "tweet" },
  { label: "TikTok Script", value: "tiktok" },
  { label: "IG Caption", value: "ig" }
];

const mockOutputs = {
  tweet: {
    original: "Our new moisturizer is out now! #skincare",
    ai: "POV: your skin just went from mid to main character. #NewDrop #skincaretok",
    explanation: "Swapped generic language for Gen Zalpha meme-voice, and added TikTok-inspired hashtag.",
  },
  tiktok: {
    original: "Try our new product for glowing skin.",
    ai: "Show a before/after glow-up, then cut to 'this is NOT a filter' with trending audio.",
    explanation: "Shifted from static ad to memeable, visual-first format using trending TikTok conventions.",
  },
  ig: {
    original: "Limited edition lip balm available now.",
    ai: "When your lips need main character energy... 💅✨ #LimitedDrop",
    explanation: "Added playful, self-aware tone and emoji to match IG youth culture.",
  },
};

export default function ContentPreviewer() {
  const [selected, setSelected] = useState(types[0].value);

  const output = mockOutputs[selected as keyof typeof mockOutputs];

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">AI Content Previewer</h3>
      <div className="mb-3 flex gap-2">
        {types.map(t => (
          <button
            key={t.value}
            className={`rounded px-3 py-1 font-medium border ${
              selected === t.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-blue-700 border-gray-200"
            }`}
            onClick={() => setSelected(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-2">
        <div className="flex-1">
          <div className="font-semibold text-gray-600 mb-1">Your Input</div>
          <div className="bg-gray-50 border rounded p-3">{output.original}</div>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-blue-600 mb-1">AI Output</div>
          <div className="bg-blue-50 border rounded p-3">{output.ai}</div>
        </div>
      </div>
      <div className="text-sm text-gray-500 italic">Here’s what changed: {output.explanation}</div>
    </div>
  );
}