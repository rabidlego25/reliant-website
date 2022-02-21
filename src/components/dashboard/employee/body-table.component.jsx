import React, { useState, useContext, useEffect } from "react";

import { TableWrapper, TableSubWrapper } from "./body-table.styles";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";

import { visuallyHidden } from "@mui/utils";

import { format, parseISO } from "date-fns";

const headCells = [
  { att: "firstName", label: "First Name", abbreviate: true },
  { att: "lastName", label: "Last Name", abbreviate: true },
  { att: "companyName", label: "Company", abbreviate: true },
  { att: "covid", label: "Covid", type: "training" },
  { att: "firstAid", label: "First Aid", type: "training" },
  { att: "fitTesting", label: "Fit Test", type: "training" },
  { att: "forklift", label: "Forklift", type: "training" },
  { att: "handTools", label: "Hand Tools", type: "training" },
  { att: "hazardCommunication", label: "Haz Com", type: "training" },
  { att: "heatIllness", label: "Heat Illness", type: "training" },
  { att: "ladder", label: "Ladder", type: "training" },
  { att: "liftingTechniques", label: "Lifting Techniques", type: "training" },
  { att: "lockoutTagout", label: "Lockout/Tagout", type: "training" },
  { att: "machineSafety", label: "Machine Safety", type: "training" },
  { att: "oxygenAcetylene", label: "Oxygen Storage", type: "training" },
  { att: "pesticideHandler", label: "Pesticide", type: "training" },
  { att: "propaneRefill", label: "Propane", type: "training" },
  { att: "tractor", label: "Tractor", type: "training" },
  { att: "welderSafety", label: "Welder", type: "training" },
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <React.Fragment>
      <colgroup>
        <col width={"75px"}></col>
        {headCells.map((headCell, idx) => {
          return (
            <col width={headCell.abbreviate === true ? "125px" : "98px"} />
          );
        })}
      </colgroup>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all employees" }}
            />
          </TableCell>
          {headCells.map((headCell) => {
            return (
              <TableCell
                key={headCell.att}
                sx={{ color: "orange", fontWeight: "bold" }}
              >
                <TableSortLabel
                  active={orderBy === headCell.att}
                  direction={orderBy === headCell.att ? order : "asc"}
                  onClick={createSortHandler(headCell.att)}
                >
                  {headCell.label}
                  {orderBy === headCell.att ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
};

const BodyTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {
    context: { employees },
  } = useContext(InitialContext);

  const handleRequestSort = (event, property) => {
    console.log("handleRequestSort: ", property);
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = employees.map((emp) => emp.uuid);
      setSelected(newSelecteds);
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    console.log("handleClick: ", name);
    console.log(selectedIndex);

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => {
    console.log("sion1: ", selected.indexOf(name) !== -1);
    return selected.indexOf(name) !== -1;
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsPerPage.length) : 0;

  useEffect(() => {
    console.log("selected: ", selected);
  }, [selected]);

  return (
    <TableWrapper>
      <TableSubWrapper>
        <Table
          aria-labelledby="employees table"
          style={{ width: "100%", overflow: "scroll", tableLayout: "fixed" }}
          stickyHeader
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={employees.length}
          />
          <TableBody>
            {stableSort(employees, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((emp, idx) => {
                console.log(emp);
                const isItemSelected = isSelected(emp.uuid);
                const labelId = `enhanced-table-checkbox-${idx}`;

                return (
                  <TableRow
                    hover
                    onClick={(e) => handleClick(e, emp.uuid)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={emp.uuid}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    {headCells.map(({ att, type, abbreviate }, index) => {
                      if (type !== "training" && abbreviate === true)
                        return <TableCell>{emp[att]}</TableCell>;
                      else {
                        if (emp[att] === null) {
                          return <TableCell></TableCell>;
                        } else
                          return (
                            <TableCell>
                              {format(parseISO(emp[att]), "MM/dd/yyyy")}
                            </TableCell>
                          );
                      }
                    })}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={headCells.length + 1} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={employees.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableSubWrapper>
    </TableWrapper>
  );
};

export default BodyTable;
