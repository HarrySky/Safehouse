import { takeLatest } from 'redux-saga/effects';
import { AppState, INITIAL_STATE } from 'store/State';
import { update } from 'store/utils';
import { houseProgressFetchReducer } from 'actions/House';
import { Actions, HouseProgressAction } from 'actions';

export function houseProgressReducer(
  state = INITIAL_STATE,
  action: HouseProgressAction
): AppState {
  switch (action.type) {
    case Actions.HOUSE_PROGRESS_FETCH:
      return update(state, {
        houseProgressFetchingError: undefined,
        fetchingHouseProgress: true
      });
    case Actions.HOUSE_PROGRESS_FETCH_OK:
      return update(state, {
        houseProgress: action.progress,
        fetchingHouseProgress: false
      });
    case Actions.HOUSE_PROGRESS_FETCH_FAIL:
      return update(state, {
        houseProgressFetchingError: action.reason,
        fetchingHouseProgress: false,
      });
    default:
      return state;
  }
}

export function* houseProgressFetchSaga() {
  yield takeLatest(Actions.HOUSE_PROGRESS_FETCH, houseProgressFetchReducer);
}