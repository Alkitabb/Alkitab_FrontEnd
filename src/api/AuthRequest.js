import axios from './Api'

export const USER_REGISTRATION_REQUEST = (requestObject) => axios.post('backEnd URL', requestObject).then((response)=>response.data) // write api backend here (Endpoint)