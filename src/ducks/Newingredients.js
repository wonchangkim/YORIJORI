import * as firebase from 'firebase';
/*
데이터구조 생각
{
  title: '',
  imageUrl: '',
  date: '',
}
*/

export const CREATING = 'newingredients/CREATING';
export const SUCCESS = 'newingredients/SUCCESS';
export const ERROR = 'newingredients/ERROR';

// action creater

export function ingredientsCreating() {
  return {
    type: CREATING,
  };
}

export function ingredientsSuccess() {
  return {
    type: SUCCESS,
  };
}

export function ingredientsError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

// reducer
const initialState = {
  creating: false,
  success: false,
  errorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
      };
    case SUCCESS:
      return {
        creating: false,
        success: true,
        errorMessage: '',
      };
    case ERROR:
      return {
        creating: false,
        success: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

// thunk
export const createIngredients = ({ title, imageUrl, date }) => async (dispatch) => {
  dispatch(ingredientsCreating());
  // try안에서 에러나면 catch 로 넘어간다.
  try {
    const { currentUser } = firebase.auth();
    const articleRef = firebase
      .database()
      .ref(`users-ingredients/${currentUser.uid}`)
      .push({
        title,
        imageUrl,
        date,
      });
    dispatch(ingredientsSuccess());
  } catch (e) {
    dispatch(ingredientsError(`알수 없는 에러가 발생했습니다. 다시 시도해 주세요: ${e.message}`));
  }
};
// 시작전 dispatch 와 끝난 후 dispatch하면 상태가 바뀐다.
