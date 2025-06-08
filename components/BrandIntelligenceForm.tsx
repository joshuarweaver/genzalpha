"use client";
import { useState } from "react";
import { useBrandProfile } from "@/hooks/useBrandProfile";

type Props = {
  onSubmit?: (profile: ReturnType<typeof useBrandProfile>["profile"]) => void;
};

export default function BrandIntelligenceForm({ onSubmit }: Props) {
  const { profile, update, reset } = useBrandProfile();
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const errs: typeof errors = {};
    if (!profile.brandName.trim()) errs.brandName = "Brand name is required";
    if (!profile.industry.trim()) errs.industry = "Industry is required";
    if (!profile.productDescription.trim()) errs.productDescription = "Product description is required";
    if (!profile.brandVoiceSample.trim()) errs.brandVoiceSample = "Brand voice sample required";
    // Validate URLs if provided
    if (profile.socialUrls.length > 0) {
      profile.socialUrls.forEach((url, i) => {
        if (url && !/^https?:\/\/|^@|^([\w-]+)\.([\w-]+)(\/[\w-]*)*$/.test(url))
          errs[`socialUrls${i}`] = "Enter valid URLs or @handles";
      });
    }
    return errs;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    if (name === "socialUrls") {
      // Split by comma, space, or line
      update("socialUrls", value.split(/[\n,]+/).map(s => s.trim()).filter(Boolean));
    } else {
      update(name as any, value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({
      brandName: true,
      industry: true,
      socialUrls: true,
      productDescription: true,
      brandVoiceSample: true,
    });
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(profile);
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="bg-white border rounded-xl shadow p-8 space-y-6 max-w-xl mx-auto"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <label htmlFor="brandName" className="block font-semibold mb-1">
          Brand Name <span className="text-red-500">*</span>
        </label>
        <input
          name="brandName"
          id="brandName"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:outline-none ${errors.brandName && touched.brandName ? 'border-red-400' : 'border-gray-200'}`}
          value={profile.brandName}
          onChange={handleInput}
          onBlur={handleBlur}
          required
        />
        {errors.brandName && touched.brandName && (
          <div className="text-red-500 text-xs mt-1">{errors.brandName}</div>
        )}
      </div>
      <div>
        <label htmlFor="industry" className="block font-semibold mb-1">
          Industry <span className="text-red-500">*</span>
        </label>
        <input
          name="industry"
          id="industry"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:outline-none ${errors.industry && touched.industry ? 'border-red-400' : 'border-gray-200'}`}
          value={profile.industry}
          onChange={handleInput}
          onBlur={handleBlur}
          required
        />
        {errors.industry && touched.industry && (
          <div className="text-red-500 text-xs mt-1">{errors.industry}</div>
        )}
      </div>
      <div>
        <label htmlFor="socialUrls" className="block font-semibold mb-1">
          Social URLs/Handles
        </label>
        <textarea
          id="socialUrls"
          name="socialUrls"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:outline-none ${profile.socialUrls.length > 0 && Object.keys(errors).some(k => k.startsWith("socialUrls")) ? 'border-red-400' : 'border-gray-200'}`}
          value={profile.socialUrls.join('\n')}
          onChange={handleInput}
          onBlur={handleBlur}
          rows={2}
          placeholder="@brand, https://instagram.com/brand, etc."
        />
        {profile.socialUrls.length > 0 &&
          profile.socialUrls.map((url, i) =>
            errors[`socialUrls${i}`] && touched.socialUrls ? (
              <div key={i} className="text-red-500 text-xs mt-1">{errors[`socialUrls${i}`]}</div>
            ) : null
          )}
      </div>
      <div>
        <label htmlFor="productDescription" className="block font-semibold mb-1">
          Product Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="productDescription"
          id="productDescription"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:outline-none ${errors.productDescription && touched.productDescription ? 'border-red-400' : 'border-gray-200'}`}
          value={profile.productDescription}
          onChange={handleInput}
          onBlur={handleBlur}
          rows={2}
          maxLength={160}
          placeholder="What do you sell? Who is it for?"
          required
        />
        <div className="text-xs text-gray-400 mt-1 text-right">
          {profile.productDescription.length}/160
        </div>
        {errors.productDescription && touched.productDescription && (
          <div className="text-red-500 text-xs mt-1">{errors.productDescription}</div>
        )}
      </div>
      <div>
        <label htmlFor="brandVoiceSample" className="block font-semibold mb-1">
          Brand Voice Sample <span className="text-red-500">*</span>
        </label>
        <textarea
          name="brandVoiceSample"
          id="brandVoiceSample"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:outline-none ${errors.brandVoiceSample && touched.brandVoiceSample ? 'border-red-400' : 'border-gray-200'}`}
          value={profile.brandVoiceSample}
          onChange={handleInput}
          onBlur={handleBlur}
          rows={2}
          maxLength={140}
          placeholder="e.g. “Here’s the tea — our lip butter slays fr. 🧈💅”"
          required
        />
        <div className="text-xs text-gray-400 mt-1 text-right">
          {profile.brandVoiceSample.length}/140
        </div>
        {errors.brandVoiceSample && touched.brandVoiceSample && (
          <div className="text-red-500 text-xs mt-1">{errors.brandVoiceSample}</div>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg shadow transition w-full mt-4"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Analyze Brand"}
      </button>
      <button
        type="button"
        onClick={reset}
        className="text-blue-400 text-xs underline mt-2"
        tabIndex={-1}
      >
        Clear form
      </button>
    </form>
  );
}