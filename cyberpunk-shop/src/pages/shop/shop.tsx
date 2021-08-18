import React, { FC } from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import WithSpinnerCollectionPage from '../collection/collection';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPageIsLoading } from '../../redux/page-state/page-state.selectors';

const ShopPage: FC<any> = (props) => {
  const { match, isLoading } = props;

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <WithSpinnerCollectionPage isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector<any, any, any>({
  isLoading: selectPageIsLoading,
});

export default connect(mapStateToProps, null)(ShopPage);
