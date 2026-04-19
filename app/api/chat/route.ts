import { NextResponse } from 'next/server';
import { getNLP } from './nlp-service';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Get the NLP manager (will load from file if available)
    const nlp = await getNLP();

    // Process string
    const response = await nlp.process('en', message);

    return NextResponse.json({
      answer: response.answer || "I'm sorry, I don't have information on that. Try asking me about John's experience, skills, projects, or contact info!"
    });
  } catch (error) {
    console.error("NLP error:", error);
    return NextResponse.json({ answer: "NLP Service is temporarily unavailable." }, { status: 500 });
  }
}
