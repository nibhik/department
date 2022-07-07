import React, {Component} from "react";
import consultantDetails from './consultantDetails';

class AdminDashboard extends Component{
    render(){
        return(
           
            <div className="justify-content-center">
                <div className="card mx-auto mt-5" style={{width: "75%"}}>
                    <h4>Consultant Records </h4>
                    <table className ='table-responsive{-sm|-md|-lg|-xl text uppercase'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Date</th>
                        <th>PatientId</th>
                        <th>DoctorId</th>
                        <th>Doctor Name</th>
                    </tr>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>07/07/2022</td>
                    <td>101</td>
                    <td>1001</td>
                    <td>Nicky</td>
                </tbody>
            </table>
                </div>
            </div>

        )
    }
}

export default AdminDashboard;