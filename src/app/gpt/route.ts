import { NextResponse } from "next/server";
import { ChatGPTAPI } from "chatgpt";

export async function GET(request: Request) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || "", // Your OpenAI API Key
  });
  const openAiRes = await api.sendMessage(
    request.body.message || "hello world!"
  );

  return NextResponse.json({ data: openAiRes.text });
}
