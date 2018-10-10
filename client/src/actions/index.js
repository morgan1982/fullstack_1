import axios from 'axios';
import { CHECK_AUTH, SET_CURRENT_USER } from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export const fetchUser = (callback) => async dispatch => {
    const res = await axios.get('/auth');

    callback(res);

    dispatch({ type: CHECK_AUTH, payload: res.data });
}


// SIGN UP ACTION
export const signUpUser = (gredentials, callback) => async dispatch => {
    const res = await axios.post('/auth/signup', gredentials);
    callback(res);

};


// LOGIN ACTION
export const login = data => async dispatch => {

	const res = await axios.post('/auth/signin', data);

    const { token } = res.data;
    localStorage.setItem('jwtToken', token); // saves the token to localstorage
    setAuthorizationToken(token); // sets the token to headers
    let decodedToken = jwt.decode(token);
    // console.log("decoded token: ", decodedToken);
	const { sub, user } = decodedToken;

    dispatch({ type: SET_CURRENT_USER, payload:  {id: sub, user } });

}
