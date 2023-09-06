import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addEmployee } from "../Redux/employeeSlice";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNum: "",
    title: "",
    division: "",
    address: "",
    city: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.firstName && employee.lastName && employee.emailId) {
      dispatch(addEmployee(employee));
      setTimeout(() => {
        navigate("/employees");
      }, 500);
    } else {
      alert("Please fill all the fields!");
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        <RedditTextField
          label="First Name"
          defaultValue=""
          id="first-name"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, firstName: e.target.value });
          }}
        />
        <RedditTextField
          label="Last Name"
          defaultValue=""
          id="last-name"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, lastName: e.target.value });
          }}
        />
        <RedditTextField
          label="Email"
          defaultValue=""
          id="email"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, emailId: e.target.value });
          }}
        />
        <RedditTextField
          label="Phone Number"
          defaultValue=""
          id="phoneNum"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, phoneNum: e.target.value });
          }}
        />
        <RedditTextField
          label="Title"
          defaultValue=""
          id="title"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, title: e.target.value });
          }}
        />
        <RedditTextField
          label="Division"
          defaultValue=""
          id="division"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, division: e.target.value });
          }}
        />
        <RedditTextField
          label="Address"
          defaultValue=""
          id="address"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, address: e.target.value });
          }}
        />
        <RedditTextField
          label="City"
          defaultValue=""
          id="city"
          variant="filled"
          style={{ marginTop: 11 }}
          onChange={(e) => {
            setEmployee({ ...employee, city: e.target.value });
          }}
        />
      </Box>
      <div className="add-employee-action-buttons">
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Add Employee
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => navigate("/employees")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
