import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MdOutlineModeEditOutline } from "react-icons/md";

import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// import { getEmployee } from "../../services/employee.service";

import { format, parseISO } from "date-fns";

const EditIcon = styled(MdOutlineModeEditOutline)`
  height: 20px;
  width: 20px;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

const TableBod = ({
  employees,
  company,
  training,
  setModal,
  setEditEmpData,
}) => {
  const [rowData, setRowData] = useState(null);
  const [trainings, setTrainings] = useState(null);

  const handleEditClick = (e) => {
    let emp = e.currentTarget.dataset.emp;
    // console.log("empNo: ", emp);
    const employee = employees.find((employee) => employee.uuid === emp);
    setEditEmpData(employee);
    setModal(true);
  };

  useEffect(() => {
    // console.log("company: ", company);
    if (!employees) return;
    console.log("employees: ", employees);
    setRowData(employees);
    //eslint-disable-next-line
  }, [employees]);

  useEffect(() => {
    if (!training) return;
    let result = training.map((a) => {
      let obj = {};
      obj["index"] = a.index;
      obj["attribute"] = a.attribute;
      obj["type"] = a.type;
      // {index: #, attribute: S}
      return obj;
    });
    // result: [obj1, obj2, ... objn]
    // console.log("trainings: ", result);
    setTrainings(result);
  }, [training]);

  return (
    <React.Fragment>
      <TableBody>
        {rowData && trainings
          ? // eslint-disable-next-line array-callback-return
            rowData.map((row, idx) => {
              // trainings [{index: #, attribute: S}... {}]
              if (company === "All")
                return (
                  <TableRow key={row.uuid}>
                    {trainings.map((cell, idex) => {
                      // cell is a string - ex: "uuid" or "aerialLift"
                      return (
                        <TableCell
                          key={idex}
                          style={
                            cell.attribute === "firstName" ||
                            cell.attribute === "lastName" ||
                            cell.attribute === "companyName"
                              ? { padding: "0 1rem" }
                              : null
                          }
                          sx={
                            cell.attribute === "firstName" ||
                            cell.attribute === "lastName" ||
                            cell.attribute === "companyName"
                              ? {
                                  textAlign: "start",
                                }
                              : cell.attribute === "empNo" ||
                                cell.attribute === "companyId"
                              ? {
                                  textAlign: "start",
                                  padding: 0.5,
                                  cursor: "pointer",
                                }
                              : { textAlign: "center", padding: 0.5 }
                          }
                        >
                          {cell.attribute === "companyName" ||
                          cell.attribute === "uuid" ? (
                            row[cell.attribute]?.slice(0, 8).concat("", "...")
                          ) : cell.attribute === "action" ? (
                            <EditIcon
                              onClick={handleEditClick}
                              data-emp={row.uuid}
                            />
                          ) : idex < 4 && cell.attribute !== "action" ? (
                            row[cell.attribute]
                          ) : cell.attribute === "createdAt" ||
                            (cell.type === "training" &&
                              row[cell.attribute]) ? (
                            format(parseISO(row[cell.attribute]), "MM/dd/yyyy")
                          ) : null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              else {
                if (row.companyName === company.companyName)
                  return (
                    <TableRow key={row.uuid}>
                      {trainings.map((cell, idex) => {
                        return (
                          <TableCell
                            key={idex}
                            style={
                              cell.attribute === "firstName" ||
                              cell.attribute === "lastName" ||
                              cell.attribute === "companyName"
                                ? { padding: "0 1rem" }
                                : null
                            }
                            sx={
                              cell.attribute === "firstName" ||
                              cell.attribute === "lastName" ||
                              cell.attribute === "companyName"
                                ? {
                                    textAlign: "start",
                                  }
                                : cell.attribute === "empNo" ||
                                  cell.attribute === "companyId"
                                ? {
                                    textAlign: "start",
                                    padding: 0.5,
                                    cursor: "pointer",
                                  }
                                : { textAlign: "center", padding: 0.5 }
                            }
                          >
                            {cell.attribute === "companyName" ||
                            cell.attribute === "uuid" ? (
                              row[cell.attribute].slice(0, 8).concat("", "...")
                            ) : cell.attribute === "action" ? (
                              <EditIcon
                                onClick={handleEditClick}
                                data-emp={row.uuid}
                              />
                            ) : idex < 4 && cell.attribute !== "action" ? (
                              row[cell.attribute]
                            ) : cell.attribute === "createdAt" ||
                              (cell.type === "training" &&
                                row[cell.attribute]) ? (
                              format(
                                parseISO(row[cell.attribute]),
                                "MM/dd/yyyy"
                              )
                            ) : null}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
              }
            })
          : null}
      </TableBody>
    </React.Fragment>
  );
};

export default React.memo(TableBod);
