// Material UI imports
import { visuallyHidden } from "@mui/utils";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// component imports
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBottom: 2, paddingTop: 2 }}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sx={{ maxWidth: 500 }} xs={12} md={4}>
            <Link href="/" className="logo">
              <Typography component="h1" sx={visuallyHidden}>
                Public Policy and Education Fund of New York
              </Typography>
              <Logo />
            </Link>
          </Grid>
          <Grid container item xs={12} md={8} spacing={2}>
            <Grid container item direction="column" xs={12} md={8}>
              <Grid container item spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Link className="nav-primary">Worldview Program</Link>
                </Grid>
                <Grid item>
                  <Link className="nav-primary">Healthcare Navigators</Link>
                </Grid>
                <Grid item>
                  <Link className="nav-primary">Publications</Link>
                </Grid>
              </Grid>
              <Grid container item spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Link className="nav-secondary">About Us</Link>
                </Grid>
                <Grid item>
                  <Link className="nav-secondary">Our Approach</Link>
                </Grid>
                <Grid item>
                  <Link className="nav-secondary">Support Us</Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link>Donate now</Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
