import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardDoctor from './DashboardDoctor';
import ProfileDoctor from './ProfileDoctor';
import AccountIcon from '../../Images/account_circle.png'; 
import MyAppointment from './MyAppointment';
import UpcomingAppointment from './upcomingAppointment';

class HeaderDashboard extends Component {
    render (){
        return(
            <Router>
                <div className='text-uppercase'>
                    <nav className='navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between'>
                    <nav class="navbar navbar-light">
                            <span class="navbar-brand mb-0 h1">hospital management system</span>
                        </nav>
                        <ul className="nav" >
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Dashboard </Link></li>
                            {/* <li className='nav-item'><Link to={'/upcmoingAppointment'} className="nav-link">Upcoming Appointment </Link></li> */}
                            <li className='nav-item'><Link to={'/MyAppointment'} className="nav-link">Upcoming Appointment </Link></li>
                            {/* <li className='nav-item'><Link to={'/ProfileDoctor'} className="nav-link">Details</Link></li> */}
                            <li className='nav-item'><Link to={'/ProfileDoctor'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                       
                        </ul> 
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<DashboardDoctor />} />
                        {/* <Route path='/Appointment' element={<AppointmentPatient />} /> */}
                        <Route path='/ProfileDoctor' element={<ProfileDoctor />} />
                        {/* <Route path='/upcomingAppointment' element={<UpcomingAppointment />}  */}
                        {/* <Route path='/AppointmentEdit' element={<AppointmentEdit />} /> */}
                        <Route path='/MyAppointment' element={<UpcomingAppointment />} />
                    </Routes>
                </div>
                
                </Router>
        )
    }
}
export default HeaderDashboard;