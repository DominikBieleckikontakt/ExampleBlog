"use client";
import React, { useRef, useState } from "react";

import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { generateUUID } from "@/lib/utils";
import { TempCommentType } from "@/types";

const ArticleForm = ({
  postId,
  onAddComment,
  isAnswering,
  commentId,
}: {
  postId?: string;
  onAddComment: (comment: TempCommentType) => void;
  isAnswering?: boolean;
  commentId?: string;
}) => {
  const [error, setError] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const name = nameRef.current?.value;
    const content = contentRef.current?.value;
    const id = generateUUID();

    if (!name || name?.length < 1 || !content || content?.length < 1) {
      setError("Complete both inputs correctly.");
      setIsLoading(false);
    } else {
      setError("");
      fetch(
        `${
          isAnswering
            ? "/api/comments/answer?commentId=" + commentId
            : "/api/comments"
        } `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            content,
            postId,
          }),
        }
      )
        .then((res) => res.json())
        .then(() => {
          onAddComment({ id, name, content });
          setNameValue("");
          setContentValue("");
          setIsLoading(false);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  return (
    <form className="grid gap-3 mt-3" onSubmit={onSubmitHandler}>
      <div>
        <label className="text-sm text-primary/80" htmlFor="name">
          Your name:
        </label>
        <Input
          placeholder="Enter your name"
          className="max-w-80"
          id="name"
          ref={nameRef}
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm text-primary/80" htmlFor="content">
          Your opinion:
        </label>
        <Textarea
          id="content"
          placeholder="Feel free to share your opinion about this article!"
          ref={contentRef}
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
        />
      </div>
      <p className="text-sm font-semibold">
        You can't delete or edit this comment in the future. Make sure that you
        want to write it or if everything is correct!
      </p>
      <div className="flex justify-end">
        <Button type="submit" className="mt-3 w-36" disabled={isLoading}>
          {isLoading ? (
            <div className="size-5 border-2 border-secondary border-t-transparent animate-spin rounded-full" />
          ) : !isAnswering ? (
            "Post a comment"
          ) : (
            "Post an answer"
          )}
        </Button>
      </div>
      <p className="text-red-600 font-semibold">{error && error}</p>
    </form>
  );
};

export default ArticleForm;
