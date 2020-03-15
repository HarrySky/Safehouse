import { AppState, INITIAL_STATE } from 'store/State';
import { update } from 'store/utils';
import { Actions, AppTabsAction } from 'actions';

const routes = [
  "/news",
  "/",
  "/dashboard"
]

export function appTabsReducer(
  state = INITIAL_STATE,
  action: AppTabsAction
): AppState {
  switch (action.type) {
    case Actions.SWITCH_APP_TAB:
      state.browserHistory.push(routes[action.tab])
      return update(state, { appTab: action.tab });
    default:
      return state;
  }
}