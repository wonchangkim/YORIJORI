import * as firebase from 'firebase';


export const GET_USER = 'user/GET_USER';
export const SUCCESS = 'user/SUCCESS';
export const ERROR = 'user/ERROR';
export const USER_CREATE_ERROR = 'user/USER_CREATE_ERROR';


export function userCreateError(errorMessage) {
  return {
    type: USER_CREATE_ERROR,
    errorMessage,
  };
}
export function userSuccess() {
  return {
    type: SUCCESS,
  };
}
const initialState = {
  success: false,
  userCreateErrorMessage: '',
};


export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        success: true,
        userCreateErrorMessage: '',
      };
    case USER_CREATE_ERROR:
      return {
        success: false,
        userCreateErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export const createAccount = ({ email, password, comfirmpassword }) => async (dispatch) => {
  if (!email || !password || !comfirmpassword) {
    dispatch(userCreateError('필드를 모두 채워주셔야 합니다.'));
    return;
  }
  if (password !== comfirmpassword) {
    dispatch(userCreateError('비밀번호가 일치하지 않습니다.'));
    return;
  }
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { currentUser } = firebase.auth();
    console.log(currentUser);
    await firebase.database().ref(`users/${currentUser.uid}`).set({
      uid: currentUser.uid,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      email: currentUser.email,
    });
    dispatch(userSuccess());
  } catch (e) {
    dispatch(userCreateError(`${e.message}`));
  }
};
