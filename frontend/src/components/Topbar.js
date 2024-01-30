import React from "react";
import "../styles/Topbar.css";
import NotiButton from "../images/NotificationButtonLogo.jpg";
import Logo from "../images/Logo.png";

const Topbar = () => {
    return (
        <div className="Topbar">
            <div className="Logo">
                <img src={Logo} alt="HCMUS" />
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
