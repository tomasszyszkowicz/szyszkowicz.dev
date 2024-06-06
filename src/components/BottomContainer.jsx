import React from "react";
import "../css/bottomContainer.css";
import BottomContainerChild from "./BottomContainerChild";

const BottomContainer = ({}) => {
    return (
        <div className="bottom-container">
            <BottomContainerChild>
                <p>© 2024 Tomáš Szyszkowicz. All rights reserved.</p>
            </BottomContainerChild>
        </div>
    );
};

export default BottomContainer;