import React from "react";

const Answer = ({
  answer: { id, author, content, createdAt },
}: {
  answer: { id: string; author: string; content: string; createdAt: Date };
}) => {
  return (
    <div className="mt-5">
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
    </div>
  );
};

export default Answer;
