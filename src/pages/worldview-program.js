// base imports
import React, { useEffect, useState } from "react";

// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// component imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import StandoutImage from "../components/StandoutImage";
import Workshops from "../components/Workshops";

function WorldviewProgram(props) {
  const { pageSettings = [], siteSettings = [] } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  console.log(settings);

  useEffect(() => {
    if (pageSettings.length) {
      setLoading(false);
      setSettings(pageSettings[0]);
    }
  }, [pageSettings]);

  if (loading) {
    return <div>One moment...</div>;
  } else {
    return (
      <>
        <Layout>
          <Head>
            <title>
              {settings.title} | {siteSettings[0].title}
            </title>
          </Head>
          <Header />
          <Hero content={settings} />
          <Workshops workshops={settings.workshops} />
          <StandoutImage image={settings.image} />
          <Footer image={settings.footerImage} />
        </Layout>
      </>
    );
  }
}

WorldviewProgram.getInitialProps = async () => ({
  pageSettings: await client.fetch(groq`
    *[_type == "worldviewProgram"]
  `),
  siteSettings: await client.fetch(groq`
    *[_type == "settings"]{title}
  `)
});

export default WorldviewProgram;
