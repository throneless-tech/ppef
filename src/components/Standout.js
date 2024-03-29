// sanity imports
import { PortableText } from '@portabletext/react'

// utils
import urlFor from "../utils/imageBuilder";

// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Standout(props) {
  const { image, title, text } = props;
  return (
    <Box
      sx={{
        ":before": {
          backgroundBlendMode: "multiply",
          backgroundColor: title ? "#B0DBE8" : "#207892",
          backgroundImage: { md: image ? `url(${urlFor(image).url()})` : "" },
          backgroundPosition: { xs: "-50vw center", lg: "unset"},
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "cover", lg: "50%" },
          clipPath: {
            xs: "polygon(0 2%, 100% 6%, 100% 67%, 0 63%)",
            md: "polygon(0 10%, 100% 20%, 100% 90%, 0 80%)"
          },
          content: "''",
          display: "block",
          height: title ? "180%" : "200%",
          left: 0,
          position: "absolute",
          top: { xs: "-80px", md: "50%" },
          transform: { xs: "", md: "translateY(-50%)" },
          width: "100%",
          zIndex: "-1"
        },
        ":after": {
          backgroundColor: "#22344D",
          clipPath: {
            xs: "polygon(0 4%, 100% 0, 100% 62%, 0 66%)",
            md: "polygon(0 18%, 100% 2%, 100% 72%, 0 90%)"
          },
          content: "''",
          display: "block",
          height: title ? "180%" : "200%",
          left: 0,
          position: "absolute",
          top: { xs: "-82px", md: "50%" },
          transform: { xs: "", md: "translateY(-50%)" },
          width: "100%",
          zIndex: "-2"
        },
        marginBottom: { xs: 12, md: 24 },
        marginTop: { xs: 12, md: title ? 0 : 20 },
        position: "relative",
        zIndex: 0
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          marginLeft: { md: image ? "100vw" : "" },
          marginBottom: { xs: 10, md: 20 },
          marginTop: { xs: 10, md: 36, lg: 28 },
          maxWidth: { md: image ? "50% !important" : "1200px" },
          minHeight: 300,
          paddingBottom: { xs: 2, md: 4 },
          paddingTop: { xs: 8, md: 0 },
          transform: { md: image ? "translateX(-50vw)" : "" }
        }}
      >
        <Typography
          component="h2"
          variant={title ? "h3" : "h2"}
          sx={{
            ":after": {
              backgroundColor: "info.main",
              bottom: "-16px",
              content: "''",
              height: title ? 0 : 12,
              left: 0,
              position: "absolute",
              width: title ? 0 : 104
            },
            color: title ? "secondary.main" : "#fff",
            // paddingTop: title ? 10 : 0,
            position: "relative"
          }}
        >
          {title ? title : "Our Impact"}
        </Typography>
        {text ? (
          <Typography
            className="blockcontent"
            component="div"
            sx={{ marginTop: 4 }}
          >
            <PortableText
              value={text}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
            />
          </Typography>
        ) : (
          <>
            <Typography
              variant="body1"
              component="div"
              sx={{
                color: "#fff",
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                marginTop: 2,
                paddingTop: 4,
                position: "relative"
              }}
            >
              PPEF brings New York closer to the world we envision through
              movement building in order to create transformational change. Our
              model has 3 basic elements:
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{
                color: "#fff",
                fontSize: "1.4rem",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              <ul>
                <li>We win issue campaigns</li>
                <li>We build power and infrastructure</li>
                <li>We provide an alternate vision</li>
              </ul>
            </Typography>
          </>
        )}
      </Container>
    </Box>
  );
}
