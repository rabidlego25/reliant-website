import React, { useRef, useState, useEffect } from "react";

import { CloseIcon, Wrapper, StatusBox } from "./edit-company.styles";

import {
  updateCompany,
  loadCompanies,
} from "../../../services/company.service";

const initialFormData = Object.freeze({
  companyName: "",
  type: "",
  owner: "",
});

const EditModal = ({ editData, setEditModal, setCompany, setStatus }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [editStatus, setEditStatus] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const name = useRef(editData.companyName);
  const id = useRef(editData.companyId);
  const type = useRef(
    editData.type === "Agricultural" ? "Agricultural" : "Industrial"
  );
  const industrialRadio = useRef();
  const agriculturalRadio = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    if (formData.companyName === undefined || formData.companyName === "") {
      setEditStatus("Must have a non-empty value");
      return;
    }
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
    type.current === "Agricultural"
      ? (agriculturalRadio.current.checked = true)
      : (industrialRadio.current.checked = true);
    setInitialLoad(false);
    //eslint-disable-next-line
  }, [initialLoad]);

  return (
    <Wrapper className="center-flex">
      <div className="modal">
        <div className="icon-container">
          <CloseIcon onClick={handleCloseClick} />
        </div>
        <div className="title-container">
          <h2 className="title">Edit Company</h2>
          <span>Company ID: {editData.companyId}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <h2 id="name-header">Name: </h2>
            <input
              className="name-input"
              defaultValue={name.current}
              onChange={handleInputChange}
            />
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
        <StatusBox className="center-flex">{editStatus}</StatusBox>
      </div>
    </Wrapper>
  );
};

export default React.memo(EditModal);
