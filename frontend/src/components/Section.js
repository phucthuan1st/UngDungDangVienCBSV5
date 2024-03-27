import React from "react";

const Section = ({ sectionId, sectionName, sectionContent }) => {
  return (
    <div className="Section" id={sectionId}>
      <div className="Title">{sectionName}</div>
      <div className="Content">{sectionContent()}</div>
    </div>
  );
};

export default Section;
