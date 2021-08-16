interface PageStateReducer {
  isLoading: boolean | null;
  isCollectionsFetching: boolean | null;
  errorMessage: string | undefined;
}
