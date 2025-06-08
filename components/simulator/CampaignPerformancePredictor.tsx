"use client";
import { useState } from "react";

const mockResult = {
  risk: "Low – Trendy format, minimal controversy risk.",
  virality: "8/10 – High meme potential and shareability.",
  engagement: "Projected 4.2% CTR (well above industry avg).",
};

export default function CampaignPerformancePredictor() {
  const [scenario, setScenario] = useState("");
  const [output, setOutput] = useState<typeof mockResult | null>(null);
  const [loading, setLoading] = useState(false);

  function runScenario(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setOutput(mockResult);
      setLoading(false);
    }, 900);
  }

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">
        Campaign Performance Predictor
      </h3>
      <form className="flex gap-2 mb-4" onSubmit={runScenario}>
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500"
          placeholder="Describe your campaign or post idea"
          value={scenario}
          onChange={e => setScenario(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-bold"
          disabled={loading}
        >
          {loading ? "Running..." : "Run Scenario"}
        </button>
      </form>
      {output && (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 bg-blue-50">
            <div className="font-semibold text-gray-700 mb-1">Risk</div>
            <div className="text-blue-900">{output.risk}</div>
          </div>
          <div className="border rounded-lg p-4 bg-blue-50">
            <div className="font-semibold text-gray-700 mb-1">Virality</div>
            <div className="text-blue-900">{output.virality}</div>
          </div>
          <div className="border rounded-lg p-4 bg-blue-50">
            <div className="font-semibold text-gray-700 mb-1">Engagement</div>
            <div className="text-blue-900">{output.engagement}</div>
          </div>
        </div>
      )}
    </div>
  );
}