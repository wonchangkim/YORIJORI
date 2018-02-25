import * as firebase from 'firebase';

export const LOADING = 'getdatabase/LOADING';
export const SUCCESS = 'getdatabase/SUCCESS';
export const ERROR = 'getdatabase/ERROR';

export function getdataLoading() {
  return {
    type: LOADING,
  };
}

export function getdataSuccess(ingredients) {
  return {
    type: SUCCESS,
    ingredients,
  };
}
export function getdataError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  loading: false,
  success: false,
  errorMessage: '',
  ingredients: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        laoding: true,
        success: false,
        errorMessage: '',
        ingredients: [],
      };
    case SUCCESS:
      return {
        loading: false,
        success: true,
        errorMessage: '',
        ingredients: action.ingredients,
      };
    case ERROR:
      return {
        loading: false,
        success: false,
        errorMessage: action.errorMessage,
        ingredients: [],
      };
    default:
      return state;
  }
}

// thunk

export const getdatabaseIngredients = () => async (dispatch) => {
  dispatch(getdataLoading());
  try {
    const { uid } = firebase.auth().currentUser;
    const snapshot = await firebase.database().ref(`usersIngredients/${uid}`).once('value');
    const ingredientsObj = snapshot.val();
    const ingredients = Object.entries(ingredientsObj).map(([id, title]) => ({
      ...title,
      id,
    }));
    console.log(ingredients)
    dispatch(getdataSuccess(ingredients));
  } catch (e) {
    dispatch(getdataError(`${e.message}`));
  }
};

export const deleteDatabase = cardId => async (dispatch) => {
  dispatch(getdataLoading());
  try {
    const { uid } = firebase.auth().currentUser;
    console.log(cardId);
    await firebase.database().ref(`usersIngredients/${uid}`).child(`${cardId}`).remove();
  } catch (e) {
    dispatch(getdataError(`${e.message}`));
  }
};
