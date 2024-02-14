import axios from "axios";
import { API_URL, JWT_TOKEN } from "../config/CONSTANTS";



export const addAccessToken = (token) => {
    localStorage.setItem(JWT_TOKEN, token);
}

export const clearTokens = () => {
    localStorage.clear();
}

export const getParseAccessToken = () => {
    const token = getAccessToken();
    if (!token) return;
    return parseJwt(token);
}

export const logOut = () => {
    clearTokens();
}

export const getAccessToken = () => {
    return localStorage.getItem(JWT_TOKEN);
}

export const isLoged = () => {
    var token = getAccessToken();
    if(token !==null){
        return false;
    }
    return true;
}

export const parseJwt = (token) => {
    try {
        return JSON.parse(window.atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

