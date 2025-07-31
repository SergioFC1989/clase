"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { geminiRequest } from "@/lib/services/requests/gemini.request";

const getSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  try {
    const response = await geminiRequest(req.body);

    res.status(200).json({
      message: response ? "Encontrada respuesta al promp en Google Gemini AI" : "No se encontró respuesta al promp en Google Gemini AI",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error de servicio en Google Gemini AI", type: "error", error });
  }
};

export default getSingle;
