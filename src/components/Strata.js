// Sanity.io imports
import { PortableText } from '@portabletext/react'

// Material UI imports
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Strata(props) {
  const { title, description, bold, buttonText, buttonLink } = props;

  const serializers = {
    marks: {
      button: ({value, children}) => {
        const href = `${value.url}`
        return <a className="block-button" href={href}>{children}</a>
      },
      link: ({ value, children }) => {
        const href = `${value.url}`
        return <a href={href}>{children}</a>
      },
    }
  }

  return (
    <Container sx={{ marginBottom: 10, marginTop: { xs: 18, md: 6 } }}>
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
      <Typography variant="body1" className="blockcontent" component="div" sx={{ marginTop: 6 }}>
        {Array.isArray(description) ? (
          <PortableText
            value={description}
            components={serializers}
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
            fontWeight: "bold"
          }}
        >
          {bold}
        </Typography>
      ) : null}
      {buttonText ? (
        <Button
          href={buttonLink}
          sx={{ fontSize: "18px !important", marginTop: 6 }}
        >
          {buttonText}
        </Button>
      ) : null}
    </Container>
  );
}
