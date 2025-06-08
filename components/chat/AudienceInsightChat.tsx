"use client";
import { useState } from "react";

type Message = { role: "user" | "ai"; content: string };

export default function AudienceInsightChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Ask me anything about your audience!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { role: "user", content: input }]);
    setInput("");
    setLoading(true);
    // Placeholder backend call
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        {
          role: "ai",
          content:
            "Here's a mock audience insight: Gen Zalpha loves interactive content and brands that keep it 💯."
        }
      ]);
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">
        Audience Insight Chat
      </h3>
      <div className="h-40 overflow-y-auto border rounded-md p-2 mb-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-1 rounded-xl max-w-xs ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="mb-2 flex justify-start">
            <div className="px-3 py-1 rounded-xl bg-gray-200 text-gray-800 animate-pulse">
              ...thinking
            </div>
          </div>
        )}
      </div>
      <form className="flex gap-2" onSubmit={sendMessage}>
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="e.g. What platforms should I target?"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-bold disabled:opacity-60"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}