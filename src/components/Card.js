import React, { Components } from "react";
// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// svg icons
import Book from "./Book";
import Healthcare from "./Healthcare";
import Messages from "./Messages";

const components = {
  book: Book,
  healthcare: Healthcare,
  messages: Messages
};

export default function Card(props) {
  const { svg, title, description, buttonText, buttonLink } = props;

  const Svg = components[svg];

  return (
    <Box sx={{ marginTop: { xs: 6, md: 0 }, position: "relative" }}>
      {svg ? <Svg /> : null}
      <MuiCard
        variant="outlined"
        sx={{
          border: "5px solid #22344D",
          borderRadius: "0px 50px 0px 0px",
          height: { xs: 300, md: 386 },
          marginLeft: "32px",
          maxWidth: 286,
          paddingBottom: "34px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "60px"
        }}
      >
        <Typography
          component="h3"
          variant="h3"
          sx={{ color: "secondary.main" }}
        >
          {title}
        </Typography>
        <Typography component="div" variant="body2" sx={{ marginTop: "16px" }}>
          {description}
        </Typography>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 4,
            maxWidth: 190
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            href={buttonLink}
            sx={{ fontSize: "18px !important" }}
          >
            {buttonText}
          </Button>
        </Box>
      </MuiCard>
    </Box>
  );
}
