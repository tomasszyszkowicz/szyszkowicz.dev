import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";
import InnerContentDiv from "./InnerContentDiv";
import ContentImage from "./ContentImage";
import NavigationDiv from "./NavigationDiv";
import Paragraph from "./Paragraph";

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
    }, [indexes]);

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved4' : ''}`}>
            <h1>Hobbies</h1>
            <div className="inner-content-div-wrapper">
                <InnerContentDiv index={indexes[0]}>
                    <h2 className="left-align">Speedcubing</h2>
                    <ContentImage src="speedcubing.jpg" imgClass="right-image" />
                    <Paragraph english={ true } textType={ "speedcubing" }>
                    </Paragraph>
                </InnerContentDiv>
                <InnerContentDiv index={indexes[1]}>
                    <h2 className="right-align">Video games</h2>
                    <ContentImage src="https://cdn2.steamgriddb.com/icon_thumb/e67a27ba8bb6ba92dc274342c874d373.png" imgClass="left-image-small" />
                    <Paragraph english={ true } textType={ "videoGames" }>
                    </Paragraph>
                </InnerContentDiv>
                <InnerContentDiv index={indexes[2]}>
                    <h2 className="left-align">Speedtyping</h2>
                    <p>
                    I'm also a speedtyper. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam repudiandae dolores consequuntur fugiat alias, quia rerum deserunt nemo laborum modi dolor minus voluptates vitae sed in illo veritatis. Molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio impedit consectetur dignissimos ad quam exercitationem iste ullam quos amet in, placeat harum accusantium mollitia, ut ducimus ex. Veritatis, qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aut aperiam quas sint neque consequuntur debitis sapiente consectetur? Tempora laudantium facere alias architecto asperiores ea quisqu Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis, accusamus facere, culpa commodi distinctio libero voluptates perspiciatis et amet est id dicta consequuntur asperiores ex explicabo unde nostrum aspernatur!am hic voluptates iure ut!I can type around 100 words per minute. I like to is ipsam tenetur?
                    </p>
                </InnerContentDiv>
            </div>
            <NavigationDiv>
                <button onClick={() => move('right')} className="header-button" style={{ border: 'solid 1px white', margin: '10px' }}>◀</button>
                <button onClick={() => move('left')} className="header-button" style={{ border: 'solid 1px white', margin: '10px' }}>▶</button>
            </NavigationDiv>

        </div>
    );
};

export default HobbiesDiv;



