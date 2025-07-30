"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.insertSingleDocument("centros-educativos", req.body);
    res.status(200).json({ message: "Centro Educativo creado correctamente", type: "success" });
  } catch (error) {
    res.status(500).json({ message: "500 - Error de servicio en Centros Educativos", type: "error", error });
  }
};

export default createUser;
