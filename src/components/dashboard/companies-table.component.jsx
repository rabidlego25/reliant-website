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

  const [status, setStatus] = useState(null); // success or failure display after action
  const [company, setCompany] = useState([]); // all companies
  const [isLoaded, setIsLoaded] = useState(false); // set to true after all companies rendered
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
            setIsLoaded(false);
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
    console.log("companies useEffect");
    if (!initialLoad) return;
    loadCompanies()
      .then(({ data }) => {
        setCompany(data);
        setInitialLoad(false);
      })
      .catch((err) => {
        console.log("initial load error");
      });
  }, [initialLoad]);

  useEffect(() => {
    console.log("company useEffect: ", company);
  }, [company]);

  //adding event listeners to delete and edit icons on company
  useEffect(() => {
    console.log("isLoaded useEffect");
    if (!isLoaded) {
      console.log("!isLoaded");
      return;
    }
    deleteRef.current.forEach((icon) => {
      if (icon) {
        icon.addEventListener("click", handleDeleteClick);
      }
    });
    editRef.current.forEach((icon) => {
      if (icon) icon.addEventListener("click", handleEditClick);
    });

    setIsLoaded(false);

    return () => {
      //eslint-disable-next-line
      deleteRef.current.forEach((icon) => {
        if (icon) icon.removeEventListener("click", handleDeleteClick);
      });
      //eslint-disable-next-line
      editRef.current.forEach((icon) => {
        if (icon) icon.removeEventListener("click", handleEditClick);
      });

      setIsLoaded(false);
    };
  }, [isLoaded]);

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
          <AddModal setAddModal={setAddModal} setCompany={setCompany} />
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
          if (idx === company.length - 1 && isLoaded === false) {
            setIsLoaded(!isLoaded);
          }
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
                  <MdEdit className="icon edit" alt="edit" />
                </div>
                <div
                  ref={(el) => (deleteRef.current[idx] = el)}
                  className="icon-container"
                >
                  <IoTrashBin className="icon trash" alt="delete" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="status-box center-flex">{status}</div>
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
          setCompany={setCompany}
          setUpdate={setStatus}
        />
      ) : null}
    </Div>
  );
};

export default React.memo(CompaniesTable);
