"use client";
import React, { useState } from "react";

import { Comment as CommentType } from "@/models/Comment";
import ArticleForm from "./ArticleForm";
import Comment from "./Comment";

export type SimpleCommentType = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  answers?: [];
};

const Comments = ({
  commentList,
  postId,
}: {
  commentList: CommentType[];
  postId: string;
}) => {
  const [comments, setComments] = useState<SimpleCommentType[] | CommentType[]>(
    commentList
  );

  const addCommentHandler = (comment: {
    id: string;
    name: string;
    content: string;
    postId?: string;
  }) => {
    const newComment = {
      id: comment.id,
      author: comment.name,
      content: comment.content,
      createdAt: Date(),
    };
    setComments((prev: any) => {
      return [...prev, newComment];
    });
  };

  return (
    <div className="grid gap-24 mt-24">
      <h4 className="text-center font-light">
        {comments?.length > 0 && `Comments ${comments.length}`}
      </h4>
      {comments?.length > 0 && (
        <ul className="grid gap-5">
          {comments.map((item: CommentType | SimpleCommentType) => (
            <Comment comment={item} key={item.id} />
          ))}
        </ul>
      )}
      <div>
        <h4 className="font-semibold">Create a comment</h4>
        <ArticleForm postId={postId} onAddComment={addCommentHandler} />
      </div>
    </div>
  );
};

export default Comments;
