import React from 'react';

import SHOP_DATA from '../../test/shop.data';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ShopPage extends React.Component<any, ShopPageStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render(): React.ReactElement {
    const { collections } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(null, mapDispatchToProps)(ShopPage);
