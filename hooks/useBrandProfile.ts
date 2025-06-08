import { useState } from "react";

export type BrandProfile = {
  brandName: string;
  industry: string;
  socialUrls: string[];
  productDescription: string;
  brandVoiceSample: string;
};

const defaultProfile: BrandProfile = {
  brandName: "",
  industry: "",
  socialUrls: [],
  productDescription: "",
  brandVoiceSample: "",
};

export function useBrandProfile(initial?: Partial<BrandProfile>) {
  const [profile, setProfile] = useState<BrandProfile>({ ...defaultProfile, ...initial });

  function update<K extends keyof BrandProfile>(key: K, value: BrandProfile[K]) {
    setProfile(prev => ({ ...prev, [key]: value }));
  }

  function reset() {
    setProfile(defaultProfile);
  }

  return { profile, update, reset, setProfile };
}