// base imports
import React, { useEffect, useState } from "react";

// Next.js imports
import Head from "next/head";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Material UI imports
import Typography from "@mui/material/Typography";

// component imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navigators from "../components/Navigators";
import Standout from "../components/Standout";

function HealthcareNavigator(props) {
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
          <Header pages={pages} />
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

HealthcareNavigator.getInitialProps = async () => ({
  pageSettings: await client.fetch(groq`
    *[_type == "healthcareNavigator"]
  `),
  siteSettings: await client.fetch(groq`
    *[_type == "settings"]{title, footerImage}
  `),
  pages: await client.fetch(groq`
    *[_type == "page"]{title, slug, weight}
  `)
});

export default HealthcareNavigator;
