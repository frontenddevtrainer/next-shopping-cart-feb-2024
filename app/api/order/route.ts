import { AlbumResponse } from "@/app/models/AlbumResponse";
import { NextApiRequest, NextApiResponse } from "next";

export function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data: AlbumResponse[] = req.body;

    // Connection to mongoDB.
    return Response.json({ message: "order place succesfully" });
  } else {
    return Response.json({ message: `Invalid request method: ${req.method}` });
  }
}
