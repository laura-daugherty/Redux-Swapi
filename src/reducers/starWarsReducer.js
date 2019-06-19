import { FETCHING, SUCCESS, FAILURE } from  "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: '',
        isFetching: true,
      };
    case SUCCESS:
      console.log(action.payload.results)
      return {
        ...state,
        error: '',
        characters: action.payload.results ,
        isFetching: false
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
