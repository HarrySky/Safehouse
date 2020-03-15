import { Dispatch } from 'redux';
import { switchAppTab } from 'actions/AppTabs';
import { AppState } from 'store/State';
import { ChangeEvent } from 'react';

interface State {
  tab: number;
}

interface Actions {
  switchTab(event: ChangeEvent<{}>, tab: number): void;
}

export interface Props extends State, Actions {}

export function mapStateToProps(state: AppState): State {
  return {
    tab: state.appTab
  };
}

export function mapDispatchToProps(dispatch: Dispatch): Actions {
  return {
    switchTab: (event: ChangeEvent<{}>, tab: number) => dispatch(switchAppTab(tab))
  };
}
