
import React, {Component, useEffect, useState} from 'react';
import remove from '../../Images/delete.png';


class EditDepartment extends Component{
    render(){
        return(
            <div>
                <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}}>
                    <h4 className='p-3'> List Of Department</h4>
                    <table className='table-responsive{-sm|-md|-lg|-xl} '>
                        <thead>
                            <tr>
                               <th>Sr.No</th>
                               <th>Department Name</th>
                               <th>Category</th>
                               <th>Edit</th>
                               <th>Delete</th>
                            </tr>
                        </thead>
              
            <tbody>
                <tr>
                <td>1</td>
                <td>Neurology</td>
                <td>General</td>
                <td><button type="button" class="btn btn-warning">Edit</button></td>
                <td><button type="button" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EditDepartment;