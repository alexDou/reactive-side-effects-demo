import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import * as reducers from './reducers';
import { epics } from './actions';

const rootReducer = combineReducers({ ...reducers });
const rootEpic = combineEpics(...epics);

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
