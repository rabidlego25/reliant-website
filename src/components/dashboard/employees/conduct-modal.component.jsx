import React, { useState, useEffect, useRef, memo } from "react";

import DatePicker from "@mui/lab/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

import { conductTraining } from "../../../services/employee.service";

import {
  Wrapper,
  CloseIcon,
  SubmitButton,
  ErrorBox,
} from "./conduct-modal.styles";

const comp = { uuid: null, companyName: null };

const success = () => {};

const ConductModal = ({ setConductModal, compData, empData, trainData }) => {
  const [company, setCompany] = useState(comp);
  // const [trainingData, setTrainingData] = useState(trainData);
  const [date, setDate] = useState(null); // the date to be updated
  const [employeeSelect, setEmployeeSelect] = useState([]); // employees to be updated
  const [trainingSelect, setTrainingSelect] = useState([]); // trainings to be updated
  const [file, setFile] = useState(null); // file to be updated - not required
  const [status, setStatus] = useState(""); // error message upon failed validation

  const fileRef = useRef(); // to be reset if file validation fails

  //empData = [{empNo, firstName... lastAtt}... {empNo, firstName, lastAtt}]
  //trainData =[{header, attribute, index, type }... {}]

  const handleCloseClick = (e) => {
    setConductModal(false); // false closes modal
  };

  // const handleCompanyChange = (e) => {
  //   console.log("handleCompanyChange: ", e.currentTarget.value);
  // };

  const handleSelectEmployees = (e) => {
    console.log("handleSelectEmployees");
    const {
      target: { value },
    } = e;
    console.log("e.target: ", e.target);

    setEmployeeSelect(typeof value === "string" ? value.split(",") : value);
  };

  const handleSelectTrainings = (e) => {
    console.log("handleSelectTrainings");
    const {
      target: { value },
    } = e;
    setTrainingSelect(typeof value === "string" ? value.split(", ") : value);
  };

  const handleFileUpload = (e) => {
    const thisFile = e.target.files[0];
    const ext = thisFile?.name.substring(thisFile.name.lastIndexOf(".") + 1);
    if (ext === "pdf") {
      console.log("pdf");
      setFile(thisFile);

      if (status?.startsWith("File")) {
        setStatus(null);
      }
    } else {
      setStatus("File must be PDF");
      fileRef.current.value = null;
    }
    // console.log(ext);
    // setFile(thisFile);
    // console.log("handleFileUpload: ", e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !date ||
      !company.uuid ||
      employeeSelect.length === 0 ||
      trainingSelect.length === 0
    ) {
      setStatus("Please ensure all fields are entered");
    } else {
      setStatus("Sending Data Now");
      const PostData = new FormData();
      PostData.append(
        "training[]",
        JSON.stringify({
          date: date,
          company: company,
          employees: employeeSelect,
          trainings: trainingSelect,
        })
      );
      PostData.append("training_file", file);

      conductTraining(PostData)
        .then((res) => {
          console.log(res);
          if (res.status === 204) {
            // setDate(null);
            // setCompany(comp);
            // setTrainingSelect([]);
            // setConductModal(false);
          } else setStatus(res.data.message);
        })
        .catch((err) => {
          console.log("error: ", err);
          setStatus(
            "Backend Failure. Please Wait. If the problem persists contact the Administrator"
          );
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
    console.log("employees: ", employeeSelect);
    console.log("trainings: ", trainingSelect);
    console.log("file: ", file);
  }, [date, company, employeeSelect, trainingSelect, file]);

  return (
    <Wrapper className="center-flex">
      <form className="modal" encType="multipart/form-data">
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
                  if (emp.companyName === company.companyName)
                    return (
                      <MenuItem key={emp.uuid} value={emp.uuid}>
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
          <label htmlFor="fileInput">PDF Upload: </label>
          <input
            ref={fileRef}
            type="file"
            name="conduct_training_file"
            id="fileInput"
            placeholder="PDF File"
            onChange={handleFileUpload}
          />
          <div className="btn-container form-item center-flex">
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </div>
          <ErrorBox className="center-flex">{status}</ErrorBox>
        </div>
      </form>
    </Wrapper>
  );
};

export default memo(ConductModal);
