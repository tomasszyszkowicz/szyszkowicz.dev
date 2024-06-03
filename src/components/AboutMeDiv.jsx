import React, { useState, useEffect } from "react";
import "../css/contentDiv.css";
import "../css/headerButton.css";

const AboutMeDiv = ({ isVisible }) => {
    const [isMoved, setIsMoved] = useState(true);

    React.useEffect(() => {
        if (!isVisible) {
            setIsMoved(true);
        } else {
            setIsMoved(false);
        }
    }, [isVisible]);

    return (
        <div className={`content-div-secondary ${isMoved ? 'moved2' : ''}`}>
            <h1 style={{textAlign: 'right'}}>About me</h1>
            <h2>Hi! My name is Tomáš!</h2>
            <p>I'm full-stack web developer living in Czech Republic.</p>
            <p>I currently work as a Junior Developer in company, 
                located in Ostrava. My favourite languages are Python, 
                Java, JavaScript. I'm programmer for about a year. 
                Programming is my hobby and I like to turn my ideas into 
                reality with it. In my free time I work
                 on small fun projects which I then use in my portfolio,
                  which you can see in the Projects tab.</p>
            <p>I also enjoy other activities such as speedcubing, playing video games,
                speedtyping and some psychical activities like going to gym or running.
                I'm also a big fan of combat sports like MMA or boxing. I like to watch
                fights and also train some of the techniques in my free time.
            </p>
        </div>
    );
};

export default AboutMeDiv;
