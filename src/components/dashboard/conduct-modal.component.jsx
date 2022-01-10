import React, { useState, useEffect, memo } from "react";

import DatePicker from "@mui/lab/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

import { updateEmployees } from "../../services/employee.service";

import {
  Wrapper,
  CloseIcon,
  SubmitButton,
  ErrorBox,
} from "./conduct-modal.styles";

const comp = { id: null, companyName: null };

const ConductModal = ({ setConductModal, compData, empData, trainData }) => {
  const [company, setCompany] = useState(comp);
  // const [trainingData, setTrainingData] = useState(trainData);
  const [date, setDate] = useState(null);
  const [employeeSelect, setEmployeeSelect] = useState([]);
  const [trainingSelect, setTrainingSelect] = useState([]);
  const [status, setStatus] = useState("");

  //empData = [{empNo, firstName... lastAtt}... {empNo, firstName, lastAtt}]
  //trainData =[{header, attribute, index, type }... {}]

  const handleCloseClick = (e) => {
    setConductModal(false);
  };

  // const handleCompanyChange = (e) => {
  //   console.log("handleCompanyChange: ", e.currentTarget.value);
  // };

  const handleSelectEmployees = (e) => {
    console.log("handleSelectEmployees");
    const {
      target: { value },
    } = e;

    setEmployeeSelect(typeof value === "string" ? value.split(",") : value);
  };

  const handleSelectTrainings = (e) => {
    console.log("handleSelectTrainings");
    const {
      target: { value },
    } = e;
    setTrainingSelect(typeof value === "string" ? value.split(", ") : value);
  };

  const handleSubmit = (e) => {
    if (
      !date ||
      !company.id ||
      employeeSelect.length === 0 ||
      trainingSelect.length === 0
    ) {
      setStatus("Please ensure all fields are entered");
    } else {
      setStatus("Sending Data Now");

      updateEmployees({
        date: date,
        companyId: company,
        employees: employeeSelect,
        trainings: trainingSelect,
      }).then((res) => {
        console.log(res);
        if (res.status === 204) {
          setDate(null);
          setCompany(comp);
          setTrainingSelect([]);
          setConductModal(false);
        } else setStatus("Failure");
      });
    }
    // .catch((err) => console.log)("updateEmployees ERROR");
  };

  useEffect(() => {
    console.log("compData: ", compData);
    console.log("empData: ", empData);
    console.log("trainData: ", trainData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("date: ", date);
    console.log("company: ", company);
    console.log("employeeIds: ", employeeSelect);
    console.log("trainings: ", trainingSelect);
  }, [date, company, employeeSelect, trainingSelect]);

  return (
    <Wrapper className="center-flex">
      <div className="modal">
        <div className="icon-container">
          <CloseIcon onClick={handleCloseClick} />
        </div>
        <div className="title-container center-flex">
          <h1>Conduct Training</h1>
        </div>
        <div className="data-container">
          <DatePicker
            label="Training date"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            renderInput={(params) => (
              <TextField sx={{ width: "75%", color: "blue" }} {...params} />
            )}
            style={{ backgroundColor: "blue" }}
          />
          <Autocomplete
            disablePortal
            className="form-item"
            getOptionLabel={(option) => option.companyName}
            id="combo-box-company"
            options={compData}
            onChange={(event, newValue) => {
              if (!newValue) setCompany(comp);
              else {
                setCompany(newValue);
                if (company !== newValue) {
                  //if company changes, reset selected employees to not include previous values
                  setEmployeeSelect([]);
                }
              }
            }}
            sx={{ width: "75%" }}
            renderInput={(params) => (
              <TextField {...params} label={"Company"} />
            )}
          />
          <FormControl className="form-item" sx={{ width: "100%" }}>
            <InputLabel id="multiple-label-employee">Employees: </InputLabel>
            <Select
              label-id="multiple-label-employee"
              multiple
              value={employeeSelect}
              onChange={handleSelectEmployees}
              input={<OutlinedInput label="Employees: " />}
            >
              {
                // eslint-disable-next-line array-callback-return
                empData.map((emp) => {
                  if (emp.companyId === company.id)
                    return (
                      <MenuItem key={emp.empNo} value={emp.empNo}>
                        {emp.lastName}, {emp.firstName}
                      </MenuItem>
                    );
                })
              }
            </Select>
          </FormControl>
          <FormControl className="form-item" sx={{ width: "100%" }}>
            <InputLabel id="multiple-label-employee">Trainings: </InputLabel>
            <Select
              label-id="multiple-label-employee"
              multiple
              value={trainingSelect}
              onChange={handleSelectTrainings}
              input={<OutlinedInput label="Trainings: " />}
            >
              {trainData.map((training, idx) => {
                //check if column is training column
                // eslint-disable-next-line array-callback-return
                if (training.type !== "training") return;
                return (
                  <MenuItem
                    key={training.index}
                    data-id={training.index}
                    value={training.attribute}
                  >
                    {training.header}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div className="btn-container form-item center-flex">
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </div>
          <ErrorBox className="center-flex">{status}</ErrorBox>
        </div>
      </div>
    </Wrapper>
  );
};

export default memo(ConductModal);
