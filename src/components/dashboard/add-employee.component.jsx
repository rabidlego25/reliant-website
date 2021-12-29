import React, { useRef, useState, useEffect } from "react";
import {
  Wrapper,
  CloseIcon,
  AddSign,
  MinusSign,
  ErrorBox,
} from "./add-employee.styles";

import { addEmployee } from "../../services/employee.service";

const initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  companyId: "",
  companyName: "",
});

const AdditionalEmployee = ({ handleInputChange, index }) => {
  return (
    <div className="employee" id={index}>
      <h3 className="form-item index">{index + 1}</h3>
      <div className="form-input form-item">
        <label htmlFor="firstName">First Name: </label>
        <input
          onChange={handleInputChange}
          type="text"
          id="firstName"
          required
        />
      </div>
      <div className="form-input form-item">
        <label htmlFor="lastName">Last Name: </label>
        <input
          onChange={handleInputChange}
          type="text"
          id="lastName"
          required
        />
      </div>
    </div>
  );
};

const AddEmployee = ({ setAddEmpModal, companies }) => {
  const closeRef = useRef(); //close icon
  const [formData, setFormData] = useState([initialFormData]); // formData to send to server
  const [company, setCompany] = useState(companies[0]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [index, setIndex] = useState(0);
  const [addArray, setAddArray] = useState([
    <AdditionalEmployee index={index} />,
  ]);
  const [status, setStatus] = useState("");

  const handleCloseClick = (e) => {
    setAddEmpModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addEmployee(formData)
      .then((res) => {
        console.log(res);
        setAddEmpModal(false);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        setStatus(err);
      });
    setAddEmpModal(false);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setIndex(index + 1);
    setAddArray([...addArray, <AdditionalEmployee />]);
    setFormData([...formData, initialFormData]);
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    if (index === 0) return; // Check to see if only one item in array
    setIndex(index - 1);
    setAddArray([...addArray.slice(0, index)]);
    setFormData([...formData.slice(0, index)]);
  };

  const handleInputChange = (e) => {
    const inputValue = e.currentTarget.value.trim();
    const inputId = e.currentTarget.id;
    const currentIndex = e.currentTarget.closest(".employee").id;

    let arr = formData;
    arr[currentIndex] = {
      ...formData[currentIndex], //don't change anything in current index
      [inputId]: inputValue, // dictates what property to change (ie firstName)
      companyId: company.id,
      companyName: company.companyName,
    };
    // console.log("arr: ", arr);
    setFormData((data) => [...arr]);
  };

  const handleSelectChange = (e) => {
    let selectedIndex = e.currentTarget.options.selectedIndex;
    let currentOption = e.currentTarget.options;

    const companyOption = currentOption[selectedIndex];
    const companyId = companyOption.id;
    const companyName = companyOption.getAttribute("data-name").trim();
    // console.log("companyId: ", companyId);
    // console.log("companyName: ", companyName);
    setCompany({ id: companyId, companyName: companyName });
    let arr = formData;
    const newArr = arr.map((data, idx) => {
      return {
        ...data,
        companyId: companyId,
        companyName: companyName,
      };
    });
    console.log("newArr: ", newArr);
    setFormData((data) => [...newArr]);
  };

  useEffect(() => {
    // console.log("formData: ", formData);
  }, [formData]);

  useEffect(() => {
    // console.log("company: ", company);
  }, [company]);

  useEffect(() => {
    // console.log("companies: ", companies);
  }, []);

  useEffect(() => {
    if (!initialLoad) return;
    let arr = formData.map((data, idx) => {
      return {
        ...data,
        companyId: company?.id,
        companyName: company?.companyName,
      };
    });
    setFormData((data) => [...arr]);

    setInitialLoad(false);
    //eslint-disable-next-line
  }, [initialLoad]);

  return (
    <Wrapper className="center-flex">
      <div className="modal">
        <div className="icon-container">
          <div ref={closeRef} className="icon">
            <CloseIcon onClick={handleCloseClick} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-title center-flex">
            <h1>Employee Onboard</h1>
          </div>
          <div className="form-body">
            <div className="form-item form-input">
              <label htmlFor="dropdown">Company: </label>
              <select
                id="dropdown"
                className="company-dropdown"
                onChange={handleSelectChange}
              >
                {" "}
                {companies.length > 0
                  ? companies.map((data, idx) => {
                      return (
                        <option
                          id={data.id}
                          data-name={data.companyName}
                          key={idx}
                        >
                          {data.companyName}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            {addArray.map((data, idx) => {
              return (
                <AdditionalEmployee
                  handleInputChange={handleInputChange}
                  key={idx}
                  index={idx}
                />
              );
            })}
            <div className="form-item edit">
              <button onClick={handleAddClick} className="add-btn">
                <AddSign /> Add
              </button>
              <button onClick={handleRemoveClick} className="add-btn">
                <MinusSign /> Remove
              </button>
            </div>
            <div className="form-item center-flex">
              <button className="submit" type="submit">
                Proceed
              </button>
            </div>
          </div>
        </form>
        <ErrorBox>{status}</ErrorBox>
      </div>
    </Wrapper>
  );
};

export default AddEmployee;
