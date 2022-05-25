// base imports
import React, { useEffect, useState } from "react";

// sanity imports
import BlockContent from "@sanity/block-content-to-react";

// Next.js imports
import Head from "next/head";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// component imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navigators from "../components/Navigators";
import ImageStrata from "../components/ImageStrata";

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
          <Container
            sx={{
              borderBottom: "4px dotted #FCD502",
              marginTop: { xs: 20, md: 30 },
              paddingBottom: 4,
              marginBottom: 2
            }}
          >
            <Typography component="div" variant="h2" sx={{ color: "secondary.main"}}>
              Please provide your information
            </Typography>
            <Typography
              component="div"
              variant="h3"
              sx={{
                color: "primary.main",
                position: "relative",
                mb: 8,
                ":after": {
                  backgroundColor: "primary.light",
                  bottom: "-40px",
                  content: "''",
                  height: 12,
                  left: 0,
                  position: "absolute",
                  width: 104
                },
              }}
              gutterBottom
            >
              And one of our navigators will reach out to you!
            </Typography>
            <Typography
              component="div"
              variant="body1"
              gutterBottom
            >
              PPEF can help you find an affordable health plan with low cost insurance options through the Marketplace. You can quickly compare health plan options and apply for assistance that can help lower costs for health care coverage. You may also qualify for healthcare coverage from Medicaid and Child Health Plus.
            </Typography>
            <Typography
              component="div"
              variant="body1"
            >
              Our Certified Health Care Navigators can help you enroll in:
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{
                fontSize: "1.4rem !important",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              <ul>
                <li>Medicaid</li>
                <li>Child Health Plus</li>
                <li>Essential Plan</li>
                <li>Qualified Health Plans</li>
              </ul>
            </Typography>
            <Typography component="div" variant="body1">
              Don’t wait, fill out the form below and one of our experienced Navigators will reach out to you. Or call, toll free, (800) 803-8508.
            </Typography>
          </Container>
          <Box
            sx={{
              height: 500,
              marginBottom: { xs: "-20px", md: "-60px" },
              marginTop: { xs: 16, md: 8 }
            }}
          >
            <iframe
              className="ppef-navigator-form"
              src="https://survey.zohopublic.com/zs/EIChVG"
              frameBorder="0"
              style={{ height: "500px", width: "100%" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="auto"
              allow="geolocation"
            />
          </Box>
          {settings.navigators && settings.navigators.length ? (
            <Navigators navigators={settings.navigators} />
          ) : null}
          {settings.image ? (<ImageStrata image={settings.image} />) : null}
          {settings.standoutText ? (
            <Container>
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  color: "secondary.main",
                  position: "relative",
                  ":after": {
                    backgroundColor: "primary.light",
                    bottom: "-40px",
                    content: "''",
                    height: 12,
                    left: 0,
                    position: "absolute",
                    width: 104
                  },
                }}
              >
                {settings.standoutTitle}
              </Typography>
              <Typography component="div" variant="body1" sx={{ mt: 8 }}>
                <BlockContent blocks={settings.standoutText} />
              </Typography>
            </Container>
          ) : null}
          <Footer image={siteSettings[0].footerImage} pages={pages} />
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
    *[!(_id in path('drafts.**')) && _type == "page"]{title, slug, weight}
  `)
});

export default HealthcareNavigator;
