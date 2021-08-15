import React, { FC, useEffect } from 'react';
import { convertCollectionsSnapshotToMap, firestore } from './firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../redux/shop/shop.actions';
import { updatePageState } from '../redux/page-state/page-state.actions';

const Init: FC<any> = ({ updateShopCollections, updatePageState }) => {
  useEffect(() => {
    updatePageState(true);
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateShopCollections(collectionsMap);
      updatePageState(false);
    });
    return () => {};
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch: any) => ({
  updateShopCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap)),
  updatePageState: (isLoading: boolean) => dispatch(updatePageState(isLoading)),
});

export default connect(null, mapDispatchToProps)(Init);
