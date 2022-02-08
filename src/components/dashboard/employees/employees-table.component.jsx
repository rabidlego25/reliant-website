/* eslint-disable array-callback-return */
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";

import Table from "@mui/material/Table";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

import {
  InitialContext,
  UpdateContext,
} from "../../../routes/dashboard/user-dashboard.component";

import EditEmpModal from "./edit-employee.component";

import {
  TableWrapper,
  HeaderSection,
  Hammer,
  EmpAdd,
} from "./employees-table.styles";

import TableHeader from "./table-header.component";
import TableBod from "./table-body.component";

import AddEmployee from "./add-employee.component";
import ConductModal from "./conduct-modal.component";

import {
  createColumnData,
  formatCompData,
} from "../../../services/helpers.service";

let columnArray = [
  { header: "Action", index: 0, attribute: "action", type: "action" },
  { header: "Emp Id", attribute: "uuid", index: 1, type: "main" },
  { header: "First Name", attribute: "firstName", index: 2, type: "main" },
  { header: "Last Name", attribute: "lastName", index: 3, type: "main" },
  { header: "Company Name", attribute: "companyName", index: 4, type: "main" },
];

const EmployeesTable = () => {
  const [companyData, setCompanyData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [originalColumns, setOriginalColumns] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectTrainings, setSelectTrainings] = useState([]);
  const [currentCompany, setCurrentCompany] = useState("All");

  // state for toggling display of modals
  const [addEmpModal, setAddEmpModal] = useState(false);
  const [conductModal, setConductModal] = useState(false);
  const [editEmpModal, setEditEmpModal] = useState(false);

  // state for editing existing employee - will pass to modal
  const [editEmpData, setEditEmpData] = useState(null);

  // data for formatting functions and updating state
  const { employees, companies } = useContext(InitialContext);
  const { update, setUpdate } = useContext(UpdateContext);

  // toggle display of add employee modal
  const handleAddClick = (e) => {
    setAddEmpModal(true);
  };

  // toggle display of conduct training modal
  const handleConductClick = (e) => {
    setConductModal(true);
  };

  // process selection of trainings from dropdown - will affect columns displayed
  const handleSelectTraining = (e) => {
    const {
      target: { value },
    } = e;
    // console.log(e.target);
    setSelectTrainings(typeof value === "string" ? value.split(",") : value);
  };

  // process selection of company whose employees to display - will affect rows displayed
  const handleSelectCompany = (e) => {
    const {
      target: { value },
    } = e;
    // console.log(value);
    setCurrentCompany(value);
  };

  // formatting context data for display
  useLayoutEffect(() => {
    console.log("useLayoutEffect: ");
    const empData = createColumnData(employees, columnArray);
    console.log("createColumnData: ", empData);
    const { compNames } = formatCompData(companies);

    // sent to modals and drop down for company query
    setCompanyData(compNames);

    // sent to table header and body for processing visualization
    setColumnData(empData);
    setOriginalColumns(empData);
    setEmployeeData(employees);
    //eslint-disable-next-line
  }, []);

  // fired any time selectTrainings updates
  useEffect(() => {
    // don't run if original columns have not updated
    if (!originalColumns) return;
    // selectTrainings = ['hazardCommunication', 'handTools', 'forklift']
    if (selectTrainings.length === 0) {
      if (columnData !== originalColumns) {
        setColumnData(originalColumns);
      }
      return;
    }

    // amending data for display in event select training changes
    let trainingArray = [];
    selectTrainings.forEach((att) => {
      const result = originalColumns.filter((obj) => obj.attribute === att);
      trainingArray.push(result[0]);
    });
    console.log(trainingArray);

    // if unselected will revert to original display
    if (selectTrainings.length !== 0)
      setColumnData(columnArray.concat(trainingArray));
    //eslint-disable-next-line
  }, [selectTrainings, originalColumns]);

  return (
    <TableWrapper>
      <HeaderSection>
        <div className="btn-container">
          <div className="btn-modal-container">
            <button className="btn-modal-toggle" onClick={handleAddClick}>
              <EmpAdd />
              Add Employee
            </button>
            <button className="btn-modal-toggle" onClick={handleConductClick}>
              <Hammer /> Conduct Training
            </button>
          </div>
          <div className="input-filter-container">
            <FormControl sx={{ width: 300 }}>
              {
                // <InputLabel sx={{ color: "blue" }} id="sort-by-company">
                //   Sort by Company:
                // </InputLabel>
              }
              <Select
                sx={{ bgcolor: "white", height: 50 }}
                // labelId="sort-by-company"
                value={currentCompany}
                onChange={handleSelectCompany}
                // input={<OutlinedInput label="Sort by Company:" />}
              >
                <MenuItem value="All">All</MenuItem>
                {companyData.map((comp, idx) => {
                  return (
                    <MenuItem key={comp.uuid} value={comp}>
                      {comp.companyName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ width: 300, height: "100%" }}>
              <InputLabel sx={{ color: "black" }} id="sort-by-training">
                Sort by Training:{" "}
              </InputLabel>
              <Select
                sx={{ bgcolor: "white", height: 50, color: "black" }}
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
        </div>
      </HeaderSection>
      <div className="table-main">
        <Table stickyHeader style={{ tableLayout: "fixed", zIndex: 1 }}>
          <TableHeader columns={columnData} />
          <TableBod
            employees={employeeData}
            company={currentCompany}
            training={columnData}
            setModal={setEditEmpModal}
            setEditEmpData={setEditEmpData}
          />
        </Table>
      </div>
      {addEmpModal ? (
        <AddEmployee companies={companyData} setAddEmpModal={setAddEmpModal} />
      ) : null}
      {conductModal ? (
        <ConductModal
          compData={companyData}
          empData={employeeData}
          trainData={originalColumns}
          setConductModal={setConductModal}
        />
      ) : null}
      {editEmpModal ? (
        <EditEmpModal
          setEditEmpModal={setEditEmpModal}
          editEmpData={editEmpData}
        />
      ) : null}
    </TableWrapper>
  );
};

export default EmployeesTable;
