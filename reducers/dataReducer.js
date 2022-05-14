import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_DETAIL,
  FETCHING_DATA_DETAIL_SUCCESS,
  FETCHING_DATA_DETAIL_FAILURE,
} from "../constants";

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
function dataDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_DETAIL:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}

export { dataReducer, dataDetailReducer };
