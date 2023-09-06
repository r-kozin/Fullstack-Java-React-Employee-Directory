import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getEmployeeById, updateEmployee } from "../Redux/employeeSlice";

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

export const UpdateEmployeeForm = () => {
  const { id } = useParams();
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  );
  const [employee, setEmployee] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.employee.status);
  const error = useSelector((state) => state.employee.error);

  useEffect(() => {
    dispatch(getEmployeeById(id)).then((res) => {
      console.log(res.payload);
      setEmployee(res.payload);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (employee.firstName && employee.lastName && employee.emailId) {
    console.log(employee);
    dispatch(updateEmployee(employee));
    setTimeout(() => {
      navigate("/employees");
    }, 500);
    // } else {
    //   alert("Please fill all the fields!");
    // }
  };

  let content = "";

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "success") {
    content = (
      <>
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
            defaultValue={selectedEmployee.firstName}
            id="first-name"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, firstName: e.target.value });
            }}
          />
          <RedditTextField
            label="Last Name"
            defaultValue={selectedEmployee.lastName}
            id="last-name"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, lastName: e.target.value });
            }}
          />
          <RedditTextField
            label="Email"
            defaultValue={selectedEmployee.emailId}
            id="email"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, emailId: e.target.value });
            }}
          />
          <RedditTextField
            label="Phone Number"
            defaultValue={selectedEmployee.phoneNum}
            id="phoneNum"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, phoneNum: e.target.value });
            }}
          />
          <RedditTextField
            label="Title"
            defaultValue={selectedEmployee.title}
            id="title"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, title: e.target.value });
            }}
          />
          <RedditTextField
            label="Division"
            defaultValue={selectedEmployee.division}
            id="division"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, division: e.target.value });
            }}
          />
          <RedditTextField
            label="Address"
            defaultValue={selectedEmployee.address}
            id="address"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(e) => {
              setEmployee({ ...employee, address: e.target.value });
            }}
          />
          <RedditTextField
            label="City"
            defaultValue={selectedEmployee.city}
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
            Update Employee
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
      </>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h2>Update Employee</h2>
      {content}
    </div>
  );
};
