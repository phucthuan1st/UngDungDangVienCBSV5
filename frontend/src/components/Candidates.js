import React, { useState, useEffect } from "react";
import Section from "./Section";
import mockData from "../mock/mockData.json";

const CandidateProfiles = () => {
  const [data, setData] = useState([]); // State to hold comrades' data

  useEffect(() => {
    // Simulate data fetching (replace with your actual API call)
    const fetchData = async () => {
      // Replace with your actual API endpoint and handle errors appropriately
      // const response = await fetch("your-api-endpoint");
      // const jsonData = await response.json();
      // setData(jsonData);

      setData(mockData);
    };

    fetchData();
  }, []);

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Họ", accessor: "lastName" }, // Use "Họ" for Last Name in Vietnamese
    { Header: "Tên", accessor: "firstName" }, // Use "Tên" for First Name in Vietnamese
    { Header: "Email", accessor: "email" },
    { Header: "Số điện thoại", accessor: "number" }, // Use "Số điện thoại" for Number in Vietnamese
    { Header: "Ngày gia nhập", accessor: "dateJoined" }, // Use "Ngày gia nhập" for Date Joined in Vietnamese
  ];

  const CandidateProfilesContent = () => {
    return (
      <>
        {/* Replace with your preferred table library (e.g., React Table, Material UI Table) */}
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.Header}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((comrade) => (
              <tr key={comrade.id}>
                {columns.map((column) => (
                  <td key={column.accessor}>{comrade[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <Section
      sectionId={"CandidateProfiles"}
      sectionName={"Ho so Dang vu"}
      sectionContent={CandidateProfilesContent}
    />
  );
};

export default CandidateProfiles;
