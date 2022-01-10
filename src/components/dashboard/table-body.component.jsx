import React, { useState, useEffect } from "react";

import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { format, parseISO } from "date-fns";

const TableBod = ({ employees, company, training }) => {
  const [rowData, setRowData] = useState(null);
  const [trainings, setTrainings] = useState(null);

  const handleEditClick = (e) => {
    console.log(e.currentTarget.getAttribute("data-emp"));
  };

  useEffect(() => {
    if (!employees) return;
    setRowData(employees);
  }, [employees]);

  useEffect(() => {
    if (!training) return;
    let result = training.map((a) => {
      let obj = {};
      obj["index"] = a.index;
      obj["attribute"] = a.attribute;
      // {index: #, attribute: S}
      return obj;
    });
    // result: [obj1, obj2, ... objn]
    setTrainings(result);
  }, [training]);

  return (
    <React.Fragment>
      <TableBody>
        {rowData && trainings
          ? // eslint-disable-next-line array-callback-return
            rowData.map((row, idx) => {
              // row: {empNo: #, firstName: S, ...}
              // trainings [{index: #, attribute: S}... {}]
              if (company === "All")
                return (
                  <TableRow key={row.empNo} onClick={handleEditClick}>
                    {trainings.map((cell, idex) => {
                      // cell is a string - ex: "empNo" or "aerialLift"
                      return (
                        <TableCell
                          key={idex}
                          onClick={
                            cell.attribute === "empNo" ? handleEditClick : null
                          }
                          data-emp={
                            cell.attribute === "empNo" ? row[cell] : null
                          }
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
                          {idex < 5
                            ? row[cell.attribute]
                            : row[cell.attribute]
                            ? format(
                                parseISO(row[cell.attribute]),
                                "MM/dd/yyyy"
                              )
                            : // null
                              null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              else {
                if (row.companyName === company.companyName)
                  return (
                    <TableRow key={row.empNo}>
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
                                ? { textAlign: "start", padding: 0.5 }
                                : { textAlign: "center", padding: 0.5 }
                            }
                          >
                            {idex < 5
                              ? row[cell.attribute]
                              : row[cell.attribute]
                              ? format(
                                  parseISO(row[cell.attribute]),
                                  "MM/dd/yyyy"
                                )
                              : // null
                                null}
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
