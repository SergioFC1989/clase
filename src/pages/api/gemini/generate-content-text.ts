"use server";

import { apiGenerateContentText } from "@/services/api";
import { NextApiRequest, NextApiResponse } from "next";

const generateContentText = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { prompt } = req.body;

  try {
    const result = await apiGenerateContentText(prompt);
    return res.json(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default generateContentText;
