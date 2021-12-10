import React, { Components } from "react";
// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function CardNavigator(props) {
  const { navigator } = props;

  return (
    <Box
      sx={{ marginTop: { xs: 6, md: 0 }, position: "relative", width: "100%" }}
    >
      <Card
        variant="outlined"
        sx={{
          border: "5px solid #22344D",
          borderRadius: "0px 50px 0px 0px",
          height: 498,
          maxWidth: 350,
          paddingBottom: "34px",
          paddingLeft: 0,
          paddingTop: "30px",
          position: "relative",
          width: "100%"
        }}
      >
        <Box
          sx={{
            paddingLeft: "30px",
            paddingRight: "30px"
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
            {navigator.name}
          </Typography>
          <Typography component="div" variant="body1">
            {navigator.company}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              borderBottom: "4px dotted #FCD502",
              fontStyle: "italic",
              paddingBottom: 3,
              marginBottom: 3
            }}
          >
            {navigator.title}
          </Typography>
          <Typography component="div" variant="body1">
            {navigator.address1}
          </Typography>
          <Typography component="div" variant="body1">
            {navigator.address2}
          </Typography>
          <Typography component="div" variant="body1">
            {navigator.mobile ? `Mobile: ${navigator.mobile}` : ""}
          </Typography>
          <Typography component="div" variant="body1">
            {navigator.tollfree ? `Toll-free: ${navigator.tollfree}` : ""}
          </Typography>
          <Typography component="div" variant="body1">
            {navigator.fax ? `Fax: ${navigator.fax}` : ""}
          </Typography>
          <Link
            href={`mailto:${navigator.email}`}
            variant="body1"
            color="inherit"
          >
            {navigator.email}
          </Link>
        </Box>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            bottom: 0,
            color: "#fff",
            left: 0,
            minHeight: 56,
            position: "absolute",
            width: "100%"
          }}
        >
          <Typography component="div" variant="body1" textAlign="center">
            {navigator.counties && navigator.counties.length
              ? navigator.counties.map((county, index) => {
                  if (index == navigator.counties.length - 1) {
                    return (
                      <span key={county.label}>{county.label} Counties</span>
                    );
                  } else if (index == 0) {
                    return (
                      <span key={county.label}>
                        <Typography
                          component="span"
                          variant="body1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Covering: <br />
                        </Typography>
                        <Typography
                          key={county.label}
                          component="span"
                          variant="body1"
                        >
                          {county.label},{" "}
                        </Typography>
                      </span>
                    );
                  } else {
                    return `${county.label}, `;
                  }
                })
              : null}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
