import { createSelector } from 'reselect';

const selectPageState = (state: RootReducerType): PageStateReducer =>
  state.pageState;

export const selectPageIsLoading = createSelector(
  [selectPageState],
  (pageState) => pageState.isLoading
);

export const selectIsCollectionFetching = createSelector(
  [selectPageState],
  (pageState: PageStateReducer) =>
    pageState.isCollectionsFetching !== null && pageState.isCollectionsFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectPageState],
  (pageState: PageStateReducer) =>
    pageState.isCollectionsFetching !== null && !pageState.isCollectionsFetching
);
