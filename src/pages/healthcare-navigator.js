// base imports
import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";

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
import Navigators from "../components/Navigators";
import Standout from "../components/Standout";

function WorldviewProgram(props) {
  const { pageSettings = [], siteSettings = [] } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (pageSettings.length) {
      setLoading(false);
      setSettings(pageSettings[0]);
    }
  }, [pageSettings, siteSettings]);

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
          {settings.standoutText ? (
            <Standout
              title={settings.standoutTitle}
              text={settings.standoutText}
            />
          ) : null}
          {settings.navigators && settings.navigators.length ? (
            <Navigators navigators={settings.navigators} />
          ) : null}
          <Footer image={siteSettings[0].footerImage} />
        </Layout>
      </>
    );
  }
}

WorldviewProgram.getInitialProps = async () => ({
  pageSettings: await client.fetch(groq`
    *[_type == "healthcareNavigator"]
  `),
  siteSettings: await client.fetch(groq`
    *[_type == "settings"]{title, footerImage}
  `)
});

export default WorldviewProgram;
