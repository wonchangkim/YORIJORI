
export const SUCCESS = 'camera/SUCCESS';
export const ERROR = 'camera/ERROR';

// export function cameraCreating({ title, imageUrl }) {
//   return {
//     type: CREATING,
//     title,
//     imageUrl,
//   };
// }

export function cameraSuccess({ imageUrl }) {
  return {
    type: SUCCESS,
    imageUrl,
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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        success: true,
        errorMessage: '',
        imageUrl: action.imageUrl,
      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        imageUrl: '',
      };
    default:
      return state;
  }
}

export const getImage = ({ imageUrl }) => (dispatch) => {
  try {
    // dispatch(cameraCreating({ title, imageUrl }));
    dispatch(cameraSuccess({ imageUrl }));
  } catch (e) {
    dispatch(cameraError(`${e.message}`));
  }
};
