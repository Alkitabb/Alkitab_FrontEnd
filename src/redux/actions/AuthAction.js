import { USER_REGISTRATION_REQUEST } from '../../api/AuthRequest'
import { AUTHENTICATION_TYPE } from './ActionTypes';

export const USER_REGISTRATION = (requestObject) => async (dispatch) => {
    try {
        const USER_DATA = await USER_REGISTRATION_REQUEST(requestObject)

        if (USER_DATA?.success) {
            dispatch({
                type: AUTHENTICATION_TYPE.SUCCESS,
                payload: USER_DATA.success
            })
        } else {
            dispatch({
                type: AUTHENTICATION_TYPE.ERROR, 
                payload: USER_DATA.error
            })
        }
    } catch (error) {
        console.log(error);
    }
};




export const LOGIN = () => {

};