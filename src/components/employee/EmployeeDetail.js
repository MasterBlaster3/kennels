import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../modules/EmployeesManager";
import './EmployeeDetails.css';

export const EmployeeDetails = () => { 
  const [employee, setEmployee] = useState({name: ''})

  const {employeeId} = useParams()

  useEffect(() => {
    getEmployeeById(employeeId)
    .then(employee => {
      setEmployee(employee);
    }); 
  }, [employeeId])

  return (
    <section className="employee">
      <picture>
        <img src={employee.image} alt="employee" className="employeeImage" />
      </picture>
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">Location: {employee.location?.name}</div>
    <div className="employee__locationAddress">Address: {employee.location?.address}</div>
    </section>
  )
}