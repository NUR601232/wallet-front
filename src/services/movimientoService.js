import axios from "axios";
import { API_URL } from "../config/CONSTANTS";
import { getParseAccessToken, getAccessToken, parseJwt } from "./authService";

export const getListaMovimientos = () => {
    return new Promise((resolve, reject) => {
        const Id = getParseAccessToken();
        axios.post(`${API_URL}movimiento/filter`, { userId: Id.id }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const insertMovimiento = ({
    monto,
    cuenta,
    categoria,
    tipo,
    fecha
}) => {
    const Id = getParseAccessToken();
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}movimiento`, {
            monto: parseInt(monto),
            cuenta,
            categoria,
            tipo,
            fecha
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}


export const insertTransferencia = ({
    monto,
    da,
    categoria,
    recive,
    fecha
}) => {
    const Id = getParseAccessToken();
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}transferencia`, {
            monto: parseInt(monto),
            da,
            categoria,
            recive,
            fecha
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}
