import { all } from "redux-saga/effects";
import userSaga from "./user/saga";

function* rootSaga() {
  yield all([
    userSaga(),
    //Other saga...
  ]);
}

export default rootSaga;
