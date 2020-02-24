const initialState = {
  films:[],
  favourites:[],
  movie:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FILMS":
      return {
        ...state,
        films: action.films
      };
    case "RECEIVE_MOVIE":
      return {
        ...state,
        movie: action.movie
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.movie]
      };
    case "DELETE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(item => item.id !== action.movie)
      };

    default:
      return state;
  }
};