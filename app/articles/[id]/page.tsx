import { getAllPostIds, getPostData } from "@/lib/utils";
import { MarkdownDataType } from "@/types";
import Image from "next/image";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => path.params);
}

export const PostPage = async ({ params }: { params: { id: string } }) => {
  const postData: MarkdownDataType = await getPostData(params.id);

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
    </div>
  );
};

export default PostPage;
