import { call, put } from 'redux-saga/effects';
import { Actions, HouseProgressAction } from 'actions';

export const houseProgressFetch: HouseProgressAction = {
  type: Actions.HOUSE_PROGRESS_FETCH,
};

export function houseProgressFetchOk(progress: number): HouseProgressAction {
  return { type: Actions.HOUSE_PROGRESS_FETCH_OK, progress };
}

export function houseProgressFetchFail(reason: string): HouseProgressAction {
  return { type: Actions.HOUSE_PROGRESS_FETCH_FAIL, reason };
}

async function fetchHouseProgress(): Promise<number> {
  const progress = await new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(25);
    }, 2000);
  });

  return progress;
}

export function* houseProgressFetchReducer(action: HouseProgressAction) {
  try {
    const progress = yield call(() => fetchHouseProgress());
    yield put(houseProgressFetchOk(progress));
  } catch (error) {
    yield put(houseProgressFetchFail(error.message));
  }
}
