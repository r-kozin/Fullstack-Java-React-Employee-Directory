import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Employees } from "./pages/Employees";
import { AddEmployee } from "./pages/AddEmployee";
import { UpdateEmployee } from "./pages/UpdateEmployee";
import { EmployeeDetailsPage } from "./pages/EmployeeDetailsPage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
              <Route path="/employee/:id" element={<EmployeeDetailsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
