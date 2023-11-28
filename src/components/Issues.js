// base imports
import React, { useState } from "react";

// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

const style = {
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  left: '50%',
  maxWidth: 1100,
  p: 4,
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
};

export default function Issues(props) {
  const { issues } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          color: "secondary.main",
          position: "relative"
        }}
      >
        Issues
      </Typography>
      <List>
        {issues && issues.length
          ? issues.map(issue => (
            <ListItem
              key={issue._key}
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
                    {issue.title}
                  </Typography>
                }
                secondary={
                  <Typography component="div">
                    <Typography component="p" variant="body1">
                      {issue.description}
                    </Typography>
                    {issue.link ? issue.link.includes("http") || issue.link.includes("mailto") ? (
                      <>
                        <Button
                          onClick={handleOpen}
                          sx={{ marginTop: 4 }}
                        >
                          Learn more about&nbsp;
                          <Typography
                            variant="body1"
                            component="span"
                            sx={visuallyHidden}
                          >
                            {issue.title}
                          </Typography>
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="visit-external-link"
                          aria-describedby="visit-external-link-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="visit-external-link"
                              variant="h2"
                              component="h2"
                              sx={{
                                color: "secondary.main",
                                position: "relative",
                                ":after": {
                                  backgroundColor: "info.main",
                                  bottom: "-30px",
                                  content: "''",
                                  height: 12,
                                  left: 0,
                                  position: "absolute",
                                  width: 104
                                }
                              }}
                            >
                              You are now leaving this site
                            </Typography>
                            {issue.externalLinkText ? (
                              <Typography id="visit-external-link-description" sx={{ mt: 6 }}>
                                {issue.externalLinkText}
                              </Typography>
                            ) : null}
                            <Button
                              href={issue.link}
                              sx={{ marginTop: 4 }}
                              target="_blank"
                              onClick={handleClose}
                            >
                              Continue
                              <Typography
                                variant="body1"
                                component="span"
                                sx={visuallyHidden}
                              >
                                to the external site
                              </Typography>
                            </Button>
                            <Button
                              sx={{ color: "primary.light", marginLeft: 4, marginTop: 4 }}
                              onClick={handleClose}
                              variant="outlined"
                            >
                              Stay here
                            </Button>
                          </Box>
                        </Modal>
                      </>
                    ) : (
                      <Button
                        href={issue.link ? issue.link : "#"}
                        sx={{ marginTop: 4 }}
                      >
                        Learn more about&nbsp;
                        <Typography
                          variant="body1"
                          component="span"
                          sx={visuallyHidden}
                        >
                          {issue.title}
                        </Typography>
                      </Button>
                    ) : null } 
                  </Typography>
                }
              />
            </ListItem>
          ))
          : null}
      </List>
    </Container >
  );
}
