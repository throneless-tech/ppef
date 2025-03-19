// utils
import urlFor from "../utils/imageBuilder";

// Material UI imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Gallery(props) {
  const { logos } = props;
  if (!logos?.images || !logos?.images.length) return null;

  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }
        }}
      >
        {logos.images.map(logo => (
          <Grid item key={logo._key} xs={12} md={3}>
            <img
              src={urlFor(logo).url()}
              className="gallery-image"
              alt={`${logo.alt} logo`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
