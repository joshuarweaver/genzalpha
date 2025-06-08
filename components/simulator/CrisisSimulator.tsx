"use client";
import { useState } from "react";

const mockScenarios = [
  {
    issue: "Campaign goes viral for the wrong reasons (misinterpreted meme).",
    suggestion: "Quickly post a clarifying response owning the error, use humor, and invite fans to co-create a 'fixed' version.",
  },
  {
    issue: "Brand accused of 'cringe' or try-hard content.",
    suggestion: "Pause campaign, poll your audience for feedback, and collaborate with a Gen Z creator for the next post.",
  },
  {
    issue: "Unexpected negative comments escalate.",
    suggestion: "Pin a transparent comment, address valid criticism, and highlight positive community responses.",
  },
];

export default function CrisisSimulator() {
  const [input, setInput] = useState("");
  const [scenarios, setScenarios] = useState<typeof mockScenarios | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSimulate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setScenarios(mockScenarios);
      setLoading(false);
    }, 900);
  }

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">
        Crisis Simulator
      </h3>
      <form className="flex gap-2 mb-4" onSubmit={handleSimulate}>
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500"
          placeholder="What could go wrong with your campaign?"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-bold"
          disabled={loading}
        >
          {loading ? "Simulating..." : "Simulate"}
        </button>
      </form>
      {scenarios && (
        <div className="space-y-4">
          {scenarios.map((s, i) => (
            <div key={i} className="border rounded-lg p-4 bg-red-50">
              <div className="font-bold text-red-700 mb-1">Scenario: {s.issue}</div>
              <div className="text-sm text-gray-800">
                <span className="font-semibold text-gray-700">AI Suggestion:</span> {s.suggestion}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}