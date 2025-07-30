"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getAllDocuments("centros-educativos");
    res.status(200).json({
      message: response ? "Centros Educativos encontrados correctamente" : "No se encontraron Centros Educativos",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "500 - Error de servicio en Centros Educativos", type: "error", error });
  }
};

export default getAll;
