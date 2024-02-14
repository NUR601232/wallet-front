import axios from "axios";
import { API_URL } from "../config/CONSTANTS";

export const insertUsuario = ({ 
    nombre, 
    correo, 
    contrasenha
}) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}usuario`, {
            nombre,
            correo,
            contrasenha
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}


export const loginUsuario = ({    
    email, 
    password
}) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}usuario/auth`, {
            email,
            password
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}