import { combineReducers } from 'redux';
import User from './User';
import createUser from './createUser';
import CameraCapture from './CameraCapture';

export default combineReducers({
  User, createUser, CameraCapture,
});
