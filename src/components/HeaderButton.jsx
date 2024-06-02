import React from "react";
import "../css/headerButton.css";

const HeaderButton = ({ text }) => {
    return (
        <div className="header-button">
            <span>{text}</span>
        </div>
    );
};

export default HeaderButton;
