import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";

const InnerContentDiv = ({ children, index }) => {
    const [movementClass, setMovementClass] = useState('translate-left');
    const [lastIndex, setLastIndex] = useState(index);

    useEffect(() => {
        console.log(index);
        if (index === 0) {
            if (lastIndex === 2) {
                setMovementClass('translate-left-ready');
            } else {
                setMovementClass('translate-left');
            }
        } else if (index === 1) {
            setMovementClass('');
        } else if (index === 2){
            if (lastIndex === 0) {
                setMovementClass('translate-right-ready');
            } else {
                setMovementClass('translate-right');
            }
        }

        setLastIndex(index);

    } , [index]);

    return (
        <div className={`inner-content-div ${movementClass}`}>
            {children}
        </div>
    );
};

export default InnerContentDiv;

