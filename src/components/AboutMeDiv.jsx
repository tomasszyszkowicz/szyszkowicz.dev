import React, { useState } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";

const AboutMeDiv = ({ isVisible }) => {
    const [isVisibleState, setIsVisibleState] = useState(false);

    const handleMove = () => {
        setIsVisibleState(!isVisible);
    };

    return (
        <div className={`about-me-div ${isVisible ? 'visible' : ''}`}>
            <div className="content-line">
                <h1>About me</h1>
            </div>
            <div className="header-button" onClick={handleMove}>Click to see more</div>
        </div>
    );
};

export default AboutMeDiv;
