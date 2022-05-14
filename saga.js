import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_DETAIL,
  FETCHING_DATA_DETAIL_SUCCESS,
  FETCHING_DATA_DETAIL_FAILURE,
} from "./constants";
import { put, takeEvery, all } from "redux-saga/effects";
import { getProducts, getProductsDetail } from "./api";

function* fetchData(action) {
  try {
    const data = yield getProducts();

    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* fetchDataDetail(action) {
  try {
    console.log(action);
    const data = yield getProductsDetail(action.payload);

    yield put({ type: FETCHING_DATA_DETAIL_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_DETAIL_FAILURE });
  }
}

function* watchAll() {
  yield all([
    takeEvery(FETCHING_DATA, fetchData),
    takeEvery(FETCHING_DATA_DETAIL, fetchDataDetail),
  ]);
}

export { watchAll };
