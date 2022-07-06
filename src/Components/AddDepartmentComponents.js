import React, { useState } from 'react';
import DepartmentService from '../Services/Department.js';
 
function AddDepartment(props){
    const [ Department, setDepartment ] = useState({
        Consultant : '',
        DepartmentName :''
    });

    const handleDepatmentChnage = e => {
        let { name, value, type} = e.target;
        if(type == 'string')
            value = new String(value);
        setDepartment ({...Department, [name]: value});
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(Department.Consultant, Department.DepartmentName);
        DepartmentService.addNewDeaprtment(Department).then(res => {
            alert('Department Added');
        }).catch(res => { });
    }

    return (
        <div >
        <div className="col-12" >
            <h1 className='p-3 mb-2 bg-dark text-white bolder'>Add A Department</h1>
            <form method="post" onSubmit={submitHandler} >
                <div>
                <label for="Consultant" >Enter Consultant Name: </label>
                <input type="number" onChange={handleDepatmentChnage} name="Consultant" id='ConsultantId' value={Department.Consultant} placeholder='Enter Consultant Name'/>
                </div> 
                <br></br>   
                <div>
                <label for="DepartmentName" >Enter Department Name: </label>
                <input type="text" onChange={handleDepatmentChnage} name="DepartmentName" id='DepartmentName' value={Department.DepartmentName} placeholder='Enter Department Name'/>
                </div>
                <div>
                <input className='btn btn-primary' type="submit" />
                </div>
            </form>
        </div>
    </div>
    )
}

export default AddDepartment;