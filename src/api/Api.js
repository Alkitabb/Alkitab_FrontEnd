import axios from "axios";
import { storageGet, storageRemove } from "../utils/utilities";

export const BASE_URL = '';

export const axiosInstance = axios.create({ BASE_URL })

// Store Current User
axiosInstance.interceptors.request.use((config) => {

    const TOKEN = storageGet('token')
    if (TOKEN) {
        config.headers = {
            token: `bearer ${TOKEN}`,
            "Content-Type": 'application/json'
        }
    }
    return config
});


// Remove Current User
axiosInstance.interceptors.response.use((response) => {
    // To trigger Automatic LogOut if the Auth is invalid os Ession Expired
    console.log(response);

    if (// Check and confirm response with backend
        response.data?.error?.message === 'Invalid token' ||
        response.data?.error?.message === 'Expired session' ||
        response.data?.error?.message === 'Unauthorised user, Please login'
    ) {
        storageRemove('token')
        window.location.pathname = '/login'
    }
    return response
});
