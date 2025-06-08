import { useState } from "react";
import PersonaCard, { Persona } from "./PersonaCard";

const defaultPersonas: Persona[] = [
  {
    name: "Emma",
    age: 19,
    interests: "Thrifting, K-pop, indie makeup",
    platforms: "BeReal, TikTok, IG",
    rationale: "Emma discovered your brand through BeReal and shops exclusively at 2am. She shares finds in group chats.",
  },
  {
    name: "Jayden",
    age: 16,
    interests: "Gaming, memes, tech gadgets",
    platforms: "Discord, YouTube, Twitch",
    rationale: "Jayden vibes with brands that speak fluent meme and aren't afraid to collab with creators.",
  },
  {
    name: "Sofia",
    age: 22,
    interests: "Activism, vegan food, astrology",
    platforms: "X, TikTok, IG",
    rationale: "Sofia cares about values and will stan a brand that matches her vibe and shares her voice.",
  },
];

export default function PersonaGenerator() {
  const [personas, setPersonas] = useState<Persona[]>(defaultPersonas);

  function handleChange(index: number, updated: Persona) {
    setPersonas(p =>
      p.map((persona, i) => (i === index ? updated : persona))
    );
  }

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-4">AI Persona Generator</h3>
      <div className="flex flex-col md:flex-row gap-4">
        {personas.map((persona, idx) => (
          <PersonaCard
            key={idx}
            persona={persona}
            onChange={p => handleChange(idx, p)}
          />
        ))}
      </div>
    </div>
  );
}