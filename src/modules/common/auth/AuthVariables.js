const AUTH_CONFIG_PROD = {
    domain: 'observer.eu.auth0.com',
    clientId: 'ceZjeQhNN4BUxASm49UDlQo2C4ZkZW6i',
};

const AUTH_CONFIG_DEVELOP = {
    domain: 'observer.eu.auth0.com',
    clientId: 'ceZjeQhNN4BUxASm49UDlQo2C4ZkZW6i',
};

console.log(process.env.REACT_APP_HOST_ENV,process.env.NODE_ENV);
export const AUTH_CONFIG = process.env.REACT_APP_HOST_ENV === 'production' ? AUTH_CONFIG_PROD : AUTH_CONFIG_DEVELOP;