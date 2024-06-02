import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";

const AboutMeDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);

    React.useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved2' : ''}`}>
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos assumenda neque recusandae nesciunt animi numquam laboriosam possimus laudantium quia ullam voluptate unde aperiam odit est vitae, dolorum quisquam fugit!</p>
        </div>
    );
};

export default AboutMeDiv;
