"use client";
import dynamic from "next/dynamic";
import CampaignConceptGenerator from "@/components/campaign/CampaignConceptGenerator";
import TwistMachine from "@/components/campaign/TwistMachine";
import ContentPreviewer from "@/components/content/ContentPreviewer";
import MemeGenerator from "@/components/meme/MemeGenerator";
import CampaignPerformancePredictor from "@/components/simulator/CampaignPerformancePredictor";
import CrisisSimulator from "@/components/simulator/CrisisSimulator";
import CaseStudyMatcher from "@/components/case-studies/CaseStudyMatcher";
import CaseStudyRemixTool from "@/components/case-studies/CaseStudyRemixTool";
import LivingStrategyDocumentGenerator from "@/components/strategy/LivingStrategyDocumentGenerator";
import CustomContentLibrary from "@/components/content/CustomContentLibrary";
import { useState } from "react";

export default function StrategyBuilderPage() {
  const [remixCase, setRemixCase] = useState<any>(null);

  return (
    <div className="max-w-3xl mx-auto py-8 px-2">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-900">
        Interactive Strategy Builder
      </h1>

      {/* Campaign Concept Generator */}
      <section className="mb-8">
        <CampaignConceptGenerator />
      </section>

      {/* Twist Machine */}
      <section className="mb-8">
        <TwistMachine />
      </section>

      {/* Content Previewer */}
      <section className="mb-8">
        <ContentPreviewer />
      </section>

      {/* Meme Generator */}
      <section className="mb-8">
        <MemeGenerator />
      </section>

      {/* Performance Simulator */}
      <section className="mb-8">
        <CampaignPerformancePredictor />
      </section>

      {/* Crisis Simulator */}
      <section className="mb-8">
        <CrisisSimulator />
      </section>

      {/* Case Study Matcher & Remix */}
      <section className="mb-8">
        {remixCase ? (
          <CaseStudyRemixTool caseStudy={remixCase} onBack={() => setRemixCase(null)} />
        ) : (
          <CaseStudyMatcher onRemix={setRemixCase} />
        )}
      </section>

      {/* Living Strategy Document */}
      <section className="mb-8">
        <LivingStrategyDocumentGenerator />
      </section>

      {/* Custom Content Library */}
      <section className="mb-8">
        <CustomContentLibrary />
      </section>
    </div>
  );
}