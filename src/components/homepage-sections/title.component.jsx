import React, { useState } from "react";

import BusinessBox from "./business-box.component";

import {
  TitleBox,
  ContentBox,
  RightArrow,
  SkewContainer,
  ImageContainer,
  Text,
  Section,
} from "./title.styles";

const TitleSection = () => {
  const [displayText, setDisplayText] = useState(false);

  //The Compliance-Driven Safety<br></br> Solutions Company
  const handleLoad = () => {
    setDisplayText(true);
  };

  return (
    <Section>
      <TitleBox>
        <ul>
          <li>
            <h1 className="animate-title-one">
              <span>Reliant Ag</span>
            </h1>
            <h1 className="animate-title-two">Compliance</h1>

            <p className="opacity">
              One Platform. One Solution. <br></br> Making Compliance Easy.
            </p>
          </li>
          <li>
            <div className="btn-container">
              <button className="learn-more">
                Learn More <RightArrow className="icon" />
              </button>
              <button>
                Contact <RightArrow className="icon" />{" "}
              </button>
            </div>
          </li>
          <li></li>
        </ul>
      </TitleBox>
      <BusinessBox></BusinessBox>
      <ContentBox>
        <SkewContainer className="image">
          <ImageContainer>
            <Text className={displayText ? "load" : "hide"}>Agricultural</Text>
            <img
              src={require("./../../assets/farm.jpg").default}
              alt="farm"
              onLoad={handleLoad}
            />
          </ImageContainer>
        </SkewContainer>
        <SkewContainer>
          <div className="title-info">
            <h1>Specializations</h1>
          </div>
        </SkewContainer>
        <SkewContainer className="image">
          <ImageContainer>
            <Text className={displayText ? "load" : "hide"}>Industrial</Text>
            <img
              src={require("./../../assets/welder.jpg").default}
              alt="farm"
              onLoad={handleLoad}
            />
          </ImageContainer>
        </SkewContainer>
      </ContentBox>
    </Section>
  );
};

export default TitleSection;
