import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";
import InnerContentDiv from "./InnerContentDiv";

const HobbiesDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [indexChange, setIndexChange] = useState('');

    useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    const changeIndex = (delta) => {
        const newIndex = currentIndex + delta;
        if (newIndex > 2) {
            setCurrentIndex(0);
            return;
        } else if (newIndex < 0) {
            setCurrentIndex(2);
            return;
        }
        setCurrentIndex(newIndex);
        setIndexChange(delta > 0 ? 'increased' : 'decreased'); // Set index change direction
    }

    useEffect(() => {
        console.log(currentIndex);
    } , [currentIndex]);

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved4' : ''}`}>
            <h1>Hobbies</h1>
            <button onClick={() => changeIndex(1)}>Index +</button>
            <button onClick={() => changeIndex(-1)}>Index -</button>
            <InnerContentDiv visibilityAndIndexChange={{isVisible: currentIndex === 0, indexChange: indexChange}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum suscipit, delectus soluta ut ipsa impedit cumque possimus sunt corrupti, aliquam nemo dolorum sapiente esse dolores autem totam, eius ullam!</p>
            </InnerContentDiv>
            <InnerContentDiv visibilityAndIndexChange={{isVisible: currentIndex === 1, indexChange: indexChange}}>
                <p>hi</p>
            </InnerContentDiv>
            <InnerContentDiv visibilityAndIndexChange={{isVisible: currentIndex === 2, indexChange: indexChange}}>
                <p>hi kokot</p>
            </InnerContentDiv>
            
        </div>
    );
};

export default HobbiesDiv;

