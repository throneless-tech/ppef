// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// component imports
import Hero from "../components/Hero";
import HeroStrata from "../components/HeroStrata";
import Layout from "../components/Layout";
import OurWork from "../components/OurWork";
import Standout from "../components/Standout";
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
        <HeroStrata />
        <OurWork />
        <Strata
          title="Our Approach"
          description="We build power for grassroots movements through our family of progressive initiatives — including Citizen Action, Justice Works, and Alliance for Quality Education — mobilizes New Yorkers to take action and change the balance of power. "
          buttonText="Learn More"
          buttonLink="#"
        />
        <Standout />
        <Strata
          title="Support Us"
          description="Take action now to help create a state filled with thriving communities driven by progressive values. It is a New York where ALL OF US — those upstate and downstate, of every race, gender, and background — can live with dignity, equity, and security… a New York where ALL people can prosper, and thrive."
          bold="This bold vision is possible, but only if we work together."
          buttonText="Support our work"
          buttonLink="#"
        />
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
