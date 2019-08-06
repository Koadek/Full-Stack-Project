import { createStore } from 'redux';

const initialState = {
  loggedIn: false,
  query: '',
  items: [],
  sellers: [],
  reviews: [],
  username: '',
};

let reducer = (state, action) => {
  switch (action.type) {
    case 'login-success':
      return { ...state, loggedIn: true, username: action.username };
    case 'SET_HOME':
      return {
        ...state,
        items: action.items,
        sellers: action.sellers,
        reviews: action.reviews,
      };
    case 'logout':
      return { ...state, loggedIn: false, username: '' };
    case 'SET_QUERY':
      return { ...state, query: action.query };
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
