import React from "react";
import ArticleForm from "./ArticleForm";

const fetchComments = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/comments?postId=${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

const Comments = async ({ postId }: { postId: string }) => {
  const comments: {
    message: string;
    comments: [];
  } = await fetchComments(postId);

  return (
    <div>
      <div>
        <h4 className="mt-10 font-semibold">Create a comment</h4>
        <ArticleForm postId={postId} />
      </div>
      <div>{comments.comments}</div>
    </div>
  );
};

export default Comments;
