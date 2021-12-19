import React, { useRef, useState, useEffect } from "react";

import { Div, CloseIcon } from "./edit-modal.styles";

import { updateCompany, loadCompanies } from "../../services/user.service";

const initialFormData = Object.freeze({
  companyName: "",
  type: "",
  owner: "",
});

const EditModal = ({ editData, setEditModal, setCompany, setStatus }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [initialLoad, setInitialLoad] = useState(true);

  const name = useRef(editData.companyName);
  const id = useRef(editData.companyId);
  const type = useRef(
    editData.type === "Agricultural" ? "Agricultural" : "Industrial"
  );
  const numOfEmp = useRef(editData.numOfEmployees);
  const closeIcon = useRef();
  const industrialRadio = useRef();
  const agriculturalRadio = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    updateCompany(formData)
      .then((res) => {
        console.log("successful handle submit");
        console.log(res);
        setEditModal(false);
        setStatus("Update Successful");
        loadCompanies().then(({ data }) => {
          console.log(data);
          setCompany(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, companyName: e.target.value.trim() });
  };

  const handleRadioChange = (e) => {
    type.current = e.target.value;
    setFormData({ ...formData, type: e.target.value });
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    setEditModal(false);
  };

  useEffect(() => {
    if (!initialLoad) return;
    setFormData({
      companyName: name.current,
      type: type.current,
      id: id.current,
    });
    closeIcon.current.addEventListener("click", handleCloseClick);
    type.current === "Agricultural"
      ? (agriculturalRadio.current.checked = true)
      : (industrialRadio.current.checked = true);
    setInitialLoad(false);
    //eslint-disable-next-line
  }, [initialLoad]);

  return (
    <Div className="center-flex">
      <div className="modal">
        <div ref={closeIcon} className="close-icon">
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
                  ref={agriculturalRadio}
                  // checked={type.current === "Agricultural" ? "checked" : null}
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
                  ref={industrialRadio}
                  // checked={type.current === "Industrial" ? "checked" : null}
                />{" "}
                <label htmlFor="industrial">Industrial</label>
              </div>
            </div>
          </div>
          <div className="btn-container center-flex">
            <button type="submit">Submit Changes</button>
          </div>
        </form>
      </div>
    </Div>
  );
};

export default React.memo(EditModal);
