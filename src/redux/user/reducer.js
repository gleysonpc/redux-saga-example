import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../actions";

const INIT_STATE = {
  loading: false,
  users: []
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
