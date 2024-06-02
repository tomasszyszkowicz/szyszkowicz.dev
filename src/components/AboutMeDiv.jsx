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
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non similique, atque totam nam illo magnam consequatur! Sapiente, nisi sit saepe repudiandae facere sint numquam, voluptas, alias adipisci molestias ipsum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi in, laboriosam quae quo placeat accusamus quia voluptas officia laborum harum provident consequuntur ducimus obcaecati impedit facilis odio repudiandae, ratione accusantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam illum veritatis doloremque quidem ipsa repellendus debitis, ducimus ab ea quisquam nesciunt voluptates! Necessitatibus, voluptas quam quod et consequuntur architecto iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos assumenda neque recusandae nesciunt animi numquam laboriosam possimus laudantium quia ullam voloremluptate unde aperiam odit est vitae, dolorum quisquam fugit!</p>
        </div>
    );
};

export default AboutMeDiv;
