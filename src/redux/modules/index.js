import { combineReducers } from 'redux';
import users from './users';
import id from './id';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    id,
    users,
    pender: penderReducer
});