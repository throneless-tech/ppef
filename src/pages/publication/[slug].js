// base imports
import React, { useEffect, useState } from "react";

// Sanity.io imports
import groq from "groq";
import client from "../../../client";
import { PortableText } from '@portabletext/react'

// Next.js imports
import Head from "next/head";

// Material UI imports
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

// component imports
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const query = groq`*[_type == "publication" && slug.current == $slug][0]{
  title,
  date,
  tags,
  content,
  report
}`;

const queryAll = groq`*[_type == "publication" && !(_id in path("drafts.**"))]`

export async function getStaticPaths() {
  const res = await client.fetch(queryAll);

  // Get the paths we want to prerender based on publications
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = res.map((pub) => ({
    params: { slug: pub.slug.current },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const params = { slug: context.params.slug }
  return {
    props: {
      pageSettings: await client.fetch(query, params),
      siteSettings: await client.fetch(groq`
      *[_type == "settings"]{title, mainNav, subNav, footerImage}
    `),
      pages: await client.fetch(groq`
     *[!(_id in path('drafts.**')) && _type == "page"]{title, slug, weight}
   `)
    }
  };
};

const Publication = props => {
  const { pageSettings = [], siteSettings = [], pages = [] } = props;
  const { title = "Untitled", date, tags, content = [], report } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (pageSettings.content) {
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
        <Header pages={pages} settings={siteSettings[0]} />
        <article>
          <Container maxWidth="md" sx={{ marginBottom: 6, marginTop: 6 }}>
            <Typography
              component="h2"
              variant="h3"
              color="primary"
              gutterBottom
            >
              PPEF Publications
            </Typography>
            <Typography
              component="h3"
              variant="h2"
              color="secondary"
              sx={{
                position: "relative",
                ":before": {
                  backgroundColor: "info.main",
                  bottom: "-18px",
                  content: "''",
                  height: 12,
                  position: "absolute",
                  width: 104
                }
              }}
            >
              {settings.title}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{ fontSize: "1.4rem", marginTop: 4 }}
            >
              {settings.date ? settings.date : ""}
              {settings.date && settings.tags && settings.tags.length
                ? " | "
                : null}
              {settings.tags && settings.tags.length
                ? settings.tags.map((tag, index) => {
                    if (index == settings.tags.length - 1) {
                      return tag.label;
                    } else {
                      return `${tag.label}, `;
                    }
                  })
                : null}
            </Typography>
            <Typography
              className="blockcontent"
              component="div"
              variant="body1"
              sx={{ borderTop: "4px dotted #FCD502", marginTop: 4 }}
            >
              <PortableText
                value={settings.content}
                imageOptions={{ w: 320, h: 240, fit: "max" }}
                {...client.config()}
              />
            </Typography>
            {settings.report ? (
              <Button
                variant="outlined"
                href={`${settings.report}?dl=`}
                sx={{
                  backgroundColor: "#fff",
                  color: "secondary.main",
                  display: "inline-block",
                  marginTop: 2,
                  maxWidth: 270,
                  "&:active, &:focus, &:hover": {
                    backgroundColor: "secondary.main",
                    color: "#fff"
                  }
                }}
              >
                <span>Download Report</span>
                <Typography
                  variant="body2"
                  component="span"
                  sx={visuallyHidden}
                >
                  &nbsp;about {settings.title}
                </Typography>
              </Button>
            ) : null}
          </Container>
        </article>
        <Footer image={siteSettings[0].footerImage} pages={pages} />
      </Layout>
    );
  }
};

export default Publication;