// Material UI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

// components imports
import CardStaff from "./CardStaff";

export default function SectionStaff(props) {
  const { staff } = props;
  
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
          Meet our Staff
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
          {staff && staff.length
            ? staff.map(employee => (
                <ListItem
                  key={employee._key}
                  sx={{ width: { xs: "100%", sm: "50%", md: "33%" } }}
                >
                  <CardStaff employee={employee} />
                </ListItem>
              ))
            : null}
        </List>
      </Container>
    </Box>
  );
}
