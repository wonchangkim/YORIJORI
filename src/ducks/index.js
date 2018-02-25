import { combineReducers } from 'redux';
import User from './User';
import createUser from './createUser';
import CameraCapture from './CameraCapture';
import Fetchvision from './Fetchvision';
import Getdatabase from './Getdatabase';
import AddFirebaseDb from './AddFirebaseDb';

export default combineReducers({
  User,
  createUser,
  CameraCapture,
  Fetchvision,
  Getdatabase,
  AddFirebaseDb,
});
