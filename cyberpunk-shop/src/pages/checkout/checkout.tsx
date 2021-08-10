import React, { FC, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

import { loadStripe, StripeCardElement } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import './checkout.styles.scss';

const CheckoutPage: FC<any> = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    try {
      const result = await stripe?.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement) as StripeCardElement,
      });
      const { error, paymentMethod } = result!;
      error
        ? console.log(
            '%c [JX TEST] - createPaymentMethod Error',
            'background: #222; color: #FF0000',
            error
          )
        : console.log(
            '%c [JX TEST] - createPaymentMethod Success! ',
            'background: #222; color: #bada55',
            paymentMethod
          );
    } catch (error) {
      console.log('[JX TEST] - createPaymentMethod error', error);
    }
  };

  return (
    <div className="collection-page">
      <div>Checkout Cart</div>
      <div className="stripe-area">
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || !elements}>
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state, ownProps);
  return {
    total: selectCartTotal,
  };
};

export default connect(mapStateToProps)(CheckoutPage);
