import React, {Component} from "react";
import WelcomeDashboard from './WelcomeDashboard';

class DashboardDoctor extends Component{
    render(){
        return (
            <div className="justify-content-center">
                <div className="card mx-auto mt-5" style={{width: "75%"}}>
                    <WelcomeDashboard/>
                    
                </div>
            </div>
        )
    }
}

export default DashboardDoctor;