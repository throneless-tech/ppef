// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// component imports
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Container
        maxWidth="xl"
        sx={{ paddingBottom: { xs: 2, md: 6 }, paddingTop: { xs: 2, md: 6 } }}
      >
        <Grid container spacing={4} justifyContent="space-between">
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
            md={6}
            sx={{ color: "#fff", textAlign: { md: "center" } }}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: { xs: "normal", md: "bold" } }}
            >
              Contact us at:{" "}
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }} />
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: { xs: "normal", md: "bold" } }}
            >
              518.465.4600
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ marginBottom: 2 }}>
              <Link
                variant="body1"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontFamily: "Proxima Nova Condensed",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}
              >
                Worldview Program
              </Link>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Link
                variant="body1"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontFamily: "Proxima Nova Condensed",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}
              >
                Healthcare Navigators
              </Link>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Link
                variant="body1"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontFamily: "Proxima Nova Condensed",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}
              >
                Publications
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ marginBottom: 2 }}>
              <Link
                variant="body1"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontFamily: "Proxima Nova Condensed",
                  textTransform: "uppercase"
                }}
              >
                About us
              </Link>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Link
                variant="body1"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontFamily: "Proxima Nova Condensed",
                  textTransform: "uppercase"
                }}
              >
                Our Approach
              </Link>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Link
                variant="body1"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontFamily: "Proxima Nova Condensed",
                  textTransform: "uppercase"
                }}
              >
                Support us
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
