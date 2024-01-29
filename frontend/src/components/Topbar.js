import React from "react";
import "../styles/Topbar.css";

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
                    <img
                        src="https://th.bing.com/th/id/R.8dbbe98c827d1ebf266f299116380ac6?rik=7VYXcY5byUlWlQ&pid=ImgRaw&r=0"
                        alt="Notification"
                    />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
