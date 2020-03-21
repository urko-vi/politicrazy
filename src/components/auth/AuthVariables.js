const AUTH_CONFIG_PROD = {
    domain: 'observer.eu.auth0.com',
    clientId: 'ceZjeQhNN4BUxASm49UDlQo2C4ZkZW6i',
    callbackUrl: 'https://politicrazy.herokuapp.com/callback'
};

const AUTH_CONFIG_DEVELOP = {
    domain: 'observer.eu.auth0.com',
    clientId: 'ceZjeQhNN4BUxASm49UDlQo2C4ZkZW6i',
    callbackUrl: 'http://localhost:3000/callback'
};

console.log(process.env.NODE_ENV, AUTH_CONFIG_PROD, AUTH_CONFIG_DEVELOP);
export const AUTH_CONFIG = process.env.NODE_ENV === 'production' ? AUTH_CONFIG_PROD : AUTH_CONFIG_DEVELOP;