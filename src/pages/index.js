// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Sanity.io imports
import groq from "groq";
import client from "../../client";

// Material UI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// component imports
import Hero from "../components/Hero";
import Layout from "../components/Layout";

function Index(props) {
  const { posts = [] } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>PPEF</title>
        </Head>
        <Hero />
        <Container sx={{ marginTop: { xs: "160px", md: "240px" } }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontSize: { xs: "2.2rem", md: "3rem" } }}
          >
            Our mission is to work to make economic, racial, environmental, and
            social justice a reality by{" "}
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{
              color: "primary.main",
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: "bold",
              textTransform: "uppercase"
            }}
          >
            building bridges and laying the foundation to achieve lasting
            structural reforms.
          </Typography>
        </Container>
      </Layout>
    </>
  );
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
});

export default Index;
