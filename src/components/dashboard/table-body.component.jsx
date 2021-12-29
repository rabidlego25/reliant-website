import React, { useEffect } from "react";

import TableBody from "@mui/material/TableBody";

// import { format } from "date-fns";

const TableBod = ({ employees }) => {
  // const [columnData, setColumnData] = useState(null);

  useEffect(() => {
    if (!employees) return;
  }, [employees]);

  return (
    <React.Fragment>
      <TableBody></TableBody>
    </React.Fragment>
  );
};

export default React.memo(TableBod);
