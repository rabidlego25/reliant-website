import React, { useRef, useState, useEffect } from "react";

import { Div, CloseIcon, StatusBox } from "./edit-modal.styles";

import { updateCompany } from "../../services/user.service";

const initialFormData = Object.freeze({
  companyName: "",
  type: "",
  owner: "",
});

const EditModal = ({ editData, closeRef }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submit, setSubmit] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [status, setStatus] = useState("");

  const name = useRef(editData.companyName);
  const id = useRef(editData.companyId);
  const type = useRef(
    editData.type === "Agricultural" ? "Agricultural" : "Industrial"
  );
  const numOfEmp = useRef(editData.numOfEmployees);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    updateCompany(formData)
      .then((res) => console.log("yay"))
      .catch((err) => console.log("boo"));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, companyName: e.target.value.trim() });
  };

  const handleRadioChange = (e) => {
    type.current = e.target.value;
    setFormData({ ...formData, type: e.target.value });
  };

  useEffect(() => {
    if (!initialLoad) return;
    setFormData({
      companyName: name.current,
      type: type.current,
      id: id.current,
    });
    setInitialLoad(false);
  }, [initialLoad]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    if (!submit) return;
  }, [submit]);

  return (
    <Div className="center-flex">
      <div className="modal">
        <div className="close-icon" ref={closeRef}>
          <CloseIcon />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Edit Company</h1>
          <div className="form-item">
            <h2 id="name-header">Name: </h2>
            <input
              className="name-input"
              defaultValue={name.current}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-item">
            <h2>Num of Employees: </h2>
            <h3>{numOfEmp.current ? numOfEmp.current : 0}</h3>
          </div>
          <div className="form-item">
            <h2>Type: </h2>
            <div className="radio-container">
              <div>
                <input
                  type="radio"
                  id="agricultural"
                  name="type"
                  value="Agricultural"
                  onChange={handleRadioChange}
                  checked={type.current === "Agricultural" ? "checked" : null}
                />{" "}
                <label htmlFor="agricultural">Agricultural</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="industrial"
                  name="type"
                  value="Industrial"
                  onChange={handleRadioChange}
                  checked={type.current === "Industrial" ? "checked" : null}
                />{" "}
                <label htmlFor="industrial">Industrial</label>
              </div>
            </div>
          </div>
          <div className="btn-container center-flex">
            <button type="submit">Submit Changes</button>
          </div>
          <StatusBox className="center-flex">{status}</StatusBox>
        </form>
      </div>
    </Div>
  );
};

export default EditModal;
