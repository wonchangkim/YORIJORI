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

// 구글 비전 API

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
    const visionUrl = 'https://us-central1-yorijori-5bfc6.cloudfunctions.net/vision/';
    const tranlatUrl = 'https://us-central1-yorijori-5bfc6.cloudfunctions.net/vision/translate';
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
        const translateRequest = {
          q: result,
          target: 'ko',
        };
        fetch(tranlatUrl, {
          method: 'post',
          body: JSON.stringify(translateRequest),
        }).then(response => response.json())
          .then((response) => {
            const transResult = response.data.translations
              .map(({ translatedText }) => (translatedText));
            console.log(transResult);
            dispatch(fetchSuccess({ base64 }, transResult));
          });
      });

    // dispatch(fetchDone());
  } catch (e) {
    dispatch(fetchError(`${e.message}`));
  }
};


