// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

export default function Workshops(props) {
  const { workshops } = props;
  return (
    <Container sx={{ marginTop: 20 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          ":after": {
            backgroundColor: "info.main",
            bottom: "-26px",
            content: "''",
            height: 12,
            left: 0,
            position: "absolute",
            width: 104
          },
          position: "relative"
        }}
      >
        Join a Worldview Workshop
      </Typography>
      <List>
        {workshops && workshops.length
          ? workshops.map(workshop => (
              <ListItem
                key={workshop._key}
                sx={{
                  borderBottom: "4px dotted #FCD502",
                  marginTop: 4,
                  paddingBottom: 4,
                  marginBottom: 4,
                  paddingLeft: 0,
                  paddingRight: 0
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      component="div"
                      variant="h3"
                      color="primary"
                      gutterBottom
                    >
                      {workshop.title}
                    </Typography>
                  }
                  secondary={
                    <Typography component="div">
                      <Typography component="p" variant="body1">
                        {workshop.description}
                      </Typography>
                      <Button
                        href={workshop.link ? workshop.link : "#"}
                        sx={{ marginTop: 4 }}
                      >
                        Register for a&nbsp;
                        <Typography
                          variant="body1"
                          component="span"
                          sx={visuallyHidden}
                        >
                          {workshop.title}&nbsp;
                        </Typography>
                        workshop today
                      </Button>
                    </Typography>
                  }
                />
              </ListItem>
            ))
          : null}
      </List>
    </Container>
  );
}
