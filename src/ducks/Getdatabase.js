import * as firebase from 'firebase';
import recipeData from '../assets/recipeData.json';

export const LOADING = 'getdatabase/LOADING';
export const SUCCESS = 'getdatabase/SUCCESS';
export const ERROR = 'getdatabase/ERROR';
export const DELETE = 'getdatabase/DELETE';
export const NULL = 'getdatabase/NULL';
export const ADD_SEARCH_FORM = 'getdatabase/ADD_SEARCH_FORM';
export const ADD_SEARCH_FORM_OFF = 'getdatabase/ADD_SEARCH_FORM_OFF';
export const ADDRECIPE_TITLE = 'getdatabase/ADDRECIPE_TITLE';
export const ADDDETAIL_RECIPE = 'getdatabase/ADDDETAIL_RECIPE';
export const ADDBASE_RECIPE_INGREDIENT = 'getdatabase/ADDBASE_RECIPE_INGREDIENT';
export const ADDBASE_RECIPE = 'getdatabase/ADDBASE_RECIPE';
export const GET_DATA_COOKMARK = 'getdatabase/GET_DATA_COOKMARK';
export const SELECT_COOKMARK = 'getdatabase/SELECT_COOKMARK';
export const SELECT_COOKMARK_DONE = 'getdatabase/SELECT_COOKMARK_DONE';
export const ADD_DATA_SHOPPING_MEMO = 'getdatabase/ADD_DATA_SHOPPING_MEMO';

export function getdataLoading(step) {
  return {
    type: LOADING,
    step,
  };
}
export function addSearchForm(cardId, title, imgurl) {
  return {
    type: ADD_SEARCH_FORM,
    cardId,
    title,
    imgurl,
  };
}
export function SearchFormOff() {
  return {
    type: ADD_SEARCH_FORM_OFF,
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
export function selectCookmark() {
  return {
    type: SELECT_COOKMARK,
  };
}
export function getdataCookmark(Cookmarklist) {
  return {
    type: GET_DATA_COOKMARK,
    Cookmarklist,
  };
}
export function selectDone() {
  return {
    type: SELECT_COOKMARK_DONE,
  };
}
export function addShoppingMemo(shoppingmemoObj) {
  return {
    type: ADD_DATA_SHOPPING_MEMO,
    shoppingmemoObj,
  };
}
const initialState = {
  loading: false,
  success: false,
  errorMessage: '',
  ingredients: [],
  done: false,
  ingredientsNull: false,
  addSearchFormOn: false,
  searchData: [],
  recipeTitle: [],
  searchRecipeDone: false,
  detailRecipe: [],
  detailRecipeDone: false,
  baseRecipe: [],
  baserecipeIngredient: [],
  cookmark: [],
  selectcookmarkclick: false,
  shoppingMemo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.step,
      };
    case SUCCESS:
      return {
        ...state,
        ingredientsNull: false,
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
        ingredientsNull: true,
      };
    case ADD_SEARCH_FORM:
      return {
        ...state,
        addSearchFormOn: true,
        searchData: [...(state.searchData), action.title, action.imgurl],
      };
    case ADD_SEARCH_FORM_OFF:
      return {
        ...state,
        addSearchFormOn: false,
      }
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
    case GET_DATA_COOKMARK:
      return {
        ...state,
        cookmark: action.Cookmarklist,
      };
    case SELECT_COOKMARK:
      return {
        ...state,
        selectcookmarkclick: true,
      };
    case SELECT_COOKMARK_DONE:
      return {
        ...state,
        selectcookmarkclick: false,
      };
    case ADD_DATA_SHOPPING_MEMO:
      return {
        ...state,
        shoppingMemolist: action.shoppingmemoObj,
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
  dispatch(getdataLoading(true));
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
  dispatch(getdataLoading(false));
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

export const addIngredientForm = (cardId, title, imgurl) => async (dispatch) => {
  dispatch(addSearchForm(cardId, title, imgurl));
};
// firebase function recipesearcher
// firebase function fetch 보내기
// 재료을 통한 레시피 타이틀 검색
export const searchRecipe = searchTitle => async (dispatch) => {
  dispatch(getdataLoading(true));
  console.log('검색');
  console.log(searchTitle);

  const searchtitleUrl = `https://us-central1-yorijori-5bfc6.cloudfunctions.net/recipeseacher/searchtitle/${searchTitle}`;

  fetch(searchtitleUrl, {
    method: 'GET',
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
      dispatch(getdataLoading(false));
    });
};

// 상세레시피 검색(요리순서 + 재료)
export const searchDetailRecipe = recipeId => async (dispatch) => {

  console.log('디테일리세피검색');
  console.log(recipeId);

  const detailrecipeUrl = `https://us-central1-yorijori-5bfc6.cloudfunctions.net/recipeseacher/detailrecipe/${recipeId}`;
  const baseRecipeUrl = `https://us-central1-yorijori-5bfc6.cloudfunctions.net/recipeseacher/baserecipe/${recipeId}`;
  const newData = recipeData.data;

  function newbaseRecipe(element) {
    return newData.filter(data => data.RECIPE_ID === element);
  }
  newbaseRecipe(recipeId);
  console.log(newbaseRecipe(recipeId));

  dispatch(addbaseRecipe(newbaseRecipe(recipeId)));

  fetch(detailrecipeUrl, {
    method: 'GET',
  })
    .then(res => res.json()).then((response) => {
      const detailreciperesult = response.Grid_20150827000000000228_1.row;
      console.log(detailreciperesult);
      dispatch(addDetailrecipe(detailreciperesult));
    });

  fetch(baseRecipeUrl, {
    method: 'GET',
  })
    .then(res => res.json()).then((response) => {
      const basereciperesultIngredient = response.Grid_20150827000000000227_1.row;
      console.log(basereciperesultIngredient);
      dispatch(addbaserecipeIngredient(basereciperesultIngredient));
    });
};
// firebase function recipesearcher 끝


export const getdatabaseCookmark = () => async (dispatch) => {
  // dispatch(getdataLoading());
  try {
    const { uid } = firebase.auth().currentUser;
    const snapshot = await firebase.database().ref(`usersCookmark/${uid}`).once('value');
    const cookmarkObj = snapshot.val();
    console.log(cookmarkObj);
    if (cookmarkObj) {
      const Cookmarklist = Object.entries(cookmarkObj).map(([key, { IMG_URL, RECIPE_ID, RECIPE_NM_KO }]) => ({
        IMG_URL,
        RECIPE_ID,
        RECIPE_NM_KO,
      }));
      console.log(Cookmarklist);
      dispatch(getdataCookmark(Cookmarklist));
    } else {
      // dispatch(getdataNull());
    }
  } catch (e) {
    dispatch(getdataError(`${e.message}`));
  }
};

export const clickcookmark = () => async (dispatch) => {
  dispatch(selectCookmark());
};

export const clickcookmarkDone = () => async (dispatch) => {
  dispatch(selectDone());
}

export const getdataShoppingMemo = () => async (dispatch) => {
  const { uid } = firebase.auth().currentUser;
  const snapshot = await firebase.database().ref(`usersShoppingMemo/${uid}/`).once('value');
  const shoppingmemoObj = snapshot.val();
  dispatch(addShoppingMemo(shoppingmemoObj));
}
