import React, { Component } from 'react';

class WelcomeDashboard extends Component {
  render() {
    return (
        <div>
          <table className='table-responsive{-sm|-md|-lg|-xl} text-uppercase'>
              <thead>
                  <tr>
                      <th className='p-3 px-5' style={{letterSpacing:"5px"}} >welcome back!</th>
                  </tr>
              </thead>
          </table>
          <div class="d-flex justify-content-around p-4">
              <h6>Doctor Id : 003</h6>
              <h6>Name : Sandy</h6>
              <h6>Gender : Female</h6>
              <h6>Age : 22</h6>
          </div>
        </div>
    );
  }
}

export default WelcomeDashboard;