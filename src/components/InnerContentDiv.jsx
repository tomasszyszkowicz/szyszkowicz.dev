import React, { useState } from "react";
import "../css/contentDiv.css";

const InnerContentDiv = ({ children, isVisible }) => {
    const [isMovedLeft, setIsMovedLeft] = useState(false);
    const [isMovedRight, setIsMovedRight] = useState(false);


    React.useEffect(() => {
        if (!isVisible) {
            setIsMovedLeft(true);
        } else {
            setIsMovedLeft(false);
        }
    }, [isVisible]);

    return (
        <div className={`inner-content-div ${isMovedLeft ? 'translate-left' : ''}`}>
            {children}
        </div>
        
    );
};

export default InnerContentDiv;