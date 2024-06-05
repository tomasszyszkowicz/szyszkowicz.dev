import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";


const NavigationDiv = ({ children }) => {
    return (
        <div className="navigation-div">
            {children}
        </div>
    );
};

export default NavigationDiv;
