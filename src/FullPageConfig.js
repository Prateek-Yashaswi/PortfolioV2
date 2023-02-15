import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import CustomNavbar from "./components/navbar/CustomNavbar";
import Home from "./components/home/Home";
import MoreInformation from "./components/information/MoreInformation";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const FullPageConfig = () => {
  const ContentStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ ContentStyle }}>
          <CustomNavbar />
          <Home />
        </FullpageSection>

        <FullpageSection style={{ ContentStyle }}>
          <MoreInformation />
        </FullpageSection>

        <FullpageSection style={{ ContentStyle }}>
          <Skills></Skills>
        </FullpageSection>

        <FullpageSection style={{ ContentStyle }}>
          <Projects></Projects>
        </FullpageSection>

        <FullpageSection style={{ ContentStyle }}>
          <h1>Reach</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageConfig;
