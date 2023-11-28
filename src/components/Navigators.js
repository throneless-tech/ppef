// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry from '@mui/lab/Masonry';
import Typography from "@mui/material/Typography";

// components imports
import CardNavigator from "./CardNavigator";

export default function Navigators(props) {
  const { navigators } = props;
  return (
    <Box>
      <Container
        sx={{ marginBottom: 8, marginTop: { xs: 10, sm: 16, md: 20 } }}
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
        <Masonry columns={3} spacing={2}>
          {navigators && navigators.length
            ? navigators.map(navigator => (
              <Box
                key={navigator._key}
                sx={{ width: { xs: "100%", sm: "50%", md: "33%" } }}
              >
                <CardNavigator navigator={navigator} />
              </Box>
            ))
            : null}
        </Masonry>
      </Container>
    </Box>
  );
}
