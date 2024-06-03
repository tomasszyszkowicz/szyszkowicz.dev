import React from "react";
import "../css/topContainer.css";
import TopContainerChild from "./TopContainerChild";
import HeaderButton from "./HeaderButton";
import HeaderHeader from "./HeaderHeader";
import Logo from "./Logo";
import ContactContainer from "./ContactContainer";

const TopContainer = ({ handleClick }) => {
    return (
        <div className="top-container">
            <TopContainerChild>
                <HeaderHeader handleClick={() => handleClick(0)}/>
            </TopContainerChild>
            <TopContainerChild>
                <HeaderButton text="About me" handleClick={() => handleClick(1)}/>
                <HeaderButton text="Projects" handleClick={() => handleClick(2)}/>
                <HeaderButton text="Hobbies" handleClick={() => handleClick(3)}/>
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
                <ContactContainer></ContactContainer>
            </TopContainerChild>
        </div>
    );
};

export default TopContainer;
