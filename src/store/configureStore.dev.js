import { createStore,compose,applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic, rootReducer} from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const epicMiddleware = createEpicMiddleware();



export default function configureStore() {

    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );

    epicMiddleware.run(rootEpic);
    return store;
};
