//import { USER } from '../constants/actionTypes';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import users from './users';

export const rootEpic = combineEpics(

);

export const rootReducer = combineReducers({
    users
});