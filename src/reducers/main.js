import { SWITCH_ACTIVE_LIST } from "./../constants";

const initialState = {
  activeList: "chats",
  chats: [
    {
      id: 0,
      chatname: "Днюха",
      toClient: "Иванов",
      lastMessage: { from: "Иванов", message: "Что дарим?" },
      datetime: "19.10.2018 13:40",
      photo: true
    },
    {
      id: 2,
      chatname: "Покупки",
      toClient: "Петров",
      lastMessage: { from: "Петров", message: "Какую тачку купим?" },
      datetime: "10.11.2018 11:03",
      photo: true
    },
    {
      id: 3,
      chatname: "Сопли",
      toClient: "Руменцев",
      lastMessage: { from: "Руменцев", message: "не реви" },
      datetime: "10.11.2018 11:03",
      photo: true
    },
    {
      id: 4,
      chatname: "Работа",
      toClient: "Жихарев",
      lastMessage: { from: "Жихарев", message: "Где отчет?" },
      datetime: "10.11.2018 11:03",
      photo: true
    },
    {
      id: 5,
      chatname: "Жиза",
      toClient: "Кудряшов",
      lastMessage: { from: "Кудряшов", message: "Гоу в бар?" },
      datetime: "10.11.2018 11:03",
      photo: true
    }
  ],
  users: [
    {
      id: 0,
      firstname: "Иван",
      lastname: "Иванов",
      phone: "89613456372",
      photo: true,
      status: "offline"
    },
    {
      id: 1,
      firstname: "Петр",
      lastname: "Петров",
      phone: "89613749372",
      photo: null,
      status: "online"
    },
    {
      id: 2,
      firstname: "Игорь",
      lastname: "Руменцев",
      phone: "89913749372",
      photo: true,
      status: "online"
    },
    {
      id: 3,
      firstname: "Евгений",
      lastname: "Жихарев",
      phone: "89993749352",
      photo: null,
      status: "online"
    },
    {
      id: 4,
      firstname: "Владимир",
      lastname: "Кудряшов",
      phone: "89893749002",
      photo: null,
      status: "online"
    }
  ]
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SWITCH_ACTIVE_LIST: {
      return { ...state, activeList: action.data };
    }
    default:
      return { ...state };
  }
}
