"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { geminiRequest } from "@/lib/services/requests/gemini.request";

const getSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;

  try {
    const response = await geminiRequest(prompt);
    res.status(200).json({
      message: response ? "Encontrada respuesta al promp en Google Gemini AI" : "No se encontró respuesta al promp en Google Gemini AI",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "500 - Error de servicio en Google Gemini AI", type: "error", error });
  }
};

export default getSingle;
