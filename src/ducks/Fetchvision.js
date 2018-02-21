export const CREATING = 'fetch/CREATING';
export const DONE = 'fetch/DONE';
export const SUCCESS = 'fetch/SUCCESS';
export const ERROR = 'fetch/ERROR';

export function fetchCreating() {
  return {
    type: CREATING,
  };
}

export function fetchDone(result) {
  return {
    type: DONE,
    result,
  };
}
export function fetchSuccess({ base64 }, transResult) {
  return {
    type: SUCCESS,
    base64,
    transResult,
  };
}
export function fetchError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  creating: '',
  success: false,
  errorMessage: '',
  base64: '',
  result: [],
  transResult: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
        base64: '',
        result: [],
        transResult: [],
      };
    case DONE:
      return {
        success: true,
        errorMessage: '',
        base64: '',
        result: action.result,
        transResult: [],
      };
    case SUCCESS:
      return {
        ...state,
        success: true,
        base64: action.base64,
        transResult: action.transResult,
      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        base64: '',
        result: [],
        transResult: [],
      };
    default:
      return state;
  }
}

// thunk

export const fetchvision = ({ base64 }) => async (dispatch) => {
  const index = base64.indexOf(',');
  const newBase64 = base64.substring(index + 1, base64.lenght);
  const request = {
    requests: [
      {
        image: {
          content: newBase64,
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 3,
          },
        ],
      },
    ],
  };
  dispatch(fetchCreating());
  try {
    const visionUrl = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB4iT8dqlu88KMWEGSV8MxNqRsUeXNvJ6g';
    const tranlatUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyB4iT8dqlu88KMWEGSV8MxNqRsUeXNvJ6g';
    await fetch(visionUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    }).then(res => res.json())
      .then((res) => {
        const result = res.responses[0].labelAnnotations
          .map(({ description }) => (description));
        console.log(result);
        dispatch(fetchDone(result));
        const translateRequest = {
          q: result,
          target: 'ko',
        };
        fetch(tranlatUrl, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(translateRequest),
        }).then(response => response.json())
          .then((response) => {
            const transResult = response.data.translations
              .map(({ translatedText }) => (translatedText));
            console.log(transResult);
            dispatch(fetchSuccess({ base64 }, transResult));
          });
      });


  } catch (e) {
    dispatch(fetchError(`${e.message}`));
  }
};
