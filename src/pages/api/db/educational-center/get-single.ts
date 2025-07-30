"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getSingleDocument("centros-educativos", req.body);
    res.status(200).json({
      message: response ? "Centro Educativo encontrado correctamente" : "No se encontró el Centro Educativo solicitado",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "500 - Error de servicio en Centro Educativo", type: "error", error });
  }
};

export default getSingle;
