// for the login
import { CHECK_AUTH } from '../actions/types';

export default function(state = null, { type, payload }) {
    console.log("outside reduder", type, payload);


    switch (type) {
        case CHECK_AUTH:
            console.log("inside the auth reducer")
            return payload || false;
        default:
            return state


    }
}
