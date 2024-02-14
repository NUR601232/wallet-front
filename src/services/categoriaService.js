import axios from "axios";
import { API_URL } from "../config/CONSTANTS";
import { getParseAccessToken, getAccessToken, parseJwt } from "./authService";

export const getListaCategoria = () => {
    return new Promise((resolve, reject) => {
        const  Id  = getParseAccessToken();
        axios.get(`${API_URL}categoria/user/${Id.id}`).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const insertCategoria = ({ 
    nombre
}) => {
    const  Id  = getParseAccessToken();
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}categoria`, {
            nombre,
            usuario: Id.id
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}


