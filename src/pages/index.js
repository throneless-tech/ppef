// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// component imports
import Hero from "../components/Hero";
import Layout from "../components/Layout";

function Index(props) {
  const { posts = [] } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>PPEF</title>
        </Head>
        <Hero />
        {posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link prefetch href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </Layout>
    </>
  );
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
});

export default Index;
