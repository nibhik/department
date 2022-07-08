import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import PatientService from "../../Services/Patient";

const UpcomingAppointment = props=> {
  let{doctorId} = useParams();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    PatientService.getAppointmentById().then(res => {
      console.log(res.data);
      setAppointments([...res.data]);
    }).catch(err => {
      alert(err.response.statusText);
    });
  }, [appointments.length])

  // const filterAppointmen = ev =>{
  //       let userId = appointments.map( m=> m.Id);
  //       let filteredAppointment = patient.filter(())
  // }
    return <div className="row">
          
    <div className='card mx-auto mt-5' style={{width: "75%"}} >
    {/* <h2>MyAppointment Component</h2> */}
    <h5 className='p-3'>My Appointments</h5>
    <table className='table-responsive{-sm|-md|-lg|-xl} '>
  <thead>
    <tr>
          <th>s.no</th>
          <th>Patient Id</th>
          <th>Appointment Date</th>
    </tr>
  </thead>
  <tbody>
    {appointments.map (t => <tr key = {t.id}>
      <td>{t.id}</td>
      <td>{t.patientId}</td>
      <td>{t.dateOfAppointment}</td>
    </tr>)}
  </tbody>
</table>
</div>
  </div>
        
    
  }


export default UpcomingAppointment ;
