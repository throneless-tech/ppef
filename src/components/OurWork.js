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
      <Container sx={{ paddingBottom: 4, paddingTop: 4 }}>
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
        <Box mt={8}>
          {cards && cards.length
            ? cards.map(card => (
                <Card
                  svg={card.svg}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  buttonLink={card.buttonLink}
                />
              ))
            : null}
        </Box>
      </Container>
    </Box>
  );
}
