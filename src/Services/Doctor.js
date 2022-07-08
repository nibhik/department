import axios from "axios";


const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:5000' //35246 //5000
});

const addReport = reportObj => {
    return http.post('api/Consultant/SubmitDiagnosisTreatment', reportObj);
}

const getReports = () => {
    return http.get('api/Consultant/GetConsultantReports');
}

let DoctorService = { getReports,addReport };
export default DoctorService;