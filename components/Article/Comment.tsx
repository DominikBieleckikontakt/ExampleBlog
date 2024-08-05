"use client";
import React, { useState } from "react";

import { Comment as CommentType } from "@/models/Comment";
import { SimpleCommentType } from "./Comments";
import ArticleForm from "./ArticleForm";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import { Button } from "../ui/button";
import Answer from "./Answer";

const Comment = ({
  comment: { id, author, content, createdAt, answers },
}: {
  comment: CommentType | SimpleCommentType;
}) => {
  const [isAnswering, setIsAnswering] = useState(false);
  const [answersList, setAnswersList] = useState(answers || []);

  const onAddAnswer = (comment: {
    id: string;
    name: string;
    content: string;
  }) => {
    const newAnswer = {
      id: comment.id,
      author: comment.name,
      content: comment.content,
      createdAt: Date(),
    };
    setAnswersList((prev: any) => {
      return [...prev, newAnswer];
    });
    setIsAnswering(false);
  };

  return (
    <li key={id}>
      <p>{content}</p>
      <div className="text-primary/50 font-light text-sm">
        <p>
          added by <b className="font-semibold">{author}</b> at{" "}
          <span className="italic">
            {new Date(createdAt).getFullYear()}-
            {new Date(createdAt).getMonth() < 10
              ? `0${new Date(createdAt).getMonth()}`
              : new Date(createdAt).getMonth()}
            -
            {new Date(createdAt).getDate() < 10
              ? `0${new Date(createdAt).getDate()}`
              : new Date(createdAt).getDate()}
          </span>
        </p>
      </div>
      <button
        className={`${
          isAnswering ? "text-primary/100" : "text-primary/50"
        } font-light text-sm cursor-pointer`}
        onClick={() => setIsAnswering((prev) => !prev)}
      >
        Answer
      </button>
      <div>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ml-5 ${
            isAnswering ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <ArticleForm
            onAddComment={onAddAnswer}
            isAnswering={true}
            commentId={id}
          />
        </div>
      </div>
      <div className="ml-5">
        {answersList &&
          answersList.length > 0 &&
          answersList?.map((item, index) => (
            <Answer key={index} answer={item} />
          ))}
      </div>
      <hr className="mt-5" />
    </li>
  );
};

export default Comment;
