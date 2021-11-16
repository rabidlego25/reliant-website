import React from "react";

import {
  BusinessContent,
  ContentCircle,
  FrameSpecialization,
} from "./business-box.styles";

import { GiFarmTractor, GiHammerNails } from "react-icons/gi";

const BusinessBox = () => {
  return (
    <BusinessContent>
      <ContentCircle>
        <FrameSpecialization className="center-flex">
          <div className="specialize-box agricultural">
            <div className="one-third">
              <div className="img-container">
                <GiFarmTractor className="icon" />
              </div>
            </div>
            <div className="two-thirds">
              <h1>Agricultural</h1>
              <button className="overview">Overview</button>
            </div>
          </div>
          <div className="title-box">
            <span>
              <em>Specialized Versatility</em>
            </span>
          </div>
          <div className="specialize-box industrial">
            <div className="one-third">
              <div className="img-container">
                <GiHammerNails className="icon" />
              </div>
            </div>
            <div className="two-thirds">
              <h1>Industrial</h1>
              <button className="overview">Overview</button>
            </div>
          </div>
        </FrameSpecialization>
      </ContentCircle>
    </BusinessContent>
  );
};

export default BusinessBox;
