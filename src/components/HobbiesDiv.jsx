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
            <InnerContentDiv index={indexes[0]}>
                <h2>Speedcubing</h2>
                <p>
                    I'm speedcuber since 2016. Since then I've been to many competitions Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi aspernatur obcaecati hic cumque voluptates atque et consequatur dicta repudiandae ipsum, aperiam possimus provident, accusamus ad. Iste enim ratione ea.
                </p>
            </InnerContentDiv>
            <InnerContentDiv index={indexes[1]}>
                <h2>Video games</h2>
                <p>
                    I'm a big fan of video games. I play games since I was a little kid. My favourite games are: The Witcher 3, Dark Souls 3, Sekiro, and many more.
                </p>
            </InnerContentDiv>
            <InnerContentDiv index={indexes[2]}>
                <h2>Speedtyping</h2>
                <p>
                    I'm also a speedtyper. I can type around 100 words per minute. I like to practice my typing skills on websites like 10fastfingers or monkeytype.
                </p>
            </InnerContentDiv>
            <div className="navigation-div">
                <button onClick={() => move('right')} className="header-button" style={{border: 'solid 1px white', margin: '10px'}}>⟨</button>
                <button onClick={() => move('left')} className="header-button" style={{border: 'solid 1px white', margin: '10px'}}>⟩</button>
            </div>
            
        </div>
    );
};

export default HobbiesDiv;



