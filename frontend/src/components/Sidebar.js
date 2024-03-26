import React from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../constants/routes";
import "../styles/Sidebar.css";

const Sidebar = ({ activeSection }) => {
    const navigate = useNavigate();

    const menuItems = [
        { route: appRoutes.OVERVIEW, label: "Tổng quan" },
        { route: appRoutes.COMRADES, label: "Hồ sơ Đảng viên" },
        { route: appRoutes.CANDIDATES, label: "Hồ sơ Đảng vụ" },
        { route: appRoutes.EVENTS, label: "Sự kiện sắp tới" },
        { route: appRoutes.DOCUMENTS, label: "Tài liệu" },
        { route: appRoutes.FORMS, label: "Biểu mẫu" },
    ];

    const handleItemClick = (route) => {
        // Navigate to the clicked route
        navigate(route);
    };

    return (
        <ul>
            {menuItems.map((item) => (
                <li
                    key={item.route}
                    className={activeSection === item.route ? "active" : ""}
                    onClick={() => handleItemClick(item.route)}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
};

export default Sidebar;
