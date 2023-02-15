import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import { isMobile } from "react-device-detect";
import "../information/MoreInformation.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomElement() {
  const details = [
    {
      examName: "AISSE",
      schoolName: "D.A.V Public School",
      passingYear: "2016",
      score: "9.6 CGPA",
    },
    {
      examName: "AISSCE",
      schoolName: "B.R D.A.V Public School",
      passingYear: "2018",
      score: "80.8%",
    },
    {
      examName: "B-Tech CSE",
      schoolName: "SRM Institute Of Science And Technology",
      passingYear: "2022",
      score: "9.54 CGPA",
    },
  ];

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isMobile) {
    return (
      <div id="cards-div-m">
        <Box
          sx={{
            margin: "auto",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ minWidth: "100%", maxWidth: "100%" }}
            className="customCard"
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {details[page - 1].examName}
              </Typography>
              <Typography variant="h5" component="div">
                {details[page - 1].schoolName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {details[page - 1].score}
              </Typography>
              <Typography variant="body2">
                {details[page - 1].passingYear}
              </Typography>
            </CardContent>
          </Card>
          <div id="pagination">
            <Pagination
              count={3}
              color="secondary"
              page={page}
              onChange={handleChange}
            />
          </div>
        </Box>
      </div>
    );
  } else {
    return (
      <div id="cards-div" sx={{ marginRight: "4%" }}>
        <Stack direction="row" spacing={5}>
          <Card
            sx={{ minWidth: "30%", height: "90%" }}
            className="customCard"
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {details[0].examName}
              </Typography>
              <Typography variant="h5" component="div">
                {details[0].schoolName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {details[0].score}
              </Typography>
              <Typography variant="body2">{details[0].passingYear}</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{ minWidth: "30%", height: "90%" }}
            className="customCard"
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {details[1].examName}
              </Typography>
              <Typography variant="h5" component="div">
                {details[1].schoolName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {details[1].score}
              </Typography>
              <Typography variant="body2">{details[1].passingYear}</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{ minWidth: "30%", height: "90%" }}
            className="customCard"
            variant="outlined"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {details[2].examName}
              </Typography>
              <Typography variant="h5" component="div">
                {details[2].schoolName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {details[2].score}
              </Typography>
              <Typography variant="body2">{details[2].passingYear}</Typography>
            </CardContent>
          </Card>
        </Stack>
      </div>
    );
  }
}

function MoreInformation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="parent-moreInfo">
      <div className="sub-heading">
        <h2>About Me</h2>
      </div>
      <div id="tabs">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="scrollable auto tabs example"
              variant="scrollable"
              textColor="dark"
              indicatorColor="secondary"
            >
              <Tab label="Professional Side" {...a11yProps(0)} />
              <Tab label="The Fun Side" {...a11yProps(1)} />
              <Tab label="Achievements" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <p className="description">
              I am an IT Professional who has completed his Bachleor's in
              Computer Science And Engineering from SRM Institute of Science And
              Technology. I am currently working with Danske IT which is a fully
              owned subsidiary of the Danske Bank Group - the largest bank in
              Denmark and a leading bank in Northern Europe. My work at Danske
              involves backend development in Java using Spring boot along with
              frontend work in React.
            </p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p className="description">
              When I'm not at work, I like to spend my time exploring new dining
              places in the city. In addition, I enjoy playing online video
              games with my friends. My weekends are consumed by Formula One
              races. My all-time favourite pastime is listening to music. I love
              to go on roadtrips whenever I get the opportunity.
            </p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <p className="description">
              Me along with 3 other friends took part in an Online Hackathon
              named AGBI Healthtech Grand Challenge under the team name "Health
              Fanatics". We made Skin Cancer Detection Mobile Application using
              Flutter and managed to win the second prize and an incubation
              offer with AGBI.
            </p>
            <div id="achievement-buttons-div">
              <Stack spacing={2} direction="row">
                <Button variant="outline-secondary" size="sm">
                  Go to Their Page
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Checkout Our Project
                </Button>
              </Stack>
            </div>
          </TabPanel>
        </Box>
      </div>
      <div className="sub-heading">
        <h2>Education</h2>
      </div>
      <div id="cards">
        <CustomElement />
      </div>
    </div>
  );
}

export default MoreInformation;
