import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";

const InnerContentDiv = ({ children, visibilityAndIndexChange }) => {
    const [movementClass, setMovementClass] = useState('translate-left');

    useEffect(() => {
        if (visibilityAndIndexChange.isVisible && visibilityAndIndexChange.indexChange === 'increased') {
            setMovementClass('translate-left-ready');
            setMovementClass('');
        } else if (visibilityAndIndexChange.isVisible && visibilityAndIndexChange.indexChange === 'decreased') {
            setMovementClass('translate-right-ready');
            setMovementClass('');
        } else if (!visibilityAndIndexChange.isVisible && visibilityAndIndexChange.indexChange === 'increased') {
            setMovementClass('translate-left');
        } else if (!visibilityAndIndexChange.isVisible && visibilityAndIndexChange.indexChange === 'decreased') {
            setMovementClass('translate-right');
        }
    }, [visibilityAndIndexChange]);

    return (
        <div className={`inner-content-div ${movementClass}`}>
            {children}
        </div>
    );
};

export default InnerContentDiv;

