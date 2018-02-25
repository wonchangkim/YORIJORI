import * as firebase from 'firebase';


export const GET_USER = 'user/GET_USER';
export const SUCCESS = 'user/SUCCESS';
export const ERROR = 'user/ERROR';
export const USER_CREATE_ERROR = 'user/USER_CREATE_ERROR';

// export function getUser() {
//   return dispatch => {
//     firebase.auth().onAuthStateChanged(user => {
//       dispatch({
//         type: GET_USER,
//         user,
//       })
//     })
//   };
// }
export function userError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}
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
  errorMessage: '',
  userCreateErrorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        loading: false,
        ...action,
      };
    case SUCCESS:
      return {
        success: true,
        errorMessage: '',
        userCreateErrorMessage: '',
      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        userCreateErrorMessage: '',
      };
    case USER_CREATE_ERROR:
      return {
        success: false,
        errorMessage: '',
        userCreateErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export const login = ({ email, password }) => async (dispatch) => {
  if (!email || !password) {
    dispatch(userError('필드를 모두 채워주셔야 합니다.'));
    return;
  }
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(userSuccess());
  } catch (e) {
    dispatch(userError(`${e.message}`));
  }
};
export const Googlelogin = () => async (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider);
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
    dispatch(userError(`${e.message}`));
  }
};


export function logout() {
  return dispatch => firebase.auth().signOut();
}

