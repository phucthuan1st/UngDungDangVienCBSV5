import React, { useEffect, useState } from "react";
import mockData from "../mock/templates.json";
import "../styles/Documents.css";

const Documents = () => {
  const [documentItems, setDocumentItems] = useState([]);

  useEffect(() => {
    const fetchDocumentItems = async () => {
      try {
        //const response = await fetch("../mock/template.json");
        //const data = await response.json();
        setDocumentItems(mockData);
      } catch (error) {
        console.log("Error fetching document items:", error);
      }
    };

    fetchDocumentItems();
  }, []);

  return (
    <div className="Section" id="Documents">
      <div className="Title">Biểu mẫu</div>
      <div className="Content">
        <div className="Documents">
          {documentItems.map((document, index) => (
            <div className="Card" key={index}>
              <div className="CardTitle">{document.name}</div>
              {document.description && (
                <div className="CardDescription">{document.description}</div>
              )}
              <div className="CardAuthor">Author: {document.author}</div>
              <a
                href={document.link}
                target="_blank"
                rel="noopener noreferrer"
                className="CardLink"
              >
                Open Document
              </a>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Documents;
