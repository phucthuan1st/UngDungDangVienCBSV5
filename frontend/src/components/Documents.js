import React from "react";
import Section from "./Section";

const Documents = () => {
  const DocumentsContent = () => {
    return <div className="DocumentsContent"></div>;
  };

  return (
    <Section
      sectionId={"Documents"}
      sectionName={"Tai lieu"}
      sectionContent={DocumentsContent}
    />
  );
};

export default Documents;
