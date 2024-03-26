export const ELECTION = {
    load: {
        success: 'ELECTION_LOAD_SUCCESS',
        error: 'ELECTION_LOAD_ERROR'
    },
    create: {
        success: 'ELECTION_CREATE_SUCCESS',
        error: 'ELECTION_CREATE_ERROR'
    },
    update: {
        success: 'ELECTION_UPDATE_SUCCESS',
        error: 'ELECTION_UPDATE_ERROR'
    },
    delete: {
        success: 'ELECTION_DELETE_SUCCESS',
        error: 'ELECTION_DELETE_ERROR'
    }
};
export const ELECTION_HISTORY = {
    load: {
        success: 'ELECTION_HISTORY_LOAD_SUCCESS',
        error: 'ELECTION_HISTORY_LOAD_ERROR'
    },
};
export const PARTY = {
    load: {
        success: 'PARTY_LOAD_SUCCESS',
        error: 'PARTY_LOAD_ERROR'
    },
    update: {
        success: 'PARTY_UPDATE_SUCCESS',
        error: 'PARTY_UPDATE_ERROR'
    }
};
export const PARTIES = {
    load: {
        success: 'LOAD_PARTIES_SUCCESS',
        error: 'LOAD_PARTIES_ERROR'
    }
};
export const COUNTRY = {
    load: {
        success: 'LOAD_UPDATE_SUCCESS',
        error: 'LOAD_UPDATE_ERROR'
    },
    update: {
        success: 'COUNTRY_UPDATE_SUCCESS',
        error: 'COUNTRY_UPDATE_ERROR'
    }
};
export const USER = {
    login: {
        success: 'USER_LOGIN_SUCCESS',
        error: 'USER_LOGIN_ERROR',
        complete:'USER_LOGIN_COMPLETE',
    },
    logout: {
        success: 'USER_LOGOUT_SUCCESS',
        error: 'USER_LOGOUT_ERROR'
    },
};

/*
export class UserActions {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.login  = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.verify = this.verify.bind(this);
        this.userID = 'user';
        this.userToken='token';
    }
    loaded(){
        localStorage.setItem(this.userID, true);
        return this.dispatch({type: USER.login.success});
    }
    login(token) {
        localStorage.setItem(this.userToken, token);
        return this.dispatch({type: USER.login.success});
    }
    logout() {
        localStorage.removeItem(this.userToken);
        return this.dispatch({type: USER.logout.success});
    }
    verify() {

        const user = localStorage.getItem(this.userID);
        if (user) {
            return this.dispatch({type: USER.verify.success});
        }
        return this.dispatch({type: USER.verify.error});
    }
}
*/