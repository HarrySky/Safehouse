import { takeLatest, call, put } from 'redux-saga/effects';
import { AppState, INITIAL_STATE } from 'store/State';
import { update } from 'store/utils';
import { Actions, HouseProgressAction } from 'actions';
import { fetchHouseProgress } from 'store/data/House';
import { houseProgressFetchOk, houseProgressFetchFail } from 'actions/House';

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

export function* houseProgressFetchReducer(action: HouseProgressAction) {
  try {
    const progress = yield call(() => fetchHouseProgress());
    yield put(houseProgressFetchOk(progress));
  } catch (error) {
    yield put(houseProgressFetchFail(error.message));
  }
}

export function* houseProgressFetchSaga() {
  yield takeLatest(Actions.HOUSE_PROGRESS_FETCH, houseProgressFetchReducer);
}
