import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";
import ContentImage from "./ContentImage";
import NavigationDiv from "./NavigationDiv";
import InnerContentUpDiv from "./InnerContentUpDiv";

const ProjectsDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);
    const [indexes, setIndexes] = useState([0, 1, 2]);

    React.useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    const move = (direction) => {
        if (direction === 'top') {
            setIndexes((prevIndexes) => {
                const [first, ...rest] = prevIndexes;
                return [...rest, first];
            });
        } else if (direction === 'bottom') {
            setIndexes((prevIndexes) => {
                const last = prevIndexes[prevIndexes.length - 1];
                return [last, ...prevIndexes.slice(0, -1)];
            });
        }
    };

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved3' : ''}`}>
            <h1>Projects</h1>
            <div className="inner-content-div-wrapper">
            <InnerContentUpDiv index={indexes[0]}>
                <h2 className="left-align">Speedcubing</h2>
                <ContentImage src="speedcubing.jpg" imgClass="right-image" />
                <p className="left-align">
                    I'm ompetitions. Lorem ipsum dolor sit amet gff dgdf fdg dgd gfd gdfsectetur adipisicing elit. Quae excepturi aspernatur obcaecati hic cumque voluptates atque et consequatur dict Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quis quo animi autem consectetur neque consequuntur veniam aliquam tempora quibusdam impedit, ea eaque beatae dolorem, molestias nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident temporibus cupiditate autem obcaecati deserunt suscipit voluptate neque repellat labore, laudantium dignissimos eius veritatis fugit corporis error, harum amet incidunt. , dolores repellendus?a repudiandae ipsum, aperiam possimus provident, accusamus ad. Iste enim ratione ea. hm hm hm hm hm
                </p>
            </InnerContentUpDiv>
            <InnerContentUpDiv index={indexes[1]}>
                <h2 className="right-align">Video games</h2>
                <ContentImage src="https://cdn2.steamgriddb.com/icon_thumb/e67a27ba8bb6ba92dc274342c874d373.png" imgClass="left-image-small" />
                <p className="right-align">
                    I'm a big fan of video games. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, itaque velit. Quis accusantium reiciendis libero corporis voluptate dicta ab, quae est provident reprehenderit veritatis quasi consequuntur iusto voluptatibus aut dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab minima inventore atque repellendus nostrum eos quam laudantium, aliquam fugiat nemo molestias esse dolorem delectus beatae in error ratione voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt totam quam, quo ratione doloribus facilis perferendis voluptate fugit a sint debitis. Impedit rerum veritatis dolorem amet nam delectus ea ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fuga sit alias voluptatem ad placeat ducimus excepturi cum vero molestiae sequi, voluptas expedita, quas natus! Officiis et aliquid neque ratione!.
                </p>
            </InnerContentUpDiv>
            <InnerContentUpDiv index={indexes[2]}>
                <h2 className="left-align">Speedtyping</h2>
                <p>
                    I'm also a speedtyper. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam repudiandae dolores consequuntur fugiat alias, quia rerum deserunt nemo laborum modi dolor minus voluptates vitae sed in illo veritatis. Molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio impedit consectetur dignissimos ad quam exercitationem iste ullam quos amet in, placeat harum accusantium mollitia, ut ducimus ex. Veritatis, qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aut aperiam quas sint neque consequuntur debitis sapiente consectetur? Tempora laudantium facere alias architecto asperiores ea quisqu Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis, accusamus facere, culpa commodi distinctio libero voluptates perspiciatis et amet est id dicta consequuntur asperiores ex explicabo unde nostrum aspernatur!am hic voluptates iure ut!I can type around 100 words per minute. I like to is ipsam tenetur?
                </p>
            </InnerContentUpDiv>
            </div>

            <NavigationDiv>
                <button onClick={() => move('top')} className="header-button" style={{ border: 'solid 1px white', margin: '10px' }}>▲</button>
                <button onClick={() => move('bottom')} className="header-button" style={{ border: 'solid 1px white', margin: '10px' }}>▼</button>
            </NavigationDiv>

        </div>
    );
};

export default ProjectsDiv;