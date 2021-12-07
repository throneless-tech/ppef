// Material UI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function HeroStrata() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginBottom: { xs: 0, md: 8 },
        marginTop: { xs: "160px", md: "200px" }
      }}
    >
      <Typography variant="body1" component="span" sx={{ fontSize: "2.2rem" }}>
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
        building bridges and laying the foundation to achieve lasting structural
        reforms.
      </Typography>
    </Container>
  );
}
