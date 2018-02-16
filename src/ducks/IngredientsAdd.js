import * as firebase from 'firebase';

export const CREATING = 'ingredientsAdd/CREATING';
export const SUCCESS = 'ingredientsAdd/SUCCESS';
export const ERROR = 'ingredientsAdd/ERROR';

// action creater

export function ingredientsCreating() {
  return { type: CREATING };
}

export function ingredientsSuccess() {
  return { ype: SUCCESS };
}

export function ingredientsError(errorMessage) {
  return { type: ERROR, errorMessage };
}

// reducer
const initialState = {
  creation: false,
  success: false,
  errorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return { creating: true, success: false, errorMessage: '' };
    case SUCCESS:
      return { creating: false, success: true, errorMessage: '' };
    case ERROR:
      return { creating: false, success: false, errorMessage: action.errorMessage };
    default:
      return state;
  }
}

// thunk
export const ingredientsAdd = ({ imageUrl, title }) => async (dispatch) => {
  if (!imageUrl || !title) {
    dispatch(ingredientsError('필드를 모두 채워주셔야 합니다.'));
    return;
  }
  const { currentUser } = firebase.auth();
  if (!currentUser) {
    return;
  }
  dispatch(ingredientsCreating());
  // try안에서 에러나면 catch 로 넘어간다.
  try {
    const ingredientsRef = firebase
      .database()
      .ref(`Myingredients/${currentUser.uid}`)
      .push({ imageUrl, createdAt: firebase.database.ServerValue.TIMESTAMP, title });
    const titlePromise = firebase
      .database()
      .ref(`ingredientsTitle/${ingredientsRef.key}`)
      .set(title);

    await Promise.all([ingredientsRef, titlePromise]);
    dispatch(ingredientsSuccess());
  } catch (e) {
    dispatch(ingredientsError(`알수 없는 에러가 발생했습니다. 다시 시도해 주세요: ${e.message}`));
  }
};
// 시작전 dispatch 와 끝난 후 dispatch하면 상태가 바뀐다.
