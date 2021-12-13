import React, { useEffect, useRef } from "react";

import { IoTrashBin } from "react-icons/io5";

import { MdEdit } from "react-icons/md";

import { Div, Loading } from "./companies-table.styles";

const CompaniesTable = ({ companies }) => {
  const deleteRef = useRef([]);

  const handleDeleteClick = (e) => {
    console.log(e.target.closest(".company").id);
    const deleteCompany = async () => {};
    deleteCompany();
  };

  useEffect(() => {
    deleteRef.current.forEach((icon) =>
      icon.addEventListener("click", handleDeleteClick)
    );

    return () => {
      //eslint-disable-next-line
      deleteRef.current.forEach((icon) =>
        icon.removeEventListener("click", handleDeleteClick)
      );
    };
  }, [companies]);

  if (companies === undefined) {
    return (
      <Div>
        <Loading>Still Loading...</Loading>
      </Div>
    );
  }

  return (
    <Div>
      <h2>Company Amount: {companies.length}</h2>
      <div className="main-container">
        {companies.map((data, idx) => {
          if (idx === companies.length - 1) {
          }
          return (
            <div className="company" key={idx} id={data.companyId}>
              <div>
                {idx + 1}. {data.companyName}
              </div>{" "}
              <div className="icons">
                <div className="icon-container">
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
    </Div>
  );
};

export default React.memo(CompaniesTable);
