import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { brandName, industry, socialUrls, productDescription, brandVoiceSample } = body;

    // Basic validation
    if (
      !brandName ||
      !industry ||
      !productDescription ||
      !brandVoiceSample
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Placeholder: in future, send to OpenAI/Claude
    // Task 10: Placeholder for OpenAI integration
    // const gptResponse = await openai.createChatCompletion({...})

    // Mock analysis result structure
    const mockAnalysis = {
      readinessScore: 72,
      brandName,
      vibes: ["funny", "relatable", "authentic"],
      personality: "Your brand is playful and approachable, using humor and Gen Zalpha lingo to connect with audiences.",
      risks: [
        "Occasional memes may miss for older demographics.",
        "Risk of overusing slang; keep it authentic."
      ],
      popHarder: "Lean into TikTok trends and experiment with interactive content.",
      competitorVibes: [
        { name: "Glossier", vibe: "minimal + inclusive" },
        { name: "Drunk Elephant", vibe: "bold + quirky" }
      ]
    };

    return NextResponse.json(mockAnalysis);
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}