import PageStateActionTypes from './page-state.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const updatePageState = (isLoading: boolean): ReduxActionType => ({
  type: PageStateActionTypes.UPDATE_PAGE_STATE,
  payload: isLoading,
});

export const fetchCollectionsStart = (): ReduxActionType => {
  console.log('fetchCollectionsStart');
  return {
    type: PageStateActionTypes.FETCH_COLLECTIONS_START,
    payload: null,
  };
};

export const fetchCollectionsSuccess = () => ({
  type: PageStateActionTypes.FETCH_COLLECTIONS_SUCCESS,
});

export const fetchCollectionsFailure = (errorMessage: any) => ({
  type: PageStateActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess());
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
