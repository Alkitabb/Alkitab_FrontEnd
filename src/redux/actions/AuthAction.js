import { USER_REGISTRATION } from '../../api/Auth'
import { AUTHENTICATION_TYPE } from './Types';

export const USER_REGISTRATION = (requestObject) => async (dispatch) => {
    try {
        const USER_DATA = await USER_REGISTRATION(requestObject)

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