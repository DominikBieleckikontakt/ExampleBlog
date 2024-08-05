import { dbConnect } from "@/lib/server-utils";
import { generateUUID } from "@/lib/utils";
import Comment, { Comment as CommentType } from "@/models/Comment";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { id, name, content } = await req.json();
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const commentId = searchParams.get("commentId")!;

    await dbConnect();
    // const comment: CommentType = await Comment.find({
    //   id: commentId,
    // });

    const answerData = {
      id: generateUUID(),
      author: name as string,
      content: content as string,
      createdAt: Date(),
    };

    // answers.push(answerData);
    // console.log(answers);

    const allAnswers = await Comment.findOneAndUpdate(
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
    console.log(err);
    return NextResponse.json(
      { message: "An error occurred!", err },
      { status: 500 }
    );
  }
};
