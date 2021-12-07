// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// component imports
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import OurWork from "../components/OurWork";
import Strata from "../components/Strata";

function Index(props) {
  const { posts = [] } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>PPEF</title>
        </Head>
        <Hero />
        <Strata />
        <OurWork />
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
