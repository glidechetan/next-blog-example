import Head from "next/head";
import { getPosts } from "./posts";

export async function getStaticProps() {
  console.log("Running at server side");
  const post = await getPosts("first-post");

  return {
    props: {
      post,
    },
  };
}

function FirstPostPage({ post }) {
  console.log("[FirstPostPage] render props: ", post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body}} />
      </main>
    </>
  );
}

export default FirstPostPage;
