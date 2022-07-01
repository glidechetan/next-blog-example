import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } };
};

function HomePage(props) {
  console.log("logging props: - ", props);
  const { posts } = props;

  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My blog</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
