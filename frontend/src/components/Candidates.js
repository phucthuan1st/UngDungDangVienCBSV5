import { React } from "react";
import { Outlet } from "react-router-dom";
import "../styles/ComradeProfiles.css";
import Section from "./Section";

const CandidatesProfile = () => {
  const Content = () => {
    return <Outlet />;
  };

  return (
    <Section
      sectionId={"CandidatesProfile"}
      sectionName={"Ho so Dang vu"}
      sectionContent={Content}
    />
  );
};

export default CandidatesProfile;
