"use client";
import { useState } from "react";

const initialDoc = {
  title: "Brand Zalpha Strategy",
  updated: "2024-06-07",
  sections: [
    {
      type: "heading",
      content: "Executive Summary",
    },
    {
      type: "paragraph",
      content:
        "Your brand is playful, meme-savvy, and ready for Gen Zalpha. The strategy emphasizes TikTok, UGC, and authentic voice.",
    },
    {
      type: "heading",
      content: "Key Campaign Concepts",
    },
    {
      type: "list",
      items: [
        "Mascot-led TikTok series",
        "Discord community launch",
        "Memeable product drops",
      ],
    },
    {
      type: "heading",
      content: "Platform Mix",
    },
    {
      type: "table",
      columns: ["Platform", "Strategy", "Priority"],
      rows: [
        ["TikTok", "Short, viral challenges", "High"],
        ["Discord", "Community engagement", "Medium"],
        ["Instagram", "Aesthetic UGC", "Medium"],
        ["X", "Witty, trending commentary", "Low"],
      ],
    },
    {
      type: "heading",
      content: "Risk Watchouts",
    },
    {
      type: "paragraph",
      content:
        "Avoid forced memes and overusing slang. Keep it authentic and involve Gen Zalpha creators for feedback.",
    },
  ],
};

function renderSection(section: any, i: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2 key={i} className="font-bold text-lg mt-6 mb-2 text-blue-700">
          {section.content}
        </h2>
      );
    case "paragraph":
      return (
        <p key={i} className="mb-2 text-gray-800">{section.content}</p>
      );
    case "list":
      return (
        <ul key={i} className="list-disc ml-6 mb-2 text-gray-700">
          {section.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} className="mb-4 overflow-x-auto">
          <table className="border rounded w-full">
            <thead>
              <tr>
                {section.columns.map((col: string, idx: number) => (
                  <th key={idx} className="px-2 py-1 text-xs font-semibold bg-blue-50 text-blue-700 border">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row: string[], ridx: number) => (
                <tr key={ridx}>
                  {row.map((cell, cidx) => (
                    <td key={cidx} className="px-2 py-1 border text-sm">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function LivingStrategyDocumentGenerator({ doc = initialDoc }: { doc?: typeof initialDoc }) {
  // In a real app: update doc based on brand/campaign input via props/context.
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-blue-900">{doc.title}</h1>
        <span className="text-xs text-gray-400">Updated {doc.updated}</span>
      </div>
      <div className="notion-content">{doc.sections.map(renderSection)}</div>
      <div className="text-xs text-gray-300 mt-6">Notion-style doc, updates dynamically with your inputs.</div>
    </div>
  );
}