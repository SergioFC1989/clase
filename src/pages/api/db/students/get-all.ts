"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getAllDocuments("estudiantes", req.body);

    res.status(200).json({
      message: response ? "Estudiantes encontrados correctamente" : "No se encontraron Estudiantes",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al consultar los Estudiantes", type: "error", error });
  }
};

export default getAll;
