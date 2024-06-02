import React from "react";
import "../css/topContainer.css";
import TopContainerChild from "./TopContainerChild";
import HeaderButton from "./HeaderButton";
import HeaderHeader from "./HeaderHeader";
import Logo from "./Logo";

const TopContainer = ({ }) => {
    return (
        <div className="top-container">
            <TopContainerChild>
                <HeaderHeader />
            </TopContainerChild>
            <TopContainerChild>
                <HeaderButton text="About me" />
                <HeaderButton text="Projects" />
                <HeaderButton text="Hobbies" />
            </TopContainerChild>
            <TopContainerChild>
                <Logo
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    link="https://github.com/tomasszyszkowicz"
                ></Logo>
                <Logo
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                    link="https://www.linkedin.com/in/tom%C3%A1%C5%A1-szyszkowicz-50b7a7243/"
                ></Logo>
            </TopContainerChild>
        </div>
    );
};

export default TopContainer;