import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";

const InnerContentUpDiv = ({ children, index }) => {
    const [movementClass, setMovementClass] = useState('translate-top');
    const [lastIndex, setLastIndex] = useState(index);

    useEffect(() => {
        console.log(index);
        if (index === 0) {
            if (lastIndex === 2) {
                setMovementClass('translate-top-ready');
                console.log("hi")
            } else {
                setMovementClass('translate-top');
            }
        } else if (index === 1) {
            setMovementClass('');
        } else if (index === 2){
            if (lastIndex === 0) {
                setMovementClass('translate-bottom-ready');
            } else {
                setMovementClass('translate-bottom ');
            }
        }

        setLastIndex(index);

    } , [index]);

    return (
        <div className={`inner-content-div-secondary ${movementClass}`}>
            {children}
        </div>
    );
};

export default InnerContentUpDiv;
