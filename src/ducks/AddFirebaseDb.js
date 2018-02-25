import * as firebase from 'firebase';

export const CREATING = 'addfirebaseDb/CREATING';
export const DONE = 'addfirebaseDb/DONE';
export const SUCCESS = 'addfirebaseDb/SUCCESS';
export const ERROR = 'addfirebaseDb/ERROR';

export function firebaseCreating() {
  return {
    type: CREATING,
  };
}

export function firebaseDone() {
  return {
    type: DONE,
  };
}
export function firebaseSuccess() {
  return {
    type: SUCCESS,
  };
}
export function firebaseError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  creating: '',
  success: false,
  errorMessage: '',
  title: '',
  done: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
        title: '',
        done: '',
      };
    case DONE:
      return {
        success: false,
        errorMessage: '',
        title: '',
        result: '',
        done: true,
      };
    case SUCCESS:
      return {
        ...state,
        success: true,
        title: '',

      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        title: '',
        result: '',
      };
    default:
      return state;
  }
}

// thunk

export const addDatabase = (title, filename, base64) => async (dispatch) => {
  dispatch(firebaseCreating());
  const { uid } = firebase.auth().currentUser;
  try {
    const snapshot = await firebase.storage().ref(`images${uid}:${new Date().getTime()}`).putString(base64, 'data_url');

    const userIngredientsRef = await firebase.database().ref(`usersIngredients/${uid}`).push({
      title,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      downloadURL: snapshot.downloadURL,
      filename,
    });
    console.log(firebase.auth())
    dispatch(firebaseDone());
  } catch (e) {
    dispatch(firebaseError(`${e.message}`));
  }
};
