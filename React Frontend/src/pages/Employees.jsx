import React, { useEffect } from "react";
import { fetchEmployees } from "../Redux/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { EmployeeTable } from "../components/EmployeeTable";
import { SearchBar } from "../components/SearchBar";
import Alert from "@mui/material/Alert";
import "../styles/Employees.css";

export const Employees = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = React.useState(false);
  const status = useSelector((state) => state.employee.status);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  useEffect(() => {
    if (status === "loading") {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [status]);

  return (
    <div className="employee-table-container">
      {showAlert && (
        <Alert severity="info">
          Please allow up to 2 minutes for initial load - server spins down to
          save costs!
        </Alert>
      )}
      <h2>Employee Directory</h2>
      <SearchBar />
      <EmployeeTable />
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate(`/addEmployee`)}
      >
        Add Employee
      </Button>
    </div>
  );
};
