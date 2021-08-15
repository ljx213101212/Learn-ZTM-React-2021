import React, { FC, useEffect } from 'react';
import { addCollectionAndDocuments } from './firebase.utils';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const FireBaseDataInit: FC<any> = ({ getShopCollections }) => {
  useEffect(() => {
    addCollectionAndDocuments('collections', getShopCollections);
    return () => {};
  }, []);
  return null;
};

const mapStateToProps = createStructuredSelector<any, any, any>({
  getShopCollections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, null)(FireBaseDataInit);
