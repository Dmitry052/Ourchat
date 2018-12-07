import { SWITCH_ACTIVE_LIST, SHOW_MENU, SHOW_SETTINGS } from "./../constants";

export const setActiveList = value => dispatch => {
  dispatch({ type: SWITCH_ACTIVE_LIST, data: value });
};

export const switchShowMenu = status => dispatch => {
  dispatch({ type: SHOW_MENU, data: status });
};

export const switchShowSettings = status => dispatch => {
  dispatch({ type: SHOW_SETTINGS, data: status });
};
