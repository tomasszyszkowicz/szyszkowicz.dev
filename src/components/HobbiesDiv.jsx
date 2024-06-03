import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";
import InnerContentDiv from "./InnerContentDiv";

const HobbiesDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    const increaseIndex = () => {
        if (currentIndex === 1) {
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved4' : ''}`}>
            <h1>Hobbies</h1>
            <button onClick={increaseIndex}>Index +</button>
            <InnerContentDiv isVisible={currentIndex === 0}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum suscipit, delectus soluta ut ipsa impedit cumque possimus sunt corrupti, aliquam nemo dolorum sapiente esse dolores autem totam, eius ullam!</p>
            </InnerContentDiv>
            <InnerContentDiv isVisible={currentIndex === 1}>
                <p>hi</p>
            </InnerContentDiv>
        </div>
    );
};

export default HobbiesDiv;
