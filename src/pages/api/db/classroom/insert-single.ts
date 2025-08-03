"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.insertSingleDocument("aulas", req.body);
    res.status(200).json({ message: "Aula creada correctamente", type: "success" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el Aula", type: "error", error });
  }
};

export default createUser;
