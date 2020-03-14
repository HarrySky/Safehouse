import { Dispatch } from 'redux';
import { houseProgressFetch } from 'actions/House';
import { AppState } from 'store/State';

interface State {
  isFetching: boolean;
  error: string | undefined;
  progress: number;
}

interface Actions {
  fetchProgress(): void;
}

export interface Props extends State, Actions {}

export function mapStateToProps(state: AppState): State {
  return {
    isFetching: state.fetchingHouseProgress,
    error: state.houseProgressFetchingError,
    progress: state.houseProgress,
  };
}

export function mapDispatchToProps(dispatch: Dispatch): Actions {
  return {
    fetchProgress: () => dispatch(houseProgressFetch)
  };
}
