import React from "react";

import { HomepageContainer } from "./homepage.styles";
import TitleSection from "./../../components/homepage-sections/title.component";
import OverviewSection from "../../components/homepage-sections/section-overview.component";

const Homepage = () => {
  return (
    <HomepageContainer>
      <TitleSection />
      <OverviewSection />
    </HomepageContainer>
  );
};

export default Homepage;
