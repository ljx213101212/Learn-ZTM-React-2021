import PageStateActionTypes from './page-state.types';

const INITIAL_STATE = {
  isLoading: null,
};

const pageStateReducer = (state = INITIAL_STATE, action: ReduxActionType) => {
  switch (action.type) {
    case PageStateActionTypes.UPDATE_PAGE_STATE:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default pageStateReducer;
