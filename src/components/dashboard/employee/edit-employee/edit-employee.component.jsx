import React, { useState, useRef } from "react";

import {
  CloseIcon,
  CloseIconContainer,
  ContentContainer,
  EmployeeIcon,
  FormContainer,
  StyledInfographics,
  Modal,
  Tab,
  TabContainer,
  TitleContainer,
  StyledTrainings,
  Wrapper,
} from "./edit-employee.styles";

const Infographics = ({ data }) => {
  return (
    <StyledInfographics>
      <div>
        <div className="field title">
          <h2 className="company">{data.companyName} </h2>
          <h5>Emp No: {data.uuid.slice(0, 10)}</h5>
        </div>
        <div className="field">
          <label htmlFor="firstName">First Name </label>
          <input id="firstName" defaultValue={data.firstName} />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name </label>
          <input id="lastName" defaultValue={data.lastName} />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Trained </label>
          <p>{data.lastTrained}</p>
        </div>
      </div>
    </StyledInfographics>
  );
};

const Trainings = () => {
  return <StyledTrainings>Trainings</StyledTrainings>;
};

const EditEmployee = ({ setModal, data }) => {
  const [activeComponent, setActiveComponent] = useState("infographics");

  const tabContainer = useRef();
  console.log("emp-data: ", data);

  const handleTabClick = (e) => {
    const target = e.target.closest(".tab");
    const targetDataset = target.dataset.tab;
    if (targetDataset === activeComponent) return;
    if (!target) return;
    let tabsArray = Array.from(tabContainer.current.children);
    tabsArray.forEach((tab) => {
      tab.classList.remove("active");
    });
    target.classList.add("active");
    setActiveComponent(targetDataset);
  };
  return (
    <Wrapper className="center-flex">
      <Modal>
        <CloseIconContainer>
          <CloseIcon onClick={() => setModal(false)} />
        </CloseIconContainer>
        <TitleContainer>
          <EmployeeIcon />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Employee</h1>
            <h1>Edit</h1>
          </div>
        </TitleContainer>
        <FormContainer>
          <TabContainer ref={tabContainer}>
            <Tab
              data-tab="infographics"
              className="active tab center-flex"
              onClick={handleTabClick}
            >
              Infographics
            </Tab>
            <Tab
              data-tab="trainings"
              className="tab center-flex"
              onClick={handleTabClick}
            >
              Trainings
            </Tab>
          </TabContainer>
          <ContentContainer>
            {activeComponent === "infographics" ? (
              <Infographics data={data} />
            ) : (
              <Trainings data={data} />
            )}
          </ContentContainer>
        </FormContainer>
      </Modal>
    </Wrapper>
  );
};

export default EditEmployee;
