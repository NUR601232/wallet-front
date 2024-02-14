import axios from "axios";
import { API_URL } from "../config/CONSTANTS";
import { getParseAccessToken, getAccessToken, parseJwt } from "./authService";

export const getListaCuenta = () => {
    return new Promise((resolve, reject) => {
        const  Id  = getParseAccessToken();
        axios.get(`${API_URL}cuenta/user/${Id.id}`).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}


export const insertCuenta = ({ 
    nombre,
    saldo
}) => {
    const  Id  = getParseAccessToken();
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}cuenta`, {
            nombre,
            saldo,
            usuario: Id.id
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}


