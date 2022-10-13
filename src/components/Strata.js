// Base imports
import React, { useState } from 'react'

// Sanity.io imports
import { PortableText } from '@portabletext/react'

// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

const style = {
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  left: '50%',
  maxWidth: 900,
  p: 4,
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
};

export default function Strata(props) {
  const { title, description, bold, buttonText, buttonLink } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const serializers = {
    marks: {
      button: ({ value, children }) => {
        const href = `${value.url}`
        return <a className="block-button" href={href}>{children}</a>
      },
      link: ({ value, children }) => {
        const href = `${value.url}`

        if (value.url && (value.url.includes("http") || value.url.includes("mailto"))) {
          return (
            <>
              <Link
                onClick={(event) => {
                  event.preventDefault();
                  handleOpen();
                }}
                href={value.url}
                sx={{ backgroundColor: "unset", marginTop: 4 }}
              >
                {children}
              </Link>
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
                      mb: 4,
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
                  {value.externalLinkText ? (
                    <Typography id="visit-external-link-description" sx={{ mt: 6 }}>
                      {value.externalLinkText}
                    </Typography>
                  ) : null}
                  <Button
                    href={value.url}
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
          )
        } else {
          return <a href={href}>{children}</a>
        }
      },
    }
  }

  return (
    <Container sx={{ marginBottom: 10, marginTop: { xs: 18, md: 6 } }}>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          ":after": {
            backgroundColor: "primary.light",
            bottom: "-16px",
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
        {title}
      </Typography>
      <Typography variant="body1" className="blockcontent" component="div" sx={{ marginTop: 6 }}>
        {Array.isArray(description) ? (
          <PortableText
            value={description}
            components={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        ) : (
          description
        )}
      </Typography>
      {bold ? (
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontWeight: "bold"
          }}
        >
          {bold}
        </Typography>
      ) : null}
      {buttonText ? (
        <Button
          href={buttonLink}
          sx={{ fontSize: "18px !important", marginTop: 6 }}
        >
          {buttonText}
        </Button>
      ) : null}
    </Container>
  );
}
