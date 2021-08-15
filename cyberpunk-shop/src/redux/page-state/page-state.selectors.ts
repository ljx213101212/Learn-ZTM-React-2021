import { createSelector } from 'reselect';

const selectPageState = (state: RootReducerType) => state.pageState;

export const selectPageIsLoading = createSelector(
  [selectPageState],
  (pageState) => pageState.isLoading
);
