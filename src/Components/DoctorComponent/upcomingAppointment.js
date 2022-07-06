import React, { Component } from 'react';

class UpcomingAppointment extends Component {
  render() {
    return (
      <div> 
      <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}} >
      <h5 className='p-3'>Upcoming Appointments</h5>
      <table className='table-responsive{-sm|-md|-lg|-xl} '>
        <thead>
          <tr>
                <th>s.no</th>
                <th>Category</th>
                <th>Department</th>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>general</td>
            <td>Neurology</td>
            <td>John</td>
            <td>July 9 2022</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    );
  }
}

export default UpcomingAppointment;