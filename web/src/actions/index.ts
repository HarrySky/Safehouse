export enum Actions {
  HOUSE_PROGRESS_FETCH = 'HOUSE_PROGRESS_FETCH',
  HOUSE_PROGRESS_FETCH_OK = 'HOUSE_PROGRESS_FETCH_OK',
  HOUSE_PROGRESS_FETCH_FAIL = 'HOUSE_PROGRESS_FETCH_FAIL',
  SWITCH_APP_TAB = "SWITCH_APP_TAB",
}

export type HouseProgressAction =
  | {
      readonly type: typeof Actions.HOUSE_PROGRESS_FETCH;
    }
  | {
      type: typeof Actions.HOUSE_PROGRESS_FETCH_OK;
      progress: number;
    }
  | {
      type: typeof Actions.HOUSE_PROGRESS_FETCH_FAIL;
      reason: string;
    };

export type AppTabsAction =
  | {
      type: typeof Actions.SWITCH_APP_TAB;
      tab: number;
    }
