import * as actions from "../action_types";

// status
export const setStatusPending = () => ({ type: actions.STATUS_PENDING, payload: { pending: true, success: false, failure: false } });
export const setStatusSuccess = () => ({ type: actions.STATUS_SUCCESS, payload: { pending: false, success: true, failure: false } });
export const setStatusFailure = () => ({ type: actions.STATUS_FAILED, payload: { pending: false, success: false, failure: true } });
// users
export const fetchUsers = () => ({ type: actions.FETCH_USERS });
export const removeUser = (id) => ({ type: actions.REMOVE_USER, payload: { id } });
export const fetchUsersResult = (result) => ({ type: actions.FETCH_USERS_RESULT, payload: { users: result } });
