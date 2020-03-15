import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { houseProgressReducer, houseProgressFetchSaga } from "reducers/House"
import { INITIAL_STATE, AppState } from 'store/State';
import { appTabsReducer } from 'reducers/AppTabs';

const REDUCERS = [
  houseProgressReducer,
  appTabsReducer,
];

// tslint:disable-next-line: no-any
function rootReducer(state = INITIAL_STATE, action: any): AppState {
  REDUCERS.forEach(reducer => (state = reducer(state, action)));
  return state;
}

const SAGA = createSagaMiddleware();

export const APP_STORE = createStore(rootReducer, applyMiddleware(SAGA));

SAGA.run(houseProgressFetchSaga);
