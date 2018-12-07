import { SET_TEXT_MESSAGE } from "./../constants";

export const setTextMessage = value => dispatch => {
  dispatch({ type: SET_TEXT_MESSAGE, data: value });
};
