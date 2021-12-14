// base imports
import React, { useEffect, useState } from "react";

// Sanity.io imports
import groq from "groq";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";

// Next.js imports
import Head from "next/head";

// Material UI imports
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

// component imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Layout from "../components/Layout";

const Publication = props => {
  const { pageSettings = [], siteSettings = [], pages = [] } = props;
  const { title = "Untitled", date, tags, content = [], report } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (pageSettings.title) {
      setLoading(false);
      setSettings(pageSettings);
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
      <Layout>
        <Head>
          <title>
            {settings.title} | {siteSettings[0].title}
          </title>
        </Head>
        <Header pages={pages} />
        <PageHero content={settings} />

        <Footer image={siteSettings[0].footerImage} />
      </Layout>
    );
  }
};

const query = groq`*[_type == "page" && slug.current == $slug][0]`;

Publication.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  return {
    pageSettings: await client.fetch(query, { slug }),
    siteSettings: await client.fetch(groq`
      *[_type == "settings"]{title, footerImage}
    `),
    pages: await client.fetch(groq`
      *[_type == "page"]{title, slug, weight}
    `)
  };
};

export default Publication;
