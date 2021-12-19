import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Title, Form, CloseIcon, ErrorBox } from "./add-modal.styles";

import { addCompany, loadCompanies } from "../../services/user.service";

const initialFormData = Object.freeze({
  companyName: "",
  type: "",
  owner: "",
});

const AddModal = ({
  submitRef,
  modalRef,
  setAddModal,
  setCompany,
  setUpdate,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const closeRef = useRef();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, type: e.target.value });
  };

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
      setStatus("Make sure all fields are entered!");
      return;
    }
    addCompany(formData)
      .then((res) => {
        setAddModal(false);
        loadCompanies().then(({ data }) => {
          setCompany(data);
          setUpdate("Update Successful");
        });
      })
      .catch((err) => setStatus(err.response));
    //eslint-disable-next-line
  }, [submit]);

  useEffect(() => {
    if (!initialLoad) return;
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
