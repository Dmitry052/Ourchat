import { SET_TEXT_MESSAGE } from "./../constants";

const initialState = {
  inputMessage: "",
  dataChat: [
    { id: 1, text: "111111" },
    {
      id: 2,
      text: "2222222"
    },
    { id: 3, text: "333333" }
  ]
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_MESSAGE: {
      return { ...state, inputMessage: action.data };
    }
    default:
      return { ...state };
  }
}
