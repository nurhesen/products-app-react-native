import { FETCHING_DATA, FETCHING_DATA_DETAIL } from "./constants";

function fetchData() {
  return {
    type: FETCHING_DATA,
  };
}

function fetchDataDetail(id) {
  return {
    type: FETCHING_DATA_DETAIL,
    payload: id,
  };
}
export { fetchData, fetchDataDetail };
