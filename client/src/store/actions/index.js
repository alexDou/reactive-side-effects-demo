import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { catchError, concatMap, mergeMap } from 'rxjs/operators';

import * as actions from '../action_types';
import * as actionCreators from './creators';

const getUsersEpic = (actions$, state$) =>
    actions$.pipe(
        ofType(actions.FETCH_USERS),
        mergeMap(action => {
                return concat(
                    of(actionCreators.setStatusPending()),
                    ajax.getJSON(`http://localhost:8000/users`).pipe(
                        concatMap(res => of(
                            actionCreators.fetchUsersResult(res),
                            actionCreators.setStatusSuccess(),
                        )),
                        catchError(error => of(actionCreators.setStatusFailure()))
                    ),
                );
            }
        )
    );

const removeUserEpic = (actions$, state$) =>
    actions$.pipe(
        ofType(actions.REMOVE_USER),
        mergeMap(action => {
                return concat(
                    of(actionCreators.setStatusPending()),
                    ajax.getJSON(`http://localhost:8000/users/remove/${action.payload.id}`).pipe(
                        concatMap(res => of(
                            actionCreators.fetchUsersResult(res),
                            actionCreators.setStatusSuccess()
                        )),
                        catchError(error => of(actionCreators.setStatusFailure()))
                    ),
                );
            }
        )
    );

export const epics = [
    getUsersEpic,
    removeUserEpic
];
