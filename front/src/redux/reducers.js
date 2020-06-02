const initialState = {
  films: [],
  favourites: [],
  movie: {},
  user: {},
  user_register: {},
  search:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FILMS":
      return {
        ...state,
        films: action.films,
      };
    case "RECEIVE_MOVIE":
      return {
        ...state,
        movie: action.movie,
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };
    case "DELETE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((item) => item.id !== action.movie),
      };
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "RECEIVE_FAVOURITE":
      return {
        ...state,
        favourites: action.movie,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.user,
      };
    case "CLEAR_FAVOURITE":
      return {
        ...state,
        favourites: action.movie,
      };
    case "REGISTER":
      return {
        ...state,
        user_register: action.user,
      };
      case "SEARCH_USER":
        return {
          ...state,
          search: action.user,
        };
  
    default:
      return state;
  }
};