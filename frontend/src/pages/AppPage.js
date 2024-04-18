import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "../styles/AppPage.css";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Candidates from "../components/Candidates";
import Comrades from "../components/Comrades";
import Overview from "../components/Overview";
import Documents from "../components/Documents";
import Events from "../components/Events";
import Forms from "../components/Forms";
import { appRoutes } from "../constants/routes";

// App components
import ComradeProfile from "../components/ComradeProfile";
import ComradeProfilesTable from "../components/ComradeProfilesTable";
import CandidateProfile from "../components/CandidateProfile.js";
import CandidateProfilesTable from "../components/CandidateProfilesTable.js";

const AppPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Extracting the section from the current path
    const pathSections = location.pathname.split("/");
    setActiveSection(pathSections[2]); // Using index 1 to get the second element
  }, [location.pathname]);

  return (
    <div className="AppPage">
      <div className="TopbarContainer">
        <Topbar />
      </div>
      <div className="ContentContainer">
        <div className="LeftSidebar">
          <Sidebar activeSection={activeSection} />
        </div>
        <div className="RightContent">
          <Routes>
            <Route path={appRoutes.CANDIDATES} element={<Candidates />}>
              <Route path=":candidateId" element={<CandidateProfile />} />
              <Route path="" element={<CandidateProfilesTable />} />
            </Route>
            <Route path={appRoutes.COMRADES} element={<Comrades />}>
              <Route path=":comradeId" element={<ComradeProfile />} />
              <Route path="" element={<ComradeProfilesTable />} />
            </Route>
            <Route path={appRoutes.OVERVIEW} element={<Overview />} />
            <Route path={appRoutes.DOCUMENTS} element={<Documents />} />
            <Route path={appRoutes.EVENTS} element={<Events />} />
            <Route path={appRoutes.FORMS} element={<Forms />} />
            <Route
              path="*"
              element={<Navigate to={appRoutes.OVERVIEW} replace />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
