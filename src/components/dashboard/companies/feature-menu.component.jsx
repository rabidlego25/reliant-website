import React from "react";

import { MenuWrapper, CompAdd } from "./feature-menu.styles";

const FeatureMenu = () => {
  return (
    <MenuWrapper>
      <button>
        <CompAdd />
        Add Client
      </button>
    </MenuWrapper>
  );
};

export default FeatureMenu;
