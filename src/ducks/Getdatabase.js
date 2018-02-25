import * as firebase from 'firebase';

export const LOADING = 'getdatabase/LOADING';
export const SUCCESS = 'getdatabase/SUCCESS';
export const ERROR = 'getdatabase/ERROR';
export const DELETE = 'getdatabase/DELETE';
export const NULL = 'getdatabase/NULL';
export const ADDSEARCHFROM = 'getdatabase/ADDSEARCHFROM';

export function getdataLoading() {
  return {
    type: LOADING,
  };
}
export function addSearchForm(cardId, title) {
  return {
    type: ADDSEARCHFROM,
    cardId,
    title,
  };
}
export function getdataSuccess(ingredients) {
  return {
    type: SUCCESS,
    ingredients,
  };
}
export function getdataNull() {
  return {
    type: NULL,
  };
}
export function getdataDelete() {
  return {
    type: DELETE,
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
  done: false,
  addSearchFormOn: false,
  searchData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        laoding: true,
        success: false,
        errorMessage: '',
        ingredients: [],
        done: false,
      };
    case SUCCESS:
      return {
        loading: false,
        success: true,
        errorMessage: '',
        ingredients: action.ingredients,
        done: false,
      };
    case DELETE:
      return {
        loading: false,
        success: false,
        errorMessage: '',
        ingredients: '',
        done: true,
      };
    case NULL:
      return {
        loading: false,
        success: false,
        errorMessage: '',
        ingredients: '',
        done: true,
        nothingdata: false,
      };
    case ADDSEARCHFROM:
      return {
        ...state,
        addSearchFormOn: true,
        searchData: [state.searchData, action.title],
      };
    case ERROR:
      return {
        loading: false,
        success: false,
        errorMessage: action.errorMessage,
        ingredients: [],
        done: false,
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
    if (ingredientsObj) {
      const ingredients = Object.entries(ingredientsObj).map(([id, title]) => ({
        ...title,
        id,
      }));
      console.log(ingredients);
      dispatch(getdataSuccess(ingredients));
    } else {
      dispatch(getdataNull());
    }
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
    dispatch(getdataDelete());
  } catch (e) {
    dispatch(getdataError(`${e.message}`));
  }
};

export const addIngredientForm = (cardId, title) => async (dispatch) => {
  dispatch(addSearchForm(cardId, title));
};
