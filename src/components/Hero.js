// utils
import urlFor from "../utils/imageBuilder";

// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Hero(props) {
  const { content, img } = props;
  const image = img || content.heroImage;

  content && content._type == "worldviewProgram"
    ? "worldview..."
    : content && content._type == "publicationsPage"
    ? "publications..."
    : "other...";
  return (
    <Box
      sx={{
        ":before": {
          backgroundColor:
            content &&
            (content._type == "worldviewProgram" ||
              content._type == "publicationsPage")
              ? "#207892"
              : "#22344D",
          backgroundImage: image ? `url(${urlFor(image).url()})` : "",
          boxShadow: `inset 0 0 0 1000px ${
            content &&
            (content._type == "worldviewProgram" ||
              content._type == "publicationsPage")
              ? "rgba(66, 167, 198, 0.85)"
              : "rgba(34, 52, 77, 0.85)"
          }`,
          clipPath: {
            xs: "polygon(0 2%, 100% 6%, 100% 67%, 0 63%)",
            md: "polygon(0 10%, 100% 20%, 100% 90%, 0 80%)"
          },
          content: "''",
          display: "block",
          height: "200%",
          left: 0,
          // mixBlendMode: "multiply",
          position: "absolute",
          top: { xs: "-80px", md: "50%" },
          transform: { xs: "", md: "translateY(-50%)" },
          width: "100%",
          zIndex: "-1"
        },
        ":after": {
          backgroundColor:
            content && content._type == "worldviewProgram"
              ? "#FCD502"
              : content && content._type == "publicationsPage"
              ? "#B0DBE8"
              : "#42A7C6",
          backgroundImage: image ? `url(${urlFor(image).url()})` : "",
          boxShadow: `inset 0 0 0 1000px ${
            content && content._type == "worldviewProgram"
              ? "rgba(252, 213, 2, 0.85)"
              : content && content._type == "publicationsPage"
              ? "rgba(176, 219, 232, 0.85)"
              : "rgba(66, 167, 198, 0.85)"
          }`,
          clipPath: {
            xs: "polygon(0 4%, 100% 0, 100% 62%, 0 66%)",
            md: "polygon(0 18%, 100% 2%, 100% 72%, 0 90%)"
          },
          content: "''",
          display: "block",
          height: "200%",
          left: 0,
          // mixBlendMode: "multiply",
          position: "absolute",
          top: { xs: "-82px", md: "50%" },
          transform: { xs: "", md: "translateY(-50%)" },
          width: "100%",
          zIndex: "-2"
        },
        marginTop: { xs: 10, md: 0 },
        position: "relative",
        zIndex: 0
      }}
    >
      <Container maxWidth="md" sx={{ marginTop: { xs: "50px", md: "230px" } }}>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color:
              content && content._type == "publicationsPage"
                ? "#fff"
                : "info.main",
            fontFamily: "Proxima Nova Condensed",
            fontSize: { xs: "1.4rem", md: "2.2rem" },
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          {content ? content.supertitle : "We are a"}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "#fff",
            fontSize: { xs: "2.6rem", md: "3.2rem" },
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          {content
            ? content.mainTitle
            : "movement-builder and  an incubator for ideas."}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            ":before": {
              backgroundColor: "info.main",
              content: "''",
              height: 12,
              position: "absolute",
              top: 0,
              width: 104
            },
            color: "#fff",
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            marginTop: 4,
            paddingTop: 4,
            position: "relative"
          }}
        >
          {content
            ? content.description
            : "The Public Policy and Education Fund of New York  drives transformational change and creates economic, racial, environmental, and social justice across New York."}
        </Typography>
      </Container>
    </Box>
  );
}
