// base imports
import React, { useRef, useState } from "react";
// Material UI imports
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Portal from "@mui/material/Portal";
import Typography from "@mui/material/Typography";

// component imports
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBottom: 2, paddingTop: 2 }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          flexDirection={show ? "column" : "row"}
        >
          <Grid
            container
            item
            sx={{ maxWidth: 500 }}
            xs={12}
            md={4}
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={10}>
              <Link href="/" color="secondary" className="logo">
                <Typography component="h1" sx={visuallyHidden}>
                  Public Policy and Education Fund of New York
                </Typography>
                <Logo />
              </Link>
            </Grid>
            <Grid item xs={2} sx={{ display: { xs: "flex", md: "none" } }}>
              <Button
                type="button"
                onClick={handleClick}
                variant="text"
                sx={{ backgroundColor: "transparent" }}
              >
                <Menu />
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={8}
            spacing={2}
            sx={{
              backgroundColor: show ? "info.light" : "",
              borderTop: show ? "4px dotted #FCD502" : "",
              display: { xs: "flex", md: "none" },
              marginLeft: 0,
              marginRight: 0,
              marginTop: show ? 4 : 0,
              padding: show ? 4 : 0
            }}
            ref={container}
          ></Grid>
          {show ? (
            <Portal container={container.current}>
              <Grid container item direction="column" xs={12} spacing={1}>
                <Grid item>
                  <Link
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontWeight: "bold"
                    }}
                  >
                    Worldview Program
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontWeight: "bold"
                    }}
                  >
                    Healthcare Navigators
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontWeight: "bold"
                    }}
                  >
                    Publications
                  </Link>
                </Grid>
              </Grid>
              <Grid container item spacing={1} direction="column">
                <Grid item>
                  <Link
                    className="nav-secondary"
                    color="secondary"
                    underline="hover"
                    sx={{ fontFamily: "Proxima Nova Condensed" }}
                  >
                    About Us
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-secondary"
                    color="secondary"
                    underline="hover"
                    sx={{ fontFamily: "Proxima Nova Condensed" }}
                  >
                    Our Approach
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-secondary"
                    color="secondary"
                    underline="hover"
                    sx={{ fontFamily: "Proxima Nova Condensed" }}
                  >
                    Support Us
                  </Link>
                </Grid>
              </Grid>
            </Portal>
          ) : null}

          <Grid
            container
            item
            xs={12}
            md={8}
            spacing={2}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Grid container item direction="column" xs={12} md={8}>
              <Grid container item spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Link
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontWeight: "bold"
                    }}
                  >
                    Worldview Program
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontWeight: "bold"
                    }}
                  >
                    Healthcare Navigators
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontWeight: "bold"
                    }}
                  >
                    Publications
                  </Link>
                </Grid>
              </Grid>
              <Grid container item spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Link
                    className="nav-secondary"
                    color="secondary"
                    underline="hover"
                    sx={{ fontFamily: "Proxima Nova Condensed" }}
                  >
                    About Us
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-secondary"
                    color="secondary"
                    underline="hover"
                    sx={{ fontFamily: "Proxima Nova Condensed" }}
                  >
                    Our Approach
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="nav-secondary"
                    color="secondary"
                    underline="hover"
                    sx={{ fontFamily: "Proxima Nova Condensed" }}
                  >
                    Support Us
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                color="info"
                variant="text"
                sx={{
                  ":active, :focus, :hover": {
                    bgcolor: "info.main",
                    color: "#fff"
                  }
                }}
              >
                Donate now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
