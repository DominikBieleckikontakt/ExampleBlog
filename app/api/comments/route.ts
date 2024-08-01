// MONGODB CONNECTION STRING: mongodb+srv://pstrollyt:AvtlrLzjI4y3df2G@cluster0.lkbekdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = req.json();

    return NextResponse.json(
      { message: "Everything went well!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred", error: err },
      { status: 500 }
    );
  }
};
