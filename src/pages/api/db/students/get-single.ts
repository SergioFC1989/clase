"use server";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const getSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await MongoRequest.getSingleDocument("estudiantes", { ...req.body, _id: new ObjectId(req.body._id as string) });
    res.status(200).json({
      message: response ? "Estudiante encontrado correctamente" : "No se encontró el Estudiante solicitado",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al consultar el Estudiante", type: "error", error });
  }
};

export default getSingle;
