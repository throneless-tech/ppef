// base imports
import React, { useEffect } from "react";

// utils
import urlFor from "../utils/imageBuilder";

// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// component imports
import Logo from "./Logo";

export default function Footer(props) {
  const { image, pages } = props;

  useEffect(() => {}, [image]);

  return (
    <>
      {image ? (
        <Box
          sx={{
            ":before": {
              backgroundBlendMode: "multiply",
              backgroundColor: "#22344D",
              backgroundImage: `url(${urlFor(image).url()})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              clipPath: {
                xs: "polygon(0 2%, 100% 6%, 100% 67%, 0 63%)",
                md: "polygon(0 10%, 100% 20%, 100% 90%, 0 80%)"
              },
              content: "''",
              display: "block",
              height: "200%",
              left: 0,
              // mixBlendMode: "multiply",
              position: "absolute",
              top: { xs: "-80px", md: "50%" },
              transform: { xs: "", md: "translateY(-50%)" },
              width: "100%",
              zIndex: "-1"
            },
            ":after": {
              backgroundBlendMode: "multiply",
              backgroundColor: "#42A7C6",
              backgroundImage: `url(${urlFor(image).url()})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              clipPath: {
                xs: "polygon(0 4%, 100% 0, 100% 62%, 0 66%)",
                md: "polygon(0 18%, 100% 2%, 100% 72%, 0 90%)"
              },
              content: "''",
              display: "block",
              height: "200%",
              left: 0,
              // mixBlendMode: "multiply",
              position: "absolute",
              top: { xs: "-82px", md: "50%" },
              transform: { xs: "", md: "translateY(-50%)" },
              width: "100%",
              zIndex: "-2"
            },
            display: { xs: "none", md: "block" },
            height: 600,
            marginBottom: { xs: 10, md: 2 },
            marginTop: { xs: 10, md: 40 },
            position: "relative",
            zIndex: 0
          }}
        />
      ) : null}
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Container
          maxWidth="xl"
          sx={{
            paddingBottom: { xs: 2, md: 4 },
            paddingTop: { xs: 4, md: 30 }
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={2}
              sx={{ maxWidth: { xs: "250px", md: "318px" } }}
            >
              <Logo fill="#fff" />
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ color: "#fff", textAlign: { md: "center" } }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontSize: "1.15rem !important",
                  fontWeight: { xs: "normal", md: "bold" }
                }}
              >
                Contact us at:{" "}
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }} />
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontSize: "1.15rem !important",
                  fontWeight: { xs: "normal", md: "bold" }
                }}
              >
                518.465.4600
              </Typography>
            </Grid>
            <Grid item xs={12} md={2.75}>
              <Box sx={{ marginBottom: 2 }}>
                <Link
                  href="/worldview-program"
                  variant="body1"
                  underline="hover"
                  sx={{
                    color: "#fff",
                    fontFamily: "Proxima Nova Condensed",
                    fontSize: "1.15rem !important",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  Worldview Program
                </Link>
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Link
                  href="/healthcare-navigator"
                  variant="body1"
                  underline="hover"
                  sx={{
                    color: "#fff",
                    fontFamily: "Proxima Nova Condensed",
                    fontSize: "1.15rem !important",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  Healthcare Navigators
                </Link>
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Link
                  href="/publications"
                  variant="body1"
                  underline="hover"
                  sx={{
                    color: "#fff",
                    fontFamily: "Proxima Nova Condensed",
                    fontSize: "1.15rem !important",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  Publications
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              {pages && pages.length
                ? pages.map(page => (
                  <Box key={page.slug.current} sx={{ marginBottom: 2 }}>
                      <Link
                        href={page.slug.current}
                        variant="body1"
                        underline="hover"
                        sx={{
                          color: "#fff",
                          fontFamily: "Proxima Nova Condensed",
                          fontSize: "1.15rem !important",
                          textTransform: "uppercase"
                        }}
                      >
                        {page.title}
                      </Link>
                    </Box>
                  ))
                : null}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
