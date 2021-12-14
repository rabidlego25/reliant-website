import React, { useEffect, useRef, useState } from "react";

import { IoTrashBin } from "react-icons/io5";

import { MdEdit } from "react-icons/md";

import { Div, Loading } from "./companies-table.styles";

import { deleteCompany, loadCompanies } from "../../services/user.service";

import EditModal from "./edit-modal.component";

const CompaniesTable = ({ companies }) => {
  const deleteRef = useRef([]);
  const editRef = useRef([]);
  const [status, setStatus] = useState(null);
  const [company, setCompany] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editModal, setEditModal] = useState(false);

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
    setEditModal(true);
  };

  useEffect(() => {
    if (companies === undefined) return;
    setCompany([...companies]);
  }, [companies]);

  useEffect(() => {
    console.log("isLoaded useEffect");
    if (!isLoaded) return;
    console.log("isLoaded refs: ", deleteRef.current); // returning []
    deleteRef.current.forEach((icon) => {
      if (icon) icon.addEventListener("click", handleDeleteClick);
    });
    editRef.current.forEach((icon) =>
      icon.addEventListener("click", handleEditClick)
    );
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
      {editModal ? <EditModal /> : null}
    </Div>
  );
};

export default React.memo(CompaniesTable);
