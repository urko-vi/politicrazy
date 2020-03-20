import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './AuthVariables';
import UserBean from '../user/UserBean';


export default class Auth {
    accessToken;
    idToken;
    expiresAt;
    userProfile;
    tokenRenewalTimeout;
    idTokenPayload;
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    constructor() {
        console.log(process.env.NODE_ENV);
        console.log(AUTH_CONFIG);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.getExpiryDate = this.getExpiryDate.bind(this);
        this.scheduleRenewal();
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                resolve(this.setSession(authResult));
            });
        })
    }

    getAccessToken() {
        return this.accessToken;
    }

    getIdToken() {
        return this.idToken;
    }

    setSession(authResult) {
        this.idToken = authResult.idToken;
        this.idTokenPayload = authResult.idTokenPayload;
        this.accessToken = authResult.accessToken;
        // set the time that the id token will expire at
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.expiresAt = expiresAt;
        return this.idToken;
    }
    renewSession() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (err) return reject(err);

                resolve(this.setSession(authResult));
            });
        });
    }

    getProfile() {
        return new Promise((resolve, reject) =>
        {
            this.auth0.client.userInfo(this.accessToken, (err, profile) => {
                if (profile) {
                    this.userProfile = profile;
                    let user = new UserBean();
                    user.picture=this.userProfile.picture;
                    user.userName=this.userProfile.nickname;
                    user.token=this.idToken;
                    user.roles=this.userProfile['https://politicrazy.herokuapp.com/roles'];
                    resolve(user);
                } else {
                    reject(err);
                }
               // cb(err, profile);
            });
        });
    }

    logout() {
        // Remove tokens and expiry time
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;

        // Remove user profile
        this.userProfile = null;

        // Clear token renewal
      //  clearTimeout(this.tokenRenewalTimeout);

        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        localStorage.removeItem('id_token');
        this.auth0.logout({
            returnTo: window.location.origin
        });
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time

        let expiresAt = this.expiresAt;
        return (new Date().getTime() < expiresAt);
    }

    scheduleRenewal() {
        let expiresAt = this.expiresAt;
        const timeout = expiresAt - Date.now();
        if (timeout > 0) {
            this.tokenRenewalTimeout = setTimeout(() => {
                this.renewSession();
            }, timeout);
        }
    }

    getExpiryDate() {
        return JSON.stringify(new Date(this.expiresAt));
    }
}