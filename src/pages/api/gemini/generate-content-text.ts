"use server";

import { NextApiRequest, NextApiResponse } from "next";

import { geminiRequest } from "@/lib/api/requests/gemini.request";

const generateContentText = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;

  try {
    const result = await geminiRequest(prompt);
    return res.json(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default generateContentText;
