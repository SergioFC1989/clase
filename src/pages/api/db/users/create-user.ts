"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await MongoRequest.insertSingleDocument("usuarios", req.body);
    res.status(200).json({ message: "User added successfully", type: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding user", type: "error", error });
  }
};

export default createUser;
