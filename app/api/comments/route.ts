import { NextResponse } from "next/server";

import Comment, { Comment as CommentType } from "@/models/Comment";
import { dbConnect } from "@/lib/server-utils";

export const POST = async (req: Request) => {
  try {
    const { id, name, content, postId } = await req.json();

    const commentData = {
      id,
      author: name,
      content,
      createdAt: Date(),
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
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const postId = searchParams.get("postId")!;

    await dbConnect();
    const comments: CommentType[] = await Comment.find({
      postId,
    });

    return NextResponse.json(
      { message: "Everything is OK", comments },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error occurred", error: err },
      { status: 500 }
    );
  }
}
