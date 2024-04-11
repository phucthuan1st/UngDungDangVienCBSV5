import { React, useEffect, useState } from "react";
import mockData from "../mock/mockComradeData.json";
import { Link } from "react-router-dom";
import "../styles/ProfileTable.css";

const ComradeProfilesTable = () => {
  const columns = [
    { Header: "ID", accessor: "ProfileId" },
    { Header: "Họ", accessor: "LastName" },
    { Header: "Tên", accessor: "FirstName" },
    { Header: "Ngày sinh", accessor: "Birthday" },
    { Header: "Gioi tinh", accessor: "Gender" },
    { Header: "Quê quán", accessor: "Hometown" },
    { Header: "Ngày vào Đảng", accessor: "JoinPartyDate" },
    { Header: "Vai trò", accessor: "RoleName" },
    { Header: "Số điện thoại", accessor: "PhoneNumber" },
    { Header: "Email", accessor: "Email" },
  ];

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
            <tr key={comrade.ProfileId}>
              {columns.map((column) => {
                // Check if it's the ID column
                if (column.accessor === "ProfileId") {
                  return (
                    <td key={column.accessor}>
                      <Link to={`${comrade.ProfileId}`}>
                        &rarr; {comrade[column.accessor]} &larr;
                      </Link>
                    </td>
                  );
                } else {
                  return (
                    <td key={column.accessor}>{comrade[column.accessor]}</td>
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

export default ComradeProfilesTable;
