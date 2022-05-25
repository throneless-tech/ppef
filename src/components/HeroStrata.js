// Material UI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function HeroStrata() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginBottom: { xs: 4, md: 8 },
        marginTop: { xs: 20, sm: 12, md: 24 }
      }}
    >
      <Typography variant="body1" component="span">
        Our mission is to work to make economic, racial, environmental, and
        social justice a reality by{" "}
      </Typography>
      <Typography
        variant="body1"
        component="span"
        sx={{
          color: "primary.main",
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
