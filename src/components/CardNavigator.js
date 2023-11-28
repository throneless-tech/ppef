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
  const { navigator } = props;

  return (
    <Box
      sx={{ marginTop: { xs: 6, md: 0 }, position: "relative", width: "100%" }}
    >
      <Card
        variant="outlined"
        sx={{
          border: navigator.healthyKidsNav ? "5px solid #FCD502" : "5px solid #22344D",
          borderRadius: "0px 50px 0px 0px",
          minHeight: 498,
          maxWidth: 350,
          paddingBottom: "34px",
          paddingLeft: 0,
          position: "relative",
          width: "100%"
        }}
      >
        {navigator.image ? (
          <Box
            sx={{
              height: 206,
            }}
          >
            <img
              src={urlFor(navigator.image).url()}
              className="staff-image"
              alt={""}
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%"
              }}
            />
          </Box>
        ) : null}
        <Box
          sx={{
            paddingBottom: navigator.image ? "50px" : 0,
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
            {navigator.name}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: "18px !important" }}
          >
            {navigator.company}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              fontSize: "18px !important",
              fontStyle: "italic",
            }}
          >
            {navigator.title}
          </Typography>
          {
            navigator.healthyKidsNav ? (
              <Grid container alignItems="center" spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={1}>
                  <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.3594 3.9517C6.3594 2.01 7.9334.436 9.875.436s3.5156 1.574 3.5156 3.5157c0 1.9416-1.574 3.5156-3.5156 3.5156-1.9417 0-3.5156-1.574-3.5156-3.5156Zm12.4329.067c-.6101-.6102-1.5995-.6102-2.2096 0l-4.2299 4.2298H7.3972L3.1673 4.0187c-.6101-.6102-1.5995-.6102-2.2096 0-.6103.6102-.6103 1.5995 0 2.2097l4.6204 4.6204v13.0247c0 .863.6996 1.5625 1.5625 1.5625h.7813c.8629 0 1.5625-.6995 1.5625-1.5625v-5.4687h.7812v5.4687c0 .863.6996 1.5625 1.5625 1.5625h.7813c.8629 0 1.5625-.6995 1.5625-1.5625V10.8488l4.6204-4.6204c.6102-.6102.6102-1.5995 0-2.2097Z" fill="#FCD502"/></svg>
                </Grid>
                <Grid item xs={11}>
                  <Typography component="div" variant="body2" sx={{ fontSize: "16px !important", fontWeight: "bold"}}>
                    Healthy Kids Navigator
                  </Typography>
                </Grid>
              </Grid>
            ) : null
          }
          <Typography
            component="div"
            variant="body1"
            sx={{ 
              borderTop: "4px dotted #FCD502", 
              fontSize: "18px !important",
              paddingTop: 3,
              marginTop: 3
            }}
          >
            {navigator.address1}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: "18px !important" }}
          >
            {navigator.address2}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: "18px !important" }}
          >
            {navigator.mobile ? `Mobile: ${navigator.mobile}` : ""}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: "18px !important" }}
          >
            {navigator.tollfree ? `Toll-free: ${navigator.tollfree}` : ""}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: "18px !important" }}
          >
            {navigator.fax ? `Fax: ${navigator.fax}` : ""}
          </Typography>
          <Link
            href={`mailto:${navigator.email}`}
            variant="body1"
            color="inherit"
            sx={{ fontSize: "18px !important" }}
          >
            {navigator.email}
          </Link>
        </Box>
        <Box
          sx={{
            backgroundColor: navigator.healthyKidsNav ? "info.main" : "secondary.main",
            bottom: 0,
            color: navigator.healthyKidsNav ? "secondary.main" : "#fff",
            left: 0,
            minHeight: 56,
            position: "absolute",
            width: "100%"
          }}
        >
          <Typography component="div" variant="body1" textAlign="center" sx={{ lineHeight: '5px', p: 1}}>
            {navigator.counties && navigator.counties.length
              ? navigator.counties.map((county, index) => {
                  if (index == navigator.counties.length - 1) {
                    return (
                      <Typography
                        key={county.label}
                        component="span"
                        variant="body1"
                        sx={{ fontSize: "18px !important" }}
                      >
                        {county.label} Counties
                      </Typography>
                    );
                  } else if (index == 0) {
                    return (
                      <span key={county.label}>
                        <Typography
                          component="span"
                          gutterBottom
                          variant="body1"
                          sx={{
                            fontSize: "18px !important",
                            fontWeight: "bold !important"
                          }}
                        >
                          Covering:{" "}
                        </Typography>
                        <Typography
                          key={county.label}
                          component="span"
                          variant="body1"
                          sx={{ fontSize: "18px !important" }}
                        >
                          {county.label},{" "}
                        </Typography>
                      </span>
                    );
                  } else {
                    return (
                      <Typography
                        key={county.label}
                        component="span"
                        variant="body1"
                        sx={{ fontSize: "18px !important" }}
                      >{`${county.label}, `}</Typography>
                    );
                  }
                })
              : null}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
