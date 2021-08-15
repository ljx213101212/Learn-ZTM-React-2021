import React, { FC } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage: FC<any> = (props) => {
  console.log(props);
  const { title, items } = props?.collection;
  return (
    <div className="collection-page">
      <h2 className="title">{props.collection.title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state, ownProps);
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

/**
 * Note: connect is also a HOC.
 */
export default WithSpinner(connect(mapStateToProps)(CollectionPage));
