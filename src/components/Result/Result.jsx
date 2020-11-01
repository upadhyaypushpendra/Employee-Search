import React from "react";
import "./result.css";
export default function Result({result,handleClick}) {
    return (
        <div id="result-div" className="result-div" >
            {result.map(employee=>(<div key={"employee.id"} onClick={(event)=>{handleClick(employee)}}>{employee.employee_name}</div>))}
         </div>
    );
}