import React from "react";
import { SPEEDCUBING_EN, VIDEO_GAMES_EN } from "../text";

const HeaderButton = ({ english, textType }) => {

    if (textType === "speedcubing") {
        var text = english ? SPEEDCUBING_EN : SPEEDCUBING_CZ;
    } else if (textType === "videoGames") {
        var text = english ? VIDEO_GAMES_EN : VIDEO_GAMES_CZ;
    }
    
    return (
        <p>
            {text}
        </p>
    );
};

export default HeaderButton;