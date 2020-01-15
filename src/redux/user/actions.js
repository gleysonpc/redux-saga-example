import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../actions";

export function fetchUsers() {
  return {
    type: FETCH_USERS
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
}
