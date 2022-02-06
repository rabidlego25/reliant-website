import React, { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader = ({ columns }) => {
  const [columnData, setColumnData] = useState();

  useEffect(() => {
    if (!columns) return;

    setColumnData(columns);
  }, [columns]);

  return (
    <React.Fragment>
      <colgroup>
        {columnData
          ? columnData.map((column, idx) => {
              return (
                <col
                  key={column.index}
                  style={
                    column.type === "action"
                      ? { width: "60px" }
                      : { width: "115px" }
                  }
                />
              );
            })
          : null}
      </colgroup>
      <TableHead>
        <TableRow>
          {columnData
            ? columnData.map((column, idx) => {
                return (
                  <TableCell
                    sx={
                      column.type === "action"
                        ? {
                            color: "orange",
                            fontWeight: "bold",
                            bgcolor: "#4c8BF5",
                            textAlign: "start",
                            padding: 1,
                          }
                        : column.attribute === "uuid"
                        ? {
                            color: "orange",
                            fontWeight: "bold",
                            bgcolor: "#4c8BF5",
                            textAlign: "start",
                            padding: 1,
                          }
                        : column.attribute === "companyName" ||
                          column.attribute === "firstName" ||
                          column.attribute === "lastName"
                        ? {
                            // color: "blue",
                            color: "orange",
                            fontWeight: "bold",
                            bgcolor: "#4c8BF5",
                            textAlign: "start",
                            padding: 1,
                          }
                        : {
                            // color: "blue",
                            // color: "#ff8c00",
                            color: "orange",
                            fontWeight: "bold",
                            textAlign: "center",
                            bgcolor: "#4c8BF5",
                            padding: 0.75,
                          }
                    }
                    key={column.index}
                  >
                    {column.header}
                  </TableCell>
                );
              })
            : null}
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
};

export default React.memo(TableHeader);
