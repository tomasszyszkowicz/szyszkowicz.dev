import React from "react";
import TopContainer from "./components/TopContainer";
import Content from "./components/ContentDiv";
import AboutMeDiv from "./components/AboutMeDiv";

const App = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  }

  React.useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  return (
    <div className="App">
      <TopContainer handleClick={handleClick}>
      </TopContainer>
      <Content handleClick={handleClick} isVisible={activeIndex === 0}>
      </Content>
      <AboutMeDiv isVisible={activeIndex === 1}>
      </AboutMeDiv>
    </div>
  );
};

export default App;
