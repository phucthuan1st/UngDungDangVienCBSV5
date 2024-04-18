import React, { useEffect, useState } from "react";
import mockData from "../mock/templates.json";
import "../styles/Forms.css";

const Forms = () => {
  const [formItems, setFormItems] = useState([]);

  useEffect(() => {
    const fetchFormItems = async () => {
      try {
        //const response = await fetch("../mock/template.json");
        //const data = await response.json();
        setFormItems(mockData);
      } catch (error) {
        console.log("Error fetching form items:", error);
      }
    };

    fetchFormItems();
  }, []);

  return (
    <div className="Section" id="Forms">
      <div className="Title">Biểu mẫu</div>
      <div className="Content">
        <div className="Forms">
          {formItems.map((form, index) => (
            <div className="Card" key={index}>
              <div className="CardTitle">{form.name}</div>
              {form.description && (
                <div className="CardDescription">{form.description}</div>
              )}
              <div className="CardAuthor">Author: {form.author}</div>
              <a
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
                className="CardLink"
              >
                Open Form
              </a>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Forms;
