import { TableVirtuoso } from "react-virtuoso";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../Redux/employeeSlice";

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} style={{ borderCollapse: "separate" }} />,
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export function EmployeeTable() {
  const employeeList = useSelector((state) => state.employee.employees);
  const searchResults = useSelector((state) => state.employee.searchResults);
  const searchTerm = useSelector((state) => state.employee.searchTerm);
  let useSearchResults = false;
  if (searchTerm.length > 0) {
     useSearchResults = true;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fixedHeaderContent = () => (
    <TableRow>
      <TableCell style={{ background: "white" }}>ID</TableCell>
      <TableCell style={{ width: 150, background: "white" }}>
        First Name
      </TableCell>
      <TableCell style={{ background: "white" }}>Last Name</TableCell>
      <TableCell style={{ background: "white" }}>Email Address</TableCell>
      <TableCell style={{ background: "white" }}>Actions</TableCell>
    </TableRow>
  );

  const rowContent = (index, employee) => (
      <>
        <TableCell style={{ background: "white" }}>{employee.id}</TableCell>
        <TableCell style={{ background: "white" }}>
          {employee.firstName}
        </TableCell>
        <TableCell style={{ background: "white" }}>
          {employee.lastName}
        </TableCell>
        <TableCell style={{ background: "white" }}>
          {employee.emailId}
        </TableCell>
        <TableCell style={{ width: 313, background: "white" }}>
          <div className="action-buttons">
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate(`/employee/${employee.id}`)}
            >
              View Details
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate(`/editEmployee/${employee.id}`)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => dispatch(deleteEmployee(employee.id))}
            >
              Delete
            </Button>
          </div>
        </TableCell>
      </>
    )

  return (
    <TableVirtuoso
      style={{ height: 400 }}
      data={useSearchResults ? searchResults : employeeList}
      components={TableComponents}
      fixedHeaderContent={fixedHeaderContent}
      itemContent={rowContent}
    />
  );
}
