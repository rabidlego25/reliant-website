import React, { useEffect, useRef, useState } from "react";

import { IoTrashBin } from "react-icons/io5";

import { MdEdit } from "react-icons/md";

import { Div, Loading } from "./companies-table.styles";

import {
  deleteCompany,
  loadCompanies,
  getCompany,
} from "../../services/user.service";

import EditModal from "./edit-modal.component";
import AddModal from "./add-modal.component";

const CompaniesTable = () => {
  const deleteRef = useRef([]); //Delete icon on company row
  const editRef = useRef([]); // Edit icon on company row

  const [status, setStatus] = useState(""); // success or failure display after action
  const [company, setCompany] = useState([]); // all companies
  const [editData, setEditData] = useState([]); // data sent to edit modal
  const [editModal, setEditModal] = useState(false); // if true display modal
  const [addModal, setAddModal] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleDeleteClick = (e) => {
    console.log("handleDeleteClick");
    const companyElement = e.target.closest(".company");
    const companyId = companyElement.id;
    deleteCompany(companyElement, companyId)
      .then((res) => {
        console.log("deleteCompany res:", res);
        res.status === 204
          ? setStatus("Deletion Successful")
          : setStatus("Deletion Failed");
        loadCompanies()
          .then(({ data }) => {
            setCompany(data);
          })
          .catch((err) => console.log("loadCompanies error"));
      })
      .catch((err) => console.log("deleteCompany error"));
  };

  const handleEditClick = (e) => {
    console.log("handleEditClick");
    const companyId = e.target.closest(".company").id;
    getCompany(companyId)
      .then((res) => {
        setEditData({ ...res });
        setEditModal(true);
      })
      .catch((err) => console.log(err));
  };

  const toggleAddModal = (e) => {
    console.log("toggleAddModal");
    setAddModal(true);
  };

  // when companies is not empty, set company state
  useEffect(() => {
    if (!initialLoad) return;
    loadCompanies()
      .then(({ data }) => {
        setCompany(data);
        setInitialLoad(false);
        setStatus("");
      })
      .catch((err) => {
        console.log("initial load error");
      });
  }, [initialLoad]);

  if (company.length === 0) {
    return (
      <Div>
        <div className="title-row">
          <h2>Company Amount: {company.length}</h2>
          <div className="btn-container">
            <button className="center-flex" onClick={toggleAddModal}>
              Add Company
            </button>
          </div>
        </div>
        <Loading>No Companies to Load...</Loading>
        {addModal ? (
          <AddModal
            setAddModal={setAddModal}
            setCompany={setCompany}
            setStatus={setStatus}
          />
        ) : null}
      </Div>
    );
  }

  return (
    <Div>
      {" "}
      <div className="title-row">
        <h2>Company Amount: {company.length}</h2>
        <div className="btn-container">
          <button className="center-flex" onClick={toggleAddModal}>
            Add Company
          </button>
        </div>
      </div>
      <div className="main-container">
        {company.map((data, idx) => {
          return (
            <div
              className="company"
              name={`${data.companyName}`}
              key={idx}
              id={data.companyId}
            >
              <div>
                {idx + 1}. {data.companyName}
              </div>{" "}
              <div className="icons">
                <div
                  className="icon-container"
                  ref={(el) => (editRef.current[idx] = el)}
                >
                  <MdEdit
                    onClick={handleEditClick}
                    className="icon edit"
                    alt="edit"
                  />
                </div>
                <div
                  ref={(el) => (deleteRef.current[idx] = el)}
                  className="icon-container"
                >
                  <IoTrashBin
                    onClick={handleDeleteClick}
                    className="icon trash"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="status-box center-flex">{status ? status : null}</div>
      {editModal ? (
        <EditModal
          setCompany={setCompany}
          editData={editData}
          setEditModal={setEditModal}
          setStatus={setStatus}
        />
      ) : null}
      {addModal ? (
        <AddModal
          setAddModal={setAddModal}
          setStatus={setStatus}
          setCompany={setCompany}
        />
      ) : null}
    </Div>
  );
};

export default React.memo(CompaniesTable);
