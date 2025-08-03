"use server";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const deleteSingle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.deleteSingleDocument("estudiantes", { _id: new ObjectId(req.body._id as string) });
    res.status(200).json({ message: "Estudiante eliminado correctamente", type: "success" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar Estudiante", type: "error", error });
  }
};

export default deleteSingle;
