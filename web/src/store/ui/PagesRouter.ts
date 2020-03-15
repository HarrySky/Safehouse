import { History } from 'history';
import { AppState } from 'store/State';

export interface Props {
  history?: History;
}

export function mapStateToProps(state: AppState): Props {
  return {
    history: state.browserHistory
  };
}
