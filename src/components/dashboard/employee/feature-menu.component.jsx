import React from "react";

import {
  MenuWrapper,
  TitleContainer,
  ButtonContainer,
  ToggleContainer,
  AddIcon,
  ConductIcon,
} from "./feature-menu.styles";

const FeatureMenu = () => {
  return (
    <MenuWrapper>
      <TitleContainer>
        <h1 className="title-one">Employees</h1>
        <h1 className="title-two">Table</h1>
      </TitleContainer>
      <ButtonContainer>
        <button onClick={() => {}}>
          <AddIcon />
          <h3>Add Employees</h3>
        </button>
        <button onClick={() => {}}>
          <ConductIcon />
          <h3>Conduct Training</h3>
        </button>
      </ButtonContainer>
      <ToggleContainer></ToggleContainer>
    </MenuWrapper>
  );
};

export default FeatureMenu;
