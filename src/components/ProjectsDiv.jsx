import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";
import InnerContentDiv from "./InnerContentDiv";
import ContentImage from "./ContentImage";
import NavigationDiv from "./NavigationDiv";

const ProjectsDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);

    React.useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved3' : ''}`}>
            <h1>Projects</h1>
            <div className="inner-content-div-wrapper">
                <InnerContentDiv index={1}>
                    <h2 className="left-align">Speedcubing</h2>
                    <ContentImage src="speedcubing.jpg" imgClass="right-image" />
                    <p className="left-align">
                        I'm a speedcuber since 2016. Since thcompetitions. Lorem ipsum dolor sit amet gff dgdf fdg dgd gfd gdfsectetur adipisicing elit. Quae excepturi aspernatur obcaecati hic cumque voluptates atque et consequatur dict Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quis quo animi autem consectetur neque consequuntur veniam aliquam tempora quibusdam impedit, ea eaque beatae dolorem, molestias nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident temporibus cupiditate autem obcaecati deserunt suscipit voluptate neque repellat labore, laudantium dignissimos eius veritatis fugit corporis error, harum amet incidunt. , dolores repellendus?a repudiandae ipsum, aperiam possimus provident, accusamus ad. Iste enim ratione ea. hm hm hm hm hm
                    </p>
                </InnerContentDiv>
            </div>
            <NavigationDiv>
                <button className="header-button" style={{ border: 'solid 1px white', margin: '10px' }}>▲</button>
                <button className="header-button" style={{ border: 'solid 1px white', margin: '10px' }}>▼</button>
            </NavigationDiv>

        </div>
    );
};

export default ProjectsDiv;