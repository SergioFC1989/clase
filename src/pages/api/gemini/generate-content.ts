"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

const generateContent = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = process.env.API_KEY;
  const { prompt } = req.body;

  if (!apiKey) {
    return res.status(500).json({ error: "API key is not defined" });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return res.json({ content: result.response.text() });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default generateContent;
