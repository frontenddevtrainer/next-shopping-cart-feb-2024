import { AlbumResponse } from "@/app/models/AlbumResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { OrdersModel } from "@/lib/models/order";
import "@/lib/db";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const data: AlbumResponse[] = await req.json();

    console.log(data);

    const albums = data.map((album) => {
      return { name: album.album.name };
    });

    const Order = new OrdersModel({ items: data, processed: false });
    const doc = await Order.save();
    return Response.json({ message: "order place succesfully", orderid: doc });
  } else {
    return Response.json({ message: `Invalid request method: ${req.method}` });
  }
}
