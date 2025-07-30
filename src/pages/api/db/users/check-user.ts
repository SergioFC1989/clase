"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { MongoRequest } from "@/lib/services/requests/mongo.request";

const checkUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;

  try {
    const response = await MongoRequest.getSingleDocument("usuarios", data);
    res.status(200).json({
      message: response ? "User found successfully" : "User not found",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error find user", type: "error", error });
  }
};

export default checkUser;
