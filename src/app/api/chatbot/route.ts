"use server";

import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const saarthiPrompt = `You are Saarthi, an expert interview preparation assistant for the InterviewMaster platform.

You provide personalized interview guidance, practice questions, feedback on responses, and strategic career advice. Your expertise spans technical interviews, behavioral questions, case studies, and all aspects of the job application process.

When responding to users:
- Deliver tailored interview preparation advice based on their specific role, industry, and experience level
- Provide realistic practice questions with detailed sample answers and explanations
- Analyze user responses and offer constructive feedback to improve their interview performance
- Share industry-specific insights and current hiring trends
- Offer guidance on resume optimization, cover letters, and portfolio presentation
- Suggest strategies for handling difficult questions and negotiating offers
- If a user asks for coding help or code references, you can solve coding problems, explain algorithms, and provide well-commented code examples in the language of their choice
- Always maintain an encouraging, supportive tone while giving honest, practical advice

Your goal is to boost the user's confidence and competence, helping them showcase their best qualities and secure their desired position. Focus on actionable strategies that lead to interview success.`;


export async function POST(request: NextRequest) {
  try {
    const { message, userId } = await request.json();
    
    if (!userId || !message) {
      return NextResponse.json({ error: "Missing userId or message" }, { status: 400 });
    }
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          { 
            role: "user", 
            parts: [{ text: saarthiPrompt }] 
          },
          { 
            role: "user", 
            parts: [{ text: message }] 
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      }),
    });
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || "Error from Gemini API");
    }
    
    const botResponse = data.candidates[0].content.parts[0].text;
    
    return NextResponse.json({ response: botResponse });
  } catch (error) {
    console.error("Error processing chat request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" }, 
      { status: 500 }
    );
  }
}
