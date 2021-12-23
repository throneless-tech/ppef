// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

export default function Publication(props) {
  const { publication } = props;

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
          paddingBottom: 2,
          paddingLeft: 0,
          paddingTop: 2,
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
            sx={{ fontSize: "1.6rem", marginTop: 2 }}
          >
            {publication.description}
          </Typography>
          <Typography component="div" sx={{ marginTop: 2 }}>
            <Link
              href={`publication/${publication.slug.current}`}
              variant="body2"
              color="inherit"
              underline="always"
              sx={{
                fontSize: "1.6rem",
                position: "relative",
                "&:active, &:focus, &:hover": {
                  "& .svg": {
                    right: "-28px",
                    transition: "right 500ms ease-in-out"
                  }
                }
              }}
            >
              <span>Read more</span>
              <Typography variant="body2" component="span" sx={visuallyHidden}>
                &nbsp;of {publication.title}
              </Typography>
              <Typography
                className="svg"
                component="span"
                sx={{
                  height: 12,
                  position: "absolute",
                  right: "-18px",
                  top: 0,
                  transition: "right 500ms ease-in-out",
                  width: 12
                }}
              >
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="angle-right"
                  class="svg-inline--fa fa-angle-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 448a31.99 31.99 0 0 1-22.62-54.63L178.8 256 41.38 118.6a31.99 31.99 0 1 1 45.25-45.25l160 160a31.99 31.99 0 0 1 0 45.25l-160 160A31.72 31.72 0 0 1 64 448z"
                  />
                </svg>
              </Typography>
            </Link>
          </Typography>
          {publication.report ? (
            <Button
              variant="outlined"
              href={`${publication.report}?dl=`}
              sx={{
                backgroundColor: "#fff",
                color: "secondary.main",
                display: "block",
                fontSize: "1.2rem !important",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 4,
                maxWidth: 220,
                textAlign: "center"
              }}
            >
              <span>Download Report</span>
              <Typography variant="body2" component="span" sx={visuallyHidden}>
                &nbsp;about {publication.title}
              </Typography>
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </Box>
  );
}
