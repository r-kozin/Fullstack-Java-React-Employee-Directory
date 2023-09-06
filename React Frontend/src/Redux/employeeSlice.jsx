import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees"

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employee) => {
    const response = await axios.post(
      BASE_URL,
      employee
    );
    console.log(response.data);
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee) => {
    const response = await axios.put(
      BASE_URL + `/${employee.id}/edit`,
      employee
    );
    console.log(response.data);
    return response.data;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    const response = await axios.delete(
      BASE_URL + `/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const getEmployeeById = createAsyncThunk(
  "employee/getEmployeeById",
  async (id) => {
    const response = await axios.get(
      BASE_URL + `/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    selectedEmployee: {},
    searchTerm: "",
    searchResults: [],
    status: "idle",
    error: null,
  },
  reducers: {
    searchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmployees.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.status = "success";
      })
      .addCase(addEmployee.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
        state.status = "success";
      })
      .addCase(updateEmployee.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(
          (employee) => employee.id === action.payload.id
        );
        state.employees[index] = action.payload;
        console.log(state.employees[index] + "updated");
        state.status = "success";
      })
      .addCase(deleteEmployee.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(
          (employee) => employee.id === action.payload.id
        );
        state.employees.splice(index, 1);
        console.log(state.employees);
        state.status = "success";
      })
      .addCase(getEmployeeById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getEmployeeById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getEmployeeById.fulfilled, (state, action) => {
        state.selectedEmployee = action.payload;
        console.log(action.payload + "selected");
        state.status = "success";
      });
  },
});

export const { searchResults, updateSearchTerm } = employeeSlice.actions;
export default employeeSlice.reducer;
