import React from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";

const ContentDiv = () => {
    return (
        <div className="content-div">
            <div className="content-line">
                <p style={{ marginLeft: '100px' }}>Full-stack web developer</p>
                <div className="vertical-line"></div>
                <h1 className="name">
                    Tomáš<br />Szyszkowicz
                </h1>
            </div>
            <div className="header-button">Click to see more</div>
        </div>
    );
};

export default ContentDiv;