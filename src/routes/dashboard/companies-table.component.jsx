import React from "react";

import { IoTrashBin } from "react-icons/io5";

import { MdEdit } from "react-icons/md";

import { Div, Loading } from "./companies-table.styles";

const CompaniesTable = ({ companies }) => {
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
          return (
            <div className="company" key={idx}>
              <div>
                {idx + 1}. {data.companyName}
              </div>{" "}
              <div className="icons">
                <MdEdit className="icon edit" alt="edit" />
                <IoTrashBin className="icon trash" alt="delete" />
              </div>
            </div>
          );
        })}
      </div>
    </Div>
  );
};

export default React.memo(CompaniesTable);
