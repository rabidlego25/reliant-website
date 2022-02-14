import React, { useContext, useState } from "react";

import {
  TableWrapper,
  TableSubWrapper,
  FilterIcon,
  EditIcon,
  DeleteIcon,
} from "./body-table.styles";

import DeleteCompany from "./delete-company/delete-company.component";
import EditCompany from "./edit-company/edit-company.component";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { visuallyHidden } from "@mui/utils";
import { textAlign } from "@mui/system";

const headCells = [
  { att: "type", label: "Type", sortable: false, align: "start" },
  {
    att: "companyName",
    label: "Company",
    sortable: true,
    align: "start",
  },
  {
    att: "owner",
    label: "Owner",
    sortable: true,
    align: "start",
  },
  {
    att: "phone",
    label: "Phone",
    sortable: false,
    align: "start",
  },
  {
    att: "lastTrained",
    label: "Last Trained",
    sortable: true,
    align: "end",
  },
  {
    att: "lastInspected",
    label: "Last Inspected",
    sortable: true,
    align: "end",
  },
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
  const { order, orderBy, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <React.Fragment>
      <colgroup>
        <col style={{ width: "10%" }}></col>
        <col style={{ width: "5%" }}></col>
        <col style={{ width: "20%" }}></col>
        <col style={{ width: "20%" }}></col>
      </colgroup>
      <TableHead>
        <TableRow>
          <TableCell
            sx={{ color: "orange", fontWeight: "bold", textAlign: "start" }}
          >
            Action
          </TableCell>
          {headCells.map((headCell, idx) => {
            return (
              <TableCell
                key={idx}
                sortDirection={orderBy === headCell.id ? order : false}
                sx={{ color: "orange", fontWeight: "bold" }}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                >
                  {" "}
                  {headCell.label}
                  {orderBy === headCell.id ? (
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

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, s: 1 },
        bgcolor: "#4c8BF5",
        color: "orange",
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%", fontWeight: "bold" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Companies
      </Typography>
      <Tooltip title="Filter">
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

const BodyTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("companyName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteCompany, setDeleteCompany] = useState(false);
  const [editCompany, setEditCompany] = useState(false);
  const [compData, setComp] = useState();

  const {
    context: { companies },
  } = useContext(InitialContext);

  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleDeleteInquiry = (e) => {
    console.log("handleDeleteInquiry");
    // extract uuid from target row
    const { uuid } = e.target.closest(".company").dataset;
    // run find function to get company details
    const company = companies.find((company) => company.uuid === uuid);

    setComp(company);
    setDeleteCompany(true);
  };

  const handleEditInquiry = (e) => {
    console.log("handleDeleteInquiry");
    // extract uuid from target row
    const { uuid } = e.target.closest(".company").dataset;
    // run find function to get company details
    const company = companies.find((company) => company.uuid === uuid);

    setComp(company);
    setEditCompany(true);
  };

  // avoid a layout jump when reaching the last page with empty rows
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - companies.length) : 0;

  console.log("companies -- BodyTable: ", companies);

  return (
    <React.Fragment>
      <TableWrapper>
        <TableSubWrapper>
          <Table
            sx={{
              minWidth: 750,
              borderCollapse: "separate",
              maxHeight: "215px",
            }}
            aria-labelledby="tableCompany"
            stickyHeader
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={companies.length}
            />
            <TableBody sx={{ bgcolor: "white", maxHeight: "215px" }}>
              {stableSort(companies, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((company, idx) => {
                  return (
                    <TableRow
                      className="company"
                      data-uuid={company.uuid}
                      key={company.uuid}
                      sx={{ lineHeight: "48px", whiteSpace: "nowrap" }}
                    >
                      <TableCell sx={{ p: 0 }}>
                        <Tooltip title="Edit Company">
                          <IconButton
                            sx={{ p: 1 }}
                            size="small"
                            onClick={handleEditInquiry}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Company">
                          <IconButton
                            sx={{ p: 1 }}
                            size="small"
                            onClick={handleDeleteInquiry}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell sx={{ textAlign: "start", pl: 3 }}>
                        {company.type === "agricultural" ? "🌾" : "🏭"}
                      </TableCell>
                      <TableCell>
                        {company.companyName.length > 25
                          ? company.companyName.slice(0, 24) + "..."
                          : company.companyName}
                      </TableCell>
                      <TableCell>
                        {company.owner.length > 25
                          ? company.owner.slice(0, 24) + "..."
                          : company.owner}
                      </TableCell>
                      <TableCell>{company.phone}</TableCell>
                      <TableCell>{company.lastTrained}</TableCell>
                      <TableCell>{company.lastInspected}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20]}
            component="div"
            count={companies.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              color: "orange",
              fontWeight: "bold",
              bgcolor: "white",
              width: "100%",
            }}
          />
          {deleteCompany ? (
            <DeleteCompany
              compData={compData}
              setDeleteModal={setDeleteCompany}
            />
          ) : null}
          {editCompany ? (
            <EditCompany compData={compData} setEditModal={setEditCompany} />
          ) : null}
        </TableSubWrapper>
      </TableWrapper>
    </React.Fragment>
  );
};

export default BodyTable;
