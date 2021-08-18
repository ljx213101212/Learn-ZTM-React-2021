import React, { FC, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import CustomButton from '../../components/custom-button/custom-button';

import './checkout.styles.scss';

const CheckoutPage: FC<any> = ({ cartItems, total, history }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <CustomButton
        type="button"
        onClick={() => {
          history.push({
            pathname: '/payment',
            state: {
              amount: total,
              currency: 'sgd',
            },
          });
        }}
      >
        {'Proceed to Payment'}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<any, any, any>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
