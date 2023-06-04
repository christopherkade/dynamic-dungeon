import { NextResponse } from "next/server";
import { ChatGPTAPI } from "chatgpt";
import type { NextApiRequest } from "next";

export async function GET(request: Request) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || "", // Your OpenAI API Key
  });
  console.log("Request", request);

  const openAiRes = await api.sendMessage(
    "hello world!" //request.body.message ||
  );

  return NextResponse.json({ data: openAiRes.text });
}
