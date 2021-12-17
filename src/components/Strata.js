// Sanity.io imports
import BlockContent from "@sanity/block-content-to-react";

// Material UI imports
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Strata(props) {
  const { title, description, bold, buttonText, buttonLink } = props;
  return (
    <Container sx={{ marginBottom: 10, marginTop: { xs: 10, md: "180px" } }}>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          ":after": {
            backgroundColor: "primary.light",
            bottom: "-16px",
            content: "''",
            height: 12,
            left: 0,
            position: "absolute",
            width: 104
          },
          color: "secondary.main",
          position: "relative"
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" component="div" sx={{ marginTop: 6 }}>
        {Array.isArray(description) ? (
          <BlockContent
            blocks={description}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        ) : (
          description
        )}
      </Typography>
      {bold ? (
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            fontWeight: "bold"
          }}
        >
          {bold}
        </Typography>
      ) : null}
      {buttonText ? (
        <Button href={buttonLink} sx={{ marginTop: 6 }}>
          {buttonText}
        </Button>
      ) : null}
    </Container>
  );
}
