// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      sx={{
        ":before": {
          backgroundColor: "#22344D",
          clipPath: {
            xs: "polygon(0 2%, 100% 6%, 100% 67%, 0 63%)",
            md: "polygon(0 10%, 100% 20%, 100% 90%, 0 80%)"
          },
          content: "''",
          display: "block",
          height: "200%",
          left: 0,
          position: "absolute",
          top: { xs: "-80px", md: "50%" },
          transform: { xs: "", md: "translateY(-50%)" },
          width: "100%",
          zIndex: "-1"
        },
        ":after": {
          backgroundColor: "#42A7C6",
          clipPath: {
            xs: "polygon(0 4%, 100% 0, 100% 62%, 0 66%)",
            md: "polygon(0 18%, 100% 2%, 100% 72%, 0 90%)"
          },
          content: "''",
          display: "block",
          height: "200%",
          left: 0,
          position: "absolute",
          top: { xs: "-82px", md: "50%" },
          transform: { xs: "", md: "translateY(-50%)" },
          width: "100%",
          zIndex: "-2"
        },
        position: "relative",
        zIndex: 0
      }}
    >
      <Container maxWidth="md" sx={{ marginTop: { xs: "50px", md: "230px" } }}>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "info.main",
            fontFamily: "Proxima Nova Condensed",
            fontSize: { xs: "1.4rem", md: "2.2rem" },
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          We are a
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
          movement-builder and 
          <br />
          an incubator for ideas.
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
          The Public Policy and Education Fund of New York  drives
          transformational change and creates economic, racial, environmental,
          and social justice across New York.
        </Typography>
      </Container>
    </Box>
  );
}
