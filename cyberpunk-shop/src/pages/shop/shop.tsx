import React from 'react';

import SHOP_DATA from '../../test/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component<void, ShopPageStates> {
  constructor(props: void) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render(): React.ReactElement {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
