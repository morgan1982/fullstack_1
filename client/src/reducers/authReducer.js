// for the login
import { CHECK_AUTH } from '../actions/types';

export default function(state = {}, { type }) {



    switch (type) {
        case CHECK_AUTH:
            console.log("inside the auth reducer")
            return null;
        default:
            return state
    }
}
