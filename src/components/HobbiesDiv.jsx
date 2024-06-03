import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";
import InnerContentDiv from "./InnerContentDiv";

const HobbiesDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);
    const [indexes, setIndexes] = useState([0, 1, 2]);

    useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    const move = (direction) => {
        if (direction === 'right') {
            setIndexes((prevIndexes) => {
                const [first, ...rest] = prevIndexes;
                return [...rest, first];
            });
        } else if (direction === 'left') {
            setIndexes((prevIndexes) => {
                const last = prevIndexes[prevIndexes.length - 1];
                return [last, ...prevIndexes.slice(0, -1)];
            });
        }
    };

    useEffect(() => {
        console.log(indexes);
    } , [indexes]);

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved4' : ''}`}>
            <h1>Hobbies</h1>
            <button onClick={() => move('left')}>Index +</button>
            <button onClick={() => move('right')}>Index -</button>
            <InnerContentDiv index={indexes[0]}>
                <p>tomasektomasektomasektomasektomasektomasek
                tomasektomasektomasektomasektomasektomasek
                tomasektomasektomasektomasektomasektomasek
                tomasektomasektomasektomasektomasektomasek
                </p>
            </InnerContentDiv>
            <InnerContentDiv index={indexes[1]}>
                <p>chujovychujchujovychujchujovychuj faf fafafda
                     fadfa dafdasfugyagufd hgfaghuf
                     dahgf guydg gdg dhgadg ghda'
                     udyafg yugdauygdfadasuyg 
                </p>
            </InnerContentDiv>
            <InnerContentDiv index={indexes[2]}>
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
            </InnerContentDiv>
        </div>
    );
};

export default HobbiesDiv;



