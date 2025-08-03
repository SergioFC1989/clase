"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const deleteSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.deleteSingleDocument("estudiantes", req.body);
    res.status(200).json({ message: "Estudiantes eliminados correctamente", type: "success" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar las Estudiantes", type: "error", error });
  }
};

export default deleteSingle;
