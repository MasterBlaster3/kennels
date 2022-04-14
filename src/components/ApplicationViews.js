import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./Animal/AnimalList";
import { CustomerList } from "./Customer/CustomerList";
import { EmployeeList } from "./Employee/EmployeeList";
import { LocationList } from "./Location/LocationList";
import { AnimalDetail } from "./Animal/AnimalDetail";
import { LocationDetail } from "./Location/LocationDetail";
import { CustomerDetail } from "./Customer/CustomerDetail";
import { EmployeeDetail } from "./Employee/EmployeeDetail";
import { AnimalForm } from "./Animal/AnimalForm";
import { CustomerForm } from "./Customer/CustomerForm";
import { EmployeeForm } from "./Employee/EmployeeForm";
import { LocationForm } from "./Location/LocationForm";
import { MadLib } from "./MadLib";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { AnimalEditForm } from "./Animal/AnimalEditForm";
import { CustomerEditForm } from "./Customer/CustomerEditForm";
import { EmployeeEditForm } from "./Employee/EmployeeEditForm";
import { LocationEditForm } from "./Location/LocationEditForm";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null);
  };

  return (
    <>
      <Routes>
        {/* Render the home when http://localhost:3000/ */}
        <Route exact path="/" element={<Home />} />

        {/* Render the animal list when http://localhost:3000/animals */}
        <Route
          exact
          path="/animals"
          element={
            <PrivateRoute>
              {" "}
              <AnimalList />{" "}
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/animals/:animalId"
          element={
            <PrivateRoute>
              {" "}
              <AnimalDetail />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/animals/create"
          element={
            <PrivateRoute>
              {" "}
              <AnimalForm />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/animals/:animalId/edit"
          element={
            <PrivateRoute>
              <AnimalEditForm />
            </PrivateRoute>
          }
        />
        <Route exact path="/customers" element={<CustomerList />} />
        <Route path="/customers/:customerId" element={<CustomerDetail />} />
        <Route path="/customers/create" element={<CustomerForm />} />
        <Route
          path="/customers/:customerId/edit"
          element={<CustomerEditForm />}
        />
        <Route exact path="/employees" element={<EmployeeList />} />
        <Route path="/employees/:employeeId" element={<EmployeeDetail />} />
        <Route path="/employees/create" element={<EmployeeForm />} />
        <Route
          path="/employees/:employeeId/edit"
          element={<EmployeeEditForm />}
        />
        <Route exact path="/locations" element={<LocationList />} />
        <Route path="/locations/:locationId" element={<LocationDetail />} />
        <Route path="/locations/create" element={<LocationForm />} />
        <Route
          path="/locations/:locationId/edit"
          element={<LocationEditForm />}
        />
        <Route
          exact
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="/register" element={<Register />} />
        <Route path="/madlib" element={<MadLib />} />
      </Routes>
    </>
  );
};
