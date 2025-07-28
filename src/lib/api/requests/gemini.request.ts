import { GoogleGenerativeAI } from "@google/generative-ai";

import { OPTIONS_GEN_AI } from "../consts/api.const";

const getGenerativeModelAI = () => {
  const apiKey = process.env.API_GOOGLE_GEMINI_KEY;

  if (!apiKey) {
    throw new Error("API key is not defined");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel(OPTIONS_GEN_AI);
  return model;
};

export const geminiRequest = async (prompt: string) => {
  try {
    const result = await getGenerativeModelAI().generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
