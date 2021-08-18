import React, { FC, ReactElement } from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem: FC<any> = ({ item, addItem }): ReactElement => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
