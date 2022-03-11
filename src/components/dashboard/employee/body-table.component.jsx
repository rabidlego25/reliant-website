import React, { useState, useContext, useEffect } from "react";

import {
  TableWrapper,
  TableSubWrapper,
  EditIcon,
  DeleteIcon,
} from "./body-table.styles";

import EditEmployee from "./edit-employee/edit-employee.component";
import DeleteEmployee from "./delete-employee/delete-employee.component";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tooltip from "@mui/material/Tooltip";

import { visuallyHidden } from "@mui/utils";

import { format, parseISO } from "date-fns";

const headCells = [
  { att: "firstName", label: "First Name", type: "heading" },
  { att: "lastName", label: "Last Name", type: "heading" },
  { att: "companyName", label: "Company", type: "heading" },
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
        <col width={"60px"}></col>
        <col width={"108px"}></col>
        {headCells.map((headCell, idx) => {
          return (
            <col
              style={{
                width: headCell.type === "heading" ? "9rem" : "7rem",
              }}
            />
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
          <TableCell
            sx={{
              color: "orange",
              fontWeight: "bold",
              p: 2,
            }}
          >
            Action
          </TableCell>
          {headCells.map((headCell) => {
            return (
              <TableCell
                key={headCell.att}
                sx={{
                  color: "orange",
                  fontWeight: "bold",
                  p: 1,
                }}
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
  const [editEmp, setEditEmp] = useState(false);
  const [deleteEmp, setDeleteEmp] = useState(false);
  const [empData, setEmpData] = useState();

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

  const handleEditInquiry = (e) => {
    const { uuid } = e.target.closest(".employee").dataset;
    const employee = employees.find((employee) => employee.uuid === uuid);
    setEditEmp(true);
    setEmpData(employee);
  };

  const handleDeleteInquiry = (e) => {
    const { uuid } = e.target.closest(".employee").dataset;
    const employee = employees.find((employee) => employee.uuid === uuid);
    setDeleteEmp(true);
    setEmpData(employee);
  };

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
                const isItemSelected = isSelected(emp.uuid);

                return (
                  <TableRow
                    hover
                    className="employee"
                    onClick={(e) => handleClick(e, emp.uuid)}
                    role="checkbox"
                    data-uuid={emp.uuid}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={emp.uuid}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    <TableCell sx={{ textAlign: "start", p: 0 }}>
                      <Tooltip title="Edit Employee">
                        <IconButton
                          sx={{ p: 1 }}
                          size="small"
                          onClick={handleEditInquiry}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Employee">
                        <IconButton
                          sx={{ p: 1 }}
                          size="small"
                          onClick={handleDeleteInquiry}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    {headCells.map(({ att, type }, index) => {
                      if (type !== "training")
                        if (emp[att].length > 15)
                          return (
                            <TableCell sx={{ p: 1 }}>
                              {emp[att].slice(0, 15) + "..."}
                            </TableCell>
                          );
                        else
                          return (
                            <TableCell sx={{ p: 1 }}>{emp[att]}</TableCell>
                          );
                      else {
                        if (emp[att] === null) {
                          return <TableCell sx={{ p: 1 }}></TableCell>;
                        } else
                          return (
                            <TableCell sx={{ p: 1 }}>
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
      {editEmp ? <EditEmployee setModal={setEditEmp} data={empData} /> : null}
      {deleteEmp ? (
        <DeleteEmployee setModal={setDeleteEmp} data={empData} />
      ) : null}
    </TableWrapper>
  );
};

export default BodyTable;
