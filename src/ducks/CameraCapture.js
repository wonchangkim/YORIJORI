
export const SUCCESS = 'camera/SUCCESS';
export const ERROR = 'camera/ERROR';

// export function cameraCreating({ title, imageUrl }) {
//   return {
//     type: CREATING,
//     title,
//     imageUrl,
//   };
// }

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
  success: false,
  errorMessage: '',
  imageUrl: '',
  base64: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
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

export const getImage = ({ imageUrl, base64 }) => (dispatch) => {
  try {
    // dispatch(cameraCreating({ title, imageUrl }));
    dispatch(cameraSuccess({ imageUrl, base64 }));
  } catch (e) {
    dispatch(cameraError(`${e.message}`));
  }
};
