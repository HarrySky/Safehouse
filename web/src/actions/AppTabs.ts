import { Actions, AppTabsAction } from 'actions';

export function switchAppTab(tab: number): AppTabsAction {
  return { type: Actions.SWITCH_APP_TAB, tab };
}
