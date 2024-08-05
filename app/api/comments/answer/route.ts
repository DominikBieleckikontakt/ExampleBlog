import { dbConnect } from "@/lib/server-utils";
import { generateUUID } from "@/lib/utils";
import Comment, { Comment as CommentType } from "@/models/Comment";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, content } = await req.json();
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const commentId = searchParams.get("commentId")!;

    await dbConnect();

    const answerData = {
      id: generateUUID(),
      author: name as string,
      content: content as string,
      createdAt: Date(),
    };

    await Comment.findOneAndUpdate(
      {
        id: commentId,
      },
      {
        $push: { answers: answerData },
      },
      { new: true }
    );

    return NextResponse.json(
      { message: "Everything went well!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred!", err },
      { status: 500 }
    );
  }
};
