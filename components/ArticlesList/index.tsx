import { getSortedPostsData } from "@/lib/utils";
import { MarkdownDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticlesList = () => {
  const allPostsData: Omit<MarkdownDataType, "contentHtml">[] =
    getSortedPostsData();

  return (
    <div className="mx-5">
      <ul className="grid max-w-[45rem] mx-auto gap-10">
        {allPostsData.map(({ id, title, date, image, snippet, categories }) => (
          <li key={id}>
            <Link
              href={`/articles/${id}`}
              className="flex gap-5 duration-300 rounded-lg hover:bg-secondary hover:shadow-md"
            >
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={200}
                  height={200}
                  className="rounded-l-lg"
                />
              )}
              <div className="py-5">
                <ul className="flex gap-3">
                  {categories.map((item, index) => (
                    <li key={index} className="text-sm font-light">
                      {item}
                    </li>
                  ))}
                </ul>
                <h2 className="text-xl font-semibold mt-4">{title}</h2>
                <p className="font-light text-sm italic">{date}</p>
                <p className="my-5 line-clamp-[10]">{snippet}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
