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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
        title: '',
      };
    case DONE:
      return {
        success: true,
        errorMessage: '',
        title: '',
        result: action.result,

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

export const addDatabase = title => async (dispatch) => {
  dispatch(firebaseCreating());
  const { uid } = firebase.auth().currentUser;
  try {
    const userIngredientsRef = firebase.database().ref(`usersIngredients/${uid}`).push({ title });
  } catch (e) {
    dispatch(firebaseError(`${e.message}`));
  }
};
