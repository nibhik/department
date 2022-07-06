import axios from "axios";

const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:22832/' //22832 //5000
});

const addNewDeaprtment = departmentObj => {
    return http.post('api/Admin', departmentObj);
}

const getDepartment = () => {
    return http.get('api/Admin');
}

const updateDepartment = id => {
    return http.get('api/Admin/'+id);
}

const removeDepartment = (departmentId) => {
    return http.delete('api/Admin/'+departmentId);
}

let DepartmentService  = {addNewDeaprtment, removeDepartment,updateDepartment, getDepartment};
export default DepartmentService;