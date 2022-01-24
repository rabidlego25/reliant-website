import React, { useEffect, useState, useRef, forwardRef } from "react";

import {
  Wrapper,
  CloseIcon,
  WarningIcon,
  ReturnIcon,
} from "./edit-employee.styles";

import {
  updateEmployee,
  deleteEmployee,
} from "../../services/employee.service";

const initialFormData = Object.freeze({
  uuid: "",
  firstName: "",
  lastName: "",
});

const DeleteMessage = forwardRef(
  ({ handleDeleteConfirmation, handleReturnClick }, ref) => {
    return (
      <div ref={ref} className="delete-popup">
        <h1 className="center-flex header-warning">WARNING</h1>
        <div className="icon-container center-flex warning">
          <WarningIcon />
        </div>
        <h4 className="header-content center-flex">
          Are you Sure you want to delete? Data for this employee will be
          permenantly erased.
        </h4>
        <div className="center-flex popup-btn-container">
          <button
            className="center-flex"
            style={{
              background: "lightgreen",
              border: "none",
              width: "75px",
              height: "36px",
              borderRadius: "12px",
            }}
            onClick={handleReturnClick}
            type="button"
          >
            <ReturnIcon />
          </button>
          <button
            className="center-flex"
            style={{
              background: "lightcoral",
              border: "none",
              width: "75px",
              height: "36px",
              borderRadius: "12px",
            }}
            onClick={handleDeleteConfirmation}
            type="button"
          >
            Yes
          </button>
        </div>
      </div>
    );
  }
);

const EditEmpModal = ({ setEditEmpModal, editEmpData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [hasChanged, setHasChanged] = useState(false); // check if state has changed. upon submit do not send request to backend if no change made

  const deleteRef = useRef();

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

  const handleDeleteClick = (e) => {
    console.log("handleDeleteConfirmation");
    deleteRef.current.classList.add("active");
    // deleteEmployee(editEmpData.empNo)
    //   .then((res) => {
    //     console.log(res);
    //     setEditEmpModal(false);
    //   })
    //   .catch((err) => console.log("ERROR"));
  };

  const handleDeleteConfirmation = (e) => {
    console.log("handleDeleteConfirmation");
    deleteEmployee(editEmpData.uuid)
      .then((res) => {
        console.log(res);
        setEditEmpModal(false);
      })
      .catch((err) => console.log("ERROR"));
  };

  const handleReturnClick = (e) => {
    console.log("handleReturnClick");
    deleteRef.current.classList.remove("active");
  };

  useEffect(() => {
    console.log("editEmpData: ", editEmpData);
    setFormData({
      uuid: editEmpData.uuid,
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
        <div className="icon-container close">
          <CloseIcon onClick={handleCloseClick} />
        </div>
        <div className="title-container">
          <h2 className="title">Edit Employee</h2>
          <span>Employee ID: {editEmpData.uuid}</span>
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
                onClick={handleDeleteClick}
                type="button"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
        <DeleteMessage
          ref={deleteRef}
          handleDeleteConfirmation={handleDeleteConfirmation}
          handleReturnClick={handleReturnClick}
        />
      </div>
    </Wrapper>
  );
};

export default EditEmpModal;
