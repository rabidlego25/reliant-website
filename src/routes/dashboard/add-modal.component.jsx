import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Title,
  Form,
  CloseIcon,
  IconContainer,
  ErrorBox,
} from "./add-modal.styles";

import axios from "axios";

const initialFormData = Object.freeze({
  companyName: "",
  type: "",
  owner: "",
});

const AddModal = ({ modalRef, closeRef }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState(null);

  const onValueChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const handleCloseClick = (e) => {};

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
    console.log(formData);
    if (formData.companyName === "" || formData.type === "") {
      setStatus("Make sure all fields are entered!");
      return;
    }
    const addCompany = async () => {
      axios
        .post("http://localhost:8080/api/admin/addCompany", {
          formData,
        })
        .then((res) => {
          setStatus("Creation Successful!");
        })
        .catch((err) => {
          console.log(err.response);
          setStatus(err.response.data.message);
          setSubmit(false);
        });
    };
    addCompany();
    //eslint-disable-next-line
  }, [submit]);

  return (
    <Wrapper>
      <div ref={modalRef} className="modal-container">
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
          <div className="radio-container">
            <div className="center-flex">
              <input
                type="radio"
                name="type"
                id="agricultural"
                value="Agricultural"
                onChange={onValueChange}
              />
              <label htmlFor="agricultural">Agricultural</label>
            </div>
            <div className="center-flex">
              <input
                type="radio"
                name="type"
                value="Industrial"
                id="industrial"
                onChange={onValueChange}
              />
              <label htmlFor="industrial">Industrial</label>
            </div>
          </div>
          <div className="btn-container center-flex">
            <button type="submit">Submit Request</button>
          </div>
        </Form>
        <ErrorBox>{status}</ErrorBox>
      </div>
    </Wrapper>
  );
};

export default AddModal;
