import { readFile } from "fs/promises";
import { marked } from "marked";
import * as matter from "gray-matter";

export const getPosts = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, "utf-8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return { title, body, date };
};
