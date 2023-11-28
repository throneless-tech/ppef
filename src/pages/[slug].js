// base imports
import React, { useEffect, useState } from "react";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Next.js imports
import Head from "next/head";

// Material UI imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// component imports
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import ImageStrata from "../components/ImageStrata";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Standout from "../components/Standout";
import Strata from "../components/Strata";

const components = {
  blue: Standout,
  gallery: Gallery,
  imageStrata: ImageStrata,
  white: Strata
};

const Page = props => {
  const { pageSettings = [], siteSettings = [], pages = [] } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    console.log('page settings: ', pageSettings);
    if (pageSettings && pageSettings.title) {
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
        <Box sx={{ marginBottom: 10, marginTop: { xs: 24, md: 30 } }}>
          {settings.sections && settings.sections.length
            ? settings.sections.map(section => {
                const Component =
                  components[
                    section.backgroundColor
                      ? section.backgroundColor
                      : section._type
                  ];

                // console.log(section._type);
                return (
                  <Component
                    key={section._key}
                    logos={section}
                    image={section.image}
                    title={section.title}
                    description={section.content}
                    text={section.content}
                  />
                );
              })
            : null}
        </Box>
        <Footer image={siteSettings[0].footerImage} pages={pages} />
      </Layout>
    );
  }
};

const query = groq`*[_type == "page" && slug.current == $slug][0]`;

Page.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  return {
    pageSettings: await client.fetch(query, { slug }),
    siteSettings: await client.fetch(groq`
      *[_type == "settings"]{title, footerImage}
    `),
    pages: await client.fetch(groq`
      *[!(_id in path('drafts.**')) && _type == "page"]{title, slug, weight}
    `)
  };
};

export default Page;
