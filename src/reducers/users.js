import { USER } from '../constants/actionTypes';
import history from "../modules/common/auth/History";

export default function users(state = {}, action) {
    switch (action.type) {
        case USER.login.success:
            history.replace('/home');
            return {
                ...state,
                user: action.userinfo
            };
        case USER.login.error:
            history.replace('/');
            break;
        case USER.logout.success:
            history.replace('/');
            return state;
        case USER.login.complete:
            console.log(action);
            console.log(state);

            return state;
        default:
            return state;
    }
};

/*
import history from "../components/auth/History";
const InitialState ={};


export default function(state=InitialState, action) {

    switch (action.type) {

        case USER.login.success:
            console.log(action);
            return Object.assign({}, state, {
                user: action.userinfo
            });
        case USER.login.error:
            history.replace('/');
            break;
        case USER.logout.success:
            history.replace('/');
            return state;
        case USER.login.complete:
            console.log(action);
            console.log(state);
            history.replace('/home');
            return state;
        default:
            return state;
    }
};
*/