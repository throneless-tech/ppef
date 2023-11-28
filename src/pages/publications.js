// base imports
import React, { useEffect, useState } from "react";

// Next.js imports
import Head from "next/head";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Material UI imports
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

// component imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Publication from "../components/Publication";

function Publications(props) {
  const {
    pageSettings = [],
    siteSettings = [],
    pages = [],
    publications = []
  } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (publications && pageSettings.length) {
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
      <Layout>
        <Head>
          <title>
            {settings.title} | {siteSettings[0].title}
          </title>
        </Head>
        <Header pages={pages} settings={siteSettings[0]} />
        <Hero content={settings} />
        <Container>
          <List
            sx={{
              alignItems: "flex-start",
              display: { xs: "block", sm: "flex" },
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginLeft: 0,
              marginTop: { xs: 10, md: 24 }
            }}
          >
            {publications && publications.length
              ? publications.map(publication => (
                  <ListItem
                    key={publication._id}
                    sx={{ width: { xs: "100%", sm: "50%", md: "33%" } }}
                  >
                    <Publication publication={publication} />
                  </ListItem>
                ))
              : null}
          </List>
        </Container>
        <Footer image={siteSettings[0].footerImage} pages={pages} />
      </Layout>
    );
  }
}

export default Publications;

export const getStaticProps = async () => ({
  props: {
    pageSettings: await client.fetch(groq`
    *[_type == "publicationsPage"]
  `),
    publications: await client.fetch(groq`
    *[_type == "publication"]{
      title,
      slug,
      description,
      date,
      tags,
      content,
      "report": report.asset->url
    }
  `),
    siteSettings: await client.fetch(groq`
    *[_type == "settings"]{title, mainNav, subNav, footerImage}
  `),
    pages: await client.fetch(groq`
    *[!(_id in path('drafts.**')) && _type == "page"]{title, slug, weight}
  `)
  }
});