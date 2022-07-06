import React,{Component, useState} from "react";
import DepartmentService from "../../Services/Department";

class CreateDepartment extends Component{
    
    constructor(){
        super();
        this.state = {
            category :" ",
            departmentName : " ",
            consultant : ""
        };
    }
    
    changeHandler = ev =>{
        let{name, value} = ev.target;
        this.setState({[name]: value});
    }

         submitHandler = ev =>{
                    ev.preventDefault();
                   DepartmentService.addNewDeaprtment(newDeaprtment)
                   .then(res =>{
                    alert("Department created!!");
                   })
                   .catch(res => {
                    alert("Something went wrong");
                   });
                console.log(newDeaprtment);
                this.setState({
                    category :" ",
                    departmentName : " ",
                    consultant : ""
                });
        }
    

    render(){
        return(
            <div>
                <div className='card mx-auto mt-5 justify-content-center' style={{width: "55%"}}>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="p-5">
                                Create a new Department
                            </h4>
                            <form method="post" onSubmit={submitHandler} className="form-group row m-3">
                            <div className='form-group row m-3'>
                            <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Category</label> 
                          <div className='col-sm-6'>
                              <input type="text" className="form-control"
                              placeholder="Enter Category"
                              id="cat"
                              name="category"
                              value={this.state.category}
                              onChange = {this.changeHandler.bind(this)}
                              required/>
                             </div>
                      </div>
                      <div className='form-group row m-3'>
                            <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Department Name</label> 
                          <div className='col-sm-6'>
                              <input type="text" className="form-control"
                              placeholder="Enter department name"
                              id="dept"
                              name="deptName"
                              value={this.state.departmentName}
                              onChange = {this.changeHandler.bind(this)}
                              required/>
                             </div>
                      </div>
                      <div className='form-group row m-3'>
                            <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Doctor Name</label> 
                          <div className='col-sm-6'>
                              <input type="text" className="form-control"
                              placeholder="Enter doctor name"
                              id="doc"
                              name="docName"
                              value={this.state.consultant}
                              onChange = {this.changeHandler.bind(this)}
                              required/>
                             </div>
                      </div>

                      <button class="btn btn-primary " type="submit">Create Now</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateDepartment;