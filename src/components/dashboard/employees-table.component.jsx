/* eslint-disable array-callback-return */
import React, { useState, useEffect, useLayoutEffect, useMemo } from "react";

import Table from "@mui/material/Table";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

import { TableWrapper, HeaderSection } from "./employees-table.styles";

import TableHeader from "./table-header.component";
import TableBod from "./table-body.component";

import AddEmployee from "./add-employee.component";
import ConductModal from "./conduct-modal.component";

import { loadCompanies } from "../../services/user.service";
import { getEmployees } from "../../services/employee.service";
import { generateHeaders } from "../../services/helpers.service";

let columnArray = [
  { header: "Emp No", attribute: "empNo", index: 0 },
  { header: "First Name", attribute: "firstName", index: 1 },
  { header: "Last Name", attribute: "lastName", index: 2 },
  { header: "Comp Id", attribute: "companyId", index: 3 },
  { header: "Comp Name", attribute: "companyName", index: 4 },
];

const EmployeesTable = () => {
  const [initalLoad, setInitialLoad] = useState(true);
  const [companyData, setCompanyData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [originalColumns, setOriginalColumns] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectTrainings, setSelectTrainings] = useState([]);
  const [currentCompany, setCurrentCompany] = useState("All");
  const [addEmpModal, setAddEmpModal] = useState(false);
  const [conductModal, setConductModal] = useState(false);
  const [sectionStatus, setSectionStatus] = useState(null);

  const handleAddClick = (e) => {
    setAddEmpModal(true);
  };

  const handleConductClick = (e) => {
    setConductModal(true);
  };

  const handleSelectTraining = (e) => {
    const {
      target: { value },
    } = e;
    // console.log(e.target);
    setSelectTrainings(typeof value === "string" ? value.split(",") : value);
  };

  const handleSelectCompany = (e) => {
    const {
      target: { value },
    } = e;
    // console.log(value);
    setCurrentCompany(value);
  };

  useEffect(() => {
    if (!initalLoad) return;
    loadCompanies()
      .then(({ data }) => {
        let compNames = [];
        let nameStrings = ["All"];
        data.forEach((arr) => {
          let obj = {};
          obj["id"] = arr.companyId;
          obj["companyName"] = arr.companyName;
          compNames.push(obj);
          nameStrings.push(arr.companyName);
        });
        // console.log("compNames: ", compNames);
        // console.log("nameStrings: ", nameStrings);

        setCompanyData(compNames);
        setInitialLoad(false);
      })
      .catch((err) => console.log(err));
  }, [initalLoad]);

  //When chagning selectTraining, update columns for display and employee data
  // useEffect(() => {
  //   if (selectTrainings.length === 0) {
  //     setColumnData(columnArray);
  //     return;
  //   }
  //   // setColumnData(selectTrainings);
  // }, [selectTrainings]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    getEmployees().then(({ data }) => {
      if (data.err) {
        setSectionStatus(data.message);
        return;
      }
      const copy = columnArray.slice();
      const activeLength = copy.length;
      const mapEmployeeColumns = Object.keys(data[0]).slice(activeLength);
      // eslint-disable-next-line array-callback-return
      mapEmployeeColumns.map((att, idx) => {
        let display = generateHeaders(att);
        // console.log(att, display, idx + activeLength);
        let row = {
          header: display,
          attribute: att,
          index: idx + activeLength,
        };
        copy.push(row);
      });
      // console.log(copy);
      // console.log("columnData: ", columnData);
      setColumnData(copy);
      setOriginalColumns(copy);
      setEmployeeData(data);
    });
  }, []);

  useEffect(() => {
    if (!columnData) return;
  }, [columnData]);

  useEffect(() => {
    if (selectTrainings.length === 0) {
      if (columnData !== originalColumns) {
        setColumnData(originalColumns);
      }
      return;
    }

    console.log(selectTrainings); //['hazardCommunication', 'handTools', 'forklift']
    let trainingArray = [];
    selectTrainings.forEach((att) => {
      const result = originalColumns.filter((obj) => obj.attribute === att);
      trainingArray.push(result[0]);
    });
    console.log(trainingArray);
    //eslint-disable-next-line
    setColumnData(columnArray.concat(trainingArray));
  }, [selectTrainings]);

  return (
    <TableWrapper>
      <HeaderSection>
        <div className="btn-container">
          <button onClick={handleAddClick}>Add Employee</button>
          <button onClick={handleConductClick}>Conduct Training</button>
          <FormControl sx={{ width: 300, bgcolor: "white" }}>
            <InputLabel id="sort-by-company">Sort by Company: </InputLabel>
            <Select
              labelId="sort-by-company"
              value={currentCompany}
              onChange={handleSelectCompany}
              input={<OutlinedInput label="Sort by Company:" />}
            >
              <MenuItem value="All">All</MenuItem>
              {companyData.map((comp, idx) => {
                return (
                  <MenuItem key={comp.id} value={comp}>
                    {comp.companyName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 300, height: "100%", bgcolor: "white" }}>
            <InputLabel id="sort-by-training">Sort by Training: </InputLabel>
            <Select
              labelId="sort-by-training"
              multiple
              value={selectTrainings}
              onChange={handleSelectTraining}
              input={<OutlinedInput label="Sort by Training:" />}
            >
              {originalColumns.map((column, idx) => {
                if (column.index < 5) return;
                return (
                  <MenuItem
                    key={column.index}
                    data-id={column.index}
                    value={column.attribute}
                  >
                    {column.header}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </HeaderSection>

      <div className="table-main">
        <Table stickyHeader style={{ tableLayout: "fixed", zIndex: 1 }}>
          <TableHeader columns={columnData} />
          <TableBod
            employees={employeeData}
            company={currentCompany}
            training={columnData}
          />
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
      <div className="center-flex">{sectionStatus}</div>
    </TableWrapper>
  );
};

export default EmployeesTable;
