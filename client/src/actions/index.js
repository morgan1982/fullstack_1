import axios from 'axios';
import { CHECK_AUTH } from './types';

export const fetchUser = (callback) => async dispatch => {
    const res = await axios.get('/auth');

    callback(res);

    dispatch({ type: CHECK_AUTH, payload: res.data });
}

export const signUpUser = (gredentials, callback) => async dispatch => {
    const res = await axios.post('/auth/signUpTest', gredentials);
    console.log('inside the submit action', res);
    callback(res);

}
