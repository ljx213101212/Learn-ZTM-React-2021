import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';

import './collections-overview.styles.scss';

const CollectionsOverview: FC<any> = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection: any) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<any, any, any>({
  collections: selectCollectionsForPreview,
});

export default WithSpinner(connect(mapStateToProps)(CollectionsOverview));
