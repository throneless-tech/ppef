// base imports
import React, { useEffect, useState } from "react";

// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Material UI imports
import Typography from "@mui/material/Typography";

// component imports
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroStrata from "../components/HeroStrata";
import Layout from "../components/Layout";
import OurWork from "../components/OurWork";
import Standout from "../components/Standout";
import Strata from "../components/Strata";

function Index(props) {
  const { siteSettings = [], pages = [] } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (siteSettings.length) {
      setLoading(false);
      setSettings(siteSettings[0]);
    }
  }, [siteSettings]);

  if (loading) {
    return (
      <Typography variant="h2" component="div">
        One moment...
      </Typography>
    );
  } else {
    return (
      <>
        <Layout>
          <Head>
            <title>{settings.title}</title>
          </Head>
          <Header pages={pages} settings={siteSettings[0]} />
          <Hero img={settings.heroImage} />
          <HeroStrata />
          <OurWork />
          <Strata
            title="Our Approach"
            description="We build power for grassroots movements through our family of progressive initiatives and mobilizing New Yorkers to take action and change the balance of power."
            buttonText="Learn More"
            buttonLink="about-us"
          />
          <Gallery logos={settings.approachGallery} />
          <Standout image={settings.impactImage} />
          <Strata
            title="Support Us"
            description="Take action now to help create a state filled with thriving communities driven by progressive values. It is a New York where ALL OF US — those upstate and downstate, of every race, gender, and background — can live with dignity, equity, and security… a New York where ALL people can prosper, and thrive."
            bold="This bold vision is possible, but only if we work together."
            buttonText="Support our work"
            buttonLink="support-us"
          />
          <Footer image={settings.footerImage} pages={pages} />
        </Layout>
      </>
    );
  }
}

export default Index;

export const getStaticProps = async () => ({
  props: {
    siteSettings: await client.fetch(groq`
    *[_type == "settings"]
  `),
    pages: await client.fetch(groq`
    *[!(_id in path('drafts.**')) && _type == "page"]{title, slug, weight}
  `)
  }
});