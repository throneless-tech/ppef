// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// components imports
import Card from "./Card";

const cards = [
  {
    svg: "healthcare",
    title: "Healthcare navigators",
    description: "Free help to find a health plan that meets your needs.",
    buttonText: "Find a Navigator",
    buttonLink: "#"
  },
  {
    svg: "workshops",
    title: "Worldview Workshops",
    description:
      "Understanding the world as it is; and creating the world we want.",
    buttonText: "Join a Workshop",
    buttonLink: "#"
  },
  {
    svg: "book",
    title: "Publications",
    description: "Read more about what our family of organizations is doing.",
    buttonText: "Find a Resource",
    buttonLink: "#"
  }
];

export default function OurWork() {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Container sx={{ paddingBottom: 8, paddingTop: 8 }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            ":after": {
              backgroundColor: "info.main",
              bottom: "-16px",
              content: "''",
              height: 12,
              left: 0,
              position: "absolute",
              width: 104
            },
            color: "#fff",
            position: "relative"
          }}
        >
          Our work
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "stretch",
            justifyContent: "center",
            marginTop: 8
          }}
        >
          {cards && cards.length
            ? cards.map(card => (
                <Grid item key={card.svg} xs={12} md={4}>
                  <Card
                    svg={card.svg}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    buttonLink={card.buttonLink}
                  />
                </Grid>
              ))
            : null}
        </Grid>
        <Typography
          component="div"
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: { xs: "1.4rem", md: "2.1rem" },
            marginTop: 4
          }}
        >
          We turn ideas into action across New York State. Each of our
          initiatives, whether we are on the streets or in the statehouse,
          speaks the truth and acts in the best interest of ALL people — no
          matter what.
        </Typography>
      </Container>
    </Box>
  );
}
