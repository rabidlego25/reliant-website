import React, { useState, useEffect } from "react";

import { TableWrapper } from "./employees-table.styles";

import AddEmployee from "./add-employee.component";
import ConductModal from "./conduct-modal.component";

import { loadCompanies } from "../../services/user.service";

const EmployeesTable = () => {
  const [initalLoad, setInitialLoad] = useState(true);
  const [companyData, setCompanyData] = useState([]);
  const [addEmpModal, setAddEmpModal] = useState(false);
  const [conductModal, setConductModal] = useState(false);

  const handleAddClick = (e) => {
    setAddEmpModal(true);
  };

  const handleConductClick = (e) => {
    console.log("YAY");
    setConductModal(true);
  };

  useEffect(() => {
    if (!initalLoad) return;
    loadCompanies().then(({ data }) => {
      let compNames = [];
      data.forEach((arr) => {
        let obj = {};
        obj["id"] = arr.companyId;
        obj["companyName"] = arr.companyName;
        compNames.push(obj);
      });
      console.log(compNames);
      setCompanyData(compNames);
      setInitialLoad(false);
    });
  }, [initalLoad]);

  return (
    <TableWrapper>
      <div className="table-header">
        <div className="btn-container">
          <button onClick={handleAddClick}>Add Employee</button>
          <button onClick={handleConductClick}>Conduct Training</button>
          <div className="dropdown-container">
            Sort by Company:{" "}
            <select className="company-dropdown">
              {" "}
              <option>All</option>
              {companyData.length > 0
                ? companyData.map((data, idx) => {
                    return <option key={idx}>{data.companyName}</option>;
                  })
                : null}
            </select>
          </div>
          <div className="dropdown-container">
            Sort by Training:
            <select className="dropdown employee-dropdown">
              <option>All</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-main">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Company</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Id</th>
              <th>Company</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Id</th>
              <th>Company</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Id</th>
              <th>Company</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      {addEmpModal ? (
        <AddEmployee companies={companyData} setAddEmpModal={setAddEmpModal} />
      ) : null}
      {conductModal ? (
        <ConductModal
          compNames={companyData}
          setConductModal={setConductModal}
        />
      ) : null}
    </TableWrapper>
  );
};

export default EmployeesTable;
