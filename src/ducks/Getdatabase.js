import * as firebase from 'firebase';
import recipeData from '../assets/recipeData.json';

export const LOADING = 'getdatabase/LOADING';
export const SUCCESS = 'getdatabase/SUCCESS';
export const ERROR = 'getdatabase/ERROR';
export const DELETE = 'getdatabase/DELETE';
export const NULL = 'getdatabase/NULL';
export const ADDSEARCHFROM = 'getdatabase/ADDSEARCHFROM';
export const ADDRECIPE_TITLE = 'getdatabase/ADDRECIPE_TITLE';
export const ADDDETAIL_RECIPE = 'getdatabase/ADDDETAIL_RECIPE';
export const ADDBASE_RECIPE_INGREDIENT = 'getdatabase/ADDBASE_RECIPE_INGREDIENT';
export const ADDBASE_RECIPE = 'getdatabase/ADDBASE_RECIPE';

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
export function addrecipeTitle(resultData) {
  return {
    type: ADDRECIPE_TITLE,
    resultData,
  };
}
export function addbaserecipeIngredient(basereciperesultIngredient) {
  return {
    type: ADDBASE_RECIPE_INGREDIENT,
    basereciperesultIngredient,
  };
}
export function addbaseRecipe(basereciperesult) {
  return {
    type: ADDBASE_RECIPE,
    basereciperesult,
  };
}

export function addDetailrecipe(detailreciperesult, recipeName, recipeImg) {
  return {
    type: ADDDETAIL_RECIPE,
    detailreciperesult,
    recipeName,
    recipeImg,
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
  recipeTitle: [],
  searchRecipeDone: false,
  detailRecipe: [],
  detailRecipeDone: false,
  baseRecipe: [],
  baserecipeIngredient: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        laoding: true,
      };
    case SUCCESS:
      return {
        ...state,
        success: true,
        ingredients: action.ingredients,
      };
    case DELETE:
      return {
        ...state,
        done: true,
      };
    case NULL:
      return {
        ...state,
        done: true,
      };
    case ADDSEARCHFROM:
      return {
        ...state,
        addSearchFormOn: true,
        searchData: [...(state.searchData), action.title],
      };
    case ADDRECIPE_TITLE:
      return {
        ...state,
        searchRecipeDone: true,
        recipeTitle: action.resultData,
      };
    case ADDDETAIL_RECIPE:
      return {
        ...state,
        recipeName: action.recipeName,
        detailRecipeDone: true,
        detailRecipe: action.detailreciperesult,
        recipeImg: action.recipeImg,
      };
    case ADDBASE_RECIPE_INGREDIENT:
      return {
        ...state,
        baserecipeIngredient: action.basereciperesultIngredient,
      };
    case ADDBASE_RECIPE:
      return {
        ...state,
        baseRecipe: action.basereciperesult,
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
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

export const searchRecipe = searchTitle => async (dispatch) => {
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
      const newArry = (element) => {
        const a = newData.filter(data => data.RECIPE_ID === element);
        resultData.push(a[0]);
      };
      newReicpeIdarry.forEach(newArry);
      console.log(resultData);
      dispatch(addrecipeTitle(resultData));
    });
};

export const searchDetailRecipe = recipeId => async (dispatch) => {
  console.log('디테일리세피검색');
  console.log(recipeId);

  const API_KEY = '068053684a6ffcd05aa40616567345cbdd4febd116fbad4a7e0c0f6ee5741cc1';
  const request = `http://211.237.50.150:7080/openapi/${API_KEY}/json/Grid_20150827000000000228_1/1/20?RECIPE_ID=${recipeId}`;
  const baseRecipe = `http://211.237.50.150:7080/openapi/${API_KEY}/json/Grid_20150827000000000227_1/1/30?RECIPE_ID=${recipeId}`;
  const newData = recipeData.data;
  function newbaseRecipe(element) {
    return newData.filter(data => data.RECIPE_ID === element);
  }
  newbaseRecipe(recipeId);
  console.log(newbaseRecipe(recipeId));
  dispatch(addbaseRecipe(newbaseRecipe(recipeId)));

  fetch(request, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  })
    .then(res => res.json()).then((response) => {
      const detailreciperesult = response.Grid_20150827000000000228_1.row;
      console.log(detailreciperesult);
      dispatch(addDetailrecipe(detailreciperesult));
    });
  fetch(baseRecipe, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  })
    .then(res => res.json()).then((response) => {
      const basereciperesultIngredient = response.Grid_20150827000000000227_1.row;
      console.log(basereciperesultIngredient);
      dispatch(addbaserecipeIngredient(basereciperesultIngredient));
    });
}
