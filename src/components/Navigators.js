// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

// components imports
import CardNavigator from "./CardNavigator";

export default function Navigators(props) {
  const { navigators } = props;
  return (
    <Box>
      <Container
        sx={{ marginBottom: 8, marginTop: { xs: 20, sm: 26, md: 30 } }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            ":after": {
              backgroundColor: "primary.main",
              bottom: "-26px",
              content: "''",
              height: 12,
              left: 0,
              position: "absolute",
              width: 104
            },
            color: "secondary.main",
            position: "relative"
          }}
        >
          Meet our Navigators
        </Typography>
        <List
          sx={{
            alignItems: "flex-start",
            display: { xs: "block", sm: "flex" },
            flexWrap: "wrap",
            justifyContent: "flex-start",
            marginLeft: 0,
            marginTop: { xs: 0, md: 8 }
          }}
        >
          {navigators && navigators.length
            ? navigators.map(navigator => (
                <ListItem
                  key={navigator._key}
                  sx={{ width: { xs: "100%", sm: "50%", md: "33%" } }}
                >
                  <CardNavigator navigator={navigator} />
                </ListItem>
              ))
            : null}
        </List>
      </Container>
    </Box>
  );
}
