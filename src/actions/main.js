import { SWITCH_ACTIVE_LIST } from "./../constants";

export const setActiveList = value => dispatch => {
  dispatch({ type: SWITCH_ACTIVE_LIST, data: value });
};
