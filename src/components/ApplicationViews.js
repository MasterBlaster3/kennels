import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList} from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"
import { AnimalDetails } from "./animal/AnimalDetails"
import { LocationDetails } from "./location/LocationDetails"
import { EmployeeDetails } from "./employee/EmployeeDetails"
import { CustomerDetails } from "./customer/CustomerDetails"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerForm } from "./customer/CustomerForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { MadLib } from "./madlib/MadLib.js"


export const ApplicationViews = () => {
    return (
        <>
        <Routes>
            {/* /*Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />
    
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/customers" element={<CustomerList />}/>
            <Route path="/customers/:customerId" element={<CustomerDetails />} />
            <Route path="/customers/create" element={<CustomerForm/>} />

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/employees" element={<EmployeeList />}/>
            <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
            <Route path="/employee/create" element={<EmployeeForm/>} />

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/locations" element={<LocationList />}/>
            <Route path="/locations/:locationId" element={<LocationDetails />} />
            <Route path="/locations/create" element={<LocationForm/>} />

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/animals" element={<AnimalList />} />
            <Route path="/animals/:animalId" element={<AnimalDetails />} />
            <Route path="/animals/create" element={<AnimalForm/>} />

            {/*
            This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack
            */}

            <Route path="/madlib" element={<MadLib />} />

        </Routes>
    </>
    )
}
