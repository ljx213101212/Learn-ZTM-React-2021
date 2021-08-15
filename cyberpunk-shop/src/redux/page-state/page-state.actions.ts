import PageStateActionTypes from './page-state.types';

export const updatePageState = (isLoading: boolean): ReduxActionType => ({
  type: PageStateActionTypes.UPDATE_PAGE_STATE,
  payload: isLoading,
});
