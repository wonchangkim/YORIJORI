export const CREATING = 'fetch/CREATING';
export const DONE = 'fetch/DONE';
export const SUCCESS = 'fetch/SUCCESS';
export const ERROR = 'fetch/ERROR';

export function fetchCreating() {
  return {
    type: CREATING,
  };
}

export function fetchSuccess({ base64 }) {
  return {
    type: SUCCESS,
    base64,
  };
}
export function fetchDone(result) {
  return {
    type: DONE,
    result,
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
      };
    case DONE:
      return {
        success: true,
        errorMessage: '',
        base64: '',
        result: action.result,
      };
    case SUCCESS:
      return {
        ...state,
        success: true,
        base64: action.base64,
      };
    case ERROR:
      return {
        success: false,
        errorMessage: action.errorMessage,
        base64: '',
        result: [],
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

    const vision = fetch(visionUrl, {
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
        dispatch(fetchDone(result))
        dispatch(fetchSuccess({ base64 }));

      });

    await Promise.all([vision]);

  } catch (e) {
    dispatch(fetchError(`${e.message}`));
  }
};
