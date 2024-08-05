import Image from "next/image";

import { getAllPostIds, getPostData } from "@/lib/server-utils";
import { MarkdownDataType } from "@/types";
import Comments from "@/components/Article/Comments";
import { Comment as CommentType } from "@/models/Comment";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => path.params);
}

const fetchComments = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/comments?postId=${id}`, {
    cache: "no-store",
  });
  const data: {
    message: string;
    comments: CommentType[];
  } = await res.json();
  return data;
};

export const PostPage = async ({ params }: { params: { id: string } }) => {
  const postData: MarkdownDataType = await getPostData(params.id);
  const { comments } = await fetchComments(postData.id);

  return (
    <div className="max-w-[45rem] mx-auto mb-24 prose">
      <h1 className="text-center font-light  my-10">{postData.title}</h1>
      <Image
        alt={postData.title}
        src={postData.image}
        width={200}
        height={200}
        className="mx-auto mb-10"
      />
      <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Comments commentList={comments} postId={postData.id} />
    </div>
  );
};

export default PostPage;
