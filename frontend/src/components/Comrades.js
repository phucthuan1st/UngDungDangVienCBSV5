import { React, useEffect, useState } from "react";
import "../styles/ComradeProfiles.css";

const ComradesProfile = () => {
    const [data, setData] = useState([]); // State to hold comrades' data

    // Mock data (replace with your actual data fetching logic)
    const mockData = [
        {
            id: 1,
            lastName: "Nguyễn",
            firstName: "Văn A",
            email: "vana@example.com",
            number: "+84123456789",
            dateJoined: "2023-01-01",
        },
        {
            id: 2,
            lastName: "Lê",
            firstName: "Thị B",
            email: "thib@example.com",
            number: "+84987654321",
            dateJoined: "2022-05-15",
        },
        // ... add more mock data objects
    ];

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
    }, [mockData]);

    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Họ", accessor: "lastName" }, // Use "Họ" for Last Name in Vietnamese
        { Header: "Tên", accessor: "firstName" }, // Use "Tên" for First Name in Vietnamese
        { Header: "Email", accessor: "email" },
        { Header: "Số điện thoại", accessor: "number" }, // Use "Số điện thoại" for Number in Vietnamese
        { Header: "Ngày gia nhập", accessor: "dateJoined" }, // Use "Ngày gia nhập" for Date Joined in Vietnamese
    ];
    return (
        <div className="Section" id="ComradeProfiles">
            <div className="Title">Hồ sơ Đảng viên </div>
            <div className="Content">
                <div className="Content">
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
                                        <td key={column.accessor}>
                                            {comrade[column.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComradesProfile;
