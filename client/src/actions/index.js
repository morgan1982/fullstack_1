import axios from 'axios';
import { CHECK_AUTH } from './types';

export const fetchUser = (callback) => async dispatch => {
    const res = await axios.get('/auth');

    callback(res);

    dispatch({ type: CHECK_AUTH, payload: res.data });
}

export const signUpUser = (gredentials, callback) => async dispatch => {
    const res = await axios.post('/auth/signup', gredentials);
    // console.log('inside the submit action', res);
    callback(res);

}

export const login = data => async dispatch => {
    // console.log("inside login action", data);
    const res = await axios.post('/auth/signin', data)
    return res;

}
