import { SET_TEXT_MESSAGE } from "./../constants";

const initialState = {
  inputMessage: "",
  dataChat: [
    {
      id: 1,
      type: "i",
      message:
        "sjglsdjlgsjdlg lskj lsdj ldksj gkldjsl jsldgj ldskjg dl;sk d;slkg ;dlskg jdskgn v h 3ij2"
    },
    {
      id: 2,
      type: "me",
      message:
        "2222kdljgldksglkhg dlkshg lkdh kjdsh sdjkghlk jgdlskg lj dglksdj glkd222"
    },
    {
      id: 3,
      type: "i",
      message:
        "nvwoenoewnvwmvwoeinm oiewn oeiwnowien owin wegoign woien weo gjingiw n"
    },
    {
      id: 4,
      type: "i",
      message:
        "nvwoenoewnvwmvwoeinm oiewn oeiwnowien owin wegoign woien weo gjingiw n"
    },
    {
      id: 5,
      type: "i",
      message:
        "nvwoenoewnvwmvwoeinm oiewn oeiwnowien owin wegoign woien weo gjingiw n"
    },
    {
      id: 6,
      type: "me",
      message: "niwngwengwiengweoin n oqwbn gqueyb gewub ewbu iweu biwueb"
    },
    {
      id: 7,
      type: "me",
      message: "dnjssndvdn n injn fein weiu win wi nw"
    },
    {
      id: 8,
      type: "i",
      message:
        "nvwoenoewnvwmvwoeinm oiewn oeiwnowien owin wegoign woien weo gjingiw n"
    },
    {
      id: 9,
      type: "me",
      message: "niwngwengwiengweoin n oqwbn gqueyb gewub ewbu iweu biwueb"
    },
    {
      id: 10,
      type: "me",
      message: "dnjssndvdn n injn fein weiu win wi nw"
    }
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
