import {USER}  from '../constants/actionTypes';


export const loginSucces = userinfo => ({
    type: USER.login.success,
    userinfo
});

export const loginFinish = () => ({
    type: USER.login.complete,
});

export const loginFail = error => ({
    type: USER.login.error,
    error
});
export const logOutSucces = () => ({
    type: USER.logout.success,
});

export const logoutFail = error => ({
    type: USER.logout.error,
    error
});

