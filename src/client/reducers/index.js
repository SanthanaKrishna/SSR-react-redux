import {combineReducers} from 'redux';
import userReducer from './userReducres';

export default combineReducers({
    users:userReducer
});