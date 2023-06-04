import { NextResponse } from "next/server";
import { ChatGPTAPI } from "chatgpt";
import type { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || "", // Your OpenAI API Key
  });
  const openAiRes = await api.sendMessage(
    request.body.message || "hello world!"
  );

  return NextResponse.json({ data: openAiRes.text });
}
