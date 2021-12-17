// base imports
import React, { useEffect } from "react";

// utils
import urlFor from "../utils/imageBuilder";

// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Gallery(props) {
  const { image } = props;

  if (!image) return null;

  useEffect(() => {}, [image]);

  return (
    <Box
      sx={{
        ":before": {
          backgroundBlendMode: "multiply",
          backgroundColor: "#B0DBE8",
          backgroundImage: `url(${urlFor(image).url()})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
        display: { xs: "none", md: "block" },
        height: 600,
        marginBottom: { xs: 10, md: 6 },
        marginTop: { xs: 10, md: 40 },
        position: "relative",
        zIndex: 0
      }}
    />
  );
}
