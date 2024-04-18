import { React } from "react";
import { Outlet } from "react-router-dom";
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
