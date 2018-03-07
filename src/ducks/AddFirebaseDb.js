import * as firebase from 'firebase';

export const CREATING = 'addfirebaseDb/CREATING';
export const DONE = 'addfirebaseDb/DONE';
export const SUCCESS = 'addfirebaseDb/SUCCESS';
export const ERROR = 'addfirebaseDb/ERROR';
export const ADD_DATA_SHOPPING_MEMO = 'getdatabase/ADD_DATA_SHOPPING_MEMO';

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
export function addDataShoppingMemo(memoRecipeId) {
  return {
    type: ADD_DATA_SHOPPING_MEMO,
    memoRecipeId,
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
    case DONE:
      return {
        ...state,
        done: false,
      };
    case SUCCESS:
      return {
        ...state,
        success: true,
        done: true,
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case ADD_DATA_SHOPPING_MEMO:
      return {
        ...state,
        shoppingMemo: action.memoRecipeId,
      };
    default:
      return state;
  }
}

// thunk

export const addDatabase = (title, filename, base64) => async (dispatch) => {
  const { uid } = firebase.auth().currentUser;
  try {
    const snapshot = await firebase.storage().ref(`images${uid}:${new Date().getTime()}`).putString(base64, 'data_url');
    await firebase.database().ref(`usersIngredients/${uid}`).push({
      title,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      downloadURL: snapshot.downloadURL,
      filename,
    });
    console.log(firebase.auth())
    dispatch(firebaseSuccess());
    dispatch(firebaseDone());
  } catch (e) {
    dispatch(firebaseError(`${e.message}`));
  }
};


export const AddCookmark = (
  isChecked,
  baseRecipe,
  detailRecipe,
  baserecipeIngredient,
) => async (dispatch) => {
  // dispatch(firebaseCreating());
  const { uid } = firebase.auth().currentUser;
  const [{ RECIPE_ID, RECIPE_NM_KO, IMG_URL }] = baseRecipe;
  const pushdata = {
    RECIPE_ID,
    RECIPE_NM_KO,
    IMG_URL,
    isChecked,
  };
  try {
    if (isChecked) {
      console.log('add');
      console.log(isChecked);
      firebase.database().ref(`usersCookmark/${uid}/${RECIPE_ID}`).update(pushdata);
    } else {
      console.log(isChecked);
      await firebase.database().ref(`usersCookmark/${uid}/${RECIPE_ID}`).remove();
    }
    // dispatch(firebaseDone());
  } catch (e) {
    dispatch(firebaseError(`${e.message}`));
  }
};

export const DeleteCookmark = recipeid => async (dispatch) => {
  const { uid } = firebase.auth().currentUser;

  try {
    console.log('Delete');
    await firebase.database().ref(`usersCookmark/${uid}`).child(`${recipeid}`).remove();
    dispatch(firebaseSuccess());
    dispatch(firebaseDone());
  } catch (e) {
    dispatch(firebaseError(`${e.message}`));
  }
};

export const addShoppingMemo = (memoRecipeId, memoRecipeimg, memoRecipeko) => async (dispatch) => {
  console.log(memoRecipeId)
  const { uid } = firebase.auth().currentUser;
  const baseRecipe = `https://us-central1-yorijori-5bfc6.cloudfunctions.net/recipeseacher/baserecipe/${memoRecipeId}`;
  await fetch(baseRecipe, {
    method: 'GET',
  })
    .then(res => res.json()).then((response) => {
      const Ingredient = response.Grid_20150827000000000227_1.row;
      console.log(Ingredient);

      firebase.database().ref(`usersShoppingMemo/${uid}/${memoRecipeId}`).update({
        RECIPE_ID: memoRecipeId,
        RECIPE_IMG: memoRecipeimg,
        RECIPE_KO: memoRecipeko,
        Ingredient,
      });
    });
};
