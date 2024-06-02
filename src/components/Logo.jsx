import React from "react";
import "../css/logo.css";

const Logo = ({ src, link }) => {
    return (
        <a href={link} target="_blank">
            <img className="logo" src={src} alt="Logo" />
        </a>
    );
};

export default Logo;