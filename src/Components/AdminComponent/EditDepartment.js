
import React, {Component, useEffect, useState} from 'react';
import remove from '../../Images/delete.png';
import DepartmentService from '../../Services/Department';
import {Link} from 'react-router-dom';


class EditDepartment extends Component{
    constructor(){
        super();
        this.state = {
                departments: []
        };
    }

    

    componentDidMount(){
        DepartmentService.getDepartment()
        .then(res =>  {
            this.setState ({departments: res.data});
        })
        .catch(res => {});
        
    }

    componentDidUpdate(){
        DepartmentService.getDepartment()
        .then(res => {
            this.setState({departments : res.data});
        })
        .catch(res => {});
    }

    handleDelete = ev =>{
        ev.preventDefault();
        const result = window.confirm('Are you sure you want to delete: ' +ev.target.value);
        if (result) {

            DepartmentService.removeDepartment(ev.target.value)
            .then(res => {
                    alert("deleted successfully");
            })
            .catch(res =>{alert("Something went wrong")});
        }
    }
    render(){
      
        return(
            <div>
                <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}}>
                    <h4 className='p-3'> List Of Department</h4>
                    <table className='table-responsive{-sm|-md|-lg|-xl} '>
                        <thead>
                            <tr>
                               <th>Id</th>
                               <th>Department Name</th>
                               <th>Category</th>
                               <th>Doctor Name</th>
                               <th>Edit</th>
                               <th>Delete</th>
                            </tr>
                        </thead>
              
            <tbody>
                {departments.map(t=> <tr key = {t.id}>
                <td>{t.id}</td>
                <td>{t.departmentName}</td>
                <td>{t.category}</td>
                <td>{t.consultant}</td>
                <td><button type="button" class="btn btn-warning"><Link to= {'/' +t.id}className='btn'></Link> Edit</button></td>
                <td><button type="button" class="btn btn-danger" value={t.id} onClick={this.handleDelete.bind(this)}>Delete</button></td>
                </tr>)}
            </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EditDepartment;