import PageStateActionTypes from './page-state.types';

const INITIAL_STATE: PageStateReducer = {
  isLoading: null,
  isCollectionsFetching: null,
  errorMessage: undefined,
};

const pageStateReducer = (state = INITIAL_STATE, action: ReduxActionType) => {
  console.log(action.type);
  switch (action.type) {
    case PageStateActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isCollectionsFetching: true,
      };

    case PageStateActionTypes.UPDATE_PAGE_STATE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case PageStateActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isCollectionsFetching: false,
      };
    case PageStateActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default pageStateReducer;
