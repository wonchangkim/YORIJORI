import { combineReducers } from 'redux';
import User from './User';
import createUser from './createUser';

export default combineReducers({
  User, createUser,
});
