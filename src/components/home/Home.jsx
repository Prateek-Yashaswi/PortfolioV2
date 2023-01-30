import { GitHub, LinkedIn } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import TextScrambler from "react-scramble-text";
import "../home/Home.css";
import { Button, Divider, Tooltip } from "@mui/material";
import { green, blue } from "@mui/material/colors";
import { Box } from "@mui/system";

function Home() {
  const phrases = [
    "A Web Developer",
    "An Application Developer",
    "A Frontend Developer",
    "A Backend Developer",
  ];

  return (
    <div id="parent">
      <div id="avatar"></div>
      <div id="details">
        <h1>Prateek Yashaswi</h1>
        <h6>I am</h6>
        <h4>
          <TextScrambler phrases={phrases} speed={30} pauseTime={800} />
        </h4>
        <hr></hr>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: "background.paper",
            color: "text.secondary",
            "& svg": {
              m: 1.5,
            },
            "& hr": {
              mx: 0.5,
            },
          }}
        >
          <Tooltip title="Github">
            <IconButton
              aria-label="Github"
              size="large"
              sx={{ color: green[500] }}
            >
              <GitHub fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton
              aria-label="LinkedIn"
              size="large"
              sx={{ color: blue[500] }}
            >
              <LinkedIn fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="outlined" color="success">
            Download CV
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Home;
