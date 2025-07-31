"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getSingleDocument("usuarios", req.body);
    res.status(200).json({
      message: response ? "Usuario encontrado correctamente" : "No se encontró el Usuario solicitado",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al consultar el Usuario", type: "error", error });
  }
};

export default getSingle;
