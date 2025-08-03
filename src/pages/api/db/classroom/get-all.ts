"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getAllDocuments("aulas", req.body);

    res.status(200).json({
      message: response ? "Aulas encontradas correctamente" : "No se encontraron Aulas",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al consultar las Aulas", type: "error", error });
  }
};

export default getAll;
