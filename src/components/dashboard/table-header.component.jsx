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
      <colgroup style={{ minWidth: "100%" }}>
        {columnData
          ? columnData.map((column, idx) => {
              return (
                <col
                  key={column.index}
                  style={
                    column.header === "Emp No" || column.header === "Comp Id"
                      ? { width: "45px" }
                      : { width: "115px" }
                  }
                />
              );
            })
          : null}
      </colgroup>
      <TableHead style={{ zIndex: 1 }}>
        <TableRow>
          {columnData
            ? columnData.map((column, idx) => {
                return (
                  <TableCell
                    sx={
                      column.attribute === "empNo" ||
                      column.attribute === "companyId"
                        ? {
                            color: "blue",
                            fontWeight: "bold",
                            bgcolor: "lightgreen",
                            textAlign: "start",
                            padding: 0,
                          }
                        : {
                            color: "blue",
                            fontWeight: "bold",
                            textAlign: "center",
                            bgcolor: "lightgreen",
                            padding: 1,
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
