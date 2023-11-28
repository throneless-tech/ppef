import React, { Components } from "react";
// Material UI imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// utils
import urlFor from "../utils/imageBuilder";

export default function CardNavigator(props) {
  const { employee } = props;

  return (
    <Box
      sx={{ marginTop: { xs: 6, md: 0 }, position: "relative", width: "100%" }}
    >
      <Card
        variant="outlined"
        sx={{
          border: "5px solid #22344D",
          borderRadius: "0px 50px 0px 0px",
          minHeight: 100,
          maxWidth: 350,
          paddingBottom: "34px",
          paddingLeft: 0,
          position: "relative",
          width: "100%"
        }}
      >
        {employee.image ? (
          <Box
            sx={{
              height: 206,
            }}
          >
            <img
              src={urlFor(employee.image).url()}
              className="staff-image"
              alt={""}
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%"
              }}
            />
          </Box>
        ) : null }
        <Box
          sx={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",
          }}
        >
          <Typography
            component="div"
            variant="body1"
            gutterBottom
            sx={{
              color: "primary.main",
              fontSize: "1.6rem",
              fontWeight: "bold"
            }}
          >
            {employee.name}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              fontSize: "18px !important",
              fontStyle: "italic",
            }}
          >
            {employee.title}
          </Typography>
          {employee.email ? (
            <Link
              href={`mailto:${navigator.email}`}
              variant="body1"
              color="inherit"
              sx={{ fontSize: "18px !important" }}
            >
              {navigator.email}
            </Link>
          ) : null}
        </Box>
      </Card>
    </Box>
  );
}
