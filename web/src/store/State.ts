import { createBrowserHistory, History } from 'history';

interface HouseProgressState {
  houseProgress: number;
  fetchingHouseProgress: boolean;
  houseProgressFetchingError: string | undefined;
}

interface AppTabsState {
  appTab: number,
}

interface PagesRouterState {
  browserHistory: History;
}

export interface AppState
  extends HouseProgressState,
    AppTabsState,
    PagesRouterState {}

export const INITIAL_STATE: AppState = {
  houseProgress: 0,
  fetchingHouseProgress: false,
  houseProgressFetchingError: undefined,
  appTab: 1, // Home is in center, second element
  browserHistory: createBrowserHistory()
};
