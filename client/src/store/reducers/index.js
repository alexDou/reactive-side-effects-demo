import * as actions from '../action_types';

const initStatusState = {
    pending: false,
    success: true,
    failure: false
};

export const status = (state = initStatusState, action) => {
    switch(action.type) {
        case actions.STATUS_SUCCESS:
        case actions.STATUS_PENDING:
        case actions.STATUS_FAILED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

const initUserState = {
    users: [],
};

export const user = (state = initUserState, action) => {
    switch(action.type) {
        case actions.FETCH_USERS_RESULT:
        case actions.REMOVE_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
