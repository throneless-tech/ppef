// base imports
import React, { useEffect, useState } from "react";
import { PortableText } from '@portabletext/react'

// Next.js imports
import Head from "next/head";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Material UI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// component imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import StandoutImage from "../components/StandoutImage";
import Workshops from "../components/Workshops";

function WorldviewProgram(props) {
  const { pageSettings = [], siteSettings = [], pages = [] } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (pageSettings.length) {
      setLoading(false);
      setSettings(pageSettings[0]);
    }
  }, [pageSettings, siteSettings]);

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
            <title>
              {settings.title} | {siteSettings[0].title}
            </title>
          </Head>
          <Header pages={pages} settings={siteSettings[0]} />
          <Hero content={settings} />
          {settings.workshops && settings.workshops.length ? (
            <Workshops workshops={settings.workshops} />
          ) : null}
          <StandoutImage image={settings.image} />
          <Container>
            <Typography className="blockcontent" component="div">
              <PortableText value={settings.body} />
            </Typography>
          </Container>
          <Footer image={siteSettings[0].footerImage} pages={pages} />
        </Layout>
      </>
    );
  }
}

export default WorldviewProgram;

export const getStaticProps = async () => ({
  props: {
    pageSettings: await client.fetch(groq`
    *[_type == "worldviewProgram"]
  `),
    siteSettings: await client.fetch(groq`
    *[_type == "settings"]{title, mainNav, subNav, footerImage}
  `),
    pages: await client.fetch(groq`
    *[!(_id in path('drafts.**')) && _type == "page"]{title, slug, weight}
  `)
  }
});