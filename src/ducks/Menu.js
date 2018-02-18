import * as firebase from 'firebase';

export const MENU_OPEN = 'menu/MENU_OPEN';
export const MENU_CLOSE = 'menu/MENU_CLOSE';


export function menuOpen() {
  return {
    type: MENU_OPEN,
  };
}
export function menuClose() {
  return {
    type: MENU_CLOSE,
  };
}


const initialState = {
  menuOn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU_OPEN:
      return {
        menuOn: true,
      };
    case MENU_CLOSE:
      return {
        menuOn: false,
      };
    default:
      return state;
  }
}

// export const handelMenu = () => async (dispatch) => {
//   try {
//   }
// };
