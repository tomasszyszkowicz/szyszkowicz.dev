import React from "react";
import ReactPlayer from "react-player";
import "../css/images.css";

const ContentVideo = ({ src, imgClass }) => {

    return (
        <iframe className={imgClass} src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
    );
};

export default ContentVideo;
