"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const insertSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.insertSingleDocument("usuarios", req.body);
    res.status(200).json({ message: "Usuario creado correctamente", type: "success" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el Usuario", type: "error", error });
  }
};

export default insertSingle;
