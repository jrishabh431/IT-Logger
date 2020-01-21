const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "TECHS_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "GET_TECHS":
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case "ADD_TECHS":
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case "DELETE_TECHS":
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      };
    default:
      return state;
  }
};
