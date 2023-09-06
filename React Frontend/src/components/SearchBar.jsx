import React, {useEffect, useState} from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { searchResults, updateSearchTerm } from "../Redux/employeeSlice";

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const employees = useSelector((state) => state.employee.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        const results = employees.filter((employee) =>{
            const fullName = employee.firstName + " " + employee.lastName;
            return fullName.toLowerCase().includes(searchTerm)
        }
        );
        dispatch(searchResults(results));
    }, [searchTerm]);

    function handleOnChange(e){
        setSearchTerm(e.target.value.toLowerCase());
        dispatch(updateSearchTerm(e.target.value.toLowerCase()));
    }

  return (
    <>
      <div className="search-bar">
        <TextField fullWidth label="Search Employees" id="fullWidth" onChange={handleOnChange}/>
      </div>
    </>
  );
};
