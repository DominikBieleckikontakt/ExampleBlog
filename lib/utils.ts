import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { MarkdownDataType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const postsDirectory = path.join(process.cwd(), "articles");

export function getSortedPostsData(): Omit<MarkdownDataType, "contentHtml">[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      categories: matterResult.data.categories,
      snippet: matterResult.data.snippet,
      image: matterResult.data.image,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
}

export async function getPostData(id: string): Promise<MarkdownDataType> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories,
    snippet: matterResult.data.snippet,
    image: matterResult.data.image,
    contentHtml,
  };
}

// const postsDirectory = path.join(process.cwd(), "articles");

// export const getSortedPostsData = () => {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "");
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf-8");
//     const matterResult = matter(fileContents);
//     return {
//       id,
//       ...(matterResult.data as MarkdownDataType),
//     };
//   });
//   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
// };

// export const getAllPostIds = () => {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// };

// export const getPostData = (id: string) => {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf-8");
//   const matterResult = matter(fileContents);
//   return {
//     ...(matterResult.data as MarkdownDataType),
//     content: matterResult.content,
//   };
// };
