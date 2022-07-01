import { readdir, readFile } from "fs/promises";
import { marked } from "marked";
import * as matter from "gray-matter";

export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, "utf-8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return { title, body, date };
};

export const getPosts = async () => {
  const slugs = await getSlugs();
  const posts = [];
  for (let index = 0; index < slugs.length; index++) {
    const slug = slugs[index];
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
};

export const getSlugs = async () => {
  const suffix = ".md";
  const files = await readdir("content/posts");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
};
