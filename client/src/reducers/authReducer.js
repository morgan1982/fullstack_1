// for the login
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	user: {}
}


export default function(state = null, { type, payload }) {


    switch (type) {
        case SET_CURRENT_USER:

            return payload || false; // to return false instead of an empty object
        default:
            return state


    }
}
