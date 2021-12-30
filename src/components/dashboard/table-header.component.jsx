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
          ? columnData.map((data, idx) => {
              return (
                <col
                  key={idx}
                  style={
                    idx === 0 || idx === 3
                      ? { width: "60px", padding: "8px" }
                      : idx < 4
                      ? { width: "115px", padding: "0px" }
                      : { width: "95px", padding: "8px" }
                  }
                />
              );
            })
          : null}
      </colgroup>
      <TableHead style={{ zIndex: 1 }}>
        <TableRow>
          {columnData
            ? columnData.map((head, idx) => {
                return (
                  <TableCell
                    sx={{
                      color: "blue",
                      fontWeight: "bold",
                      textAlign: "start",
                      bgcolor: "lightgreen",
                      padding: 1,
                    }}
                    key={idx}
                  >
                    {head}
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
