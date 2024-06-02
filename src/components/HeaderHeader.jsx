import React from "react";
import "../css/headerHeader.css";

const HeaderButton = ({ handleClick }) => {
    return (
        <div className="header-header" onClick={handleClick}>
            <b><span>Tomáš Szyszkowicz</span></b>
        </div>
    );
};

export default HeaderButton;