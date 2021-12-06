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
          clipPath: "polygon(0 10%, 100% 28%, 100% 100%, 0 80%)",
          content: "''",
          display: "block",
          height: "200%",
          left: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "100%",
          zIndex: "-1"
        },
        ":after": {
          backgroundColor: "#42A7C6",
          clipPath: "polygon(0 28%, 100% 0, 100% 72%, 0 100%)",
          content: "''",
          display: "block",
          height: "200%",
          left: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "100%",
          zIndex: "-2"
        },
        position: "relative",
        zIndex: 0
      }}
    >
      <Container maxWidth="md" sx={{ marginTop: 12 }}>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "info.main",
            fontFamily: "Proxima Nova Condensed",
            fontSize: "2.2rem",
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
            fontSize: "3.2rem",
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          movement-builder and 
          <br />
          an incubator for ideas.
        </Typography>
      </Container>
    </Box>
  );
}
