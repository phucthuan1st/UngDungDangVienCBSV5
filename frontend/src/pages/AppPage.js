import { useState, React } from "react";
import "../styles/AppPage.css";
import Topbar from "../components/Topbar";

const AppPage = () => {
    return (
        <div className="AppPage">
            <div className="TopbarContainer">
                <Topbar />
            </div>
            <div className="ContentContainer">
                <div className="Sidebar"></div>
                <div className="Content"></div>
            </div>
        </div>
    );
};

export default AppPage;
