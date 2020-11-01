import React from "react";
import "./employeecard.css";
import profileIcon from './../../employee.svg'
export default function EmployeeCard({employee}) {
    return (
        <div className="employee-card" >
            <img src={ employee && employee.profile_image ? employee.profile_image : profileIcon}/>
            <p>ID : {employee.employee_name}</p>
            <p>Age: {employee.employee_age}</p>
            <p>Salary : {employee.employee_salary}</p>
        </div>
    );
}