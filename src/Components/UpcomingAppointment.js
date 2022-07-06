import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PatientService from '../Services/Patient';


const UpcomingAppointment = () =>{
   const[appointments, setAppointments]= useState([]);
   //const[isLoading, setLoading] = useState();
  // const[filteredAppointments, setFilteredAppointments] = useState()
  useEffect (() => {
    PatientService.getAppointment().then(res => {
        console.log(res.data);
        setAppointments([...res.data]);
    }).catch(err => {
        alert(err.response.statusText);
    });
  },//[appointment.length]
  )

   return (
    <div className='row'>
        <div>
            <div className='col-12' >
               <h2>Upcoming Appointments</h2>
                <table className='table table-hover table-dark'>
                    <thead>
                        <tr>
                            <th scope="col">Patient Id</th>
                            <th scope='col'>Department Name</th>
                            <th scope='col'>Date of appointment</th>
                        </tr>
                    </thead>
                   <tbody>
                        {appointments.map(t=> <tr key = {t.id}>
                        <td>{t.patientId}</td>
                        <td>{t.departmentName}</td>
                        <td>{t.dateofAppointment}</td>
                        </tr> )}
                    </tbody> 
                </table>
            </div>
        </div>
    </div>
   )
}

export default UpcomingAppointment;