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
      <TableHead>
        <TableRow>
          {columnData
            ? columnData.map((head, idx) => {
                return (
                  <TableCell sx={{ color: "blue", align: "center" }} key={idx}>
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
