import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Template from './template';
import configureStore from './store/configureStore';
import { Auth0Provider } from "./modules/common/auth/Auth";
import history from './modules/common/auth/History';
import {AUTH_CONFIG} from "./modules/common/auth/AuthVariables";

let ACCESS_TOKEN = localStorage.getItem('id_token');
const client = new ApolloClient({
    uri: 'https://politicazy.herokuapp.com/v1/graphql',
    headers: {
        'Authorization': 'Bearer '+ACCESS_TOKEN,
        "content-type": "application/json"
}});
const onRedirectCallback = appState => {
    console.log(appState,window.location.pathname);
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const callbackUri = window.location.origin;
const PoliticrazyApp = () => (
    <ApolloProvider client={client}>
        <Provider store={configureStore()} >
            <Auth0Provider
                domain={AUTH_CONFIG.domain}
                client_id={AUTH_CONFIG.clientId}
                redirect_uri={callbackUri}
                onRedirectCallback={onRedirectCallback}
            >
                <Template />
            </Auth0Provider>
        </Provider>
    </ApolloProvider>
);
ReactDOM.render(
        <PoliticrazyApp/>,
    document.getElementById('root')
);
serviceWorker.register();

