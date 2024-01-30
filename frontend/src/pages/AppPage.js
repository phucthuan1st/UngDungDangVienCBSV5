import { useState, React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../styles/AppPage.css";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Candidates from "../components/Candidates";
import Comrades from "../components/Comrades";
import Dashboard from "../components/Dashboard";
import Documents from "../components/Documents";
import Events from "../components/Events";
import Forms from "../components/Forms";
import { appRoutes } from "../constants/routes";

const AppPage = () => {
    return (
        <div className="AppPage">
            <div className="TopbarContainer">
                <Topbar />
            </div>
            <div className="ContentContainer">
                <div className="LeftSidebar">
                    <Sidebar />
                </div>
                <div className="RightContent">
                    <Routes>
                        <Route
                            path={appRoutes.CANDIDATES}
                            element={<Candidates />}
                        />
                        <Route
                            path={appRoutes.COMRADES}
                            element={<Comrades />}
                        />
                        <Route
                            path={appRoutes.DASHBOARD}
                            element={<Dashboard />}
                        />
                        <Route
                            path={appRoutes.DOCUMENTS}
                            element={<Documents />}
                        />
                        <Route path={appRoutes.EVENTS} element={<Events />} />
                        <Route path={appRoutes.FORMS} element={<Forms />} />
                        <Route
                            path="*"
                            element={
                                <Navigate to={appRoutes.DASHBOARD} replace />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AppPage;
