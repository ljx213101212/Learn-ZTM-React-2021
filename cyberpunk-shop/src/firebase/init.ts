import React, { FC, useEffect } from 'react';
import { convertCollectionsSnapshotToMap, firestore } from './firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../redux/shop/shop.actions';

const Init: FC<any> = ({ updateShopCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateShopCollections(collectionsMap);
    });
    return () => {};
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch: any) => ({
  updateShopCollections: (collectionsMap: any) => {
    dispatch(updateCollections(collectionsMap));
  },
});

export default connect(null, mapDispatchToProps)(Init);
