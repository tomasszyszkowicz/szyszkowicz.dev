import React from "react";
import "../css/headerButton.css";

const HeaderButton = ({ text, handleClick }) => {
    return (
        <div className="header-button" onClick={handleClick}>
            <span>{text}</span>
        </div>
    );
};

export default HeaderButton;
