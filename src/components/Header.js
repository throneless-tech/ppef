// base imports
import React, { useEffect, useRef, useState } from "react";

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

export default function Header(props) {
  const { pages, settings } = props;
  const [sortedPages, setSortedPages] = useState([]);
  const [show, setShow] = useState(false);
  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (pages && pages.length) {
      let sorted = [...new Map(pages.map(v => [v.slug.current, v])).values()];
      sorted = pages.sort((a, b) => a.weight > b.weight);
      setSortedPages(sorted);
    }
  }, [pages]);

  return (
    <Container maxWidth="xl" sx={{ paddingBottom: 2, paddingTop: 2 }}>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        flexDirection={show ? "column" : "row"}
      >
        <Grid
          container
          item
          xs={12}
          md={3}
          spacing={1}
          justifyContent="space-between"
        >
          <Grid item xs={10}>
            <Link href="/" color="secondary" className="logo">
              <Typography component="h1" sx={visuallyHidden}>
                Public Policy and Education Fund of New York
              </Typography>
              <Logo fill="#22344D" />
            </Link>
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              type="button"
              onClick={handleClick}
              variant="text"
              sx={{
                backgroundColor: "transparent",
                "&:active, &:focus, &:hover": { backgroundColor: "transparent" }
              }}
            >
              <Menu />
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={9}
          spacing={2}
          sx={{
            backgroundColor: show ? "info.light" : "",
            borderTop: show ? "4px dotted #FCD502" : "",
            display: { xs: "flex", md: "none" },
            marginBottom: "-50px",
            marginLeft: 0,
            marginRight: 0,
            marginTop: show ? 4 : 0,
            padding: show ? 4 : 0
            // paddingBottom: 10
          }}
          ref={container}
        ></Grid>
        {show ? (
          <Portal container={container.current}>
            <Grid container item direction="column" xs={12} spacing={1}>
              {settings.mainNav && settings.mainNav.length ? settings.mainNav.map(item => (
                <Grid item key={item.link}>
                  <Link
                    href={item.link}
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontSize: "1.15rem !important",
                      fontWeight: "bold"
                    }}
                  >
                    {item.name}
                  </Link>
                </Grid>
              )) : null}
            </Grid>
            <Grid container item spacing={1} direction="column">
              {settings.subNav && settings.subNav.length
                ? settings.subNav.map(item => (
                  <Grid item key={item.link}>
                    <Link
                      href={item.link}
                      className="nav-secondary"
                      color="secondary"
                      underline="hover"
                      sx={{ fontFamily: "Proxima Nova Condensed" }}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                ))
                : null}
              <Grid item>
                <Button
                  href="https://secure.everyaction.com/b_7su4-GX0C9ggcEd6tuIA2"
                  color="warning"
                  variant="text"
                  sx={{
                    display: "flex",
                    fontSize: "1.15rem !important",
                    marginLeft: 0,
                    marginRight: "auto",
                    marginTop: 2,
                    width: 130,
                    ":active, :focus, :hover": {
                      bgcolor: "secondary.main",
                      color: "#fff"
                    }
                  }}
                >
                  Donate
                </Button>
              </Grid>
            </Grid>
          </Portal>
        ) : null}
        <Grid
          container
          item
          xs={12}
          md={9}
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid container item direction="column" xs={12} md={10} spacing={1}>
            <Grid
              container
              item
              rowSpacing={1}
              columnSpacing={2}
              justifyContent="flex-end"
            >
              {settings.mainNav && settings.mainNav.length ? settings.mainNav.map(item => (
                <Grid item key={item.link}>
                  <Link
                    href={item.link}
                    className="nav-primary"
                    color="secondary"
                    variant="body1"
                    underline="hover"
                    sx={{
                      fontFamily: "Proxima Nova Condensed",
                      fontSize: "1.15rem !important",
                      fontWeight: "bold"
                    }}
                  >
                    {item.name}
                  </Link>
                </Grid>
              )) : null}
            </Grid>
            <Grid container item spacing={2} justifyContent="flex-end">
              {settings.subNav && settings.subNav.length
                ? settings.subNav.map(item => (
                  <Grid item key={item.link}>
                    <Link
                      href={item.link}
                      className="nav-secondary"
                      color="secondary"
                      underline="hover"
                      sx={{ fontFamily: "Proxima Nova Condensed" }}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                ))
                : null}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Button
              href="https://secure.everyaction.com/b_7su4-GX0C9ggcEd6tuIA2"
              color="warning"
              variant="text"
              sx={{
                display: "flex",
                fontSize: "1.15rem !important",
                marginLeft: "auto",
                marginRight: 0,
                width: 130,
                ":active, :focus, :hover": {
                  bgcolor: "secondary.main",
                  color: "#fff"
                }
              }}
            >
              Donate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
