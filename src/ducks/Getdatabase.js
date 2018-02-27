import * as firebase from 'firebase';
import recipeData from '../assets/recipeData.json';

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
        ...state,
        laoding: true,
        success: false,
        errorMessage: '',
        ingredients: [],
        done: false,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        errorMessage: '',
        ingredients: action.ingredients,
        done: false,
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        success: false,
        errorMessage: '',
        ingredients: '',
        done: true,
      };
    case NULL:
      return {
        ...state,
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
        searchData: [...(state.searchData), action.title],
      };
    case ERROR:
      return {
        ...state,
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

export const searchRecipe = searchTitle => async(dispatch) => {
  console.log('검색');
  console.log(searchTitle[0]);
  const API_KEY = '068053684a6ffcd05aa40616567345cbdd4febd116fbad4a7e0c0f6ee5741cc1';
  const request = `http://211.237.50.150:7080/openapi/${API_KEY}/json/Grid_20150827000000000227_1/1/5?IRDNT_NM=${searchTitle[0]}`;

  fetch(request, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  })
    .then(res => res.json()).then((response) => {
      const result = response.Grid_20150827000000000227_1.row;
      console.log(result);
      const newReicpeIdarry = result.map(({ RECIPE_ID }) => (
        RECIPE_ID
      ));
      console.log(newReicpeIdarry);
      const newData = recipeData.data;
      const resultData = [];
      const newArry = (element, index, array) => {
        const a = newData.filter(data => data.RECIPE_ID === element);
        resultData.push(a[0]);
      };
      newReicpeIdarry.forEach(newArry)
      console.log(resultData);
    });

  // console.log(arryByID)
};
