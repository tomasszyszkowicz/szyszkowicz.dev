import React, { useState } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";

const ContentDiv = ({ handleClick, isVisible}) => {
    const [isMoved, setIsMoved] = useState(false);

    const handleMove = () => {
        handleClick(1);
    };

    React.useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    return (
        <div className={`content-div ${isMoved ? 'moved' : ''}`}>
            <div className="content-line">
                <p style={{ marginLeft: '100px' }}>Full-stack web developer</p>
                <div className="vertical-line"></div>
                <h1 className="name">
                    Tomáš<br />Szyszkowicz
                </h1>
            </div>
            <div className="header-button" onClick={handleMove}>Click to see more</div>
        </div>
    );
};

export default ContentDiv;
