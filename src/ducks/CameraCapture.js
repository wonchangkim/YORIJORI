export const CREATING = 'camera/CREATING';
export const SUCCESS = 'camera/SUCCESS';
export const ERROR = 'camera/ERROR';

export function cameraCreating() {
  return {
    type: CREATING,
  };
}

export function cameraSuccess({ imageUrl, base64 }) {
  return {
    type: SUCCESS,
    imageUrl,
    base64,
  };
}

export function cameraError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  creating: '',
  success: false,
  errorMessage: '',
  imageUrl: '',
  base64: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
        imageUrl: '',
        base64: '',
      };
    case SUCCESS:
      return {
        success: true,
        errorMessage: '',
        imageUrl: action.imageUrl,
        base64: action.base64,
      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        imageUrl: '',
        base64: '',
      };
    default:
      return state;
  }
}

// thunk

export const getImage = ({ imageUrl, base64 }) => (dispatch) => {
  try {
    dispatch(cameraCreating());
    dispatch(cameraSuccess({ imageUrl, base64 }));
  } catch (e) {
    dispatch(cameraError(`${e.message}`));
  }
};
