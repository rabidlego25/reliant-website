import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";

import { TableWrapper } from "./employees-table.styles";

import TableHeader from "./table-header.component";
import TableBod from "./table-body.component";

import AddEmployee from "./add-employee.component";
import ConductModal from "./conduct-modal.component";

import { loadCompanies } from "../../services/user.service";
import { getEmployees } from "../../services/employee.service";
import { generateHeaders } from "../../services/helpers.service";

const EmployeesTable = () => {
  const [initalLoad, setInitialLoad] = useState(true);
  const [companyData, setCompanyData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [addEmpModal, setAddEmpModal] = useState(false);
  const [conductModal, setConductModal] = useState(false);

  const handleAddClick = (e) => {
    setAddEmpModal(true);
  };

  const handleConductClick = (e) => {
    // console.log("YAY");
    setConductModal(true);
  };

  useEffect(() => {
    if (!initalLoad) return;
    let arr;
    loadCompanies()
      .then(({ data }) => {
        let compNames = [];
        data.forEach((arr) => {
          let obj = {};
          obj["id"] = arr.companyId;
          obj["companyName"] = arr.companyName;
          compNames.push(obj);
        });
        // console.log(compNames);
        setCompanyData(compNames);
        setInitialLoad(false);
      })
      .catch((err) => console.log(err));
    getEmployees()
      .then(({ data }) => {
        // console.log("line41: ", data);
        arr = generateHeaders(Object.keys(data[0]));
        setColumnData(arr);
        setEmployeeData(data);
      })
      .catch((err) => console.log(err));
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
        <Table stickyHeader style={{ tableLayout: "fixed", zIndex: 1 }}>
          <TableHeader columns={columnData} />
          <TableBod employees={employeeData} />
        </Table>
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
