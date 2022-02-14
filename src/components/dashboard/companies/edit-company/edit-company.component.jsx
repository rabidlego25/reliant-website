import React, { useState, useEffect, useContext, useRef } from "react";

import {
  Wrapper,
  CloseIconContainer,
  CloseIcon,
  BusinessIcon,
  TitleContainer,
  FormContainer,
  InputContainer,
  HelpIcon,
  HelpBox,
  HelpIconContainer,
  LightIconContainer,
  LightIcon,
  MessageContainer,
  SubmitButton,
} from "./edit-company.styles";

import { UpdateContext } from "../../../../routes/dashboard/user-dashboard.component";

import { updateCompany } from "../../../../services/company.service";

const initialFormData = Object.freeze({
  uuid: "",
  companyName: "",
  owner: "",
  type: "",
  phone: "",
});

const formFields = [
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    heading: "Naming",
    help: "Please enter company's name as you desire for it to be seen.",
  },
  {
    id: "owner",
    label: "Owner",
    type: "text",
    heading: "Head Honcho",
    help: "Please include first and last name of company's owner.",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    heading: "Contact",
    help: "(XXX)XXX-XXXX",
  },
  {
    id: "type",
    label: "Type",
    type: "radio",
    heading: "Compatibility",
    help: "Programs are tailored to business type.",
  },
];

const EditCompany = ({ compData, setEditModal }) => {
  const [formData, setFormData] = useState(initialFormData);

  const helpRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const { setUpdate } = useContext(UpdateContext);

  const phoneNumberFormatter = (e) => {
    console.log("phoneNumberFormatter");

    // get input and subsequent value
    const inputField = e.target;
    const { value } = e.target;

    const formatNumber = (value) => {
      if (!value) return false;

      // clean input for non-digit values
      const phoneNumber = value.replace(/[^\d]/g, "");
      console.log("phoneNumber: ", phoneNumber);
      // phoneNumberLength used to know when to apply formatting
      const phoneNumberLength = phoneNumber.length;

      // return value with no formatting if number is less than 4
      if (phoneNumberLength < 4) return phoneNumber;

      // if length is greater than 3 and less than 7 start formatting
      if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      }

      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    };

    const formattedInputValue = formatNumber(value);

    console.log("formattedInputValue: ", formattedInputValue);

    inputField.value = formattedInputValue;
  };

  const handleInputChange = (e) => {
    console.log("handleInputChange");
    const name = e.target.name;
    const value = e.target.value;
    if (name === "companyName") {
      setFormData({ ...formData, companyName: value.trim() });
    }
    if (name === "owner") {
      setFormData({ ...formData, owner: value.trim() });
    }
    if (name === "type") {
      setFormData({ ...formData, type: value });
    }
    if (name === "phone") {
      phoneNumberFormatter(e);
      let phoneValue;
      if (value.length === 15) {
        phoneValue = value.slice(0, -1);
      } else phoneValue = value;

      phoneValue = phoneValue.replace(/[^\d]/g, "");
      console.log(phoneValue.length);
      if (phoneValue.length !== 10) return;
      setFormData({ ...formData, phone: phoneValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const asyncUpdateCompany = async (data) => {
      // run request to add company to backend
      let res = await updateCompany(data);
      console.log("res: ", res);
      // if response is successful
      if (res.status === 200) {
        alert("Successfully Updated");
        setUpdate("companies");
        setEditModal(false);
      }
    };
    // make sure no fields of entry are empty
    if (
      formData.companyName === "" ||
      formData.owner === "" ||
      formData.type === "" ||
      formData.phone.length !== 10
    ) {
      alert("Warning: All fields must be entered.");
      return;
    }

    asyncUpdateCompany(formData);
  };

  const handleToggleEnter = (e) => {
    const { index } = e.target.closest(".contain").dataset;
    console.log("index: ", index);
    helpRef.current[index].current.classList.add("active");
  };

  const handleToggleExit = (e) => {
    const { index } = e.target.closest(".contain").dataset;
    helpRef.current[index].current.classList.remove("active");
    console.log("handleToggleExit");
  };

  useEffect(() => {
    setFormData({
      uuid: compData.uuid,
      companyName: compData.companyName,
      owner: compData.owner,
      phone: compData.phone,
      type: compData.type,
    });
  }, []);

  return (
    <Wrapper className="center-flex">
      <div className="modal-container">
        <CloseIconContainer>
          <CloseIcon
            onClick={() => {
              setEditModal(false);
            }}
          />
        </CloseIconContainer>
        <TitleContainer>
          <BusinessIcon />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Company</h1>
            <h1>Edit</h1>
          </div>
        </TitleContainer>
        <FormContainer>
          {formFields.map((field, idx) => {
            let { id, label, type, heading, help } = field;
            return (
              <InputContainer key={idx}>
                <label htmlFor={id}>{label}</label>
                {type !== "radio" ? (
                  <input
                    type={type}
                    id={id}
                    name={id}
                    onChange={handleInputChange}
                    defaultValue={compData[id]}
                  />
                ) : (
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="type"
                      id="ag"
                      value="agricultural"
                      onChange={handleInputChange}
                      checked={compData.type === "agricultural" ? true : false}
                    />{" "}
                    <label htmlFor="ag">Agricultural</label>
                    <input
                      type="radio"
                      name="type"
                      id="ind"
                      value="industrial"
                      onChange={handleInputChange}
                      checked={compData.type === "agricultural" ? false : true}
                    />{" "}
                    <label htmlFor="ind">Industrial</label>
                  </div>
                )}
                <HelpIconContainer
                  className="contain"
                  data-index={idx}
                  onMouseEnter={handleToggleEnter}
                  onMouseLeave={handleToggleExit}
                >
                  <HelpIcon />
                  <HelpBox className="" ref={helpRef.current[idx]} id={id}>
                    <LightIconContainer>
                      <LightIcon />
                    </LightIconContainer>
                    <MessageContainer>
                      <h3>{heading}</h3>
                      <p>{help}</p>
                    </MessageContainer>
                  </HelpBox>
                </HelpIconContainer>
              </InputContainer>
            );
          })}
        </FormContainer>
        <div className="center-flex btn-container">
          <SubmitButton onClick={handleSubmit}>Submit!</SubmitButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default EditCompany;
