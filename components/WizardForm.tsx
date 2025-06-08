"use client";

import { useOnboardingContext } from "@/lib/onboarding-context";
import { useRef } from "react";

const steps = [
  {
    prompt: "Hey! What’s your brand called?",
    inputType: "text",
    field: "brandName",
    placeholder: "Brand Name",
  },
  {
    prompt: "Nice. What do you sell/do? (Keep it simple)",
    inputType: "textarea",
    field: "brandDescription",
    placeholder: "e.g. Vegan skincare for Gen Z",
    charLimit: 80,
  },
  {
    prompt: "Where are you currently active online?",
    inputType: "textarea",
    field: "socialLinks",
    placeholder: "e.g. IG @yourbrand, TikTok @brand, Discord.gg/yourbrand",
    parser: (val: string) =>
      val.split(/[\n,]+/).map(s => s.trim()).filter(Boolean),
  },
  {
    prompt: "Paste your spiciest social post 👀",
    inputType: "textarea",
    field: "brandVoiceSample",
    placeholder: "e.g. “Here’s the tea — our lip butter slays fr. 🧈💅”",
    charLimit: 140,
  },
  {
    prompt: "Analyzing your vibe… This is gonna be good.",
    inputType: "loading",
    field: null,
  },
];

export default function WizardForm() {
  const { step, setStep, next, prev, data, update } = useOnboardingContext();
  const stepData = steps[step] || steps[0];

  // For demo, just show a loading spinner on last step.
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let value = e.target.value;
    if (stepData.field === "brandDescription" && stepData.charLimit) {
      value = value.slice(0, stepData.charLimit);
    }
    if (stepData.field === "socialLinks" && stepData.parser) {
      update({ socialLinks: stepData.parser(value) });
    } else if (stepData.field) {
      update({ [stepData.field]: value });
    }
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    next();
  }

  function handlePrev() {
    prev();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  }

  // --- Render ---
  return (
    <form
      className="bg-white border rounded-2xl shadow-xl px-6 py-8 space-y-6"
      style={{ minHeight: 280 }}
      onSubmit={handleNext}
      autoComplete="off"
    >
      {step < steps.length - 1 && (
        <>
          <div className="flex items-start space-x-3">
            <span className="rounded-full bg-blue-200 text-blue-700 font-bold px-3 py-1 text-lg">{step + 1}</span>
            <div>
              <div className="font-medium text-gray-900 text-lg mb-2">{stepData.prompt}</div>
              {stepData.inputType === "text" && (
                <input
                  ref={inputRef as any}
                  type="text"
                  name={stepData.field!}
                  value={data[stepData.field!] || ""}
                  onChange={handleChange}
                  placeholder={stepData.placeholder}
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg bg-blue-50"
                  autoFocus
                  required
                />
              )}
              {stepData.inputType === "textarea" && (
                <div>
                  <textarea
                    ref={inputRef as any}
                    name={stepData.field!}
                    value={data[stepData.field!] || ""}
                    onChange={handleChange}
                    placeholder={stepData.placeholder}
                    rows={stepData.field === "socialLinks" ? 3 : 2}
                    className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg bg-blue-50 resize-none"
                    maxLength={(stepData as any).charLimit}
                    required
                  />
                  {stepData.charLimit && (
                    <div className="text-xs text-gray-400 mt-1 text-right">
                      {(data[stepData.field!] || "").length}/{stepData.charLimit}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 0}
              className="px-4 py-2 rounded text-blue-600 font-medium hover:underline disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg shadow transition"
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === steps.length - 1 && (
        <div className="flex flex-col items-center justify-center min-h-[220px]">
          <div className="flex items-center space-x-3 mb-4">
            <span className="rounded-full bg-blue-200 text-blue-700 font-bold px-3 py-1 text-lg">{step + 1}</span>
            <span className="font-medium text-gray-900 text-lg">{stepData.prompt}</span>
          </div>
          <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin my-8"></div>
          <div className="text-gray-500 text-base">Hang tight — we're analyzing your brand vibe...</div>
        </div>
      )}
    </form>
  );
}