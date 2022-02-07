import React, { useState, useEffect, useRef } from "react";

import {
  Wrapper,
  Title,
  Form,
  CloseIcon,
  ErrorBox,
} from "./add-company.styles";

import { addCompany, loadCompanies } from "../../../services/company.service";

const initialFormData = Object.freeze({
  companyName: "",
});

const AddModal = ({
  submitRef,
  modalRef,
  setAddModal,
  setStatus,
  setCompany,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submit, setSubmit] = useState(false);
  const [secondStatus, setSecondStatus] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const closeRef = useRef();

  const handleCloseClick = (e) => {
    console.log("close click");
    setAddModal(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, companyName: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (!submit) return;
    console.log("formData");
    if (formData.companyName === "" || formData.type === "") {
      setSecondStatus("Make sure all fields are entered!");
      setSubmit(false);
      return;
    }
    addCompany(formData)
      .then((res) => {
        setAddModal(false);
        loadCompanies().then(({ data }) => {
          setCompany(data);
          setStatus("Company successfully added!");
        });
      })
      .catch((err) => setSecondStatus(err.response));
    //eslint-disable-next-line
  }, [submit]);

  useEffect(() => {
    if (!initialLoad) return;
    console.log(setStatus);
    closeRef.current.addEventListener("click", handleCloseClick);
    setInitialLoad(false);
    //eslint-disable-next-line
  }, [initialLoad]);

  return (
    <Wrapper className="center-flex">
      <div className="modal-container">
        <div className="icon-container">
          <div ref={closeRef} className="icon">
            <CloseIcon onClick={handleCloseClick} />
          </div>
        </div>
        <Title className="center-flex">Company Onboard</Title>
        <Form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            className="company-input"
            placeholder="Company Name"
          />
          <div className="btn-container center-flex">
            <button type="submit">Submit Request</button>
          </div>
        </Form>
        <ErrorBox>{secondStatus}</ErrorBox>
      </div>
    </Wrapper>
  );
};

export default AddModal;
