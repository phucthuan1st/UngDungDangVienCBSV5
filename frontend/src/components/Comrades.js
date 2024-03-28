import { React } from "react";
import { Outlet } from "react-router-dom";
import "../styles/ComradeProfiles.css";
import Section from "./Section";

const ComradesProfile = () => {
  const Content = () => {
    return <Outlet />;
  };

  return (
    <Section
      sectionId={"ComradesProfile"}
      sectionName={"Thong tin Dang vien"}
      sectionContent={Content}
    />
  );
};

export default ComradesProfile;
