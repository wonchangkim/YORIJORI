export const CREATING = 'camera/CREATING';
export const SUCCESS = 'camera/SUCCESS';
export const ERROR = 'camera/ERROR';
export const DONE = 'camera/DONE';

export function cameraCreating() {
  return {
    type: CREATING,
  };
}
export function cameraDone() {
  return {
    type: DONE,
  };
}
export function cameraSuccess({ filename, imageUrl, base64 }) {
  return {
    type: SUCCESS,
    imageUrl,
    base64,
    filename,
  };
}

export function cameraError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  creating: false,
  success: false,
  errorMessage: '',
  imageUrl: '',
  base64: '',
  filename: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        ...state,
        creating: true,
      };
    case SUCCESS:
      return {
        ...state,
        imageUrl: action.imageUrl,
        base64: action.base64,
        filename: action.filename,
        creating: false,
      };
    case DONE:
      return {
        ...state,
        creating: false,
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

export const getImage = ({ filename, imageUrl, base64 }) => (dispatch) => {
  try {
    dispatch(cameraCreating());
    dispatch(cameraSuccess({ filename, imageUrl, base64 }));
  } catch (e) {
    dispatch(cameraError(`${e.message}`));
  }
  dispatch(cameraDone());
};
