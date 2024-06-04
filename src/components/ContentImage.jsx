import React from "react";
import "../css/images.css";

const ContentImage = ({ src, imgClass }) => {
    
    return (
        <img className={imgClass} src={src}>
            
        </img>
    );
};

export default ContentImage;
