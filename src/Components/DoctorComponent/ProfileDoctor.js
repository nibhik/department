import React, {Component} from "react";

class ProfileDoctor extends Component{
    render(){
        return(
            <div className='card mx-auto mt-5' style={{width: "75%"}}>
                <h2>Profile Details </h2>
                <table className='table-responsive{-sm|-md|-lg|-xl} '>
                <thead>
                        <tr>
                            <th>Doctor Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Email Id</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>003</td>
                            <td>Sandy</td>
                            <td>Female</td>
                            <td>40</td>
                            <td>9874563210</td>
                            <td>sandy03@gmail.com</td>
                            <td>Genere surgeon 14 years of experience</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default ProfileDoctor;