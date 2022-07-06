import React, {Component} from "react";
//import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminProfile from "./AdminProfile";
import AccountIcon from '../../Images/account_circle.png';
import AdminDashboard from './AdminDashboard';
import CreateDepartment from "./AddDepartment";
import EditDepartment from "./EditDepartment";


class HeaderDashboard extends Component{
    render(){
        return (
            <Router>
                <div className='text-uppercase'>
                <nav className='navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between'>
                    <nav class="navbar navbar-light">
                            <span class="navbar-brand mb-0 h1">hospital management system</span>
                     </nav>
                        <ul className="nav" >
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Dashboard </Link></li>
                             <li className='nav-item'><Link to={'/AddDepartment'} className="nav-link">Create Department </Link></li>
                             <li className='nav-item'><Link to={'/EditDepartment'} className="nav-link">Modify Department </Link></li>
                            <li className='nav-item'><Link to={'/AdminProfile'} className="nav-link"> <img className='img-fluid' src={AccountIcon} width="30" height="30" alt="" /> </Link></li>
                       
                        </ul> 
                    </nav>
                    <Routes>
                        <Route exact path='/AdminDashboard' element={<AdminDashboard />} />
                        
                        <Route path='/AdminProfile' element={<AdminProfile />} />
                      
                        <Route path='/EditDepartment' element={<EditDepartment />} /> 
                          <Route path='/AddDepartment' element={<CreateDepartment/>} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default HeaderDashboard;