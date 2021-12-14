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

const CompaniesTable = ({ companies }) => {
  const deleteRef = useRef([]); //Delete icon on company row
  const editRef = useRef([]); // Edit icon on company row
  const closeEditRef = useRef(); // Close icon on editModal

  const [status, setStatus] = useState(null); // success or failure display after action
  const [company, setCompany] = useState([]); // all companies
  const [isLoaded, setIsLoaded] = useState(false); // set to true after all companies rendered
  const [editModal, setEditModal] = useState(false); // true when editModal is active
  const [editData, setEditData] = useState([]);
  const [editLoaded, setEditLoaded] = useState(false); // after editModal mounted

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
        console.log("getCompany res: ", res);
      })
      .then((res) => setEditModal(true))
      .catch((err) => console.log(err));
  };

  const handleEditCloseClick = (e) => {
    setEditModal(false);
    setEditLoaded(false);
  };

  // when companies is not empty, set company state
  useEffect(() => {
    if (companies === undefined) return;
    setCompany([...companies]);
  }, [companies]);

  //adding event listeners to delete and edit icons on company
  useEffect(() => {
    console.log("isLoaded useEffect");
    if (!isLoaded) return;
    deleteRef.current.forEach((icon) => {
      if (icon) icon.addEventListener("click", handleDeleteClick);
    });
    editRef.current.forEach((icon) => {
      if (icon) icon.addEventListener("click", handleEditClick);
    });
    return () => {
      //eslint-disable-next-line
      deleteRef.current.forEach((icon) => {
        if (icon) icon.removeEventListener("click", handleDeleteClick);
      });
      //eslint-disable-next-line
      editRef.current.forEach((icon) => {
        if (icon) icon.removeEventListener("click", handleEditClick);
      });
    };
  }, [isLoaded]);

  //editModal useEffect
  useEffect(() => {
    console.log("editModal useEffect");
    if (!editLoaded) return;
    closeEditRef.current.addEventListener("click", handleEditCloseClick);
  }, [editLoaded]);

  if (company === undefined || company.length === 0) {
    return (
      <Div>
        <Loading>Still Loading...</Loading>
      </Div>
    );
  }

  return (
    <Div>
      {" "}
      <h2>Company Amount: {company.length}</h2>
      <div className="main-container">
        {company.map((data, idx) => {
          if (idx === company.length - 1 && isLoaded === false) {
            setIsLoaded(true);
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
        editLoaded ? (
          <EditModal editData={editData} closeRef={closeEditRef} />
        ) : (
          setEditLoaded(true)
        )
      ) : null}
    </Div>
  );
};

export default React.memo(CompaniesTable);
