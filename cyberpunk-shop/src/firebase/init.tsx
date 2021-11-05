import React, { FC, useEffect } from 'react';
import { convertCollectionsSnapshotToMap, firestore } from './firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../redux/shop/shop.actions';
import {
  fetchCollectionsFailure,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  updatePageState,
} from '../redux/page-state/page-state.actions';

const Init: FC<any> = ({
  updateShopCollections,
  updatePageState,
  fetchCollectionsFailure,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
}) => {
  useEffect(() => {
    updatePageState(true);
    const collectionRef = firestore.collection('collections');

    fetchCollectionsStart();
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateShopCollections(collectionsMap);
        updatePageState(false);
        fetchCollectionsSuccess();
      })
      .catch((error) => {
        fetchCollectionsFailure(error.message);
      });
    return () => {};
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch: any) => ({
  updateShopCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap)),
  updatePageState: (isLoading: boolean) => dispatch(updatePageState(isLoading)),
  fetchCollectionsFailure: (errorMessage: string) =>
    dispatch(fetchCollectionsFailure(errorMessage)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchCollectionsSuccess: () => dispatch(fetchCollectionsSuccess()),
});

export default connect(null, mapDispatchToProps)(Init);
