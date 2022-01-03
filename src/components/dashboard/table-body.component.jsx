import React, { useState, useEffect } from "react";

import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { format, parseISO } from "date-fns";

const TableBod = ({ employees, company, training }) => {
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    if (!employees) return;
    setRowData(employees);
  }, [employees]);

  return (
    <React.Fragment>
      <TableBody>
        {rowData
          ? // eslint-disable-next-line array-callback-return
            rowData.map((row, idx) => {
              let arr = Object.keys(row);
              if (company === "All")
                return (
                  <TableRow key={row.empNo}>
                    {arr.map((cell, idex) => {
                      return (
                        <TableCell
                          key={idex}
                          sx={
                            idex === 1 || idex === 2 || idex === 4
                              ? { textAlign: "center", padding: 0 }
                              : { textAlign: "start", padding: 1 }
                          }
                        >
                          {idex < 5
                            ? row[cell]
                            : row[cell]
                            ? format(parseISO(row[cell]), "MM/dd/yyyy")
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
                    <TableRow key={idx}>
                      {arr.map((cell, idex) => {
                        return (
                          <TableCell
                            key={idex}
                            sx={
                              idex === 1 || idex === 2 || idex === 4
                                ? { textAlign: "center", padding: 0 }
                                : { textAlign: "start", padding: 1 }
                            }
                          >
                            {idex < 5
                              ? row[cell]
                              : row[cell]
                              ? format(parseISO(row[cell]), "MM/dd/yyyy")
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
