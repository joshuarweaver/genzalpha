"use client";

import React, { createContext, useContext, useState } from "react";

type OnboardingData = {
  brandName: string;
  brandDescription: string;
  socialLinks: string[];
  brandVoiceSample: string;
  [key: string]: any;
};

type OnboardingContextType = {
  data: OnboardingData;
  setStep: (n: number) => void;
  update: (changes: Partial<OnboardingData>) => void;
  step: number;
  next: () => void;
  prev: () => void;
  reset: () => void;
};

const defaultData: OnboardingData = {
  brandName: "",
  brandDescription: "",
  socialLinks: [],
  brandVoiceSample: "",
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(defaultData);

  function update(changes: Partial<OnboardingData>) {
    setData(d => ({ ...d, ...changes }));
  }
  function next() { setStep(s => s + 1); }
  function prev() { setStep(s => Math.max(0, s - 1)); }
  function reset() {
    setData(defaultData);
    setStep(0);
  }

  return (
    <OnboardingContext.Provider value={{ data, setStep, update, step, next, prev, reset }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboardingContext must be used within OnboardingProvider");
  return ctx;
}