export const CREATING = 'fetch/CREATING';
export const DONE = 'fetch/DONE';
export const SUCCESS = 'fetch/SUCCESS';
export const ERROR = 'fetch/ERROR';

export function fetchCreating() {
  return {
    type: CREATING,
  };
}

export function fetchDone() {
  return {
    type: DONE,
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
  done: false,
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
        done: false,
      };
    case DONE:
      return {
        creating: '',
        success: true,
        errorMessage: '',
        base64: '',
        result: [],
        transResult: [],
        done: true,
      };
    case SUCCESS:
      return {
        errorMessage: '',
        success: true,
        base64: action.base64,
        result: [],
        transResult: action.transResult,
        done: '',
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
            maxResults: 5,
          },
        ],
      },
    ],
  };
  dispatch(fetchCreating());
  try {
    const visionUrl = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB4iT8dqlu88KMWEGSV8MxNqRsUeXNvJ6g';
    const tranlatUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyB4iT8dqlu88KMWEGSV8MxNqRsUeXNvJ6g';
    // vision api
    const fetching = fetch(visionUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    const fetchRes = fetching.json();
    const Data = fetchRes.responses[0].labelAnnotations.map(({ description }) => (description));
    // translate
    const translateRequest = {
      q: Data,
      target: 'ko',
    };
    const transfetch = fetch(tranlatUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(translateRequest),
    });
    const transfetchRes = transfetch.json();
    const transData = transfetchRes.data.translations.map(({ translatedText }) => (translatedText));
    console.log(transData);
    await Promise.all([fetching, transfetch]);
    dispatch(fetchSuccess({ base64 }, transData));
    dispatch(fetchDone());
  } catch (e) {
    dispatch(fetchError(`${e.message}`));
  }
};

