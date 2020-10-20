import React from "react";
import "./employeecard.css";
export default function EmployeeCard({result}) {
    return (
        <div id="result-div" className="result-div" >
            {result.map(employee=>(<div>{employee.employee_name}</div>))}
         </div>
    );
}