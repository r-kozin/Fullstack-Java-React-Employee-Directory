import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeById } from "../Redux/employeeSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  );
  const status = useSelector((state) => state.employee.status);

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, []);

  useEffect(() => {
    console.log(selectedEmployee.firstName);
  }, [selectedEmployee]);

  let content = "";
  let initials = "";

  if (selectedEmployee.firstName === undefined) {
    initials = "-";
  } else {
    initials = selectedEmployee.firstName[0] + selectedEmployee.lastName[0];
  }

  if (status === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (status === "success") {
    content = (
      <>
        <div className="employee-card">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-header">
                <Avatar
                  sx={{ bgcolor: blue[500] }}
                  className="employee-avatar"
                  aria-label="employee-avatar"
                >
                  {initials}
                </Avatar>
                <div className="card-header-text">
                  <Typography variant="h5" component="div">
                  {selectedEmployee.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {selectedEmployee.division}
                  </Typography>
                </div>
              </div>
              <Typography variant="body2">
                Name: {selectedEmployee.firstName} {selectedEmployee.lastName}
                <br />
                Email: {selectedEmployee.emailId}
                <br />
                Phone: {selectedEmployee.phoneNum}
                <br />
                Address: {selectedEmployee.address}
                <br />
                City: {selectedEmployee.city}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </div>
      </>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
        {content}
    </>
  );
};
