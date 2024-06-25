import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 500,
  temperature: 1,
  topP: 0.6,
  topK: 16,
};
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig });

export async function POST(request: NextRequest) {
	const {messages} = await request.json();
	const prompt = messages[messages.length - 1].content;
	
 const result = await model.generateContent(prompt);
	return NextResponse.json(result.response.text().replace(/\n/g, ' ').replace(/\*/g, ' ').replace(/\\/g, '') , { status: 200 });
}
