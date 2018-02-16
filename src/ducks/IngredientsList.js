import * as firebase from 'firebase';

export const LOADING = 'myingredientslist/LOADING';
export const SUCCESS = 'myingredientslist/SUCCESS';

export function myingredientsLoading() {
  return {
    type: LOADING,
  };
}
export function myingredientsSuccess() {
  return {
    type: SUCCESS,
    ingredients,
  };
}
const initialState = {
  loading: false,
  ingredients: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        ingredients: action.ingredients,
      };
    default:
      return state;
  }
}

export const fetchMyIngredientsList = () => async (dispatch) => {
  dispatch(myingredientsLoading());
  const snapshot = await firebase
    .database()
    .ref('myingredients')
    .once('value');
  const ingredientsObj = snapshot.val();
  // console.log(articlesObj);
  const ingredients = Object
    .entries(ingredientsObj)
    .map(([id, article]) => ({
      ...article,
      id,
      nickName: '닉네임', // FIXME
    }));
  dispatch(myingredientsSuccess(ingredients));
};
