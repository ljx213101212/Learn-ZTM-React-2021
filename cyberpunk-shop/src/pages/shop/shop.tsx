import React from 'react';

import SHOP_DATA from '../../test/shop.data';

import WithSpinnerCollectionsOverview from '../../components/collections-overview/collections-overview';
import WithSpinnerCollectionPage from '../collection/collection';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { createStructuredSelector } from 'reselect';
import { selectPageIsLoading } from '../../redux/page-state/page-state.selectors';

// export const WithSpinnerCollectionPage = WithSpinner(CollectionPage);

class ShopPage extends React.Component<any, ShopPageStates> {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactElement {
    const { match, isLoading } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props): any => (
            <WithSpinnerCollectionsOverview isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <WithSpinnerCollectionPage isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<any, any, any>({
  isLoading: selectPageIsLoading,
});

export default connect(mapStateToProps, null)(ShopPage);
