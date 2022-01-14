import React, { useEffect, useState } from "react";

import { Wrapper, CloseIcon } from "./edit-employee.styles";

import { updateEmployee } from "../../services/employee.service";

const initialFormData = Object.freeze({
  empNo: "",
  firstName: "",
  lastName: "",
});

const DeleteMessage = ({ handleDeleteConfirmation }) => {
  return (
    <div className="delete-popup">
      <h1 className="center-flex">WARNING</h1>
      <h4 className="center-flex">
        Are you Sure you want to delete? Data for this employee will be
        permenantly erased.
      </h4>
      <div className="center-flex popup-btn-container">
        <button
          style={{
            background: "lightcoral",
            border: "none",
            width: "50px",
            height: "25px",
            borderRadius: "12px",
            marginTop: "8px",
          }}
          onClick={handleDeleteConfirmation}
          type="button"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

const EditEmpModal = ({ setEditEmpModal, editEmpData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [hasChanged, setHasChanged] = useState(false); // check if state has changed. upon submit do not send request to backend if no change made
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseClick = () => {
    console.log("handleCloseClick");
    setEditEmpModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    if (!hasChanged) return;
    updateEmployee(formData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setFormData(initialFormData);
        setEditEmpModal(false);
      }
    });
  };

  const handleFirstNameInput = (e) => {
    setFormData({ ...formData, firstName: e.currentTarget.value.trim() });
    setHasChanged(true);
  };

  const handleLastNameInput = (e) => {
    setFormData({ ...formData, lastName: e.currentTarget.value.trim() });
    setHasChanged(true);
  };

  const handleDeleteConfirmation = (e) => {
    console.log("handleDeleteConfirmation");
  };

  useEffect(() => {
    console.log("editEmpData: ", editEmpData);
    setFormData({
      empNo: editEmpData.empNo,
      firstName: editEmpData.firstName,
      lastName: editEmpData.lastName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

  return (
    <Wrapper className="center-flex">
      <div className="modal">
        <div className="icon-container">
          <CloseIcon onClick={handleCloseClick} />
        </div>
        <div className="title-container">
          <h2 className="title">Edit Employee</h2>
          <span>Employee ID: {editEmpData.empNo}</span>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-container firstName">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                className="form-item"
                type="text"
                onChange={handleFirstNameInput}
                defaultValue={editEmpData.firstName}
              />
            </div>
            <div className="input-container firstName">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                className="form-item"
                type="text"
                onChange={handleLastNameInput}
                defaultValue={editEmpData.lastName}
              />
            </div>
            <div className="btn-container">
              <button className="form-btn submit" type="submit">
                Submit
              </button>
              <button
                className="form-btn delete"
                onClick={() => setShowDelete(true)}
                type="button"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
        {showDelete ? (
          <DeleteMessage handleDeleteConfirmation={handleDeleteConfirmation} />
        ) : null}
      </div>
    </Wrapper>
  );
};

export default EditEmpModal;
