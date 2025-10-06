import axios from "axios";
import e from "express";

const SEVER_URL = 'http://localhost:5000/api';

const registerUser =  (data) => {
    return axios.post(SEVER_URL + '/register', data);
}
    

const loginUser =  (data) => {
    return axios.post(SEVER_URL + '/login', data);
}


const AuthServices = {
    registerUser,
    loginUser
}
export default AuthServices;

