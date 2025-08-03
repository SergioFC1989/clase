"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.insertSingleDocument("estudiantes", req.body);
    res.status(200).json({ message: "Estudiante creado correctamente", type: "success" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el Estudiante", type: "error", error });
  }
};

export default createUser;
