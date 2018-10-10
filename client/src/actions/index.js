import axios from 'axios';
import { CHECK_AUTH } from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export const fetchUser = (callback) => async dispatch => {
    const res = await axios.get('/auth');

    callback(res);

    dispatch({ type: CHECK_AUTH, payload: res.data });
}

export const signUpUser = (gredentials, callback) => async dispatch => {
    const res = await axios.post('/auth/signup', gredentials);
    callback(res);

}

export const login = data => async dispatch => {
    // console.log("inside login action", data);
    const res = await axios.post('/auth/signin', data)
    const { token } = res.data;
    localStorage.setItem('jwtToken', token); // saves the token to the localstorage
    setAuthorizationToken(token); // sets the token to the headers
    let decodedToken = jwt.decode(token);
    console.log("decoded token: ", decodedToken);
    return res;

}
