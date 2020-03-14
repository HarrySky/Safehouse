interface HouseProgressState {
  houseProgress: number;
  fetchingHouseProgress: boolean;
  houseProgressFetchingError: string | undefined;
}

export interface AppState
  extends HouseProgressState {}

export const INITIAL_STATE: AppState = {
  houseProgress: 0,
  fetchingHouseProgress: false,
  houseProgressFetchingError: undefined
};
