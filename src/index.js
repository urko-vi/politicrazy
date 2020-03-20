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


let ACCESS_TOKEN = localStorage.getItem('id_token');
const client = new ApolloClient({
    uri: 'https://politicazy.herokuapp.com/v1/graphql',
    headers: {
        'Authorization': 'Bearer '+ACCESS_TOKEN,
        "content-type": "application/json"
}});

const PoliticrazyApp = () => (
    <ApolloProvider client={client}>
        <Provider store={configureStore()} >
            <Template />
        </Provider>
    </ApolloProvider>
);
ReactDOM.render(
    <PoliticrazyApp/>,
    document.getElementById('root')
);
serviceWorker.register();


