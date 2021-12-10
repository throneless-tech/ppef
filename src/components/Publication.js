// base imports
import React, { useEffect, useState } from "react";

// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Publication(props) {
  const { publication } = props;
  console.log(publication);
  return (
    <Box
      sx={{ marginTop: { xs: 6, md: 0 }, position: "relative", width: "100%" }}
    >
      <Card
        variant="outlined"
        sx={{
          border: "5px solid #22344D",
          backgroundColor: "#22344D",
          borderRadius: "0px 50px 0px 0px",
          color: "#fff",
          // height: 498,
          maxWidth: 350,
          paddingBottom: "34px",
          paddingLeft: 0,
          paddingTop: "30px",
          position: "relative",
          width: "100%"
        }}
      >
        <CardContent>
          <Typography
            component="div"
            variant="h3"
            sx={{
              borderBottom: "4px dotted #FCD502",
              fontSize: "1.8rem",
              paddingBottom: 2
            }}
          >
            {publication.title}
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={{ fontSize: "1.4rem", marginTop: 2 }}
          >
            {publication.date ? publication.date : ""}
            {publication.date && publication.tags && publication.tags.length
              ? " | "
              : null}
            {publication.tags && publication.tags.length
              ? publication.tags.map((tag, index) => {
                  if (index == publication.tags.length - 1) {
                    return tag.label;
                  } else {
                    return `${tag.label}, `;
                  }
                })
              : null}
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={{ fontSize: "1.8rem", marginTop: 2 }}
          >
            {publication.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
