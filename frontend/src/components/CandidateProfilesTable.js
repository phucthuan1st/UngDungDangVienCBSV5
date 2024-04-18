import { React, useEffect, useState } from "react";
import mockData from "../mock/mockCandidateData.json";
import { Link } from "react-router-dom";
import "../styles/ProfileTable.css";

const CandidateProfilesTable = () => {
  const columns = [
    { Header: "ID", accessor: "ProfileId" },
    { Header: "Họ", accessor: "LastName" },
    { Header: "Tên", accessor: "FirstName" },
    { Header: "MSCB/MSSV", accessor: "SchoolId" },
    { Header: "Ngày sinh", accessor: "Birthday" },
    { Header: "Gioi tinh", accessor: "Gender" },
    { Header: "Quê quán", accessor: "Hometown" },
    { Header: "Vai trò", accessor: "RoleName" },
    { Header: "Số điện thoại", accessor: "PhoneNumber" },
    { Header: "Email", accessor: "Email" },
    { Header: "Ngay cap nhat", accessor: "LastUpdateDate" },
  ];

  const [data, setData] = useState([]); // State to hold candidates' data
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
          {data.map((candidate) => (
            <tr key={candidate.id}>
              {columns.map((column) => {
                // Check if it's the ID column
                if (column.accessor === "ProfileId") {
                  return (
                    <td key={column.accessor}>
                      <Link to={`${candidate.ProfileId}`}>
                        &rarr; {candidate[column.accessor]} &larr;
                      </Link>
                    </td>
                  );
                } else {
                  return (
                    <td key={column.accessor}>{candidate[column.accessor]}</td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CandidateProfilesTable;
