"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getSingleDocument("aulas", req.body);
    res.status(200).json({
      message: response ? "Aula encontrada correctamente" : "No se encontró el Aula solicitada",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al consultar el Aula", type: "error", error });
  }
};

export default getSingle;
