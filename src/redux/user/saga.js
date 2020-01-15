import { takeEvery, fork, all, put, call } from "redux-saga/effects";
import { FETCH_USERS } from "../actions";
import { fetchUsersSuccess } from "./actions";
import { toastr } from "react-redux-toastr";
import axios from "axios";

//Watch action's types and run it's worker function
function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, workerFetchUsers);
}

//Receive the async data and send the new state data
function* workerFetchUsers() {
  try {
    const users = yield call(asyncFetchUsers);//call api call
    yield put(fetchUsersSuccess(users));//call action with new state
  } catch (error) {
    toastr.error('Erro', `Falha ao carregar. Código: ${error.request.status}`)
  }
}

//Make async calls
async function asyncFetchUsers() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
}

//Export and Call all watchers
export default function* userSaga() {
  yield all([
    fork(watchFetchUsers)
    //Other watcher...
  ]);
}
