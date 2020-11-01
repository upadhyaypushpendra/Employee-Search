import React from 'react';
import './App.css';
import Result from "./components/Result/Result";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
require('dotenv').config({path: __dirname + '/.env'})

class App extends React.Component{
    state= {
        employees: [],
        resultDiv : false,
        result:[],
        employee:null
    }
    resultDivDisplay = false;
    inputTimeoutId=0;
    componentDidMount() {
            fetch('http://dummy.restapiexample.com/api/v1/employees')
                .then((response) => response.json())
                .then(result => {
                    this.setState({employee:result.data});
                });
    }
    handleFocusIn (){
        this.setState({ resultDiv : true });
        this.setState({result:[]});
    }
    handleFocusOut (){
        this.setState({ resultDiv : false });
        this.setState({result:[]});
    }
    handleInput (event){
        if(this.inputTimeoutId !== 0 ) clearTimeout(this.inputTimeoutId)
        let searchInput = event.target.value.toUpperCase();
        if(searchInput.length === 1 ) this.handleFocusIn();
        if(searchInput.length === 0)  this.handleFocusOut();
        this.inputTimeoutId = setTimeout(()=>{
            //fetch('http://dummy.restapiexample.com/api/v1/employees')
             //   .then((response) => response.json())
              //  .then(result => {
                    let filteredList = this.state.employees.filter(employee=> employee.employee_name.toUpperCase().includes(searchInput));
                    this.setState({result : filteredList });
                    //console.log(filteredList);
              //  });
        },200);
    }
    render() {
        const handleClick =(employee) =>{
            this.setState({employee:employee});
            this.handleFocusOut();
        }
        return (
            <div className="App">
                <header className="App-header" >
                    <h1>Employee Search</h1>
                    <form>
                        <input type={"text"} autoFocus={true} onChange={ (event)=> this.handleInput(event) } placeholder={"Type to search..."} />
                    </form>
                    { this.state.resultDiv ?  <Result result={this.state.result} handleClick={handleClick} /> : undefined}
                </header>
                <section className="App-content">
                    { this.state.employee ? <EmployeeCard employee={this.state.employee}/> : undefined}
                </section>
            </div>
        );
    }
}
export default App;