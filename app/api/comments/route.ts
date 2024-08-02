import { NextResponse } from "next/server";

import Comment from "@/models/Comment";
import { randomUUID } from "crypto";
import { dbConnect } from "@/lib/server-utils";

export const POST = async (req: Request) => {
  try {
    const { name, content, postId } = await req.json();

    const commentData = {
      id: randomUUID(),
      author: name,
      content,
      createdAt: Date(),
      likes: 0,
      postId,
    };

    await dbConnect();
    const comment = await Comment.create(commentData);

    return NextResponse.json(
      { message: "Everything went well!", comment },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred", error: err },
      { status: 500 }
    );
  }
};

export async function GET(req: Request) {
  console.log("sth");
  return NextResponse.json({ message: "dsa" }, { status: 200 });
}
