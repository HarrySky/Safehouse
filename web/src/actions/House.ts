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
