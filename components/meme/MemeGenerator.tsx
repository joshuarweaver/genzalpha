"use client";
import { useState } from "react";

const mockMemes = [
  {
    image: "https://api.memegen.link/images/ackbar/Surprise_Sale/It's_a_trap!.png",
    caption: "When you see full price elsewhere 💸 #DealHunter",
    reference: "Ackbar meme, classic 'It's a trap!' — signals FOMO/sale urgency.",
  },
  {
    image: "https://api.memegen.link/images/drake/Old_formula/Our_new_drop.png",
    caption: "Drake knows what's up 😏",
    reference: "Drake meme, preference for 'new drop' product.",
  },
  {
    image: "https://api.memegen.link/images/distracted-boyfriend/Other_brands/Our_brand.png",
    caption: "When you spot a better vibe",
    reference: "Distracted Boyfriend, switching preference to your brand.",
  },
  {
    image: "https://api.memegen.link/images/one_does_not_simply/skip_our_sale.png",
    caption: "Literally impossible",
    reference: "One Does Not Simply, exaggerates FOMO.",
  },
  {
    image: "https://api.memegen.link/images/expanding_brain/Basic_skincare/Our_glow_routine.png",
    caption: "Big brain skincare moves",
    reference: "Expanding Brain, evolution to 'smarter' product.",
  },
  {
    image: "https://api.memegen.link/images/awkward_moment_sealion/When_you_forget_to_check_our_new_post.png",
    caption: "Awkward moment, right?",
    reference: "Awkward Moment Sealion, for missed content.",
  },
  {
    image: "https://api.memegen.link/images/rollsafe/You_can't_buy_if_you're_fast_enough.png",
    caption: "Life hacks only",
    reference: "Roll Safe, for clever shoppers.",
  },
  {
    image: "https://api.memegen.link/images/cheems/When_they_try_to_copy_our_brand.png",
    caption: "Such original, much wow",
    reference: "Cheems, poking fun at copycats.",
  },
  {
    image: "https://api.memegen.link/images/10_guy/Did_I_just_save_money.png",
    caption: "Savage saver",
    reference: "10 Guy, celebrating savings.",
  },
  {
    image: "https://api.memegen.link/images/gru_plan/Step_1:_Follow_us/Step_2:_???/Step_3:_Profit.png",
    caption: "Gru knows the plan",
    reference: "Gru's Plan, for simple marketing steps.",
  },
];

export default function MemeGenerator() {
  const [input, setInput] = useState("");
  const [memes, setMemes] = useState<typeof mockMemes | null>(null);
  const [loading, setLoading] = useState(false);

  function generateMemes(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMemes(mockMemes);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">Meme Generator</h3>
      <form className="flex gap-2 mb-4" onSubmit={generateMemes}>
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500"
          placeholder="Enter your product or message"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-bold"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {memes && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {memes.map((meme, i) => (
            <div key={i} className="border rounded-lg p-2 bg-gray-50">
              <img
                src={meme.image}
                alt={meme.caption}
                className="rounded mb-2 object-cover w-full h-40"
              />
              <div className="font-bold text-sm mb-1">{meme.caption}</div>
              <div className="text-xs text-gray-500">{meme.reference}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}