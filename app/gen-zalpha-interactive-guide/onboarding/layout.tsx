import type { ReactNode } from "react";

export const metadata = {
  title: "Gen Zalpha Interactive Onboarding Guide",
  description: "Conversational AI onboarding for Gen Zalpha brand strategy",
  alternates: {
    canonical: "/gen-zalpha-interactive-guide/onboarding"
  }
};

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-blue-50 via-white to-white min-h-screen">
        <div className="w-full max-w-xl mx-auto py-10 px-4">
          <header className="flex items-center mb-8">
            <span className="inline-flex items-center mr-3">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 font-bold text-lg tracking-tight">Zα</span>
            </span>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Zalpha Interactive Guide
            </h1>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}