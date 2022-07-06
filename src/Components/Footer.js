import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Component} from 'react';

var totalResult =0;
  
class PatientDetails extends Component {

    constructor(props){
        super(props);

        this.checkData = this.checkData(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);

        this.state = {
            persons: [],
            totalResult: 0,
            message:""
        }
    }

    componentDidMount(){
        axios.get('')
        .then(Response => {
            totalResult = Response.data.totalResult;
            this.setState({
                totalResult: Response.data.totalResult
            })
        }).catch((error) => {
            console.log(error);
        });

        axios.get('')
        .then(Response =>{
            this.setState({
                "patients" : Response.data.data,
            })
        }).catch((error) => {
            console.log(error);
        });
    }
    checkData(){
        if(this.state.patients){
            return (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Patient Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Problem</th>
                            <th>Diagnosis</th>
                            <th>Treatment</th>
                            <th>Doctor Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.patients.map(patient =>
                            <tr>
                                <td>{patient.id}</td>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.problem}</td>
                                <td>{patient.diagnosis}</td>
                                <td>{patient.treatment}</td>
                                <td>{patient.docName}</td>
                            </tr>)}
                    </tbody>
                </table>
            )}
            else{
                return(
                    
                    <h3>No Records Found</h3>
                )
            }
    }

    render(){
        return(
            <div id='wrap' className='container'>
                <br/>
                <div className='algin-items-center'>
                <h1>All Patients Record</h1><br/>
                <h3>Total Patients: {this.state.totalResult}</h3>

                  <div className="table-responsive">

                        {this.checkData()}

                    </div>

                    <h3 style={{color: "red"}}>{this.state.message}</h3>
                
                </div>
            </div>

        )}

}
export default PatientDetails;