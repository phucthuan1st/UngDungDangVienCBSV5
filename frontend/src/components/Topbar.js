import React from "react";
import "../styles/Topbar.css";
import NotiButton from "../images/NotificationButtonLogo.jpg";

const Topbar = () => {
    return (
        <div className="Topbar">
            <div className="Logo">
                <img
                    src="https://en.hcmus.edu.vn/wp-content/uploads/2022/07/Logo-01.png"
                    alt="HCMUS"
                />
            </div>
            <div className="Navigation">
                <div className="NavButton">
                    <img
                        src="https://www.pngrepo.com/png/384670/512/account-avatar-profile-user.png"
                        alt="Avatar"
                    />
                </div>
                <div className="NavButton">
                    <img src={NotiButton} alt="Notification" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
