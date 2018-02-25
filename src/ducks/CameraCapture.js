export const CREATING = 'camera/CREATING';
export const SUCCESS = 'camera/SUCCESS';
export const ERROR = 'camera/ERROR';

export function cameraCreating() {
  return {
    type: CREATING,
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
  creating: '',
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
        creating: true,
        success: false,
        errorMessage: '',
        imageUrl: '',
        base64: '',
        filename: '',
      };
    case SUCCESS:
      return {
        success: true,
        errorMessage: '',
        imageUrl: action.imageUrl,
        base64: action.base64,
        filename: action.filename,
      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        imageUrl: '',
        base64: '',
        filename: '',
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
};
