export type IconsDataType = {
  src: string;
  alt: string;
  link: string;
};

export type NavLinksType = {
  title: string;
  href: string;
};

export type MarkdownDataType = {
  id: string;
  title: string;
  date: string;
  categories: string[];
  snippet: string;
  contentHtml: string;
  image: string;
};

export type SimpleCommentType = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  answers?: { id: string; author: string; content: string; createdAt: Date }[];
};

export type TempCommentType = {
  id: string;
  name: string;
  content: string;
};
